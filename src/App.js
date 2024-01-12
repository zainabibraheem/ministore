import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './container/header';
import ProductListing from './container/productListing';
import ProductDetails from './container/productDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
