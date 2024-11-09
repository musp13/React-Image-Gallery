import React, { useEffect, useState } from 'react'
import './gallery.css'
import leaf1 from '../../assets/leaf1.jpg'
import leaf2 from '../../assets/leaf2.jpg'
import leaf3 from '../../assets/leaf3.jpg'
import leaf4 from '../../assets/leaf4.jpg'
import leaf5 from '../../assets/leaf5.jpg'

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        const data = [
            {
                id: 1,
                url: leaf3,
                imageTitle: 'Leaf 1'
            },
            {
                id: 2,
                url: leaf5,
                imageTitle: 'Leaf 2'
            },
            {
                id: 3,
                url: leaf1,
                imageTitle: 'Leaf 3'
            },
            {
                id: 4,
                url: leaf4,
                imageTitle: 'Leaf 4'
            },
            {
                id: 5,
                url: leaf2,
                imageTitle: 'Leaf 5'
            }
        ];

        setImages(data);
    },[]);

    const handleDelete = (imageId)=>{
        setImages(images.filter(image=>image.id!=imageId));
    }

  return (
    <div className='gallery-container'>
      <h1>Galleria</h1>
      <div className='image-grid'>
        {
        
            images.length>0?
            images.map(item=><div key={item.id} className='img-card'>
                <img src={item.url} alt="" />
                <div className='img-details'>
                    <h3>{item.imageTitle}</h3>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
            </div>): <p>
                No images found
            </p>
                
        }
        
      </div>
    </div>
  )
}

export default Gallery
