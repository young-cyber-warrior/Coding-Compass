/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return <Component {...pageProps} />
}
