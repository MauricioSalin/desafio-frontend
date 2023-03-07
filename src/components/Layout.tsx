import React from 'react'

/**
 * Components
 */
import Navbar from './Nav'

/**
 * Types
 */
interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
