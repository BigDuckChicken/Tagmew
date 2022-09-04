import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialog.css'

const Dialog = ({src, name='name', text='text'}) => {
    return(
        <NavLink to={'/messanger/dialog_with_' + name}>
        <div className='dialog'>
            <img className='dialog-img' src={src} alt='dialog-avatar'/>
            <div className='dialog-info'>
                <div className='dialog-info-name'>{name}</div>
                <div className='dialog-info-text'>{text}</div>
            </div>
        </div>
        </NavLink>
    );
}

export default Dialog; 