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
            <img className="Image" src="https://books.google.com/books/content?id=d2lHj3-Bw2MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="" />
          </a>
            <div className="Desc">
              <a href='#' className="Title">{props.title}</a>
              <a href='#' className="Author">Ann Swidler</a>
            < button className="Button">Family and Relationships</button>
            </div>
        </div>
    </>
  )
}
