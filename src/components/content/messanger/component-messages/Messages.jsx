import React from 'react';
import './Messages.css';
import messages from 'assets/messages.svg';
import photos from 'assets/photos.svg';
import microphone from 'assets/microphone.svg';
import attach from 'assets/attach.svg';
import MyMessage from './my-message/My-message';
import OtherMessage from './other-message/Other-message';
import MessageDate from './message-date/Message-date';
import TextItem from 'components/text-item/Text-item';

const Messages = () => {
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
                    <MessageDate date='30.08.2022'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i dobut I need to verify if I do have free time.
                        Ill  notice you if i dobut I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/><MyMessage date='today' text='Ok, im waiting'/>
                    <MessageDate date='31.08.2022'/>
                    <MyMessage date='today' text='Hello! How are you?'/>
                    <OtherMessage date='today' text='Hello! Im fine, thank you. How are you?'/>
                    <MyMessage date='today' text='Im fine. Wanna go to conema today?'/>
                    <OtherMessage date='today' text='Oh, its nice,
                    but I need to verify if I do have free time.
                        Ill  notice you if i do'/>
                    <MyMessage date='today' text='Ok, im waiting'/>
                </div>
            </div>
            <div className='messages-input'>
                <div className='messages-input-text'>Написать</div>
                <div className='messages-input-buttons'>
                    <img src={microphone}></img>
                    <img src={attach}></img>
                </div>
            </div>
        </div>
    );
}

export default Messages;