import React from 'react'
import Pixabaycontext from '../Context/PixabayContext'
import { useContext } from 'react';

const Images = ()=>
{
    const { imagedata } = useContext(Pixabaycontext); 


  return (
    <>
<div className="container my-5">
      <div className='flex'>
        {imagedata.map((image)=>(
        <div key={image.id}>
          <div className='item'>
            <img src={image.largeImageURL} alt="altabalaji" />
            </div>
    </div>
      ))}
    </div>
  </div></>
  );
}

export default Images
