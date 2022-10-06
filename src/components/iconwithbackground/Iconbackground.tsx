import React from "react";
import { useStyles } from "../CommonClass";

interface IconWithbackground {
  color?: any;
  icon?: any;
  small?: any;
}
const Iconbackground = (props: IconWithbackground) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.backgroundiconback} ${
        props.small && classes.smallSize
      }`}
      style={{ backgroundColor: props.color }}
    >
      <img
        className={`${classes.Iconcenter} ${props.small && classes.smallIcon}`}
        src={props.icon}
      />
    </div>
  );
};

export default Iconbackground;
