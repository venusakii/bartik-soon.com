import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Products } from '@/components/products'
import { Benefits } from '@/components/benefits'
import { Technology } from '@/components/technology'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      <Benefits />
      <Technology />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
