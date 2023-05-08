import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NotificationsBar from "./NotificationsBar";
import NavMenu from "./NavMenu";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState("");

  const toggleComponent = (id) => {
    if (isOpen === id) {
      setIsOpen("");
    } else {
      setIsOpen(id);
    }
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  const loginChangeHandler = () => {
    setLoggedIn(true);
  };

  const notificationHandler = () => {
    setShowNotifications(!showNotifications);
  };
  const navMenuHandler = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.imgContainer}>
          <img
            className={classes.logoImg}
            alt="logo img"
            src={require("../images/Ekran görüntüsü 2023-04-23 002740.png")}
          />
        </div>

        <Link to="/" className={classes.heading}>
          GetPet
        </Link>
        <div className={classes.navContainer}>
          {/* <Link to="/create-post" className={classes.button}>
            New Post
          </Link> */}
          <button className={classes.navButton} onClick={notificationHandler}>
            <img
              className={classes.navImg}
              src={require("../images/bell.png")}
            />
          </button>
          <Link
            to={loggedIn ? "./profile" : "./login"}
            className={classes.navButton}
          >
            <img
              className={classes.navImg}
              src={require("../images/profile.png")}
            />
            <p className={classes.signIn}>Log in</p>
          </Link>
          <button onClick={navMenuHandler} className={classes.navButton}>
            <img
              className={classes.navImg}
              src={require("../images/menu.png")}
            />
          </button>
        </div>
      </header>
      <NotificationsBar show={showNotifications} />
      <NavMenu show={showNavBar} />
    </div>
  );
};
export default MainHeader;
