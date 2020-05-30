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
             src="https://lh3.googleusercontent.com/proxy/-2ZAB93DBO6IHbH886dHSdhphMnn9xJtCwdu_dAE26rVBdD_gsVtiJJ8zEGYqOp2A6ZflcbYq9qoAlRZikPJ5KoibJ0NXdhJeAuagmcDDsLs5N5qrzghzsPqmhxNNuN9iH2WYLgoCLSrZBnV4JVU-VM"
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