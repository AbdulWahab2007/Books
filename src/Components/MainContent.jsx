import React, { useEffect, useState } from 'react'
import Card from './Card'
import CategoryTab from './CategoryTab'

export default function MainContent() {
  return (
    <>
      <div className='Content'>
        <div className='SearchContainer'>
          <input className='Search' type="text" placeholder='Search books by name,author or genre...' />
          <img className='PWAlogo' src="https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png" alt="" />
        </div>

        {/*<div className="SearchResults">
          <Card title="Talk Of Love" />
          <Card title="Talk Of Love" />
          <Card title="Talk Of Love" />
          <Card title="Talk Of Love" />
          <Card title="Talk Of Love" />
          <Card title="Talk Of Love" />
  </div>*/}
        <CategoryTab CategoryName="fiction"/>
        <CategoryTab CategoryName="poetry"/>
        <CategoryTab CategoryName="fantasy"/>
        <CategoryTab CategoryName="romance"/>

        <a href="https://github.com/AbdulWahab2007/Books" target='_blank' className='GitHubLink'><img src="https://liyasthomas.github.io/books/icons/github.svg" alt="" /></a>
      </div>
    </>
  )
}
