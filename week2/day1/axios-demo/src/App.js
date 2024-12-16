import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AxiosGetDemo from './components/AxiosGetDemo';
import AxiosPostDemo from './components/AxiosPostDemo';
import AxiosPatchDemo from './components/AxiosPatchDemo';
import AxiosDeleteDemo from './components/AxiosDeleteDemo';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
    </div>
    <Routes>
      <Route path="/getdemo" element={<AxiosGetDemo />} />
      <Route path="/postdemo" element={<AxiosPostDemo />} />
      <Route path="/patchdemo" element={<AxiosPatchDemo />} />
      <Route path="/deletedemo" element={<AxiosDeleteDemo />} />
    </Routes>
  </Router>
  );
}

export default App;
