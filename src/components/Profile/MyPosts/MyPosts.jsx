import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {


  let postsElement = props.posts.map((p) => (
    <Post messages={p.message} likeCount={p.likeCount} />
  ));
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
        <div className={s.posts}>{postsElement}</div>
      </div>
    </div>
  );
};

export default MyPosts;
