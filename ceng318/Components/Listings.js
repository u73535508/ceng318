import Filters from "./Filters";
import classes from "./Listings.module.css";
import Posts from "./Posts";
import { Link } from "react-router-dom";
const Listings = () => {
  return (
    <div className={classes.container}>
      <Filters />
      <div className={classes.listingsContainer}>
        <Link className={classes.newPostButton} to="/new-listing">
          New Listing
        </Link>
        <Posts />
      </div>
    </div>
  );
};
export default Listings;
