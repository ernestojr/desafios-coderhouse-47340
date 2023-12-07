import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
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

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (uid, done) => { // inflar la session
    const user = await UserModel.findById(uid);
    done(null, user);
  });
} 