import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Product' element={
            <div className='container'>
              <div className='row'>
                <Product />
              </div>
            </div>
          } />

          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
