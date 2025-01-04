import { notFound } from 'next/navigation'
import Image from 'next/image'
import AddToCartButton from '@/app/components/AddToCartButton'

const products = [
  { id: 1, name: 'Pro Laptop X1', price: 1999.99, image: '/placeholder.svg?height=400&width=400&text=💻', description: 'Experience unparalleled performance with our Pro Laptop X1. Featuring the latest processor, ample storage, and a stunning display, this laptop is perfect for professionals who demand the best.' },
  { id: 2, name: 'Ultra HD Monitor', price: 799.99, image: '/placeholder.svg?height=400&width=400&text=🖥️', description: 'Immerse yourself in crystal-clear visuals with our Ultra HD Monitor. With its expansive screen and vibrant colors, it's ideal for creative professionals and multitaskers alike.' },
  { id: 3, name: 'Ergonomic Keyboard', price: 199.99, image: '/placeholder.svg?height=400&width=400&text=⌨️', description: 'Type in comfort with our Ergonomic Keyboard. Designed to reduce strain and increase productivity, it's the perfect companion for long work sessions.' },
  { id: 4, name: 'Precision Mouse', price: 99.99, image: '/placeholder.svg?height=400&width=400&text=🖱️', description: 'Navigate with precision using our high-performance mouse. With customizable buttons and ergonomic design, it's suitable for both office work and gaming.' },
  { id: 5, name: 'Noise-Canceling Headphones', price: 349.99, image: '/placeholder.svg?height=400&width=400&text=🎧', description: 'Immerse yourself in your work or music with our premium Noise-Canceling Headphones. Featuring advanced audio technology and comfortable design for all-day wear.' },
  { id: 6, name: 'Portable SSD 1TB', price: 179.99, image: '/placeholder.svg?height=400&width=400&text=💾', description: 'Store and transfer your data quickly and securely with our Portable SSD. With 1TB of storage and lightning-fast read/write speeds, it's perfect for professionals on the go.' },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>
        <p className="text-gray-600">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

