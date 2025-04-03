import { Button } from '@/components/ui/button'
import React from 'react'
import Home from './home/page'
import TopBarStrip from '@/components/layout/TopBarStrip'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const page = () => {
  return (
    <div>
      <TopBarStrip />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default page