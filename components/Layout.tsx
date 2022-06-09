import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
      </nav>
    </header>
    <main className="p-8 sm:max-w-6xl m-auto">
      {children}
    </main>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
)

export default Layout
