import React from "react";
import Button from "@material-ui/core/Button";
import { green } from "@mui/material/colors";
import { ColorLensOutlined } from "@material-ui/icons";
import { useStyles } from "../CommonClass";
import { Icon } from "@mui/material";
interface ButtonProps {
  colors?: any;
  btnName: string;
  variants?: any;
  border?: any;
  icon?: any;
  leftIcon?: boolean;
  rightIcon?: boolean;
  blueBg?: boolean;
  width?: boolean;
  onClick?: any;
}
const CommonButton = (props: ButtonProps) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={`${classes.button} ${
          props.border === "gray" && classes.grayBorder
        }
        ${props.border === "purple" && classes.pupleBorder}
        ${props.border === "blue" && classes.blueBorder}
        ${props.border === "fill" && classes.fillButton} 
        ${props.blueBg && classes.blueBackground}  
        ${props.width && classes.buttonWidth}     
        `}
        onClick={props.onClick}
      >
        {props.leftIcon && (
          <img className={classes.buttonLeftIcon} src={props.icon} />
        )}
        <div className={classes.btntext}>{props.btnName}</div>
        {props.rightIcon && (
          <img className={classes.buttonRightIcon} src={props.icon} />
        )}
      </Button>
    </div>
  );
};

export default CommonButton;
