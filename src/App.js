// Other imports
import logo from './logo.svg';
import './App.css';

// Dependencies imports
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Assets and components imports
import WebAppContainer from './assets/components/WebAppContainer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebAppContainer />}>
          <Route index element={<Home />}></Route>
          <Route path='/productos' element={<Products/>}></Route>
          <Route path='/contacto' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<AdminLogin/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
