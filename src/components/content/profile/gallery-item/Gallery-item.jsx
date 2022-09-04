import React from 'react';
import './Gallery-item.css'

const GalleryItem = ({type}) => {
    if (type === 'square')
        return(
            <div className='gallery-item square'>square
            | there should be a photo or a video</div>
        )

    else if (type === 'horizontal')
        return(
            <div className='gallery-item horizontal'>horizontal
            | there should be a photo or a video</div>
        )
}

export default GalleryItem; 