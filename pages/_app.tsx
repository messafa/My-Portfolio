import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'

function KLSite({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <FavIconProvider>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </FavIconProvider>
    </ChakraProvider>
  )
}

export default KLSite
