import React from "react"
import "../style.css"
import img1 from "../Images/mark.png"

export default function Card(props) {
    return (
        <div className="flex-container">
         <div><img className="Box--img" src={props.img} /></div>
         <div className="flex-container-2">
           <p className="location">
               <span>
                 <img className="mark" src={img1} />
               </span>
              <strong>{props.place}</strong> View on Map
             </p>
            <h2 className="heading">{props.name}</h2>
            <h6 className="time">{props.date}</h6>
            <p className="text">
              {props.text}
            </p>
         </div>
        </div>
    )
}
