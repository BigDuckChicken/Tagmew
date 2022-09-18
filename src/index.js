import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state.ts';

//  Функция рендеринга

const root = ReactDOM.createRoot(document.getElementById('root'));
const RenderTree = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

//  Первоначальный вызов рендеринга

RenderTree();

//  Передача функции рендеринга файлу state.js

store.subscribe(RenderTree)

reportWebVitals();