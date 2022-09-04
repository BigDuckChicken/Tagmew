import React from 'react';
import './Navbar.css';
import news from 'assets/news.svg';
import messages from 'assets/messages.svg';
import friends from 'assets/friends.svg';
import photos from 'assets/photos.svg';
import videos from 'assets/videos.svg';
import music from 'assets/music.svg';
import TextItem from 'TextItem';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-menu'>
                <NavLink to='/news'><TextItem src={news} text='Новости'/></NavLink>
                <NavLink to='/messanger'><TextItem src={messages} text='Сообщения'/></NavLink>
                <NavLink to='/friends'><TextItem src={friends} text='Друзья'/></NavLink>
                <NavLink to='/photos'><TextItem src={photos} text='Фотографии'/></NavLink>
                <NavLink to='/video'><TextItem src={videos} text='Видео'/></NavLink>
                <NavLink to='/music'><TextItem src={music} text='Музыка'/></NavLink>
            </div>
        </div>
    );
}

export default Navbar;