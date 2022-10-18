import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div className={s.post}>
        <h3>My post</h3>
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post message="Hi, how are you?" likesCount="0" />
          <Post message="It's my first post" likesCount="23" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
