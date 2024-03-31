import {Hero, About, Service, WhyChoosingUs, Quote, Partners, Contact} from './components/sections'

export default function App() {
  return (
    <div className="container space-y-16">
      <Hero />
      <About />
      <Service />
      <WhyChoosingUs />
      <Quote />
      <Partners />
      <Contact />
    </div>
  )
}
