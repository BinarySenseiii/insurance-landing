import clsx from 'clsx'
import {Car, Cat, HeartPulse, Home, PersonStanding, Sailboat} from 'lucide-react'
import {ReactNode} from 'react'

const services = [
  {
    title: 'Medical Insurance',
    icon: <HeartPulse size={40} />,
    description:
      'Ensure your health and well-being with flexible medical insurance plans designed to cover your medical expenses.',
  },
  {
    title: 'Boat / Yacht Insurance',
    icon: <Sailboat size={40} />,
    description:
      'Navigate the waters with confidence knowing your boat or yacht is protected by our specialized insurance solutions.',
  },
  {
    title: 'Property Insurance',
    icon: <Home size={40} />,
    description:
      'Safeguard your property investments with reliable insurance coverage against unforeseen events and damages.',
  },
  {
    title: "Workmen's Compensation Insurance",
    icon: <PersonStanding size={40} />,
    description:
      "Provide financial security for your employees with our workmen's compensation insurance plans.",
  },
  {
    title: 'Auto Insurance',
    icon: <Car size={40} />,
    description:
      'Hit the road worry-free with our auto insurance policies that offer comprehensive coverage for your two-wheeler.',
  },
  {
    title: 'Pet Insurance',
    icon: <Cat size={40} />,
    description:
      'Ensure the well-being of your furry companions with our pet insurance plans covering veterinary expenses and more.',
  },
]

const ServiceSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-8 rounded-md shadow-md">
      <div className="space-y-2 px-2 sm:space-y-3 max-w-2xl mx-auto text-center text-black container">
        <h3 className="text-sm">SERVICES WE PROVIDE</h3>
        <h2 className="font-bold text-2xl sm:text-4xl">Insurance Solutions</h2>
        <p className="text-black text-sm sm:text-base">
          Discover our insurance solutions. From motor to medical, property to pet, we've got you
          covered. Personalized service for peace of mind
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  )
}

const ServiceCard = ({
  service,
}: {
  service: {
    title: string
    icon: ReactNode
    description: string
  }
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-md p-4 opacity-95 hover:opacity-100 hover:outline hover:outline-black',
      )}
    >
      <div className="text-primary">{service.icon}</div>
      <h3 className="font-semibold text-lg mt-2">{service.title}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
    </div>
  )
}

export default ServiceSection
