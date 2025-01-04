import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-6">Welcome to TechElite</h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Discover cutting-edge technology designed for professionals who demand the best.
        </p>
        <Link href="/products">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explore Our Products
          </Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Premium Quality</h2>
          <p className="text-gray-600 mb-6">
            At TechElite, we pride ourselves on offering only the highest quality tech products. 
            Our curated selection is perfect for professionals who need reliable, powerful, and 
            innovative tools to excel in their work.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Premium+Tech+Image"
            alt="Premium Tech Products"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Product+${i}`}
                  alt={`Featured Product ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Featured Product {i}</h3>
              <p className="text-gray-600 mb-4">Experience the future of technology with our premium devices.</p>
              <Link href={`/products/${i}`}>
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

