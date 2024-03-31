import {FC, ReactNode} from 'react'

interface InfoBoxProps {
  children: ReactNode
  image: string
}

const InfoBox: FC<InfoBoxProps> = ({children, image}) => {
  return (
    <div className="flex flex-col sm:flex-row text-center sm:text-left items-center gap-2">
      <img src={image} alt="about not found" />
      <p className="font-semibold text-sm sm:text-lg leading-tight">{children}</p>
    </div>
  )
}

export default InfoBox
