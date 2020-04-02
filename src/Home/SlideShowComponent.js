import React from "react";
import { Slide } from 'react-slideshow-image';
import Solidays from '../css/img/solidays.jpg'
import ayo1 from '../css/img/ayo1.jpg'
import bigaRanx from '../css/img/biga_ranx.jpg'

const properties = {

};

const SlideShow = () => {
    return (
        <div className='containerSlide'>
            <Slide {...properties}>
                <div className='each-slide'>
                    <div>
                        <img src={Solidays} alt="" />
                    </div>
                </div>
                <div className='each-slide'>
                    <div>
                        <img src={ayo1} alt="" />
                    </div>
                </div>
                <div className='each-slide'>
                    <div>
                        <img src={bigaRanx} alt="" />
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default SlideShow;