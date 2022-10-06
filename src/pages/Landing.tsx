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
  window?: () => Window;
}

export default function Landing(props: Props) {
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
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </Box>
    </Box>
  );
}
