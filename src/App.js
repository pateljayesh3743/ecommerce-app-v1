import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Layout from './Component/Layout';
import ProductList from './Component/ProductList';
import AddProduct from './Component/AddProduct';
import ProductCartList from './Component/ProductCartList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route path='/' element={<ProductList></ProductList>}></Route>
        <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
        <Route path='add-to-cart' element={<ProductCartList></ProductCartList>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
