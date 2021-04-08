import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../lib/gtag'

import 'nextra-theme-docs/style.css'

const Nextra = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default Nextra
