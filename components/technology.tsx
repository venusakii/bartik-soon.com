import { Cpu, Wifi, Cloud, Layers } from 'lucide-react'

export function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: 'AI-Powered Automation',
      description: 'Advanced machine learning algorithms that understand your preferences and optimize your home automatically.',
      features: ['Predictive Scheduling', 'Behavior Learning', 'Smart Optimization'],
    },
    {
      icon: Wifi,
      title: 'Seamless Connectivity',
      description: 'Multi-protocol support ensures all your devices work together flawlessly, regardless of brand.',
      features: ['WiFi 6E Ready', 'Zigbee & Z-Wave', 'Thread & Matter'],
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Secure cloud infrastructure with edge computing for instant response and reliable performance.',
      features: ['99.9% Uptime', 'Global CDN', 'Local Processing'],
    },
    {
      icon: Layers,
      title: 'Open Ecosystem',
      description: 'Works with 1000+ brands and devices. No lock-in, complete flexibility for your smart home.',
      features: ['Universal Compatibility', 'Open APIs', 'Custom Integrations'],
    },
  ]

  return (
    <section id="technology" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Built on Advanced Technology
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            The most sophisticated platform for your smart home
          </p>
        </div>

        <div className="space-y-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 text-sm bg-muted rounded-full text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
