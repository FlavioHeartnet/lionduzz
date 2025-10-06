import { Stripe } from 'stripe';
export declare class StripeService {
    private readonly stripe;
    constructor();
    createPaymentIntent(amount: number): Promise<Stripe.PaymentIntent>;
}
