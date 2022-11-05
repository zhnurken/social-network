import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
    },
  sidebar: {}
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
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // this._state.sidebar = sidebarReducer (this._state.sidebar, action);

    this._callSubscriber(this._state);
}
}

export default store;
window.store = store;

