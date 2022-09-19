import React from 'react';
import './Gallery-item.css'

type Props = {
    type: string,
}

const GalleryItem = ({type}: Props): any => {
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