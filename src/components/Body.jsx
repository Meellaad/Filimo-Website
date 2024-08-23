import React from 'react'

import Banner from './Banner'
import Populars from './Populars'
import Device from './Device'
import TV from './TV'
import Free from './Free'
import Kids from './Kids'
import Online from './Online'
import Comments from './Comments'
import FAQ from './FAQ'
import Subscription from './Subscription'

const Body = () => {
  return (
    <main>
      <Banner />
      <Populars />
      <Device />
      <TV />
      <Free />
      <Kids />
      <Online />
      <Comments />
      <FAQ />
      <Subscription />
    </main>
  )
}

export default Body