import twilio from 'twilio';

import config from '../config/config.js';

export default class TwilioService {
  static #instance = null;
  constructor() {
    this.client = twilio(
      config.twilio.accountSid,
      config.twilio.authToken,
    );
  }

  sendSMS(to, body) {
    return this.client.messages.create({
      body,
      to,
      from: config.twilio.phoneNumber,
    });
  }

  static getInstance() {
    if (!TwilioService.#instance) {
      TwilioService.#instance = new TwilioService();
    }
    return TwilioService.#instance;
  }
}