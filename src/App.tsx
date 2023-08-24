import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';
import { useEffect } from 'react';

function App() {
  window.onpageshow = function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
      // Back Forward Cache�� �������� �ε��� ��� Ȥ�� ������ �ڷΰ��� ���� ���
      // �̺�Ʈ �߰��ϴ� ��
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