/*eslint-disable*/
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import CalculatorUI from './components/CalculatorUI';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<CalculatorUI />} />
          <Route path='/quotes' element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
