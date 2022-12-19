import React from 'react'
import Title from '../../ui/Title'
import VerticalTab from '../../ui/VerticalTab'

const CustomizedNavigation = () => {
  return (
    <div className='max-w-362 mx-auto px-6 mt-12'>
        <div className="mb-12">
            <div className="text-dark-blue font-bold tracking-small">Customized navigation</div>
            <Title text="Discover what TUM has to offer" />
        </div>
        <div className="flex relative">
            <div className="mt-8">
                <VerticalTab />
            </div>
            <div className="flex absolute ml-40 -z-10 gap-14">
                <div className="bg-yellow-gold w-[644px] h-[423px] flex justify-center items-center">
                    <div class="bg-custom-nav h-[200px] w-[385px] flex bg-cover bg-no-repeat bg-center flex-grow-0">
						<div className='bg-yellow-gold w-1/10 mt-1/10'></div>
						<div className='w-1/10'></div>
						<div className='bg-yellow-gold w-1/10 mt-1/10'></div>
						<div className='w-1/10'></div>
						<div className='bg-yellow-gold w-1/10 mb-1/10'></div>
						<div className='w-1/10'></div>
						<div className='bg-yellow-gold w-1/10 mt-1/10'></div>
						<div className='w-1/10'></div>
						<div className='bg-yellow-gold w-1/10 mt-1/10'></div>
						<div className='w-1/10'></div>
					</div>
                </div>
                <div className="flex flex-col text-dark-blue justify-center lg:w-[26.1875rem]">
                    <div className="font-bold text-10.5 tracking-small mb-6">Prospective Students</div>
                    <div className="text-xl tracking-small leading-7.5">Learn to bring ideas to life, discover new possibilities, work in teams and build networks.</div>
                    <div className="mt-8 border border-primary text-primary px-5 py-4 font-medium w-max cursor-pointer hover:border-dark-blue hover:text-dark-blue">Learn more</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomizedNavigation