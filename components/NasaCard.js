import React from "react";

const NasaCard = props => {
    return (
        <div className = 'star-list' key = {props.id}>
           <h2>{props.title}</h2>
           {/* <img src={props.hdurl} alt={props.title}/> */}
           <p>{props.explanation}</p> 
           <p>{props.copyright}</p>
           <p>{props.date}</p>
        </div>
    );
};

export default NasaCard;