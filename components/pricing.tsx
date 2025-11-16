import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for apartments and small homes',
      features: [
        'Up to 10 devices',
        'Basic automation',
        'Mobile app access',
        'Email support',
        '1 user account',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      description: 'Ideal for medium to large homes',
      features: [
        'Unlimited devices',
        'Advanced automation',
        'Priority support',
        'Voice control',
        'Family accounts (5 users)',
        'Energy analytics',
        'Custom scenes',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For luxury homes and estates',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        '24/7 phone support',
        'Professional installation',
        'Custom integrations',
        'Advanced security features',
        'Unlimited users',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Choose the perfect plan for your smart home needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-card border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
