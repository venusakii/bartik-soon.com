import { Zap, Shield, Smartphone, Brain, Leaf, Lock } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Control',
      description: 'Control all your devices with a single tap from anywhere in the world.',
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade encryption keeps your home and data completely secure.',
    },
    {
      icon: Smartphone,
      title: 'Universal App',
      description: 'One intuitive app to manage your entire smart home ecosystem seamlessly.',
    },
    {
      icon: Brain,
      title: 'AI Learning',
      description: 'Adapts to your lifestyle patterns and automates routines intelligently.',
    },
    {
      icon: Leaf,
      title: 'Energy Saving',
      description: 'Reduce energy consumption by up to 40% with smart optimization.',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays yours. No sharing, no tracking, complete privacy.',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Powerful Features for Modern Living
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Everything you need to create the perfect smart home experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
