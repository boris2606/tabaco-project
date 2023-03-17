import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { timerCount } from '../../reduxToolkit/reduxReducer';
import styles from './SalesTimer.module.scss'

const SalesTimer = () => {
    const timerCountValue = useSelector(state => state.toolkit.timerCountValue)
    const dispatch = useDispatch()
    
    console.log(timerCountValue);

    let [hours,minutes,seconds] = timerCountValue

    const [over, setOver] = useState(false)
    const [[h, m, s], setTime] = useState([hours,minutes,seconds])
    const tick = () => {
        if (over) reset()
    
        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59])
        } else if (s === 0) {
            setTime([h, m - 1, 59])
        } else {
            setTime([h, m, s - 1])
        }
        
    };

    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
        setOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => {
            tick()
            dispatch(timerCount([h, m, s]))
        }, 1000)
        return () => clearInterval(timerID)
    });

    return (
        <div className={styles.timer_wrapper}>
            <p>{h.toString().padStart(2, '0')}</p>
            <hr noshade='true' className={styles.timer_hr}/>
            <p>{m.toString().padStart(2, '0')}</p>
            <hr noshade='true' className={styles.timer_hr}/>
            <p>{s.toString().padStart(2, '0')}</p>
        </div>
    );
};

export default SalesTimer