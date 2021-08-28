import './App.css';
import Header from './components/header/header';
import Searchbar from './components/searchbar/searchbar';
import Info from './components/info/info';
import Map from './components/map/map';

function App() {
  return (
    <div className="App">
        <Header title="IP Address Tracker">
          <Searchbar></Searchbar>
        </Header>
        <Info/>
        <Map/>
    </div>
  );
}

export default App;
