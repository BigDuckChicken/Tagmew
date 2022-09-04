import React from 'react';
import './Message.css'

const Message = ({message}) => {
    if (message.type === 'mine')
        return(
            <div className='message'>
                <div className='message-content mine'>
                    <div className='message-date'>{message.date}</div>
                    <div className='message-text'>{message.text}</div>
                </div>
            </div>
        )

    else if (message.type === 'other')
        return(
            <div className='message'>
                <div className='message-content other'>
                    <div className='message-date'>{message.date}</div>
                    <div className='message-text'>{message.text}</div>
                </div>
            </div>
        )

    else if (message.type === 'date')
        return(
            <div className='message-date'>
                {message.date}
            </div>
        );
}

export default Message; 