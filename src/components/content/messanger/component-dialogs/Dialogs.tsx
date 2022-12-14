import TextItem from 'TextItem';
import React from 'react';
import './Dialogs.css';
import profile from 'assets/profile.svg';
import search from 'assets/profile.svg';
import group from 'assets/group.svg';
import Dialog from './dialog/Dialog';

const Dialogs = (props: any) => {

    let dialogsList = props.dialogsData
        .map((dialog: any) => <Dialog src={dialog.src} name={dialog.name}/>)

    return(
        <div className='dialogs'>
            <div className='search'>
                <TextItem src={search} text='Найти контакт'/>
            </div>
            <div className='dialogs-wrapper'>
                <div className='dialogs-wrapper-list'>
                    {dialogsList}
                </div>
            </div>
            <div className='dialogs-create'>
                <TextItem src={profile} text='Добавить контакт'></TextItem>
                <TextItem src={group} text='Создать группу'></TextItem>
            </div>
        </div>
    );
}

export default Dialogs;