import React from 'react';
import './Messanger.css'
import Dialogs from './component-dialogs/Dialogs';
import Messages from './component-messages/Messages';

const Messanger = (props) => {
    return(
        <div className='messanger'>
            <Dialogs dialogsData={props.state.dialogsData}></Dialogs>
            <Messages messagesData={props.state.messagesData}></Messages>
        </div>
    );
}

export default Messanger;