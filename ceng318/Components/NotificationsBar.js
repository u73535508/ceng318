import classes from "./NotificationsBar.module.css";

const NotificationsBar = (props) => {
  return (
    props.show && (
      <div className={classes.container}>
        <div className={classes.notificationList}>
          <div className={classes.notification}>not 1 aaaaaaaaaaa</div>
          <div className={classes.notification}>not 2 aaaaaaaaaaaaa</div>
          <div className={classes.notification}>not 3 aaaaaaaaaa</div>
        </div>
      </div>
    )
  );
};
export default NotificationsBar;
