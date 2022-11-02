const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
  _state: {
    
    dialogsPage:{
        dialogs : [
           { id: 1, name: "Nurken" },
           { id: 2, name: "Banu" },
           { id: 3, name: "Asylym" },
           { id: 4, name: "Almas" },
           { id: 5, name: "Bauka" }
         ],
         
        messages:[
           { id: 1, message: "Hi" },
           { id: 2, message: "Hello" },
           { id: 3, message: "Privet" }
         ],

        newMessageBody: ""

   },

   profilePage:{
        posts : [
            { message: "Hi, how are you?", likeCount: 11 },
            { message: "It's my first post", likeCount: 23 }
      ],
        newPostText: "IT"
    }
},
  _callSubscriber () {
  console.log("State changed");
},

  getState(){
  return this._state;
},
  subscribe (observer) {
  this._callSubscriber = observer;
},

  dispatch(action) {
if (action.type === ADD_POST) {
  let newPost = {
    id:5,
    message: this._state.profilePage.newPostText,
    likeCount: 0
  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = '';
  this._callSubcriber(this._state); 
} else if (action.type === UPDATE_NEW_POST_TEXT) {
  this._state.profilePage.newPostText = action.newText;
  this._callSubscriber(this._state);  
} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  this._state.dialogsPage.newMessageBody = action.body;
  this._callSubscriber(this._state);
} else if (action.type === SEND_MESSAGE) {
  let body = this._state.dialogsPage.newMessageBody;
  this._state.dialogsPage.newMessageBody = '';
  this._state.dialogsPage.messages.push({ id: 6, message: body });
  this._callSubscriber(this._state);
  
}
}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;
window.store = store;

