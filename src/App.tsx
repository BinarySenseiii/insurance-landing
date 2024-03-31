import {Hero, About, Service, WhyChoosingUs} from './components/sections'

export default function App() {
  return (
    <div className="container space-y-16">
      <Hero />
      <About />
      <Service />
      <WhyChoosingUs />
    </div>
  )
}
