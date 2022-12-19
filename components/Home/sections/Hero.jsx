import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-175 w-full overflow-hidden'>
        <video src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4" autoPlay="1" muted="1" className='-mt-7 w-full object-fill'></video>
        <div className="absolute inset-0 h-full w-ful bg-hero-gradient"></div>
        <div className="max-w-362 mx-auto z-20 absolute inset-0 pt-16 pl-6">
            <div className="text-white font-bold tracking-small text-5xl leading-13.2">
                TUM. The Entrepreneurial <br />
                University
            </div>
            <div className="text-white text-xl tracking-small mt-6 leading-7.5">Innovation through talent, excellence and responsibility</div>
        </div>
    </div>
  )
}

export default Hero