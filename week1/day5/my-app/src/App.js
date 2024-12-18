import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from './Hello';
import NavBar from './NavBar';
import StateDemo from './statedemo';
import EventDemo from './eventsdemo';
import ToDoList from './ToDoComponents/ToDoList';
import ButtonComponent from './refs/ButtonComponent.js';
import ControlledComponent from './controlled/ControlledComponent.js';
import MyContext from './context/MyContext.js';


function App() {
  const sharedData = "This is some shared data"
  return (
    <MyContext.Provider value={sharedData} >
    <Router>
      <div className="App">
        <NavBar />
        <ControlledComponent />
        <ButtonComponent />
      </div>
      <Routes>
        <Route path="/hello" element={<Hello name="Matt"/>} />
        <Route path="/sdc" element={<StateDemo />} />
        <Route path="/edc" element={<EventDemo />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </Router>
    </MyContext.Provider>

  );
}

export default App;
