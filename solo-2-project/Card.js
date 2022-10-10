import React from "react"


export default function Card(props) {
    return(
        <div className="card">
           <img src={props.imageUrl}/>
        <div className="content">
        <div className="card--header">
            <i class="fa-solid fa-location-pin"></i>
            <p>{props.location}</p><a href={`#${props.googleMapsUrl}`} >Google maps</a>
        </div>
        <h2>{props.title}</h2>
        <i className="date">{props.startDate}-{props.endDate}</i>
        <p className="text">{props.description}</p>
        </div>
        </div>
    )
}