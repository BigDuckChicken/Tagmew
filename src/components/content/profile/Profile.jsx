import React from 'react';
import './Profile.css';

const Profile = () => {
    return(
        <div className='profile'>
            <div className='profile-tape'>
                <div className='gallery'>
                    <div className='gallery-wrapper'>
                        <div className='gallery-component'>1</div>
                        <div className='gallery-component'>2</div>
                        <div className='gallery-component'>3</div>
                        
                        <div className='gallery-component'>5</div>
                        <div className='gallery-component-horizontal'>4</div>
                        <div className='gallery-component'>6</div>
                        <div className='gallery-component'>7</div>
                        <div className='gallery-component'>8</div>
                        <div className='gallery-component-big'>9</div>
                        <div className='gallery-component'>10</div>
                        <div className='gallery-component'>11</div>
                        <div className='gallery-component'>12</div>
                        <div className='gallery-component'>13</div>
                    </div>
                </div>
            </div>
            <div className='profile-info'>
                <div className='avatar'></div>
                <div className='profile-log'>
                    <div className='nickname'>Ivan Ivanov</div>
                    <div className='status'>#ivan2132</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;