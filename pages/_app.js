import '../styles/globals.css'
import { Provider as MainProvider } from './contexts/Main'
import React from 'react'

function MyApp({ Component, pageProps }) {
    return (
        <MainProvider>
            <Component {...pageProps} />
        </MainProvider>
    )
}

export default MyApp
