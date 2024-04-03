import {Toaster} from '@/components/ui/toaster'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactNode} from 'react'
import SeoProvider from './seo-provider'
import {SocialIcon} from 'react-social-icons'

const queryClient = new QueryClient()

const AppProviders = ({children}: {children: ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="https://wa.me/971555797971"
        target="_blank"
        className="fixed z-10 hover:scale-110 right-4 bottom-4"
      >
        <SocialIcon network="whatsapp" style={{height: 40, width: 40}} />
      </a>
      <SeoProvider />
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}

export default AppProviders
