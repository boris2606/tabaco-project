import React from 'react';
import styles from './Footer.module.scss'
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerNav = useSelector(state => state.toolkit.headerNavigation)

    return (
        <footer className={styles.wrapper_footer}>
            <div className={styles.footer_content}>
                <Link to="/" className={styles.footer_logo}>LOGO</Link>
                <nav className={styles.footer_nav}>
                    <ul className={styles.footer_nav_list}>
                            {footerNav.map((elem, index) => {
                                return <li key={index}>
                                            <Link to={elem.path}>{elem.name}</Link>
                                        </li>
                            })}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;