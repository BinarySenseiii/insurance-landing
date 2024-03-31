import {Link} from 'react-scroll'
import HeroActions from '../hero-actions'

const links = [
  {id: 1, text: 'Home', target: 'home', offset: -150},
  {id: 2, text: 'About Us', target: 'about', offset: -90},
  {id: 3, text: 'Services', target: 'services', offset: -90},
]

const NavList = ({isSchedule = false, className}: {isSchedule?: boolean; className?: string}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {links.map(link => (
        <Link
          activeClass="active-scroll-spy "
          to={link.target}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={200}
          key={link.id}
          className={'hover:text-primary font-medium text-slate-600 cursor-pointer'}
        >
          {link.text}
        </Link>
      ))}
      <div className="flex items-center gap-2">
        <HeroActions isSchedule={isSchedule} className={className} />
      </div>
    </div>
  )
}

export default NavList
