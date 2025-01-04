import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
})

export async function POST(request: Request) {
  const { paymentMethodId, shippingDetails, cartItems } = await request.json()

  try {
    // Calculate the total amount
    const amount = cartItems.reduce((total, item) => total + item.price * 100, 0)

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-confirmation`,
    })

    // Here you would typically save the order details to your database

    return NextResponse.json({ success: true, orderId: paymentIntent.id })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

