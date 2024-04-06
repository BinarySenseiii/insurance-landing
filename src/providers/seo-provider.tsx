import {Helmet, HelmetProvider} from 'react-helmet-async'

const config = {
  title: `CarInsuranceDXB - Comprehensive Insurance Solutions in Dubai`,
  description:
    'Your Destination for Comprehensive Car Insurance in Dubai. Tailored Coverage Plans, Competitive Rates, and Expert Guidance. Get Your Free Quote Today!',
}

const SeoProvider = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{config.title}</title>
        <meta content={config.description} name="description" />
        <meta
          content="Dubai Car Insurance, UAE Car Insurance, Comprehensive Insurance, Car Insurance, CarInsuranceDXB, CarInsuranceDXB.com"
          name="keywords"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://carinsurancedxb.com/" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1570042707390-2e011141ab78?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileImage" content="/favicons/mstile-150x150.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
    </HelmetProvider>
  )
}

export default SeoProvider
