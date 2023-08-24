import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';

function App() {
  return (
    <>
      <div>
        <a href="/">
          Home
        </a>
        <a href="Page1">
          Page1
        </a>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;