import React from 'react'
import {
  BrowserRouter,
  Link, Router
} from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <BrowserRouter>
        <div className='SidebarContainer'>
          <div className='Sidebar'>
            <Link className='Logo' to="/">Books</Link>
            <p className='Heading'>DISCOVER</p>
            <Link className='Categories' to="/search"><span style={{ marginRight: "15px" }}>🔍</span>Search</Link>
            <p className='Heading'>LIBRARY</p>
            <Link className='Categories' to="/fiction"><span style={{ marginRight: "15px" }}>👽</span>Fiction</Link>
            <Link className='Categories' to="/"><span style={{ marginRight: "15px" }}>📝</span>Poetry</Link>
            <Link className='Categories' to="/"><span style={{ marginRight: "15px" }}>🔮</span>Fantasy</Link>
            <Link className='Categories' to="/"><span style={{ marginRight: "15px" }}>💞</span>Romance</Link>

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
