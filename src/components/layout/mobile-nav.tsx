import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {Menu} from 'lucide-react'
import NavList from './nav-list'
import SocialLinks from '../social-links'

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="block md:hidden cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent side="bottom" className="px-2">
        <SheetHeader>
          <SheetTitle> CarinsuranceDxb</SheetTitle>
          <SheetDescription className="italic !mt-1">
            Your Destination for Comprehensive Insurance in Dubai
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4">
          <NavList />
        </div>

        <hr className="my-3" />
        <div className="flex items-center justify-center">
          <SocialLinks />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation
