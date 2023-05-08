import classes from "./Post.module.css";
import { useParams } from "react-router-dom";
const Post = () => {
  const params = useParams();
  return (
    <div className={classes.post}>
      <label>NEW POST</label>
      <p>NEW POST INFO WRITTEN</p>
      <p>{params.listingId}</p>
    </div>
  );
};
export default Post;
