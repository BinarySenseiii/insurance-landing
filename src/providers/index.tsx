import {Toaster} from '@/components/ui/toaster'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactNode} from 'react'
import SeoProvider from './seo-provider'

const queryClient = new QueryClient()

const AppProviders = ({children}: {children: ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SeoProvider />
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}

export default AppProviders
