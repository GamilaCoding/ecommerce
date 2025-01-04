'use client'

import { Button } from '@/components/ui/button'
import { useCart, Product } from '../hooks/useCart'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <Button 
      onClick={() => addToCart(product)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
    >
      Add to Cart
    </Button>
  )
}

