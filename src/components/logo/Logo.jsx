import React from 'react';
import './Logo.css';
import mew from 'assets/mew.svg';

const Logo = () => {
    return(
        <div className='logo'><img src={mew}/><div className='logo-m'>Tag</div><div className='logo-u'>mew</div></div>
    )
}

export default Logo;