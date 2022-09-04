import React from 'react';
import './Header.css';
import search from 'assets/search.svg';
import profile from 'assets/profile.svg';
import TextItem from 'TextItem';
import Logo from 'Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
    <div className = 'header'>
        <div className='header-logo'><Logo /></div>
        <div className='header-navbar'><TextItem src={search} text='Search'/></div>
        <NavLink to='/profile'><TextItem src={profile} text='Profile'/></NavLink>
    </div>
    );
}

export default Header;