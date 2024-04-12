/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { Script } from "gatsby"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GTAG}`}
        strategy="off-main-thread"
        />
        <Script id="gtag-config" strategy="off-main-thread" forward={[`gtag`]}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
            gtag('config', ${process.env.REACT_APP_GTAG}, { page_path: location ? location.pathname + location.search + location.hash : undefined })
        `}
        </Script> */}
        <Script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></Script>
    </footer>
  )
}

export default Footer