import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';

function App() {
  window.onpageshow = function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
      // 이벤트 추가하는 곳
      console.log('back button event');
    }
  }
  return (
    <>
      {/* <div className="header">
        dfg
      </div>
      <div id="sidebarWrapper">
      </div>
      <div id="contents">
      </div> */}
      <div id="headWapper">
        headerWapper
      </div>
      <div id="sideWapper">sideWapper</div>
      <div id="contentsWrapper">
        <div className="contentsTitle">contentTitle</div>
        <div className="contentsBody">contentsBody</div>
      </div>
    </>
  );
}

export default App;