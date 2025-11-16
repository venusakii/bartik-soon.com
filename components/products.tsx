import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export function Products() {
  const products = [
    {
      name: 'Smart Thermostat',
      category: 'Climate Control',
      price: '$199',
      image: '/modern-smart-thermostat-device.jpg',
      badge: 'Bestseller',
    },
    {
      name: 'Security Camera Pro',
      category: 'Security',
      price: '$299',
      image: '/smart-security-camera.jpg',
      badge: 'New',
    },
    {
      name: 'Smart Door Lock',
      category: 'Access Control',
      price: '$249',
      image: '/smart-door-lock.png',
      badge: null,
    },
    {
      name: 'Smart Lighting Kit',
      category: 'Lighting',
      price: '$149',
      image: '/smart-led-light-bulbs.jpg',
      badge: 'Popular',
    },
    {
      name: 'Voice Assistant Hub',
      category: 'Control Center',
      price: '$179',
      image: '/smart-speaker-hub.jpg',
      badge: null,
    },
    {
      name: 'Smart Plug Bundle',
      category: 'Accessories',
      price: '$89',
      image: '/smart-power-plugs.jpg',
      badge: 'Value Pack',
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Premium Smart Devices
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Carefully crafted devices that work together seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <div className="flex items-center justify-between">
                  
                  <Button size="sm" variant="outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
