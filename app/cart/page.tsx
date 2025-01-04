'use client'

import { useCart } from '../hooks/useCart'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Your Cosmic Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Your cart is as empty as the vacuum of space.</p>
      ) : (
        <div>
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-between items-center mb-6 p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md mr-6"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <Button 
                  variant="destructive" 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200"
                >
                  Remove
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="mt-12 text-center">
            <p className="text-3xl font-bold mb-6">Total: ${total.toFixed(2)}</p>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

