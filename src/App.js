import "./App.css";
import Card from "./Components/Card";
import img1 from "./assets/weather-1.png";
import img2 from "./assets/weather-2.png";
import img3 from "./assets/weather-3.png";
import img4 from "./assets/weather-4.png";

function App() {

let card1 = {
  img: img1, 
  category: "USA National Forecast",
  subTitle: "Looking Ahead to Your Halloween Forecast" 
}

let card2 = {
  img: img2, 
  category: "Wild Animals",
  subTitle: "'Lucky to Be Alive': Whale takes out Windsurfer" 
}

let card3 = {
  img: img3, 
  category: "Sponsored Content by Ford",
  subTitle: "5 Ways Driving At Night Could Be A Little Easier" 
}

let card4 = {
  img: img4, 
  category: "Weather News",
  subTitle: "Even our Meterologist Were Stumped At First" 
}



  return (
   <div classname= "App">
    <h1>Trending Today</h1>
    <div className= "cardContainer">
      <Card img={card1.img} category={card1.category} subTitle={card1.subTitle} />
      <Card img={card2.img} category={card2.category} subTitle={card2.subTitle} />
      <Card img={card3.img} category={card3.category} subTitle={card3.subTitle} />
      <Card img={card4.img} category={card4.category} subTitle={card4.subTitle} />
    </div>
    <div className="buttonContainer">
      <button className= "lilButton">More News</button>
    </div>
   </div>
  );
}

export default App;
