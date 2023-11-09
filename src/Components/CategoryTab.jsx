import { useState, useEffect } from "react"
import React from 'react'
import Card from './Card'

export default function CategoryTab(props) {

    const [items, setItems] = useState([])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        LoadingCards();

    }, [])

    let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${props.CategoryName}&startIndex=${index}&maxResults=6`
    const LoadingCards = async () => {
        let Data = await fetch(url)
        let ParsedData = await Data.json()
        setItems(ParsedData.items);
    }
    const HandleNextClick = async () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${props.CategoryName}&startIndex=${index + 6}&maxResults=6`
        setIndex(index + 6);
        let Data = await fetch(url)
        let ParsedData = await Data.json()
        setItems(ParsedData.items);
    }
    const HandlePrevClick = async () => {
        if (index >= 6) {
            let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${props.CategoryName}&startIndex=${index - 6}&maxResults=6`
            setIndex(index - 6);
            let Data = await fetch(url)
            let ParsedData = await Data.json()
            setItems(ParsedData.items);
        }
    }
    return (
        <>


            <div className="Category" id={props.CategoryName}>
                <div className='CategoryTop'>
                    <h2>{props.CategoryName}</h2>
                    <div className="PrevNext">
                        <button id="prevbutton" onClick={HandlePrevClick}><span className="material-symbols-outlined">
                            arrow_back_ios
                        </span></button>
                        <button onClick={HandleNextClick}><span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span></button>
                    </div>
                </div>
                <div className='CategoryBooks'>

                    {items.map((element, index) => {
                        return <div key={index}>
                            <Card title={element.volumeInfo.title} author={element.volumeInfo.authors} category={element.volumeInfo.categories} img={element.volumeInfo.imageLinks.thumbnail} source={element.volumeInfo.infoLink} />
                        </div>

                    })}

                </div>
            </div>

        </>
    )
}
