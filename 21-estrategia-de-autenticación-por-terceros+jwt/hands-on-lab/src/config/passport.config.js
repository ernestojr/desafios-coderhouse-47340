import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GithubStrategy } from 'passport-github2';
import UserModel from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

export const init = () => {
  const registerOpts = {
    usernameField: 'email',
    passReqToCallback: true,
  };
  passport.use('register', new LocalStrategy(registerOpts, async (req, email, password, done) => {
    const {
      body: {
        first_name,
        last_name,
        age,
      },
    } = req;

    if (
      !first_name ||
      !last_name
    ) {
      return done(new Error('Todos los campos son requeridos.'));
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return done(new Error(`Ya existe un usuario con el correo ${email} en el sistema.`));
    }
    const newUser = await UserModel.create({
      first_name,
      last_name,
      email,
      password: createHash(password),
      age,
    });
    done(null, newUser);
  }));

  passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return done(new Error('Correo o contraseña invalidos.'));
    }
    const isNotValidPass = !isValidPassword(password, user);
    if (isNotValidPass) {
      return done(new Error('Correo o contraseña invalidos.'));
    }
    done(null, user);
  }));
  const githubOpts = {
    clientID: 'Iv1.cca07a159c1a5826',
    clientSecret: "29794bb0b5be13d20daf91d2a29454c98e4df9ac",
    callbackURL: 'http://localhost:8080/api/sessions/github/callback',
  };
  passport.use('github', new GithubStrategy(githubOpts, async (accesstoken, refreshToken, profile, done) => {
    const email = profile._json.email;
    let user = await UserModel.findOne({ email });
    if (user) {
      return done(null, user);
    }
    user = {
      first_name: profile._json.name,
      last_name: '',
      email, 
      password: '',
      provider: 'github',
      providerId: profile.id,
      age: 18,
    };
    const newUser = await UserModel.create(user);
    done(null, newUser);
  }));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (uid, done) => { // inflar la session
    const user = await UserModel.findById(uid);
    done(null, user);
  });
} 