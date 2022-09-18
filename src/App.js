import React from 'react';
import './CSSreset.css';
import './App.css';

import Header from 'components/interface/header/Header';
import Navbar from 'components/interface/navbar/Navbar';
import Profile from 'components/content/profile/Profile';
import News from 'components/content/news/News';
import Messanger from 'components/content/messanger/Messanger';
import Friends from 'components/content/friends/Friends';
import Photos from 'components/content/media-photo/Photos';
import Video from 'components/content/media-video/Video';
import Music from 'components/content/media-music/Music';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className='app'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='app-content-wrapper'>
          <Routes>
            <Route path="/profile" element =
              {<Profile  state={props.state.profilePage}/>}/> 

            <Route path="/news" element = {<News />}/>
            <Route path="/messanger/*" element =
              {<Messanger state={props.state.messangerPage}
                          dispatch={props.dispatch}/>}/>

            <Route path="/friends" element = {<Friends />}/>
            <Route path="/photos" element = {<Photos />}/>
            <Route path="/video" element = {<Video />}/>
            <Route path="/music" element = {<Music />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
