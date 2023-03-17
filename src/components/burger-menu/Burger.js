import React , {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Burger.module.scss'

const Burger = () => {

    const headerNav = useSelector(state => state.toolkit.headerNavigation)

    const [burger_class,setBurgerClass] = useState('unclicked')
    const [menu_class,setMenuClass] = useState('hidden')
    const [overlay,setOverlay] = useState('hidden_overlay')
    const [isMenuChecked,setIsMenuChecked] = useState(false)

    const unpdateMenu = () => {
        if (!isMenuChecked){
            setBurgerClass('clicked')
            setMenuClass('visible')
            setOverlay('visible_overlay')
        } else {
            setBurgerClass('unclicked')
            setMenuClass('hidden') 
            setOverlay('hidden_overlay')
        }
        setIsMenuChecked(!isMenuChecked)
    }
    return (
        <div>
            <nav className={styles.nav_burger}>
                <div className={styles.burger_menu} onClick={unpdateMenu}>
                    <div className={styles.burger_bar + ' ' + styles[burger_class]}></div>
                    <div className={styles.burger_bar + ' ' + styles[burger_class]}></div>
                    <div className={styles.burger_bar + ' ' + styles[burger_class]}></div>
                </div>
            </nav>

            <div className={styles.overlay_burger + ' ' + styles[overlay]} onClick={unpdateMenu}>
                <div className={styles.menu_content + ' ' + styles[menu_class]}>
                    <nav className={styles.burger_nav_list_container}>
                        <ul className={styles.burger_nav_list }>
                            {headerNav.map((elem, index) => {
                                return <li key={index}>
                                            <Link to={elem.path}>{elem.name}</Link>
                                        </li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Burger;