import "./styles.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Search />
            <Overview />
            <Temperature />
            <div class="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
