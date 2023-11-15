import "../App.css";


function Card(props) {
console.log(props);
  return (
   <div >
    
    <div className= "videoContainer">
      <div className="imgBoxes">
        <img src={props.img}></img>
        <p>{props.category}</p>
        <p>{props.subTitle}</p>
      </div> 
    </div>
   </div>
  );
}

export default Card;
