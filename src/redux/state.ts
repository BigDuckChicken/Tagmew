import profile from 'assets/profile.svg';

// Будущий json файл

let store: object = {
    _state: {

        // Страница профиля

        profilePage: {
            galleryItemsData: [
                {id: '1', type: 'square'},
                {id: '2', type: 'square'},
                {id: '3', type: 'square'},
                {id: '4', type: 'horizontal'},
                {id: '5', type: 'square'},
                {id: '6', type: 'square'},
                {id: '7', type: 'square'},
                {id: '8', type: 'square'},
                {id: '9', type: 'square'},
                {id: '10', type: 'horizontal'},
            ],
        },

        // Страница мессенджера

        messangerPage: {

            // Список чатов

            dialogsData: [
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Misha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
                {src: profile, name: 'Sasha'},
            ],

            // Список сообщение чата

            messagesData: [
                {id: 1, type: 'date', date: '30.08.2022'},
                {id: 2, type: 'mine', date: 'today', text: 'Hi! How are you?'},
                {id: 3, type: 'other', date: 'today', text: 'Hello! Im fine, thank you. How are you?'},
                {id: 4, type: 'mine', date: 'today', text: 'Im fine. Wanna go to conema today?'},
                {id: 5, type: 'other', date: 'today', text: 'Oh, its nice, but I need to verify if I do have free time. Ill  notice you if i do'},
                {id: 6, type: 'mine', date: 'today', text: 'Ok, im waiting'},
            ],

            newMessageText: '',
            cursorPosition: {
                selectionStart: 0,
                selectionEnd: 0,
            },
        }
    },

    // GET SET _state

    getState(): object {return this._state},

    //-------

    // Callback 'Отправить сообщение'

    addMessage(): void {
        let newMessage = {
            id: this._state.messangerPage.messagesData.length+1,
            type: 'mine',
            date: 'now',
            text: this._state.messangerPage.newMessageText,
        }
        if (!(this._state.messangerPage.newMessageText===''))
            this._state.messangerPage.messagesData.push(newMessage);
        this._state.messangerPage.newMessageText = '';
        this.RenderTree(this._state);
    },

    updateNewMessageText(newText: any) {
        this._state.messangerPage.newMessageText = newText;
        this.RenderTree(this._state);
    },

    // Получение функции рендеринга из файла state.js

    RenderTree() {
        //Plug
    },
    
    subscribe(observer: any) {
        this.RenderTree = observer;
    },
}

export default store;