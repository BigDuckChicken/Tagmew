import React from 'react';
import './Text-item.css'

type Props = {
    src: string,
    text: string,
}

const TextItem = ({src, text}: Props) => {
    return(
        <div className='text-item'>
            <img className='text-item-img' src={src} alt='tagmew'/><p className='text-item-text'>{text}</p>
        </div>
    );
}

export default TextItem;