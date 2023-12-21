import RouterBase from "./RouterBase.js";

export default class UserRouter extends RouterBase {
  
  init() {
    this.get('/', ['PUBLIC'], function(req, res) {
      res.sendSuccess('Hello Coders 🖐️');
    });
    this.get('/:uid', ['ADMIN', 'USER'], function(req, res) {
      res.sendSuccess(`Hello ${req.params.uid} 🖐️`);
    });
    this.put('/:uid', ['ADMIN'], function(req, res) {
      res.sendNotFoundError(`Usuario ${req.params.uid} no encontrado 😨`);
    });
  }

  metodoTest() {
    console.log("metodoTest called");
  }
}