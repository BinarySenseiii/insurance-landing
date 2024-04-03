import {Link} from 'react-scroll'
import TopDivider from './top-divider'
import MobileNavigation from './mobile-nav'
import NavList from './nav-list'

// import {Link} from 'react-scroll'
// import MobileNavigation from './mobile-nav'
// import NavList from './nav-list'

// static md:fixed w-full z-10

const Navigation = () => {
  return (
    <nav className="w-full">
      <TopDivider />
      <div className="h-12 bg-primary items-center flex w-full">
        <div className="container flex items-center gap-2 justify-between">
          <Link to="home" className="font-bold cursor-pointer text-white">
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
