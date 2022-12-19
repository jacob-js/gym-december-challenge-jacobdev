import React from 'react'
import CustomizedNavigation from './sections/CustomizedNavigation'
import DegreeProgram from './sections/DegreeProgram'
import Hero from './sections/Hero'
import News from './sections/News'
import Stats from './sections/Stats'
import WhatDriveUs from './sections/WhatDriveUs'

const Home = () => {
  return (
    <div>
        <Hero />
        <News />
        <CustomizedNavigation />
        <DegreeProgram />
        <WhatDriveUs />
        <Stats />
    </div>
  )
}

export default Home