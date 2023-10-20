import React, { useEffect, useState } from 'react'
import Card from './Card'
import CategoryTab from './CategoryTab'
import Search from './Search'

export default function MainContent() {
  return (
    <>
      <div className='Content'>
        <Search/>
        <CategoryTab CategoryName="fiction"/>
        <CategoryTab CategoryName="poetry"/>
        <CategoryTab CategoryName="fantasy"/>
        <CategoryTab CategoryName="romance"/>

        <a href="https://github.com/AbdulWahab2007/Books" target='_blank' className='GitHubLink'><img src="https://liyasthomas.github.io/books/icons/github.svg" alt="" /></a>
      </div>
    </>
  )
}
