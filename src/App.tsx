import {AboutSection, HeroSection} from './components/sections'

export default function App() {
  return (
    <div className="container space-y-16">
      <HeroSection />
      <AboutSection />

      <section id="services" className="h-screen bg-pink-300"></section>
    </div>
  )
}
