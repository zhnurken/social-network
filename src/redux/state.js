import { rerenderEntireTree } from "../render";

let state = {
    
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
         ]    
   },

   profilePage:{
        posts : [
            { message: "Hi, how are you?", likeCount: 11 },
            { message: "It's my first post", likeCount: 23 }
      ],
        newPostText: "IT"
    }
}

window.state = state;

export let addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);  
}

export let updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderEntireTree = (state);  
}

export default state;
