import {Link} from 'react-scroll'
import {Button} from './ui/button'

const HeroActions = ({
  isSchedule = false,
  className,
}: {
  isSchedule?: boolean
  className?: string
}) => {
  return (
    <>
      <Link to="quote" className={className}>
        <Button className={className} size={isSchedule ? 'default' : 'sm'}>
          Get a Quote
        </Button>
      </Link>
      {isSchedule && (
        <a href="tel:+971555797971" className={className}>
          <Button className={className} variant="outline">
            Schedule a Call
          </Button>
        </a>
      )}
    </>
  )
}

export default HeroActions
