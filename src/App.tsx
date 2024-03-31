import {AboutSection, HeroSection, ServiceSection} from './components/sections'

export default function App() {
  return (
    <div className="container space-y-16">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <div className="h-screen"></div>
    </div>
  )
}
