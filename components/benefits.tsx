import { TrendingUp, Clock, Users, Award } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      stat: '40%',
      title: 'Energy Savings',
      description: 'Average reduction in monthly energy bills',
      company: 'Verified by EPA',
    },
    {
      icon: Clock,
      stat: '3hrs',
      title: 'Time Saved Daily',
      description: 'Automation handles routine tasks',
      company: 'User Survey 2024',
    },
    {
      icon: Users,
      stat: '500K+',
      title: 'Happy Families',
      description: 'Trust Bartik for their smart homes',
      company: 'Global Community',
    },
    {
      icon: Award,
      stat: '#1',
      title: 'Market Leader',
      description: 'Top-rated smart home platform',
      company: 'Tech Awards 2024',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Why Choose Bartik?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Real results that make a difference in your daily life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-2 leading-relaxed">{benefit.description}</p>
                <div className="text-sm text-muted-foreground">{benefit.company}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
