import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useStyles } from "../CommonClass";
import Fire from "../../assets/icons/Fire.svg";
const Alltabs = (props: { tabChange?: any }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    localStorage.setItem("path", newValue.toString());
    props.tabChange(newValue);
    setValue(newValue);
  };
  return (
    <div className={classes.tabManagne}>
      <Tabs
        value={value}
        aria-label="icon position tabs example"
        className={classes.Alltabmang}
        onChange={handleChange}
      >
        <Tab label="All farms" />
        <Tab iconPosition="start" label="HOT Farms" />
      </Tabs>
    </div>
  );
};

export default Alltabs;
