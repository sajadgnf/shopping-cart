import { Routes, Route, Navigate } from 'react-router-dom'

//component
import Layout from './components/layout'
import Store from "./components/store/Store";
import ProductDetails from "./components/productDetails/ProductDetails";
import Cart from './components/shopCart/ShopCart';

//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path='/products' element={<Store />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/*' element={<Navigate to='/products' />} />
            <Route path='/shopCart' element={<Cart />} />
          </Routes>
        </Layout>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
