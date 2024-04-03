const items = [
  {
    id: 1,
    title: '24/7 Customer Service',
    image: '/icon-01-primary.png',
    desc: `Our state-of-the-art call center is always at your service, providing answers and assistance any time of the day`,
  },
  {
    id: 2,
    title: 'Full-Spectrum Support',
    image: '/icon-02-primary.png',
    desc: `From policy issuance to claim settlements, we’re with you at every step, ensuring a hassle-free experience.`,
  },

  {
    id: 4,
    title: 'Best Prices, Guaranteed',
    image: '/icon-04-primary.png',
    desc: `Unlock exclusive discounts and offers across UAE, enriching your lifestyle beyond just motor insurance.`,
  },
]

const WhyChoosingUs = () => {
  return (
    <section id="about" className="bg-black py-8">
      <div className="container">
        <img src="/why-choose.jpg" className="w-full rounded-md block sm:hidden" />

        <div className="space-y-5 md:space-y-5 text-white  mx-auto">
          <h2 className="font-medium text-[22px] md:text-3xl text-center">
            Why People Choosing Us
          </h2>
          <p className="text-sm  text-gray-200 md:text-sm text-center max-w-2xl mx-auto">
            Discover why we're the preferred choice for insurance solutions. From our personalized
            service to comprehensive coverage options, find out why customers trust us for their
            insurance needs
          </p>

          <div className="grid grid-cols-3 !mt-12  text-center gap-2">
            {items.map(item => (
              <div className="flex flex-col gap-2 items-center" key={item.id}>
                <img src={item.image} alt={item.title} className="mb-2" />
                <h3 className="font-semibold italic">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoosingUs
