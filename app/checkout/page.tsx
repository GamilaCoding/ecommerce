'use client'

import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import CheckoutForm from '../components/CheckoutForm'
import PaymentForm from '../components/PaymentForm'
import OrderSummary from '../components/OrderSummary'

export default function CheckoutPage() {
  const { cartItems } = useCart()
  const [step, setStep] = useState(1)
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  })

  const handleShippingSubmit = (details) => {
    setShippingDetails(details)
    setStep(2)
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          {step === 1 && <CheckoutForm onSubmit={handleShippingSubmit} />}
          {step === 2 && <PaymentForm shippingDetails={shippingDetails} cartItems={cartItems} />}
        </div>
        <div className="md:w-1/3">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  )
}

