import {Button} from './ui/button'
import {Input} from './ui/input'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'

const QuoteForm = () => {
  return (
    <div className="h-full bg-white p-2 md:p-4 rounded-md shadow-sm">
      <div className="text-center space-y-2">
        <h2 className="font-semibold text-2xl italic">Get a Free Quote Now</h2>
        <p>Take the first step towards securing your best life today. </p>
      </div>

      <form className="mt-4 space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Phone No" />
        </div>
        <Input type="email" placeholder="Email" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Motor Insurance">Motor Insurance</SelectItem>
            <SelectItem value="Medical Insurance">Medical Insurance</SelectItem>
            <SelectItem value="Boat / Yacht Insurance">Boat / Yacht Insurance</SelectItem>
            <SelectItem value="Property Insurance">Property Insurance</SelectItem>
            <SelectItem value="Workmens compensation Insurance">
              Workmens compensation Insurance
            </SelectItem>
            <SelectItem value="Bike Insurance">Bike Insurance</SelectItem>
            <SelectItem value="Pet Insurance">Pet Insurance</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">
          Get a Quote
        </Button>
      </form>
    </div>
  )
}

export default QuoteForm
