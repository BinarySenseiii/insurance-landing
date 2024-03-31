import HeroActions from '../hero-actions'
import ShuffleGrid from '../shuffle-grid'

const HeroSection = () => {
  return (
    <section id="home" className="md:pt-[92px] relative">
      <main className="py-6 md:py-16 section-grid ">
        <div className="space-y-2 md:space-y-4">
          <p className="text-xs md:text-sm">Simple Pricing, Fair Rates All in one Place</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl capitalize">
            Save hundreds on various insurance options
          </h1>
          <p className="text-sm md:text-base">
            Welcome to our platform where simplicity meets fairness in pricing. Our goal is to
            provide you with the best rates, all conveniently located in one place. With our
            services, you can save hundreds on various insurance options. Experience peace of mind
            knowing that we've got you covered
          </p>
          <div className="!mt-4 md:mt-0 flex items-center gap-2">
            <HeroActions isSchedule />
          </div>
        </div>

        <ShuffleGrid />
      </main>
    </section>
  )
}

export default HeroSection
