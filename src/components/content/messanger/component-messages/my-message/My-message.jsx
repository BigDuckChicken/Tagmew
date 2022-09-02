import React from 'react';
import './My-message.css'

const MyMessage = ({date='date', text='text'}) => {
    return(
        <div className='my-message'>
            <div className='my-message-content'>
                <div className='my-message-date'>{date}</div>
                <div className='my-message-text'>{text}</div>
            </div>
        </div>
    );
}

export default MyMessage; 