import {Facebook, Instagram, Mail, Phone} from 'lucide-react'

const socialMediaLinks = [
  {
    icon: <Instagram size={17} />,
    link: 'https://www.instagram.com/carinsurancedxbzareen/',
    label: 'Instagram',
  },
  {
    icon: <Facebook size={17} />,
    link: 'https://www.facebook.com/people/Carinsurancedxbcom/61555612810187/?mibextid=PlNXYD',
    label: 'Facebook',
  },
]

const info = [
  {icon: <Phone size={17} />, text: '+971555797971', link: 'tel:+971555797971', label: 'Phone'},
  {
    icon: <Mail size={17} />,
    text: 'zareen@carinsurancedxb.com',
    link: 'mailto:zareen@carinsurancedxb.com',
    label: 'Email',
  },
]

const TopDivider = () => {
  return (
    <div className="bg-primary py-2 hidden md:block">
      <div className="container flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
          {info.map(({icon, link, text, label}, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-white opacity-90 hover:opacity-100"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
              <span className="text-sm block opacity-90">{text}</span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm italic mr-2">Follow us</span>
          {socialMediaLinks.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black size-7 bg-white transition-all grid place-content-center rounded-full opacity-100 hover:opacity-90 transform hover:scale-105"
              aria-label={socialMedia.label}
            >
              {socialMedia.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopDivider
