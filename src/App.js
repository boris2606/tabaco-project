import { Route, Routes } from 'react-router-dom';
import './App.css';
import DelivaryAndPay from './pages/delivary-pay/DelivaryAndPay';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Main from './pages/main/Main';
import ProductInfo from './pages/product-info/ProductInfo';
import Products from './pages/products/Products';
import Sales from './pages/sales/Sales';
import Shoping from './pages/shoping-basket/Shoping';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shoping' element={<Shoping/>} />
        <Route path='/products' element={<Products/>} />
        <Route path="/products/:product" element={<ProductInfo/>}></Route>
        <Route path='/sale-products' element={<Sales/>} />
        <Route path='/delivary&pay' element={<DelivaryAndPay/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
