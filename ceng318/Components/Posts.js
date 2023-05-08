import Post from "./Post";
import classes from "./Posts.module.css";
const Posts = () => {
  return (
    <div>
      <div className={classes.postContainer}>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
      </div>
      <div className={classes.postContainer}>
        {/* <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div> */}
        <Post />
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
      </div>
    </div>
  );
};
export default Posts;
