import "../App.css";
import img1 from "../assets/weather-1.png";

function TrendingToday(props) {
  console.log(props);
  return (
    <>
      <div className="news-trends-card">
        <img src={img1} />
        <p>USA National Forecast</p>
        <p>Looking ahead to your Halloween forecast</p>
      </div>
    </>
  );
}

export default TrendingToday;
