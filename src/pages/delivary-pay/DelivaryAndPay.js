import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CallBack from '../../components/callback/CallBack';
import styles from './DelivaryAndPay.module.scss'

const DelivaryAndPay = () => {
    return (
        <section className={styles.wrapper_delivary_pay}>
            <div className={styles.head_delivary_pay}>
                <p className={styles.head_delivary_pat_tit}>Доставка та оплата</p>
            </div>
            <div className={styles.delivary_pay_content}>
                <Tabs variant='soft-rounded' className={styles.delivary_tab_wrapper}>
                    <TabList className={styles.delivary_pay_tab_list}>
                        <Tab _selected={{bg:'#010101d9', color:'#fff'}}>Доставка</Tab>
                        <Tab _selected={{bg:'#010101d9', color:'#fff'}}>Оплата</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel className={styles.delivary_pay_tab}>
                            <p className={styles.delivary_pay_ul_tit}>Способи доставки:</p>
                            <ul className={styles.delivary_pay_ul}>
                                <li>Нова Пошта</li>
                                <li>Укрпошта</li>
                                <li>Кур'єрська доставка Нової Пошти</li>
                            </ul>
                            <p>Термін доставки: від 1 до 5ти робочих днів. Винятки та затримки можливі в календарні та державні свята.Відправки здійснюються після 18.00. Після відправки замовлення ми повідомимо Вам номер накладної (ТТН) листом або смс на Ваш номер телефону.</p>
                        </TabPanel>
                        <TabPanel className={styles.delivary_pay_tab}>
                            <p className={styles.delivary_pay_ul_tit}>Способи оплати:</p>
                            <ul className={styles.delivary_pay_ul}>
                                <li>Карткою Visa і MasterCard</li>
                                <li>Apple Pay</li>
                                <li>Оплата на розрахунковий рахунок за реквізитами</li>
                                <li>Накладений платіж (Нова Пошта)</li>
                            </ul>
                            <p>При оплаті за реквізитами Ви отримаєте реквізити на ваш email. В призначенні платежу обов’язково вкажіть номер замовлення. Відправлення товару буде здійснено після підтвердження оплати в особистому кабінеті або через менеджера.</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs> 
            </div>
            <CallBack/>
        </section>
    );
};

export default DelivaryAndPay;