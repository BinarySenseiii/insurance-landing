import TopDivider from './top-divider'

import {Link} from 'react-scroll'
import MobileNavigation from './mobile-nav'
import NavList from './nav-list'

const Navigation = () => {
  return (
    <nav className="static md:fixed w-full z-10">
      <TopDivider />
      <div className="h-12 bg-white items-center flex w-full">
        <div className="container flex items-center gap-2 justify-between">
          <Link to="home" className="font-bold cursor-pointer">
            CarinsuranceDxb
          </Link>

          <MobileNavigation />

          <div className="hidden md:block">
            <NavList />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
