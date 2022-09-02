import React from 'react';
import './Messanger.css'
import Dialogs from './component-dialogs/Dialogs';
import Messages from './component-messages/Messages';

const Messanger = () => {
    return(
        <div className='messanger'>
            <Dialogs></Dialogs>
            <Messages></Messages>
        </div>
    );
}

export default Messanger;