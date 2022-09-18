const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

interface Action{
    type: string,
    newText?: string,
}

const MessangerReducer = (action: Action, state: any): object => {
    const addMessage = (): void => {
        let newMessage = {
            id: state.messagesData.length+1,
            type: 'mine',
            date: 'now',
            text: state.newMessageText,
        }
        if (!(state.newMessageText===''))
        state.messagesData.push(newMessage);
        state.newMessageText = '';
    };

    const updateNewMessageText = (newText: any) => {
        state.newMessageText = newText;
    }

    switch(action.type){
        case ADD_MESSAGE:
            addMessage()
        break;
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(action.newText)
        break;     
    }

    return state;
}

export default MessangerReducer;
