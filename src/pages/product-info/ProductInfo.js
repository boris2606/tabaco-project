import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { addToCard } from '../../reduxToolkit/reduxReducer';
import { Link } from 'react-router-dom';
import { useToast} from '@chakra-ui/react';
import styles from './ProductInfo.module.scss'
import ProductInfoSlider from '../../components/product-gallery-slider/ProductInfoSlider';
import ProductCategorySlider from '../../components/product-category-slider/ProductCategorySlider';
import CallBack from '../../components/callback/CallBack';

const ProductInfo = () => {
    const dataProductsArr = useSelector(state => state.toolkit.dataProducts)
    const monayValue = useSelector(state => state.toolkit.monayValue)

    let {product} = useParams()

    const toast = useToast()

    const dispatch = useDispatch()

    let takeProduct = dataProductsArr.find(element => element.name.toLowerCase() === product)
    let categoryProductArr = dataProductsArr.filter(element => element.category === takeProduct.category)

    return (
        <div className={styles.wrapper_product_info}>
            {dataProductsArr.map((productElement,index) => {
                if (productElement.name.toLowerCase() === product){
                    return <section key={index} className={styles.wrapper_product_info_content}>
                                <div className={productElement.category === 'tabaco' ?
                                            styles.head_tabaco_content : productElement.category === 'gilses' ? 
                                            styles.head_gilses_content : styles.head_machines_content}>
                                    <p>{productElement.name}</p>
                                </div>
                                <div className={styles.product_info_content}>
                                    <div className={styles.wrapper_product_about}>
                                        <div className={styles.product_about_slider}>
                                            <ProductInfoSlider currentProduct={productElement}/>
                                        </div>
                                        <div className={styles.product_about_info}>
                                            <p className={styles.product_about_name}>{productElement.name}</p>
                                            {productElement.sales ? 
                                                <p className={styles.value_element}>
                                                    <span className={styles.prev_value_element}>
                                                        {monayValue !== 'UAH' ? productElement.price + " ₴" : productElement.price / 40 + " $"}
                                                    </span> 
                                                    <span className={styles.new_value_elem}>
                                                        {monayValue !== 'UAH' ? productElement.salesPriceProduct + " ₴" : productElement.salesPriceProduct / 40 + " $"}
                                                    </span>
                                                </p>
                                                : 
                                                <p className={styles.value_element}>
                                                    {monayValue !== 'UAH' ? productElement.price + " ₴" :  productElement.price / 40 + " $"}
                                                </p> 
                                            }
                                            <button className={styles.add_element_to_card} onClick={()=>{
                                                    toast({
                                                        duration: 600,
                                                        position: 'top-right',
                                                        render: () => (
                                                            <div className={styles.toast_style}>
                                                                <p className={styles.toast_text}><span className={styles.toast_span}>{productElement.name}</span> успішно додано до кошику</p>
                                                            </div>
                                                        ),
                                                        isClosable: true,
                                                    })
                                                    dispatch(addToCard(productElement))
                                                }}><span className="material-symbols-outlined"> shopping_cart </span> У КОШИК 
                                            </button>
                                            <hr noshade='true' className={styles.product_info_hr}/>
                                            <p className={styles.product_info_descr}>{productElement.description}</p>
                                            <hr noshade='true' className={styles.product_info_hr}/>
                                            <p className={styles.product_info_сategory}>Категорія: {productElement.category.toUpperCase()}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.category_slider_tit}>Асортимент подібного товару</p>
                                <div className={styles.slider_product_category}>
                                    <ProductCategorySlider categoryArr={categoryProductArr}/>
                                </div>
                            </section>
                    }

            })}
            <CallBack/>
        </div>
    );
};

export default ProductInfo;