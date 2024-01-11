export default class ContactDTO {
  constructor(contact) {
    this.id = contact._id || contact.id;
    this.fullname = `${contact.firts_name} ${contact.last_name}`;
    this.phone = contact.phone;
    this.email = contact.email;
    this.address = contact.address;
  }
}