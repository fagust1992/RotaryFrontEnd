import React from 'react'
import Nav from './Nav'
import { News } from './Banner'
import Footer from './Footer'
export const Reports = () => {
  return (
<>

<Nav/>
<News   showAll = {true} />
<Footer/>

</>
  )
}
