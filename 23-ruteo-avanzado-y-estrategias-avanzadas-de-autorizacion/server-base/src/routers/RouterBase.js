import { Router } from 'express';

const validateToken = () => {
  return true;
}

export default class RouterBase {
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {}

  getRouter() {
    return this.router;
  }

  get(path, policies, ...callbacks) {
    this.router.get(path, this.handlePolicies(policies), this.settingResponseMethods, this.applyCallbacks(callbacks));
  }
  post(path, policies, ...callbacks) {
    this.router.post(path, this.handlePolicies(policies), this.settingResponseMethods, this.applyCallbacks(callbacks));
  }
  put(path, policies, ...callbacks) {
    this.router.put(path, this.handlePolicies(policies), this.settingResponseMethods, this.applyCallbacks(callbacks));
  }
  delete(path, policies, ...callbacks) {
    this.router.delete(path, this.handlePolicies(policies), this.settingResponseMethods, this.applyCallbacks(callbacks));
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.error(error);
        params[1].status(500).json({ message: error.message });
      }
    })
  }

  settingResponseMethods(req, res, next) {
    res.sendSuccess = (payload) => res.status(200).json({ success: true, payload });
    res.sendServerError = (error) => res.status(500).json({ success: false, error });
    res.sendNotFoundError = (error) => res.status(404).json({ success: false, error });
    res.sendUserError = (error) => res.status(400).json({ success: false, error });
    next();
  }

  handlePolicies = (policies) => (req, res, next) => {
    if (policies.includes('PUBLIC')) {
      return next();
    }
    const authenticationHeader = req.headers.authorization;
    if (!authenticationHeader) {
      return res.status(401).json({ mesasge: 'unauthorized'});
    }

    // Bearer user
    // Bearer admin
    // Bearer premiun

    const token = authenticationHeader.split(' ')[1];
    if (!validateToken(token)) {
      return res.status(401).json({ mesasge: 'unauthorized'});
    }

    const role = this.getRole(token);

    // user -> USER
    // admin -> ADMIN
    // premiun -> PREMIUM

    if (!policies.includes(role.toUpperCase())) {
      return res.status(403).json({ mesasge: 'unauthorized'});
    }

    next();

  }

  getRole(token){
    return token;
  }

}
