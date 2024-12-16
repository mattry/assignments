import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from './Hello';
import NavBar from './NavBar';
import StateDemo from './statedemo';
import EventDemo from './eventsdemo';
import ToDoList from './ToDoComponents/ToDoList';


function App() {
  let message = "Hello from a variable"
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/hello" element={<Hello name="Matt"/>} />
        <Route path="/sdc" element={<StateDemo />} />
        <Route path="/edc" element={<EventDemo />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </Router>

  );
}

export default App;
