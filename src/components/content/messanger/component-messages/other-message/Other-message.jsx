import React from 'react';
import './Other-message.css'

const OtherMessage = ({date='date', text='text'}) => {
    return(
        <div className='other-message'>
            <div className='other-message-content'>
                <div className='other-message-date'>{date}</div>
                <div className='other-message-text'>{text}</div>
            </div>
        </div>
    );
}

export default OtherMessage; 