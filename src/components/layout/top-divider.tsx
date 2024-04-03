import {Mail, Phone} from 'lucide-react'

import {SocialIcon} from 'react-social-icons'

const socialMediaLinks = [
  {
    link: 'https://www.instagram.com/carinsurancedxbzareen/',
    label: 'Instagram',
  },
  {
    link: 'https://www.facebook.com/people/Carinsurancedxbcom/61555612810187/?mibextid=PlNXYD',
    label: 'Facebook',
  },
  {
    link: 'https://www.linkedin.com/in/zareen-javed-8a91a278/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    label: 'Linkedin',
  },
]

export const info = [
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
    <div className="bg-gray-100 py-2 hidden md:block">
      <div className="container flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
          {info.map(({icon, link, text, label}, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-black opacity-90 hover:opacity-100"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
              <span className="text-sm block opacity-90">{text}</span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black text-sm italic mr-2 font-semibold">Follow us</span>
          {socialMediaLinks.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black size-7 bg-white transition-all grid place-content-center rounded-full opacity-100 hover:opacity-90 transform hover:scale-105"
              aria-label={socialMedia.label}
            >
              {/* {socialMedia.icon} */}
              <SocialIcon url={socialMedia.link} style={{height: 30, width: 30}} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopDivider
