import React from 'react';
import './Text-item.css'

const TextItem = ({src, text}) => {
    return(
        <div className='text-item'>
            <img className='text-item-img' src={src} alt='tagmew'/><p className='text-item-text'>{text}</p>
        </div>
    );
}

export default TextItem;