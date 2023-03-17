import React from 'react';
import styles from './CallBack.module.scss'

const CallBack = () => {
    return (
        <div className={styles.wrapper_callback}>
            <a href='tel: +3809611111' className={styles.call_phone}><span className="material-symbols-outlined">phone_in_talk</span></a>
        </div>
    );
};

export default CallBack;