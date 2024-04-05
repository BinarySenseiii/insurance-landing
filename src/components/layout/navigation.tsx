import TopDivider from './top-divider'
import MobileNavigation from './mobile-nav'
import NavList from './nav-list'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="w-full">
      <TopDivider />
      <div className="h-12 bg-primary items-center flex w-full">
        <div className="container flex items-center gap-2 justify-between">
          <Link to="/" className="font-bold cursor-pointer text-white">
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
