import React from 'react';
import './Messages.css';
import messages from 'assets/messages.svg';
import photos from 'assets/photos.svg';
import microphone from 'assets/microphone.svg';
import attach from 'assets/attach.svg';
import Message from './message/Message';
import TextItem from 'TextItem';

import { addMessageActionCreator, updateNewMessageTextActionCreator } from 'redux/state.ts';

/*
**  Элемент Поля сообщений
*/

const Messages = (props) => {

    //  Получение списка сообщений

    let messagesList = props.messagesData
        .map(message => <Message message={message}/>)

    //  Callback 'Отправить сообщение'

    let messageInputText = React.createRef(); // Привязка

    /*
    **  Нажатие клавиши ENTER 
    **  вызывает метод из state.js
    */
    const OnInputKeyDown = (e) => {

        if (e.keyCode === 13){
            props.dispatch(addMessageActionCreator())
        }
    }
    /*
    **  Даёт информацию о положении курсора
    **
    const OnInputKeyUp = (e) => {
        let start = e.target.selectionStart;
        let end = e.target.selectionEnd;

        props.cursorPosition.selectionStart = start;
        props.cursorPosition.selectionEnd = end;
    }
    */

    /*  
    **  Обновление информации о текущем содержании
    **  строки input(Напишите сообщение...) в state.js
    */

    const OnInputChange = () => {
        props.dispatch(updateNewMessageTextActionCreator(messageInputText.current.value));
    }

    //  Разметка компонента

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
