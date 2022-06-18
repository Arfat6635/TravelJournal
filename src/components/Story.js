import React from 'react'
import ReactLogo from "../images/logo512.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Story = (props) => {
  console.log(props)
  return (
    <div className="card">

      <img src={props.item.imgLink} alt="" />

      <div className="card-data">

        <div className="card-location">

      <FontAwesomeIcon style={{color:"#F55A5A"}} icon={faLocationDot}/>
       <h3>{props.item.place}</h3> 
       <p>View on Google Maps</p>

        </div>

        <h2>{props.item.name}</h2>

        <p id='card-date'>{props.item.date}</p>

          <p>{props.item.description}</p>

      </div>

    </div>
  )
}

export default Story