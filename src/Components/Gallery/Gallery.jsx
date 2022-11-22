import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Gallery.css'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  

export default function Gallery() {

    const galleryMeal = [
        {
          img: '/img/gallery/one.jpg',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: '/img/gallery/two.jpg',
          title: 'Burger',
          rows: 1,
          cols: 1,
        },
        {
          img: '/img/gallery/three.jpg',
          title: 'Coffee',
        },

        {
          img: '/img/gallery/four.jpg',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: '/img/gallery/five.jpg',
          title: 'Basketball',
        },
        {
          img: '/img/gallery/six.jpg',
          title: 'Fern',
        },
        {
          img: '/img/gallery/seven.jpg',
          title: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
        {
          img: '/img/gallery/eight.jpg',
          title: 'Tomato basil',
        },
        {
          img: '/img/gallery/nine.png',
          title: 'Sea star',
        },
        {
          img: '/img/gallery/ten.jpg',
          title: 'Bike',
          cols: 2,
        },
      ];

  return (
    <div className="wrapperGallery">
          <ImageList
      sx={{ width: '80%', height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {galleryMeal.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  
  );
}



