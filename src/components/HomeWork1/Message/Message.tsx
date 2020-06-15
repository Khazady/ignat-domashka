import React from 'react';
import classes from "./Message.module.css"

type MessageTypes = {
    name: string,
    message: string,
    time: string
}

function Message(props: MessageTypes) {
    return (
      <div className={classes.wrapper}>
          <div>
              <img className={classes.img}
                   src="https://pbs.twimg.com/profile_images/1085971393659981824/0eEoQ2Xd_400x400.jpg"
                   alt="avatar"/>
          </div>
          <div className={classes.cloud}>
              <p className={classes.name}>{props.name}</p>
              <p className={classes.message}>{props.message}</p>
              <p className={classes.time}>{props.time}</p>
          </div>
      </div>
    )
}

export default Message