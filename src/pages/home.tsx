import {Contact, Hero, Partners, Service, WhyChoosingUs} from '@/components/sections'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Service />
      <WhyChoosingUs />
      <Partners />
      <Contact />
    </div>
  )
}
