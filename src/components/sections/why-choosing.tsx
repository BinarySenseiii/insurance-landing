import InfoBox from '../info-box'

const items = [
  {id: 1, title: 'Easy Process', image: '/icon-01-primary.png'},
  {id: 2, title: 'Fast Delivery', image: '/icon-02-primary.png'},
  {id: 3, title: 'Policy Controlling', image: '/icon-03-primary.png'},
  {id: 4, title: 'Money Saving', image: '/icon-04-primary.png'},
]

const WhyChoosingUs = () => {
  return (
    <section id="about" className="min-h-screen section-grid ">
      <img src="/why-choose.jpg" className="w-full rounded-md block sm:hidden" />

      <div className="space-y-5 md:space-y-5">
        <h2 className="font-medium text-[22px] md:text-4xl">Why People Choosing Us!</h2>
        <p className="text-sm md:text-base">
          Discover why we're the preferred choice for insurance solutions. From our personalized
          service to comprehensive coverage options, find out why customers trust us for their
          insurance needs
        </p>

        <div className="grid grid-cols-2 gap-2">
          {items.map(item => (
            <div className="bg-primary rounded-md shadow p-2 sm:p-4" key={item.id}>
              <div className="bg-white grid place-content-center h-32 rounded-md">
                <InfoBox isFlexCol image={item.image}>
                  {item.title}
                </InfoBox>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src="/why-choose.jpg" className="w-full rounded-md hidden sm:block" />
    </section>
  )
}

export default WhyChoosingUs
