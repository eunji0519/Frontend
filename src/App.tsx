import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';

function App() {
  window.onpageshow = function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      console.log('back button event');
    }
  }

  return (
    <>
      <div>
        <h2>메인 페이지</h2>
        <BrowserRouter>
          <ul>
            <li><Link to="/">홈가기</Link></li>
            <li><Link to="page1">page1</Link></li>
          </ul>
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