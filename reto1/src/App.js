import logo from './logo.svg';
import './App.css';
import ListContactos from './components/container/component-B';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContactos></ListContactos>
      </header>
    </div>
  );
}

export default App;
