import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='./components/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
