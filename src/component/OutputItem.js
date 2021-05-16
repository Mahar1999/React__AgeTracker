import React from "react";

import classes from "../app.module.scss";

const OutputItem = (props) => {
  //   console.log(props);
  const cancelHandler = () => {
    console.log(props.id);
    props.delete(props.id);
  };
  return (
    <div className={classes.outputItem} onClick={cancelHandler}>
      <p>
        {props.username} ( {props.age} Years old )
      </p>
    </div>
  );
};

export default OutputItem;
