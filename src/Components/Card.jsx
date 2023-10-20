import React from 'react'
import {
  BrowserRouter,
  Link, Router
} from "react-router-dom";

export default function Card(props) {
  /*
  var str = 'Talk Of love';
  if(str.length > 15) str = str.substring(0,15) + "...";
  */
  return (
    <>
    <BrowserRouter>
      <div className="card">
        <Link to={props.source} target='_blank'>
          <img className="Image" src={props.img} alt="no image" />
        </Link>
        <div className="Desc">
          <Link to={props.source} className="Title" target='_blank'>{props.title}</Link>
          <Link to='/' className="Author">{props.author}</Link>
          < button className="Button">{props.category}</button>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}
