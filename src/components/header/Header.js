import React, { useState } from 'react';
import styles from './Header.module.scss'
import {changeMoneyValue} from '../../reduxToolkit/reduxReducer'
import { useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Burger from '../burger-menu/Burger';


const Header = () => {

    const headerNav = useSelector(state => state.toolkit.headerNavigation)
    const cardArray = useSelector(state => state.toolkit.cardArray)
    const dispatch = useDispatch()

    const [monayValue, setMonayValue] = useState('UAH')

    function takeMoneyValue (e){
        setMonayValue(e.target.value)
        dispatch(changeMoneyValue(monayValue))
    }

    return (
        <header className={styles.wrapper_header}>
            <section className={styles.header_content}>
                <section className={styles.navigatin_wraper}>
                    <Link to='/' className={styles.logo}>LOGO</Link>
                    <nav className={styles.header_nav}>
                        <ul className={styles.header_nav_list}>
                            {headerNav.map((elem, index) => {
                                return <li key={index}>
                                            <Link to={elem.path}>{elem.name}</Link>
                                        </li>
                            })}
                        </ul>
                    </nav>
                </section>
                <section className={styles.controll_panel}>
                    <Link to='/shoping' data-count={cardArray.length > 0 ? cardArray.length : 0} className={cardArray.length > 0 ? styles.buy_element : styles.disable}><i className="material-symbols-outlined" >shopping_cart</i></Link>
                    <hr noshade='true' className={styles.controll_hr}/>
                    <select className={styles.controll_select} onChange={takeMoneyValue}>
                        <option>UAH</option>
                        <option>USD</option>
                    </select>
                </section>
            </section>
            <Burger/>
        </header>
    );
};

export default Header;