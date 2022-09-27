import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react' // coloca por volta de todo o app para que todo app tenha acesso as informações do chakra 
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp


// resetCSS : reseta as estilizações padrões que vem no css e vem por padrão aqui no chakra 
