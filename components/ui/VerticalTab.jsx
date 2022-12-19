import React, { useState } from 'react'

const VerticalTab = () => {
    const items = ['Prospective Students', 'Founders', 'Employees'];
    const [active, setActive] = useState(0);
  return (
    <div className='w-[271px] flex-grow-0 h-max flex flex-col bg-white border border-grey-6 px-2 pb-2'>
        <div className="px-5 py-3 text-sm">
            For:
        </div>
        {
            items.map((item, index) =>(
                <div className={`px-5 py-3 font-bold cursor-pointer hover:bg-grey-8 hover:text-dark-blue ${active === index ? 'bg-grey-8 text-dark-blue': 'text-primary'}`} key={index} onClick={() =>setActive(index)}>{item}</div>
            ))
        }
        <div className="w-full border-b mt-5 mb-3"></div>
        <div className="px-5 py-3 font-bold cursor-pointer text-primary hover:bg-grey-8 hover:text-dark-blue">Show all</div>
    </div>
  )
}

export default VerticalTab