import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import './style/App.css'
import ShopContextProvider from './context/ShopContextProvider';

function App() {
  return (
    <div className="app">
        <ShopContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />}/>
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
