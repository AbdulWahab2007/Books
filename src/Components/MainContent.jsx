import React from 'react'
import Card from './Card'

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
        <div className="Fiction">
          <div className='CategoryTop'>
            <h2>Fiction</h2>
            <div className="PrevNext">
              <button id="fiction-prev" className="pagination prev"><span className="material-symbols-outlined">
                arrow_back_ios
              </span></button>
              <button id="fiction-next" className="pagination next"><span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
            </div>
          </div>
          <div className='CategoryBooks'>
            <Card img="https://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="The Plague" author="Albert Camus" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=b6nCAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Joseph Andrews" author="Henry Fielding" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=L88qEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Sherlock Holmes - The Valley Of Fear" author="Arthur Conana Doyle" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="Future Shock" author="Alvin Toffler" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="How To Stop Time" author="Matt Haig" category="Fiction" />
            <Card img ="https://books.google.com/books/content?id=tigqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="The Adventures Of Tom Sawyers" author="Mark Twain" category="Fiction" />
          </div>
        </div>

        <div className="Fiction">
          <div className='CategoryTop'>
            <h2>Poetry</h2>
            <div className="PrevNext">
              <button id="fiction-prev" className="pagination prev"><span className="material-symbols-outlined">
                arrow_back_ios
              </span></button>
              <button id="fiction-next" className="pagination next"><span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
            </div>
          </div>
          <div className='CategoryBooks'>
            <Card img="https://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="The Plague" author="Albert Camus" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=b6nCAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Joseph Andrews" author="Henry Fielding" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=L88qEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Sherlock Holmes - The Valley Of Fear" author="Arthur Conana Doyle" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="Future Shock" author="Alvin Toffler" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="How To Stop Time" author="Matt Haig" category="Fiction" />
            <Card img ="https://books.google.com/books/content?id=tigqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="The Adventures Of Tom Sawyers" author="Mark Twain" category="Fiction" />
          </div>
        </div>

        <div className="Fiction">
          <div className='CategoryTop'>
            <h2>Fantasy</h2>
            <div className="PrevNext">
              <button id="fiction-prev" className="pagination prev"><span className="material-symbols-outlined">
                arrow_back_ios
              </span></button>
              <button id="fiction-next" className="pagination next"><span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
            </div>
          </div>
          <div className='CategoryBooks'>
            <Card img="https://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="The Plague" author="Albert Camus" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=b6nCAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Joseph Andrews" author="Henry Fielding" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=L88qEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Sherlock Holmes - The Valley Of Fear" author="Arthur Conana Doyle" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="Future Shock" author="Alvin Toffler" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="How To Stop Time" author="Matt Haig" category="Fiction" />
            <Card img ="https://books.google.com/books/content?id=tigqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="The Adventures Of Tom Sawyers" author="Mark Twain" category="Fiction" />
          </div>
        </div>

        <div className="Fiction">
          <div className='CategoryTop'>
            <h2>Romance</h2>
            <div className="PrevNext">
              <button id="fiction-prev" className="pagination prev"><span className="material-symbols-outlined">
                arrow_back_ios
              </span></button>
              <button id="fiction-next" className="pagination next"><span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
            </div>
          </div>
          <div className='CategoryBooks'>
            <Card img="https://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="The Plague" author="Albert Camus" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=b6nCAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Joseph Andrews" author="Henry Fielding" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=L88qEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="Sherlock Holmes - The Valley Of Fear" author="Arthur Conana Doyle" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="Future Shock" author="Alvin Toffler" category="Fiction" />
            <Card img="https://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" title="How To Stop Time" author="Matt Haig" category="Fiction" />
            <Card img ="https://books.google.com/books/content?id=tigqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" title="The Adventures Of Tom Sawyers" author="Mark Twain" category="Fiction" />
          </div>
        </div>  

      </div>
    </>
  )
}
