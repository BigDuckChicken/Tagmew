import React from 'react';
import GalleryItem from './gallery-item/Gallery-item';
import './Profile.css';

type Item = {type:string}

const Profile = (props: any) => {

let galleryItemsList = props.state.galleryItemsData
    .map((gallery_item: Item) => <GalleryItem type={gallery_item.type}/>);

    return(
        <div className='profile'>
            <div className='profile-tape'>
                <div className='gallery'>
                    <div className='gallery-wrapper'>
                        {galleryItemsList}
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