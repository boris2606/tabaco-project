import './ProductInfoSlider.scss'
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductInfoSlider = ({currentProduct}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='wrapper_swipers'>
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='main_swiper'
            >
                {currentProduct.sliderGallery.map((image,index) => {
                    return <SwiperSlide key={index} className='swiper_slide_main' id={index}>
                                {currentProduct.sales ? <p className='sales_element'>{currentProduct.salesPersent + '%'}</p> : false}
                                <img className='slider_info_img' src={image} alt='Product'/>
                            </SwiperSlide>
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='second_swiper'
            >
                {currentProduct.sliderGallery.map((image,index) => {
                    return <SwiperSlide key={index} className='swiper_slide' id={index}>
                                <img src={image} alt='Product'/>
                            </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

export default ProductInfoSlider;