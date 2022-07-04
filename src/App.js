import logo from './logo.svg';
import './App.css';
import Greeting from './component/pure/greeting';
import Greetingf from './component/pure/greetingf';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Greeting name="Pepe"/> */}
          <Greetingf name="pepe"/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
