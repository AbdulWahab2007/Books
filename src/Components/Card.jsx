import React from 'react'
import { useState, useEffect } from "react"
import {
  BrowserRouter,
  Link, Router
} from "react-router-dom";

export default function Card(props) {
  let colors = ["#36f1ac40", "#acbe7340", "#82ad7940", "#8d32cd40", "#e3b74040", "#46a9c940", "#1e56a240"]
  let Bcolors = ["#1e56a240", "#36f1ac40", "#e3b74040", "#acbe7340", "#82ad7940", "#8d32cd40", "#46a9c940"]
  const [color, setColor] = useState("#46a9c940")
  const [buttoncolor, setBcolor] = useState("#46a9c940")
  const [random, setRandom] = useState(Math.floor(Math.random() * (7 - 0) + 0));
  const colorGenerator = () => {
    if (random > 6) {
      setRandom(6);
    }
    setColor(colors[random])
    setBcolor(Bcolors[random])
  }
  useEffect(() => {
    colorGenerator();

  }, [])
  /*
  var str = 'Talk Of love';
  if(str.length > 15) str = str.substring(0,15) + "...";
  */
  return (
    <>
      <BrowserRouter>
        <div className="card" style={{ backgroundImage: "linear-gradient(to bottom," + color + ",white)" }}>
          <Link to={props.source} target='_blank'>
            <img className="Image" src={props.img} alt="no image" />
          </Link>
          <div className="Desc">
            <Link to={props.source} className="Title" target='_blank'>{props.title}</Link>
            <Link to='/' className="Author">{props.author}</Link>
            < button className="Button" style={{ backgroundColor: buttoncolor }}>{props.category}</button>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
