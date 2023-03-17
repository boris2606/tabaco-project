import React, { useEffect } from 'react';
import video from '../../img/video.mp4'
import styles from './Main.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useSelector,useDispatch} from 'react-redux';
import { addToCard } from '../../reduxToolkit/reduxReducer';
import { useToast} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CallBack from '../../components/callback/CallBack';

const Main = () => {
    const dataProductsArr = useSelector(state => state.toolkit.dataProducts)
    const tabacoArray = dataProductsArr.filter( product => product.category === 'tabaco')
    const gilsesArray = dataProductsArr.filter( product => product.category === 'gilses')
    const monayValue = useSelector(state => state.toolkit.monayValue)

    const dispatch = useDispatch()

    const toast = useToast()

    return (
        <section className={styles.wrapper_main}>
            <section className={styles.head_fullscreen}>
                <section className={styles.head_fullscreen_content}>
                    <p className={styles.head_top_description}>АКЦІЇ</p>
                    <h1 className={styles.head_tit_text}>ТУТ АКЦІЇ <br/> КУПУЙ ТОВАР ДЕШЕВШЕ</h1>
                    <Link to='/sale-products' className={styles.head_btn_shop}>Перейти до товару зі знижкою</Link>
                </section>
            </section>
            <section className={styles.machines_wrapper}>
                <section className={styles.machies_video}>
                    <video src={video} className={styles.machine_video_style} autoPlay muted  loop ></video>
                </section>
                <section className={styles.machines_about_content}>
                    <p className={styles.machines_about_tit_txt}>Пристрої для цигарок</p>
                    <hr noshade='true' className={styles.machines_about_hr}/>
                    <p className={styles.machines_about_sec_txt}>Електронні та механічні пристрої для забивання табаку</p>
                    <Link to='/products' className={styles.machines_about_btn}>Перейти до товару</Link>
                </section>
            </section>
            <section className={styles.wrapper_tabaco}>
                <section className={styles.slider_tabaco_wrapper}>
                    <section className={styles.slider_tabaco_content}>
                        <p className={styles.slider_tabaco_tit_text}>Асортимент табаку в наявності</p>
                        <Swiper
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                "@0.75": {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                "@1.5": {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                }
                            }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className={styles.mySwiper}
                        >
                            {tabacoArray.map(elem => {
                                return <SwiperSlide key={elem.id} className={styles.wrapper_slide}>
                                            {elem.sales ? <p className={styles.sales_element}>{elem.salesPersent + '%'}</p> : false}
                                            <img className={styles.slide_element_img} src={elem.image} alt={elem.name}/>
                                            <p className={styles.slide_element_name}>{elem.name}</p>
                                            <div className={styles.slide_element_price}>
                                                    {elem.sales ? 
                                                        <p className={styles.value_element}>
                                                            <span className={styles.prev_value_element}>
                                                                {monayValue !== 'UAH' ? elem.price + " ₴" : elem.price / 40 + " $"}
                                                            </span> 
                                                            <span className={styles.new_value_elem}>
                                                                {monayValue !== 'UAH' ? elem.salesPriceProduct + " ₴" : elem.salesPriceProduct / 40 + " $"}
                                                            </span>
                                                        </p>
                                                        : 
                                                        <p className={styles.value_element}>
                                                            {monayValue !== 'UAH' ? elem.price + " ₴" : elem.price / 40 + " $"}
                                                        </p> 
                                                    }
                                            </div>
                                            <button className={styles.add_element_to_card} onClick={()=>{
                                                    toast({
                                                        duration: 600,
                                                        position: 'top-right',
                                                        render: () => (
                                                            <div className={styles.toast_style}>
                                                                <p className={styles.toast_text}><span className={styles.toast_span}>{elem.name}</span> успішно додано до кошику</p>
                                                            </div>
                                                        ),
                                                        isClosable: true,
                                                    })
                                                    dispatch(addToCard(elem))
                                                }}> <span className="material-symbols-outlined"> shopping_cart </span> У КОШИК 
                                            </button>
                                        </SwiperSlide>
                            })}
                        </Swiper>
                        <Link to='/products' className={styles.more_products_btn}>Переглянути більше товару <span className="material-symbols-outlined">arrow_forward</span></Link>
                    </section>
                </section>
                <section className={styles.description_tabaco}>
                    <p className={styles.tabaco_tit_text}>Переглянути весь асортимент табаку</p>
                    <Link to='/products' className={styles.all_products_btn}>Перейти до товару</Link>
                </section>
            </section>
            <section className={styles.gilses_wrapper}>
                <section className={styles.gilses_text_block}>
                    <div className={styles.gilses_content}>
                        <p className={styles.gilses_tit_txt}>Якісні гільзи для цигарок</p>
                        <p className={styles.gelses_descr_txt}>Гільзи для цигарок підходять для роботи з будь-якими видами ручних і електричних машинок</p>
                        <Link to='/products' className={styles.all_products_btn}>Перейти до товару</Link>
                    </div>
                </section>
                <section className={styles.gilses_slide_block}>
                    <p className={styles.slider_tabaco_tit_text}>Асортимент гільз в наявності</p>
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className={styles.mySwiper}
                        >
                            {gilsesArray.map(elem => {
                                return <SwiperSlide key={elem.id} className={styles.wrapper_slide}>
                                            {elem.sales ? <p className={styles.sales_element}>{elem.salesPersent + '%'}</p> : false}
                                            <img className={styles.slide_element_img} src={elem.image} alt={elem.name}/>
                                            <p className={styles.slide_element_name}>{elem.name}</p>
                                            <div className={styles.slide_element_price}>
                                                    {elem.sales ? 
                                                        <p className={styles.value_element}>
                                                            <span className={styles.prev_value_element}>
                                                                {monayValue !== 'UAH' ? elem.price + " ₴" : elem.price / 40 + " $"}
                                                            </span> 
                                                            <span className={styles.new_value_elem}>
                                                                {monayValue !== 'UAH' ? elem.salesPriceProduct + " ₴" : (elem.salesPriceProduct / 40).toFixed(2) + " $"}
                                                            </span>
                                                        </p>
                                                        : 
                                                        <p className={styles.value_element}>
                                                            {monayValue !== 'UAH' ? elem.price + " ₴" : elem.price / 40 + " $"}
                                                        </p> 
                                                    }
                                            </div>
                                            <button className={styles.add_element_to_card} onClick={()=>{
                                                    toast({
                                                        duration: 600,
                                                        position: 'top-right',
                                                        render: () => (
                                                            <div className={styles.toast_style}>
                                                                <p className={styles.toast_text}><span className={styles.toast_span}>{elem.name}</span> успішно додано до кошику</p>
                                                            </div>
                                                        ),
                                                        isClosable: true,
                                                    })
                                                    dispatch(addToCard(elem))
                                                }}><span className="material-symbols-outlined"> shopping_cart </span> У КОШИК 
                                            </button>
                                        </SwiperSlide>
                            })}
                        </Swiper>
                </section>
            </section>
            <CallBack/>
        </section>
    );
};

export default Main;