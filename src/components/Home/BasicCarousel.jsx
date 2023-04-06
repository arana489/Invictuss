import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import TestimonyBox from './TestimonyBox';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

const BasicCarousel = ({items}) => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
        useSnapCarousel();
    return (
        <>
            <ul
                ref={scrollRef}
                className="flex h-full overflow-auto snap-mandatory"
            >
                {items.map((x, i) => (
                    <li
                        key={i}
                        className='text-sm w-1/2 h-fit flex-shrink-0
                        flex justify-center items-center'
                    >
                        <TestimonyBox text={x.text} name={x.name} role={x.role} />
                    </li>
                ))}
            </ul>
            <ol className='flex gap-2 mt-8 justify-center'>
                {pages.map((_, i) => (
                    <li key={i}>
                        <button
                            style={i === activePageIndex ? {} : { opacity: 0.5 }}
                            onClick={() => goTo(i)}
                        >
                            <div className='h-2 w-2 rounded-full bg-white'></div>
                        </button>
                    </li>
                ))}
            </ol>
            <div className='flex text-[1.1rem] mt-4 flex-col text-white'>
                <div className='flex justify-center'>
                    <button className='mr-10' onClick={() => prev()}><HiArrowSmLeft className='hover:scale-125 duration-200' size={25} /></button>
                    {activePageIndex + 1} / {pages.length}
                    <button className='ml-10' onClick={() => next()}><HiArrowSmRight className='hover:scale-125 duration-200' size={25} /></button>
                </div>
            </div>
        </>
    );
};

export default BasicCarousel;