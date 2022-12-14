const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts : [
        { message: "Hi, how are you?", likeCount: 11 },
        { message: "It's my first post", likeCount: 23 }
  ],
    newPostText: "IT"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message: state.newPostText,
                likeCount: 0
              };
              state.posts.push(newPost);
              state.newPostText = '';
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer