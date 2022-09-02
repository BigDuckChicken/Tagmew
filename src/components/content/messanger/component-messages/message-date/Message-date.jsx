import React from 'react';
import './Message-date.css';

const MessageDate = ({date='today'}) => {
    return(
        <div className='message-date'>
            {date}
        </div>
    );
}

export default MessageDate;