/*eslint-disable*/
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import CalculatorUI from './components/CalculatorUI';
import Quotes from './components/Quotes';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <header className='header'>
          <h1>Math Magcian</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/quotes'>Quotes</Link>
            <Link to='/calculator'>Calculator</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quotes' element={<Quotes />} />
          <Route path='/calculator' element={<CalculatorUI />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
