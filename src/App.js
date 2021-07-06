import './App.css';
import Header from './components/header/header';
import Searchbar from './components/searchbar/searchbar';
import Info from './components/info/info';

function App() {
  return (
    <div className="App">
        <Header title="IP Address Tracker">
          <Searchbar></Searchbar>
        </Header>
        <Info></Info>
    </div>
  );
}

export default App;
