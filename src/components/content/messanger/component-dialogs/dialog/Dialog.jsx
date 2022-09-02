import React from 'react';
import './Dialog.css'

const Dialog = ({src, name='name', text='text'}) => {
    return(
        <div className='dialog'>
            <img className='dialog-img' src={src} alt='dialog-avatar'/>
            <div className='dialog-info'>
                <div className='dialog-info-name'>{name}</div>
                <div className='dialog-info-text'>{text}</div>
            </div>
        </div>
    );
}

export default Dialog; 