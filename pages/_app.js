import Menu from "../components/menu"

import "../styles/bootstrap.css"
import "../styles/custom.css"

function Blog({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default Blog
