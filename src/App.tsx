import {Hero, Partners, Service, WhyChoosingUs} from './components/sections'

export default function App() {
  return (
    <div className="space-y-16">
      <Hero />
      <Service />
      <WhyChoosingUs />
      {/* <Quote /> */}
      <Partners />
      {/* <Contact /> */}
    </div>
  )
}
