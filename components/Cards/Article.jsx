import Image from 'next/image'
import React from 'react'

const Article = ({imgUrl, category, smallTitle, title, body, date, readTime}) => {
  return (
    <div className='h-[387.27px] w-[307.75px] flex flex-col text-dark-blue hover:text-primary'>
        <div className="relative">
            <Image height={182.61} width={307.75} alt="" src={imgUrl} className='mb-3' />
            <div className="bg-grey-8 px-2 py-[2px] text-[13.33px] font-medium absolute bottom-3 left-0">{category}</div>
        </div>
        <div className="tracking-small leading-[26px] font-bold">{smallTitle}</div>
        <div className="text-xl tracking-small leading-[26px] font-bold mb-3">{title}</div>
        <div className="text-sm tracking-small leading-[21px] font-medium">{body}</div>
        <div className="flex justify-between text-[13.33px] mt-4 font-medium">
            <div className="">{date}</div>
            <div className="">Reading time {readTime}</div>
        </div>
    </div>
  )
}

export default Article