// Other imports
import logo from './logo.svg';
import './App.css';

// Dependencies imports
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Assets and components imports
import WebAppContainer from './assets/components/WebAppContainer';
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebAppContainer />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
