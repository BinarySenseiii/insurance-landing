import QuoteForm from '../quote-form'

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gray-100">
      <main className="py-6 md:py-16 section-grid container">
        <div className="space-y-2 md:space-y-4">
          <p className="text-xs md:text-sm">Simple Pricing, Fair Rates All in one Place</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl capitalize">
            Insurance Cannot be complicated Anymore
          </h1>
          <p className="text-sm md:text-base">
            Welcome to our platform - where simplicity meets fairness in pricing. Save hundreds on
            insurance options, all conveniently located in one place. Experience peace of mind
            knowing we've got you covered
          </p>
        </div>

        <QuoteForm />
      </main>
    </section>
  )
}

export default HeroSection
