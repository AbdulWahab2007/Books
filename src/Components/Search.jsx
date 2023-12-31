import { useState } from 'react'
import React from 'react'
import Card from './Card'

export default function Search() {
    const [searchItems, setSearchItems] = useState([]);
    const HandleChange = async event => {
        if(event.target.value == ''){
            setSearchItems([]);
        }else{
        let url = `https://www.googleapis.com/books/v1/volumes?q=${event.target.value.toLowerCase()}&maxResults=6`
        let Data = await fetch(url)
        let ParsedData = await Data.json()
        setSearchItems(ParsedData.items);
        if(ParsedData.totalItems == 0){
            setSearchItems([]);
            console.log('No results');
        }
        }
        
    }
    return (
        <>
            <div className='SearchContainer'>
                <input onChange={HandleChange} className='Search' type="text" placeholder='Search books by name,author or genre...' />
                <img className='PWAlogo' src="https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png" alt="" />
            </div>
            <div className="SearchResults">
                {
                
                searchItems.map((element, index) => {
                        return <div key={index}>
                        <Card title={element.volumeInfo.title} author={element.volumeInfo.authors} category={element.volumeInfo.categories} img={element.volumeInfo.imageLinks.smallThumbnail} source={element.volumeInfo.infoLink} />
                    
                    </div>
                    

                })}
                
            </div>
        </>
    )
}
