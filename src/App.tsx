import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';
import { useEffect } from 'react';

function App() {
  window.onpageshow = function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
      // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
      // 이벤트 추가하는 곳
      console.log('back button event');
    }
  }
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