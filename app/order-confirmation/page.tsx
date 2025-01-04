'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    const orderId = searchParams.get('order_id')
    if (orderId) {
      // Fetch order details from your API
      fetch(`/api/orders/${orderId}`)
        .then((res) => res.json())
        .then((data) => setOrderDetails(data))
    }
  }, [searchParams])

  if (!orderDetails) {
    return <div>Loading order details...</div>
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Order Confirmed</h1>
        <p className="mt-4 text-base text-gray-500">
          Your order has been confirmed and will be shipping soon.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-medium text-gray-900">Order details</h2>

        <dl className="mt-5 border-t border-gray-200 divide-y divide-gray-200">
          <div className="py-4 flex justify-between sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Order number</dt>
            <dd className="text-sm text-gray-900">{orderDetails.id}</dd>
          </div>
          <div className="py-4 flex justify-between sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Date</dt>
            <dd className="text-sm text-gray-900">{new Date(orderDetails.date).toLocaleDateString()}</dd>
          </div>
          <div className="py-4 flex justify-between sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Total amount</dt>
            <dd className="text-sm text-gray-900">${orderDetails.total.toFixed(2)}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-10">
        <Link href="/">
          <Button className="w-full">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}

