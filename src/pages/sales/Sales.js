import React, {useState} from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useSelector,useDispatch} from 'react-redux';
import { useToast} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { addToCard } from '../../reduxToolkit/reduxReducer';
import CallBack from '../../components/callback/CallBack';
import Pagination from '../../components/pagination/Pagination';
import SalesTimer from '../../components/sale-timer/SalesTimer';
import styles from './Sales.module.scss'

const Sales = () => {

    const dataProductsArr = useSelector(state => state.toolkit.dataProducts)
    const monayValue = useSelector(state => state.toolkit.monayValue)

    const dispatch = useDispatch()

    const tabacoArray = dataProductsArr.filter( product => product.category === 'tabaco' && product.sales)
    const gilsesArray = dataProductsArr.filter( product => product.category === 'gilses' && product.sales)
    const machinesArray = dataProductsArr.filter( product => product.category === 'machines' && product.sales)

    const toast = useToast()

    const [currentPageTabaco,setCurrentPageTabaco] = useState(1)
    const [currentPageGilses,setCurrentPageGilses] = useState(1)
    const [currentPageMachines,setCurrentPageMachines] = useState(1)
    const [tabacoPerPage] = useState(4)
    const [gilsesPerPage] = useState(4)
    const [machinesPerPage] = useState(4)

    let currentElementsTabaco = takeCurrentElementFromArray(currentPageTabaco,tabacoPerPage,tabacoArray)
    let currentElementsGilses = takeCurrentElementFromArray(currentPageGilses,gilsesPerPage,gilsesArray)
    let currentElementsMachines = takeCurrentElementFromArray(currentPageMachines,machinesPerPage,machinesArray)

    function takeCurrentElementFromArray(curentPage,elementPerPage,elementsArray){
        const lastElementIndex = curentPage * elementPerPage
        const firstElementIndex = lastElementIndex - tabacoPerPage
        return elementsArray.slice(firstElementIndex,lastElementIndex)
    }

    const paginateTabaco = pageNumber => setCurrentPageTabaco(pageNumber)
    const paginateGilses = pageNumber => setCurrentPageGilses(pageNumber)
    const paginateMachines = pageNumber => setCurrentPageMachines(pageNumber)
    
    return (
        <section className={styles.wrapper_sales}>
            <div className={styles.sales_head}>
                <p className={styles.sales_head_tit}>
                    Знижки на асортимент
                </p>
            </div>
            <div className={styles.sales_content}>
                <SalesTimer/>
                <p className={styles.sales_content_tit}>Встигни замовити товар зі знижкою</p>
            </div>
            <div className={styles.sales_tabs_content}>
                <Tabs variant='soft-rounded' colorScheme='blackAlpha' className={styles.wrapper_tabs}>
                    <TabList className={styles.wrapper_tabs_list}>
                        <Tab _selected={{bg:'#010101d9', color:'#fff'}}>Табак</Tab>
                        <Tab _selected={{bg:'#010101d9', color:'#fff'}}>Гільзи для цигарок</Tab>
                        <Tab _selected={{bg:'#010101d9', color:'#fff'}}>Пристрої</Tab>
                    </TabList>

                    <TabPanels className={styles.wrapper_tabs_content}>
                        <TabPanel>
                            <div className={styles.wrapper_tabs_elements}>
                                {currentElementsTabaco.map(element => {
                                    return <div key={element.id} className={styles.tab_element}>
                                                {element.sales ? <p className={styles.sales_element}>{element.salesPersent + '%'}</p> : false}
                                                <img className={styles.tab_element_img} src={element.image} alt={element.name}/>
                                                <p className={styles.tab_element_name}>{element.name}</p>
                                                <p className={styles.element_producer}>Викробник: {element.vendor}</p>
                                                <div className={styles.tab_element_price}>
                                                    {element.sales ? 
                                                        <p className={styles.value_element}>
                                                            <span className={styles.prev_value_element}>
                                                                {monayValue !== 'UAH' ? element.price + " ₴" : element.price / 40 + " $"}
                                                            </span> 
                                                            <span className={styles.new_value_elem}>
                                                                {monayValue !== 'UAH' ? element.salesPriceProduct + " ₴" : element.salesPriceProduct / 40 + " $"}
                                                            </span>
                                                        </p>
                                                        : 
                                                        <p className={styles.value_element}>
                                                            {monayValue !== 'UAH' ? element.price + " ₴" :  element.price / 40 + " $"}
                                                        </p> 
                                                    }
                                                </div>
                                                <div className={styles.wrapper_tabs_buttons}>
                                                    <Link className={styles.tab_lement_more_btn} to={'/products/'+ (element.name).toLowerCase()}>Детальніше</Link>
                                                    <button className={styles.tab_add_element_to_card} onClick={()=>{
                                                            toast({
                                                                duration: 600,
                                                                position: 'top-right',
                                                                render: () => (
                                                                    <div className={styles.toast_style}>
                                                                        <p className={styles.toast_text}>
                                                                            <span className={styles.toast_span}>{element.name}</span> успішно додано до кошику
                                                                        </p>
                                                                    </div>
                                                                ),
                                                                isClosable: true,
                                                            })
                                                            dispatch(addToCard(element))
                                                        }}>
                                                        <span className="material-symbols-outlined">
                                                            add_shopping_cart
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                })}
                            </div>
                            <Pagination arrayElements={tabacoArray} elementPerPage={tabacoPerPage} paginate={paginateTabaco}/>
                        </TabPanel>
                        <TabPanel>
                            <div className={styles.wrapper_tabs_elements}>
                                {currentElementsGilses.map(element => {
                                    return <div key={element.id} className={styles.tab_element}>
                                                {element.sales ? <p className={styles.sales_element}>{element.salesPersent + '%'}</p> : false}
                                                <img className={styles.tab_element_img} src={element.image} alt={element.name}/>
                                                <p className={styles.tab_element_name}>{element.name}</p>
                                                <p className={styles.element_producer}>Викробник: {element.vendor}</p>
                                                <div className={styles.tab_element_price}>
                                                    {element.sales ? 
                                                        <p className={styles.value_element}>
                                                            <span className={styles.prev_value_element}>
                                                                {monayValue !== 'UAH' ? element.price + " ₴" : element.price / 40 + " $"}
                                                            </span> 
                                                            <span className={styles.new_value_elem}>
                                                                {monayValue !== 'UAH' ? element.salesPriceProduct + " ₴" : element.salesPriceProduct / 40 + " $"}
                                                            </span>
                                                        </p>
                                                        : 
                                                        <p className={styles.value_element}>
                                                            {monayValue !== 'UAH' ? element.price + " ₴" : element.price / 40 + " $"}
                                                        </p> 
                                                    }
                                                </div>
                                                <div className={styles.wrapper_tabs_buttons}>
                                                    <Link className={styles.tab_lement_more_btn} to={'/products/'+ (element.name).toLowerCase()}>Детальніше</Link>
                                                    <button className={styles.tab_add_element_to_card} onClick={()=>{
                                                            toast({
                                                                duration: 600,
                                                                position: 'top-right',
                                                                render: () => (
                                                                    <div className={styles.toast_style}>
                                                                        <p className={styles.toast_text}>
                                                                            <span className={styles.toast_span}>{element.name}</span> успішно додано до кошику
                                                                        </p>
                                                                    </div>
                                                                ),
                                                                isClosable: true,
                                                            })
                                                            dispatch(addToCard(element))
                                                        }}>
                                                        <span className="material-symbols-outlined">
                                                            add_shopping_cart
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                })}
                            </div>
                            <Pagination arrayElements={gilsesArray} elementPerPage={gilsesPerPage} paginate={paginateGilses}/>
                        </TabPanel>
                        <TabPanel>
                            <div className={styles.wrapper_tabs_elements}>
                                {currentElementsMachines.map(element => {
                                    return <div key={element.id} className={styles.tab_element}>
                                                {element.sales ? <p className={styles.sales_element}>{element.salesPersent + '%'}</p> : false}
                                                <img className={styles.tab_element_img} src={element.image} alt={element.name}/>
                                                <p className={styles.tab_element_name}>{element.name}</p>
                                                <p className={styles.element_producer}>Викробник: {element.vendor}</p>
                                                <div className={styles.tab_element_price}>
                                                    {element.sales ? 
                                                        <p className={styles.value_element}>
                                                            <span className={styles.prev_value_element}>
                                                                {monayValue !== 'UAH' ? element.price + " ₴" : element.price / 40 + " $"}
                                                            </span> 
                                                            <span className={styles.new_value_elem}>
                                                                {monayValue !== 'UAH' ? element.salesPriceProduct + " ₴" : element.salesPriceProduct / 40 + " $"}
                                                            </span>
                                                        </p>
                                                        : 
                                                        <p className={styles.value_element}>
                                                            {monayValue !== 'UAH' ? element.price + " ₴" : element.price / 40 + " $"}
                                                        </p> 
                                                    }
                                                </div>
                                                <div className={styles.wrapper_tabs_buttons}>
                                                    <Link className={styles.tab_lement_more_btn} to={'/products/'+ (element.name).toLowerCase()}>Детальніше</Link>
                                                    <button className={styles.tab_add_element_to_card} onClick={()=>{
                                                            toast({
                                                                duration: 600,
                                                                position: 'top-right',
                                                                render: () => (
                                                                    <div className={styles.toast_style}>
                                                                        <p className={styles.toast_text}>
                                                                            <span className={styles.toast_span}>{element.name}</span> успішно додано до кошику
                                                                        </p>
                                                                    </div>
                                                                ),
                                                                isClosable: true,
                                                            })
                                                            dispatch(addToCard(element))
                                                        }}>
                                                        <span className="material-symbols-outlined">
                                                            add_shopping_cart
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                })}
                            </div>
                            <Pagination arrayElements={machinesArray} elementPerPage={machinesPerPage} paginate={paginateMachines}/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <CallBack/>
        </section>
    );
};

export default Sales;