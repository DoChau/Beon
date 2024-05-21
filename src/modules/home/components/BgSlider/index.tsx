
import React from 'react';
import Image from 'next/image';
let size = 8
const Images = [
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(1).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(2).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(3).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(4).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(5).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(6).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(7).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(8).jpg',
    },
    {
      url: 'https://webnailsbucket.s3.amazonaws.com/beon/bggrid/3/Img+(9).jpg',
    },
  ];

function createGrid() {
	// only want unique cards
	let cards = new Set<any>()
	while (cards.size < size) {
		// pick random Images
		const randomIndex = Math.floor(Math.random() * Images.length)
		cards.add(Images[randomIndex])
	}
}

const BgGrid = () => {
  let grid = createGrid()

  return (
    <>
    <div className="cards">
      grid.forEach(card) {
        <button
          className="bg-[url(${card})]"
        >
          picture
        </button>
      }
    </div>
    </>
  )
}
export default BgGrid