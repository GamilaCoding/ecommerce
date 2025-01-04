import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: 'Pro Laptop X1', price: 1999.99, image: '/placeholder.svg?height=400&width=400&text=💻' },
  { id: 2, name: 'Ultra HD Monitor', price: 799.99, image: '/placeholder.svg?height=400&width=400&text=🖥️' },
  { id: 3, name: 'Ergonomic Keyboard', price: 199.99, image: '/placeholder.svg?height=400&width=400&text=⌨️' },
  { id: 4, name: 'Precision Mouse', price: 99.99, image: '/placeholder.svg?height=400&width=400&text=🖱️' },
  { id: 5, name: 'Noise-Canceling Headphones', price: 349.99, image: '/placeholder.svg?height=400&width=400&text=🎧' },
  { id: 6, name: 'Portable SSD 1TB', price: 179.99, image: '/placeholder.svg?height=400&width=400&text=💾' },
]

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

