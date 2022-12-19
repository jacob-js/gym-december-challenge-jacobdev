import React from 'react'
import AlumniStory from './sections/AlumniStory'
import CustomizedNavigation from './sections/CustomizedNavigation'
import DegreeProgram from './sections/DegreeProgram'
import Hero from './sections/Hero'
import More from './sections/More'
import News from './sections/News'
import SchoolAndResearch from './sections/SchoolAndResearch'
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
        <SchoolAndResearch />
        <AlumniStory />
        <More />
    </div>
  )
}

export default Home