import type { ReactNode } from 'react'
import Header from '../components/landing/Header/Header'
import Footer from '../components/landing/Footer/Footer'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
