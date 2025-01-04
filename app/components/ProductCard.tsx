'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart, Product } from '../hooks/useCart'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}

