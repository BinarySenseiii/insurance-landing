const partners = [
  '/insurance/1.jpg',
  '/insurance/3.png',
  '/insurance/4.png',
  '/insurance/5.gif',
  '/insurance/6.png',
  '/insurance/7.png',
  '/insurance/8.png',
  '/insurance/9.svg',
  '/insurance/10.png',
  '/insurance/11.png',
  '/insurance/12.png',
  '/insurance/13.jpg',
  '/insurance/14.svg',
  '/insurance/15.svg',
  '/insurance/16.png',
  '/insurance/17.jpg',
  '/insurance/18.png',
  '/insurance/19.png',
]

const Partners = () => {
  return (
    <section id="partners" className="container">
      <div className="space-y-3 md:space-y-5 text-black  mx-auto">
        <h2 className="font-semibold text-[22px] md:text-3xl text-center italic">Our Partners</h2>
        <p className="text-sm  text-gray-700 md:text-base text-center max-w-xl mx-auto">
          Our partners play a crucial role in our mission to deliver exceptional service and value
          to our clients.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 max-w-[920px] mx-auto">
        {partners.map((partner, index) => (
          <img key={index} src={partner} className="max-w-xs mx-auto w-32" />
        ))}
      </div>
    </section>
  )
}

export default Partners
