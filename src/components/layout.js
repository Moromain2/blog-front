import React from 'react'
import Navigation from './navigation'

const Layout = ({ children }) => {
  return (
    <>
        <Navigation/>
        { children }
        <footer>
            © Romain Mosser | {new Date().getFullYear()}
        </footer>
    </>
  )
}

export default Layout