import React from 'react'

export default function Card() {
  return (
    <>
        <div className="card">
          <a href="#">
            <img className="Image" src="https://books.google.com/books/content?id=d2lHj3-Bw2MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="" />
          </a>
            <div className="Desc">
                <a href='#' className="Title">Talk of Love</a>
                <a href='#' className="Author">Ann Swidler</a>
                <button className="Button">Family and Relationships</button>
            </div>
        </div>
    </>
  )
}
