import {ReactNode} from 'react'
import SeoProvider from './seo-provider'
import {Toaster} from '@/components/ui/toaster'

const AppProviders = ({children}: {children: ReactNode}) => {
  return (
    <>
      <SeoProvider />
      {children}
      <Toaster />
    </>
  )
}

export default AppProviders
