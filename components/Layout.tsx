import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  noindex?: boolean;
};

const Layout = ({
  children,
  title = "D-sektionens 40-års Jubileum",
  description,
  noindex,
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
      {noindex && (
        <>
          <meta key="robots" name="robots" content="noindex,follow" />
          <meta key="googlebot" name="googlebot" content="noindex,follow" />
        </>
      )}
    </Head>
    <main className="m-auto p-4 sm:max-w-6xl">{children}</main>
  </>
);

export default Layout;
