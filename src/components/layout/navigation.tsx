import clsx from 'clsx'
import {Button} from '../ui/button'
import TopDivider from './top-divider'

import {Link} from 'react-scroll'

const links = [
  {id: 1, text: 'Home', target: 'home', offset: -150},
  {id: 2, text: 'About Us', target: 'about', offset: -90},
  {id: 3, text: 'Services', target: 'services', offset: -90},
]

const Navigation = () => {
  return (
    <nav className="fixed w-full">
      <TopDivider />
      <div className="h-12 bg-white items-center hidden md:flex fixed w-full">
        <div className="container flex items-center gap-2 justify-between">
          <a href="#home" className="font-bold">
            CarinsuranceDxb
          </a>

          <div className="flex items-center gap-3">
            {links.map(link => (
              <Link
                activeClass="active-scroll-spy "
                to={link.target}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={200}
                key={link.id}
                className={clsx('hover:text-primary font-medium text-slate-600 cursor-pointer')}
              >
                {link.text}
              </Link>
            ))}
            <a href="#quote">
              <Button size="sm">Get a Quote</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
