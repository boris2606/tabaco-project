import React from 'react';
import styles from './ProductCategorySlider.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector} from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from "swiper";
import { Link } from 'react-router-dom';


const ProductCategorySlider = ({categoryArr}) => {
    const monayValue = useSelector(state => state.toolkit.monayValue)

    return (
        <div className={styles.wrapper_category_slide}>
            <Swiper
                    slidesPerView={3}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.5": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className={styles.categorySwiper}
                >
                {categoryArr.map(product => {
                    return <SwiperSlide className={styles.category_slide} key={product.id}>
                                <div className={styles.category_slide_content}>
                                    {product.sales ? <p className={styles.sales_element}>{product.salesPersent + '%'}</p> : false}
                                    <img className={styles.category_slide_img} src={product.image} alt={product.name}/>
                                    <p className={styles.category_slide_product_name}>{product.name}</p>
                                    {product.sales ? 
                                        <p className={styles.value_element}>
                                            <span className={styles.prev_value_element}>
                                                {monayValue !== 'UAH' ? product.price + " ₴" : product.price / 40 + " $"}
                                            </span> 
                                            <span className={styles.new_value_elem}>
                                                {monayValue !== 'UAH' ? product.salesPriceProduct + " ₴" : product.salesPriceProduct / 40 + " $"}
                                            </span>
                                        </p>
                                        : 
                                        <p className={styles.value_element}>
                                            {monayValue !== 'UAH' ? product.price + " ₴" : product.price / 40 + " $"}
                                        </p> 
                                    }
                                    <Link className={styles.tab_lement_more_btn} to={'/products/'+ (product.name).toLowerCase()}>Детальніше</Link>
                                </div>
                            </SwiperSlide>
                })} 
            </Swiper>
        </div>
    );
};

export default ProductCategorySlider;