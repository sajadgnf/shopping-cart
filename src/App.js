import { Routes, Route, Navigate } from 'react-router-dom'

//component
import Navbar from './components/Navbar'
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Cart from './components/ShopCart';

//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/*' element={<Navigate to='/products' />} />
          <Route path='/shopCart' element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
