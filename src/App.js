import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayList from "./components/DisplayList";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
        <DisplayList />
      </header>
    </div>
  );
}

export default App;
