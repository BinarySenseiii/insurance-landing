import {Contact, Hero, Partners} from './components/sections'

export default function App() {
  return (
    <div className="space-y-16">
      <Hero />
      {/* <Service /> */}
      {/* <Quote /> */}
      <Partners />
      <Contact />
    </div>
  )
}
