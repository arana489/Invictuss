import React, { useEffect, useRef, useState } from 'react'
import './InfiniteSlider.css'

const InfiniteSlider = () => {
    
    const images = [
        "/customer1.png",
        "/customer2.png",
        "/customer3.png",
        "/customer4.png",
        "/customer5.png"
    ]

    return (
        <div className="flex items-center justify-center">
            <div className="flex w-[200%] items-center h-44 overflow-hidden relative">
                <div className="w-[200%] flex items-center justify-around absolute left-0 animate">
                    {images.map((i) => {
                        return (
                            <div className="flex justify-center items-start w-[10rem]">
                                <img className="" src={i} />
                            </div>
                        );
                    })}
                    {images.map((i) => {
                        return (
                            <div className="flex justify-center items-start w-[10rem]">
                                <img src={i} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

}

export default InfiniteSlider