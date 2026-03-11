import React from "react";




const Card=({urlima,title,url})=>{
//   const generateRandomNumber=()=> Math.floor(Math.random() * 100);

//  const randomNumber = generateRandomNumber();


//  const cardStyles = {width: '20rem'}

return(<div className="card mb-3 h-100" >
  <div className="ratio ratio-4x3">
    
  <img src={urlima} className="card-img-top" alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    </div>
    <div className="card-footer text-center">
      <a href={url} className="btn btn-primary">{title} </a>
  </div>
</div>
           








);



};


export default Card;