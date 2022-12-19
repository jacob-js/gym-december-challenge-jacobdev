import React from 'react'
import CustomizedNavigation from './sections/CustomizedNavigation'
import DegreeProgram from './sections/DegreeProgram'
import Hero from './sections/Hero'
import News from './sections/News'

const Home = () => {
  return (
    <div>
        <Hero />
        <News />
        <CustomizedNavigation />
        <DegreeProgram />
    </div>
  )
}

export default Home