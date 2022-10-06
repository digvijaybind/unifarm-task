import * as React from "react";
import LogoIcon from "../assets/images/logoicon.svg";
import HamburgMenu from "../assets/images/hamburgMenu.svg";
import Theme from "../assets/Theme";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Searchandselect from "../components/searchandselect/Searchandselect";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "../components/button/CommonButton";
import { useStyles } from "./SampleStyle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "../components/menuList/Menulist";
import { menu } from "../components/menuList/MenuJson";
import Content from "./content/Content";
import Unifarm from "../assets/images/Unifarm.svg";
import Headericon from "../assets/icons/Headericon.svg";
import Ethereumicon from "../assets/icons/Ethereumicon.svg";
import Listpage from "./list/Listpage";
import GridPage from "./grid/GridPage";
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Sample(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const [tabNumber, setTabNumber] = React.useState<number>(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.logo}>
        <img src={Unifarm} />
      </div>
      <MenuList tabNumber={tabNumber} />
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
          borderBottomColor: `${Theme.lightGray}`,
          borderBottomWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "block", xs: "block" } }}
          >
            <img src={HamburgMenu} />
          </IconButton>
          <div className={classes.appHeader}>
            {/* <div> */}
            {/* <img src={HamburgMenu} /> */}
            <div className={classes.btnContent}>
              <Button
                colors={"primary"}
                btnName={"13.4622"}
                variants={"contained"}
                border={"gray"}
                icon={LogoIcon}
                leftIcon
              />
              <Button
                colors={"primary"}
                btnName={"0xF1.....sc2"}
                variants={"contained"}
                border={"gray"}
                icon={Headericon}
                rightIcon
              />
              <div className={classes.selectNetwork}>
                <img src={Ethereumicon} className={classes.etherumIcon} />
                <Select className={classes.dropdown} value={10}>
                  <MenuItem value={10}>Ethereum</MenuItem>
                </Select>
              </div>
            </div>
            {/* </div> */}
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Content tabValue={(data: number) => setTabNumber(data)} />
        {/* <GridPage /> */}
      </Box>
    </Box>
  );
}
