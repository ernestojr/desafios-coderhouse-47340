export default class UserDto {
  constructor(data) {
    this.id = data._id || data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.birthdate = data.birthdate;
    this.avatar = data.avatar ? `http://localhost:8080/images/avatares/${data.avatar}`: null;
    this.document = data.document ? `http://localhost:8080/documents/${data.document}`: null;
    this.role = data.role;
  }
}