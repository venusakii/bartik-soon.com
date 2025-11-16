'use client'

import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Alexandra Martinez',
      role: 'Homeowner',
      image: '/professional-woman-smiling.png',
      rating: 5,
      text: 'Bartik has completely transformed how I manage my home. The automation is incredible and the energy savings are real!',
    },
    {
      name: 'Ryan Foster',
      role: 'Tech Enthusiast',
      image: '/professional-man-smiling.png',
      rating: 5,
      text: 'Best smart home platform I\'ve used. The AI learning is impressive and the app is incredibly intuitive.',
    },
    {
      name: 'Sofia Anderson',
      role: 'Interior Designer',
      image: '/professional-woman-portrait.png',
      rating: 5,
      text: 'I recommend Bartik to all my clients. The devices look beautiful and the technology is cutting-edge.',
    },
    {
      name: 'Marcus Bennett',
      role: 'Software Engineer',
      image: '/professional-man-portrait.png',
      rating: 5,
      text: 'The API integration capabilities are outstanding. Perfect for anyone who wants customization and control.',
    },
    {
      name: 'Catherine Park',
      role: 'Busy Parent',
      image: '/smiling-woman.png',
      rating: 5,
      text: 'Saves me so much time every day. The security features give me peace of mind when I\'m away from home.',
    },
    {
      name: 'Daniel Harrison',
      role: 'Real Estate Agent',
      image: '/business-man-smiling.jpg',
      rating: 5,
      text: 'Homes with Bartik systems sell faster and for more. It\'s a game-changer for property value.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Loved by Homeowners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Join thousands of satisfied customers who transformed their homes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
