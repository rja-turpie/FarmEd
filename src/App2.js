import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Search from './search';
import { SafeAreaProvider } from 'react-native-safe-area-context';



function App() {
  return (
    <div className="App">
      <Button color = "primary">UR MUM</Button>
      <Search />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;