import {Link} from 'react-scroll'
import {Button} from '../ui/button'
import ShuffleGrid from '../shuffle-grid'

const HeroSection = () => {
  return (
    <section id="home" className="pt-[92px] relative">
      <main className="py-16 container grid grid-cols-1 items-center gap-8  md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm">Simple Pricing, Fair Rates All in one Place</p>
          <h1 className="text-5xl capitalize">Same hundreds on insurance for your car</h1>
          <p>
            Welcome to our platform where simplicity meets fairness in pricing. Our goal is to
            provide you with the best rates, all conveniently located in one place. With our
            services, you can save hundreds on your car insurance. Experience peace of mind knowing
            that we've got you covered
          </p>
          <div className="flex items-center gap-2">
            <Link to="quote">
              <Button>Get a Quote</Button>
            </Link>
            <a href="tel:+971555797971">
              <Button variant="outline">Schedule a Call</Button>
            </a>
          </div>
        </div>

        <ShuffleGrid />
      </main>
    </section>
  )
}

export default HeroSection
