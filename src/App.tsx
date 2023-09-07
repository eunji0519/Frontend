//ANCHOR - CSS
import './App.css';

//ANCHOR - Page
import Contents from "./Layout/Contents";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar";

export default function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Contents />
    </>
  );
}