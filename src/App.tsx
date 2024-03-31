import {HeroSection} from './components/sections'

export default function App() {
  return (
    <>
      <HeroSection />
      <section id="about" className="h-screen bg-green-300"></section>
      <section id="services" className="h-screen bg-pink-300"></section>
    </>
  )
}
