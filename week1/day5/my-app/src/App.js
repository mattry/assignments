import './App.css';
import Hello from './Hello';
import EventDemo from './eventsdemo';
import PostDemo from './postDemo';
import StateDemo from './statedemo';

function App() {
  let message = "Hello from a variable"
  return (
    <div className="App">
      <h2>Hello React</h2>
      <p>This is a paragraph written with JSX. Inside the <code>App.js</code> file</p>
      <h3>{message}</h3>
      <Hello name="Matt" age="29"/>
      <EventDemo />
      <StateDemo />
      <hr/>
      <PostDemo />
    </div>
  );
}

export default App;
