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

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="block md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="bottom" className="px-2">
        <SheetHeader>
          <SheetTitle> CarinsuranceDxb</SheetTitle>
          <SheetDescription>
            Your Destination for Comprehensive Insurance in Dubai. Tailored Coverage Plans,
            Competitive Rates, and Expert Guidance
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4">
          <NavList />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation
