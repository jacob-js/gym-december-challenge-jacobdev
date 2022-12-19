import React from 'react'
import CustomizedNavigation from './sections/CustomizedNavigation'
import Hero from './sections/Hero'
import News from './sections/News'

const Home = () => {
  return (
    <div>
        <Hero />
        <News />
        <CustomizedNavigation />
    </div>
  )
}

export default Home