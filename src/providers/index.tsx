import {ReactNode} from 'react'
import SeoProvider from './seo-provider'

const AppProviders = ({children}: {children: ReactNode}) => {
  return (
    <>
      <SeoProvider />
      {children}
    </>
  )
}

export default AppProviders
