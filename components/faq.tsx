import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'How difficult is it to install Bartik devices?',
      answer: 'Most Bartik devices can be installed in minutes without professional help. Our app provides step-by-step instructions, and each device comes with easy-to-follow guides. For complex installations, we offer professional installation services.',
    },
    {
      question: 'Are Bartik devices compatible with other smart home systems?',
      answer: 'Yes! Bartik supports Matter, Zigbee, Z-Wave, and works with major platforms like Amazon Alexa, Google Home, and Apple HomeKit. You can integrate over 1000+ third-party devices seamlessly.',
    },
    {
      question: 'What happens if my internet goes down?',
      answer: 'Bartik devices have local processing capabilities. Essential functions like lighting controls, security features, and automation routines continue to work even without internet connectivity. Cloud-dependent features will resume once connectivity is restored.',
    },
    {
      question: 'How secure is my data?',
      answer: 'We use military-grade encryption for all data transmission and storage. Your data is never shared with third parties. We comply with GDPR, CCPA, and other privacy regulations. Local processing options are available for maximum privacy.',
    },
    {
      question: 'Can I control devices when I\'m away from home?',
      answer: 'Our mobile app allows you to control all your devices from anywhere in the world. You\'ll receive real-time notifications and can monitor your home through security cameras remotely.',
    },
    {
      question: 'What is your warranty and return policy?',
      answer: 'All Bartik devices come with a 2-year warranty covering manufacturing defects. We offer a 30-day money-back guarantee if you\'re not satisfied. Extended warranty options are available for additional coverage.',
    },
    {
      question: 'Do I need a subscription?',
      answer: 'Basic features are free forever. Premium subscriptions unlock advanced automation, cloud storage for camera footage, energy analytics, and priority support. You can start with the free tier and upgrade anytime.',
    },
    {
      question: 'How much can I save on energy bills?',
      answer: 'Average users save 30-40% on energy bills through smart scheduling, presence detection, and automated climate control. Actual savings vary based on home size, location, and usage patterns.',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Everything you need to know about Bartik smart home devices
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
