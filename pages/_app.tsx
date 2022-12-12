import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss';
import { AnimatePresence } from "framer-motion"
import { Provider } from 'react-redux';
import store from "../core/store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return <Provider store={store}>
    <AnimatePresence>
      {getLayout(<Component {...pageProps} />)}
    </AnimatePresence>
  </Provider>
}