import React from 'react';
import classes from "./FullName.module.css"

type FullNameTypes = {
  message: string
}

function FullName(props: FullNameTypes) {
  return (
    <div>
      <p className={classes.name}>{props.message}</p>
    </div>
  )
}

export default FullName