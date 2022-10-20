import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="data:image/jpeg;base64,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" />
      { props.message }
      <div>
        <span>like</span> {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
