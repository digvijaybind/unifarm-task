import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "../CommonClass";

import { menu } from "./MenuJson";
import { hasChildren } from "./utils";

export default function MenuList(props: { tabNumber: number }) {
  useEffect(() => {
    console.log(props.tabNumber, "tabNumber");
  }, [props.tabNumber]);
  return (
    <>
      {menu.map((item, key) => (
        <MenuItem key={key} item={item} tabNumber={props.tabNumber} />
      ))}
    </>
  );
}

const MenuItem = (props: { item: any; tabNumber: any }) => {
  const Component = hasChildren(props.item) ? MultiLevel : SingleLevel;
  return <Component item={props.item} tabNumber={props.tabNumber} />;
};

const SingleLevel = (props: { item: any; tabNumber: any }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem
        button
        className={`${props.item.key === props.tabNumber && classes.seletedLink}`}
      >
        <img src={props.item.icon} className={classes.iconView} />
        <ListItemText primary={props.item.title} />
      </ListItem>
    </>
  );
};

const MultiLevel = (props: { item: any; tabNumber: any }) => {
  const classes = useStyles();
  const { items: children } = props.item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <img src={props.item.icon} className={classes.iconView} />
        <ListItemText primary={props.item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: any, key: any) => (
            <MenuItem key={key} item={child} tabNumber={props.tabNumber} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
