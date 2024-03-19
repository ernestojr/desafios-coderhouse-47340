import Stripe from 'stripe';

export default class PayementsService {
  constructor() {
    this.stripe = new Stripe('Secrete Key');
  }
  createPaymentInten(data) {
    return this.stripe.paymentIntents.create(data);
  }
}