import HomePage from '@/pages/home'
import Privacy from './pages/privacy'
import TermsConditionPage from './pages/terms-conditions'

const router = [
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/privacy',
    element: <Privacy />,
  },

  {
    path: 'terms-conditions',
    element: <TermsConditionPage />,
  },
]

export default router
