import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useSelector,useDispatch} from 'react-redux';
import { addCountProduct,removeCountProduct,removeFromCard,clearShopingCard } from '../../reduxToolkit/reduxReducer'
import styles from './Shoping.module.scss'
import 'sweetalert2/src/sweetalert2.scss'
import CallBack from '../../components/callback/CallBack';

const Shoping = () => {
    const monayValue = useSelector(state => state.toolkit.monayValue)
    const cardArray = useSelector(state => state.toolkit.cardArray)
    const dispatch = useDispatch()
    const redirect = useNavigate()

    useEffect(()=>{
        if (cardArray.length === 0){
            redirect('/products')
        }
    })

    let arrAllPricesCards = []

    function clickConfirm (){
        Swal.fire({
            title: `<p class='${styles.modal_tit_text}'>Підтверджуєте покупку?</p>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#79CD6D',
            cancelButtonColor: '#d33',
            cancelButtonText: `<p class='${styles.modal_btn}'>Скасувати</p>`,
            confirmButtonText: `<p class='${styles.modal_btn}'>Так підтверджую</p>`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `<p class='${styles.modal_tit_text}'>Замовлення прийняте</p>`,
                    text: `Найближчим часом з Вами зв'яжеться менеджер для уточнення відправки`,
                    icon: 'success',
                    confirmButtonColor: '#79CD6D',
                    confirmButtonText: `<p class='${styles.modal_btn}'>OK</p>`,
                }).then((result) => {
                    if (result.isConfirmed){
                        dispatch(clearShopingCard())
                        redirect('/products')
                    }
                })
            }
        })
    }

    return (
        <section className={styles.wrapper_shoping}>
            {cardArray.length !== 0 ?
                <div>
                    <p className={styles.shoping_tit_text}>Підтвердження замовлення</p>
                    <div className={styles.wrapper_shoping_content}>
                        {cardArray.map( element => {
                            if (!element.sales){
                                arrAllPricesCards.push(element.priceCard)
                            } else {
                                arrAllPricesCards.push(element.priceCard - ((element.priceCard / 100) * element.salesPersent) )
                            }
                            return <div key={element.id} className={styles.shoping_card_content}>
                                        <div className={styles.shoping_card}>
                                            {element.sales ? <p className={styles.sales_element}>{element.salesPersent + '%'}</p> : false}
                                            <img src={element.image} alt={element.name} className={styles.card_product_img}/>
                                            <p className={styles.card_product_name}>{element.name}</p>
                                            <div className={styles.count_product}>
                                                <button className={styles.btn_shoping_value} onClick={()=>dispatch(removeCountProduct(element.id))} >-</button>
                                                <p className={styles.input_count_product}>{element.buyCount}</p>
                                                <button className={styles.btn_shoping_value} onClick={()=>dispatch(addCountProduct(element.id))} >+</button>
                                            </div>
                                            <div className={styles.price_product_content}>
                                                {element.sales ? 
                                                    <p className={styles.price_with_count}>
                                                        {monayValue !== 'UAH' ? 
                                                            (element.price - ((element.price / 100) * element.salesPersent)) * element.buyCount + " ₴" 
                                                            : 
                                                            (((element.price / 40) - ((element.price / 40) / 100 * element.salesPersent)).toFixed(2) * element.buyCount) + " $"}
                                                    </p>
                                                :
                                                    <p className={styles.price_with_count}>
                                                        {monayValue !== 'UAH' ? 
                                                            (element.price * element.buyCount) + " ₴" 
                                                            : 
                                                            ((element.price / 40) * element.buyCount) + " $"}
                                                    </p>
                                                }
                                                <button className={styles.remove_produc_btn} onClick={()=>dispatch(removeFromCard(element.id))}><span className="material-symbols-outlined">delete</span></button>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                    <div className={styles.result_wrapper}>
                        <p className={styles.result_price_cards}>Вього до сплати:</p>
                        <p className={styles.span_finally_price}>
                            {
                                monayValue !== 'UAH' ? 
                                (arrAllPricesCards.reduce((acc,current)=>acc + current)) + " ₴" :
                                ((arrAllPricesCards.reduce((acc,current)=>acc + current)) / 40).toFixed(2) + " $"
                            }
                        </p> 
                        <button className={styles.btn_confirm} onClick={clickConfirm}>Замовити</button>
                    </div>
                </div> :
                <p className={styles.shoping_tit_text} >Для оформлення замовлення необхідно спочатку обрати товар</p>
            }
            <CallBack/>
        </section>
    );
};

export default Shoping;