import profile from 'assets/profile.svg';
import { RenderTree } from 'render';

let state = {
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

    messangerPage: {
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

        messagesData: [
            {id: 1, type: 'date', date: '30.08.2022'},
            {id: 2, type: 'mine', date: 'today', text: 'Hi! How are you?'},
            {id: 3, type: 'other', date: 'today', text: 'Hello! Im fine, thank you. How are you?'},
            {id: 4, type: 'mine', date: 'today', text: 'Im fine. Wanna go to conema today?'},
            {id: 5, type: 'other', date: 'today', text: 'Oh, its nice, but I need to verify if I do have free time. Ill  notice you if i do'},
            {id: 6, type: 'other', date: 'today', text: 'Ok, im waiting'},
        ],
    }
}

export const addMessage = (message) => {
    let newMessage = {
        id: state.messangerPage.messagesData.length+1,
        type: 'mine',
        date: 'now',
        text: message,
    }
    state.messangerPage.messagesData.push(newMessage)
    RenderTree(state);
}

export default state;