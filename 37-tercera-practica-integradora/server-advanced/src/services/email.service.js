import nodemailer from 'nodemailer';

import config from '../config/config.js';
// Parton singleton
export default class EmailService {
  static #instance = null;
  constructor() {
    this.transport = nodemailer.createTransport({
      service: config.EMAIL_SERVICE,
      port: config.EMAIL_PORT,
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASSWORD,
      },
    });
  }

  sendEmail(to, subject, html, attachments = []){
    return this.transport.sendMail({
      to,
      from: config.EMAIL_USER,
      subject,
      html,
      attachments,
    });
  }

  sendWelcomeEmail(student) {
    return this.sendEmail(
      student.email,
      `Hola ${student.first_name} 😎`,
      `<h1>Hola ${student.first_name}, te damos la bienvenida a nuestro plataforma de cursos 😍.</h1>`
    );
  }
  static getInstance() {
    if (!EmailService.#instance) {
      EmailService.#instance = new EmailService();
    }
    return EmailService.#instance;
  }
}