import Image from 'next/image'
import React from 'react'
import Title from '../../ui/Title'

const More = () => {
    const data = [
        {
            imgUrl: 'https://tum.de/fileadmin/_processed_/9/9/csm_20210920_Praesident_Podcast_AH_653886_414588d4e9.jpg',
            title: "We are TUM – the podcast of our university",
            content: "In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the \"hidden champions\" behind the scenes.",
            btnText: "All episodes"
        },
        {
            imgUrl: 'https://tum.de/fileadmin/_processed_/4/3/csm_2202_OM_Campus_NeueBerufsbegleitendeZertifikatsprogrammeLLL_pexels-fauxels-3184299_c055900808.jpg',
            title: "Lifelong learning",
            content: "We offer continuing education opportunities accompanying you over your whole career.",
            btnText: "TUM Institute for LifeLong Learning"
        },
        {
            imgUrl: 'https://www.tum.de/fileadmin/w00bfo/www/Startseite/20130828__Chakrabarti_Bockelmann_Interview_AE_24991_16x9.jpg',
            title: "Stay connected",
            content: "Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!",
            btnText: "Join the TUM Community"
        },
        {
            imgUrl: 'https://www.tum.de/fileadmin/_processed_/e/e/csm_Shutterstock_1437851816_junge_Asiatin_150dpi_4179705ece.jpg',
            title: "TUMint Relocation Service",
            content: "All-inclusive onboarding package for international students assists with accommodation and much more.",
            btnText: "See our services"
        },
        {
            imgUrl: 'https://www.tum.de/fileadmin/_processed_/8/c/csm_20170220_TUM_Shop_AH_304198_3202b42f20.jpg',
            title: "Discover the TUMshop",
            content: "Merchandising items, conference materials and other products in the corporate design can be found online and on site.",
            btnText: "Shop online"
        }
    ]
  return (
    <div className='mt-48 max-w-362 mx-auto px-6'>
        <div className="flex gap-x-[144px] gap-y-12 flex-wrap">
            {
                data.map((item, index) =>(
                    <div className={`flex flex-col text-dark-blue hover:text-primary cursor-pointer flex-grow-0 ${index === 0 ? 'w-[821px]': 'w-[338px]'}`} key={index}>
                        <Image width={index === 0 ? 821: 338} height={256} src={item.imgUrl} alt="" className='mb-6 object-cover h-[256px]' />
                        <div className="text-2xl font-bold leading-[30px] tracking-small">{item.title}</div>
                        <div className="mt-4 tracking-small leading-[26px] font-bold">{item.content}</div>
                        <div className="mt-6 border border-primary text-primary px-5 py-4 font-medium w-max cursor-pointer hover:border-dark-blue hover:text-dark-blue">{item.btnText}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default More