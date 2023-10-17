import React from 'react'

export default function Card(props) {
  /*
  var str = 'Talk Of love';
  if(str.length > 15) str = str.substring(0,15) + "...";
  */
  return (
    <>
      <div className="card">
        <a href="#">
          <img className="Image" src={props.img} alt="" />
        </a>
        <div className="Desc">
          <a href='#' className="Title">{props.title}</a>
          <a href='#' className="Author">{props.author}</a>
          < button className="Button">{props.category}</button>
        </div>
      </div>
    </>
  )
}
