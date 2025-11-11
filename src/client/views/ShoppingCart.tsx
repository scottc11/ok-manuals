import React from "react";
import Cart from "../components/Cart/Cart";
import SectionSubheading from "../components/SectionSubHeading/SectionSubHeading";
import TextHighlight from "../components/TextHighlight/TextHighlight";
import TextLink from "../components/TextLink/TextLink";
import Note from "../components/Note/Note";

const ShoppingCart = () => {
    return (
        <div className="bg-white text-onyx">
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                
                <h1 className="text-4xl font-bungee mb-8 text-left">Shopping Cart</h1>
                
                <Cart />

                <div className="py-8">
                    <SectionSubheading title="Payment 💰" />
                    <p className="text-onyx">
                        All payment processing is done through <TextLink href="https://stripe.com" external>Stripe</TextLink>. I do not store any payment information on my servers.
                    </p>
                    <p className="text-onyx">
                        Upon checkout, you will be redirected to a <TextHighlight>Stripe checkout page</TextHighlight> to complete your purchase. Here you will enter your payment and shipping information.
                    </p>

                    <p>You do not need to create an account at checkout. You can checkout as a guest.</p>

                    <SectionSubheading title="Shipping 🚚" />
                    <p>All shipping is handled by <TextLink href="https://www.canadapost-postescanada.ca/cpc/en/home.page" external>Canada Post</TextLink>. It is on the more affordable side, but <b>do not expect next-day delivery</b>.</p>
                    
                    <p>Shipping cost is calculated at checkout and is determined by your shipping address.</p>
                    
                    <p>Your order will be shipped within 1-2 business days of purchase, assuming I am not on vacation or otherwise busy.</p>

                    <SectionSubheading title="Returns 🔙" />
                    <p>
                        All sales are <b>final</b>. That being said, if you are truly not satisfied with your purchase, you can return it for a refund within 30 days of purchase. There will be a <b>10% restocking fee</b> for all returns, and <b>return shipping will be at the customer's expense</b>.
                    </p>
                    <p>
                        To be eligible for a refund, the item must be in the same condition as you received it, and in the original packaging.
                    </p>
                    <p>Refunds will be handled through <TextLink href="https://stripe.com" external>Stripe</TextLink>.</p>

                    <SectionSubheading title="International Duties & Taxes 🌎" />
                    <p className="text-onyx">
                        For orders outside Canada, the recipient is responsible for any import duties, taxes (including VAT), and brokerage fees. Customs processing may cause delays beyond my control.
                    </p>
                    <p>I will <b>not</b> mark the package as a gift or under a lower value to avoid customs fees.</p>
                    <p>Canadian taxes are only collected for orders shipped inside Canada.</p>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;