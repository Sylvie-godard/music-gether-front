import React from "react";
import Slider from "react-slick";

const properties = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
};

const SlideShow: React.FC<{}> = () => {
    return (
        <div className="containerSlide">
            <Slider {...properties}>
                <div className="each-slide">
                    <div>
                        <img src="/img/solidays.jpg" alt="" />
                        <button>test</button>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src="/img/ayo1.jpg" alt="" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src="/img/biga_ranx.jpg" alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlideShow;
