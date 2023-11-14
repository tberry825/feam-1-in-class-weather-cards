import "./App.css";
import img1 from "./assets/weather-1.png";
import img2 from "./assets/weather-2.png";
import img3 from "./assets/weather-3.png";
import img4 from "./assets/weather-4.png";

function App() {

  return (
    <div className="card-wrapper">
      <h1>Trending Today</h1>
      <div className="card-container">
        <div className="news-trends-card">
          <img src={img1} />
          <p>USA National Forecast</p>
          <p>Looking Ahead to Your Halloween Forecast</p>
        </div>
        <div className="news-trends-card">
          <img src={img2} />
          <p>Wild Animals</p>
          <p>'Lucky to be alive': Whale Takes Out Windsurfer</p>
        </div>
        <div className="news-trends-card">
          <img src={img3} />
          <p>Sponsored Content by Ford</p>
          <p>5 Ways Driving At Night Could Be A Little Easier</p>
        </div>
        <div className="news-trends-card">
          <img src={img4} />
          <p>Weather News</p>
          <p>Even Our Meteorologists Were Stumped At First</p>
        </div>
      </div>
      <button>More News</button>
    </div>
  );
}

export default App;
