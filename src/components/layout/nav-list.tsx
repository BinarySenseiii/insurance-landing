import {Dispatch} from 'react'
import {Link} from 'react-scroll'

const links = [
  {id: 1, text: 'Home', target: 'home', offset: -150},
  {id: 2, text: 'Services', target: 'services', offset: -90},
  {id: 3, text: 'Partners', target: 'partners', offset: -90},
  {id: 4, text: 'Contact Us', target: 'contact', offset: -90},
]

const NavList = ({setIsOpen}: {setIsOpen: Dispatch<React.SetStateAction<boolean>>}) => {
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
          className={'hover:text-active font-medium md:text-slate-200 cursor-pointer'}
          onClick={() => setIsOpen(false)}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}

export default NavList
