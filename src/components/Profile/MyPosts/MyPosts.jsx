import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => { 
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />));

  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }



  return (
    <div className={s.content}>
      <div className={s.post}>
        <h3>My post</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement } value= {props.newPostText}/>
          </div>
          <div>
            <button onClick={ onAddPost }>Add post</button>
          </div>
        </div>
        <div className={s.posts}>{postsElement}</div>
      </div>
    </div>
  );
};

export default MyPosts;
