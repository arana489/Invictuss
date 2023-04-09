import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import TestimonyBox from './TestimonyBox';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
            <div className='flex mt-8 text-[1.1rem] flex-col text-white'>
                <div className='flex justify-center'>
                    <button className='mr-10' onClick={() => prev()}><FiChevronLeft className='hover:scale-125 duration-200' size={25} /></button>
                    <ol className='flex -translate-y-0.5 gap-2 justify-center'>
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
                    <button className='ml-10' onClick={() => next()}><FiChevronRight className='hover:scale-125 duration-200' size={25} /></button>
                </div>
            </div>
        </>
    );
};

export default BasicCarousel;