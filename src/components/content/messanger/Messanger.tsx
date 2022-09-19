import React from 'react';
import './Messanger.css'
import Dialogs from './component-dialogs/Dialogs';
import Messages from './component-messages/Messages';

const Messanger = (props: any) => {
    return(
        <div className='messanger'>
            <Dialogs dialogsData={props.state.dialogsData}></Dialogs>
            <Messages messagesData={props.state.messagesData}
                        newMessageText={props.state.newMessageText}
                        cursorPosition={props.state.cursorPosition}
                        dispatch={props.dispatch}></Messages>
        </div>
    );
}

export default Messanger;