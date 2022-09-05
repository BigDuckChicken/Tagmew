import React from 'react';
import './Messages.css';
import messages from 'assets/messages.svg';
import photos from 'assets/photos.svg';
import microphone from 'assets/microphone.svg';
import attach from 'assets/attach.svg';
import Message from './message/Message';
import TextItem from 'TextItem';

const Messages = (props) => {

    let messagesList = props.messagesData
        .map(message => <Message message={message}/>)

    let messageInputText = React.createRef();

    const OnInputKeyDown = (e) => {
        if (e.keyCode === 13)
            props.addMessage()
    }

    const OnInputChange = () => {
        props.updateNewMessageText(messageInputText.current.value);
    }

    return(
        <div className='messages'>
            <div className='attachments'>
                <div className='attachments-buttons'>
                    <TextItem src={messages} text='Позвонить'></TextItem>
                    <TextItem src={photos} text='Вложения'></TextItem>
                </div>
            </div>
            <div className='messages-wrapper'>
                <div className='messages-wrapper-list'>
                    {messagesList}
                </div>
            </div>
            <div className='messages-input'>
                <input ref={messageInputText}
                    onChange={OnInputChange} onKeyDown={OnInputKeyDown} autoFocus
                    value={props.newMessageText}
                    placeholder='Напишите сообщение...' className='messages-input-text'>
                </input>
                <div className='messages-input-buttons'>
                    <img src={microphone}></img>
                    <img src={attach}></img>
                </div>
            </div>
        </div>
    );
}

export default Messages;