import { makeStyles } from "@material-ui/core/styles";
import { hover } from "@testing-library/user-event/dist/hover";
import { relative } from "node:path/win32";
import Theme from "../assets/Theme";
export const useStyles = makeStyles((theme) => ({
  logo: {
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  appHeader: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {},
  },
  threeicon: {
    [theme.breakpoints.down("xs")]: {
      height: "20px",
      width: "20px",
      fontFamily: "InterRegular !important" as any,
    },
  },
  btnContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  normalText: {
    color: `${Theme.black}`,
  },
  dropdown: {
    height: "40px",
    color: `${Theme.black}`,
    borderColor: `${Theme.borderGray}`,
    borderRadius: "10px",
    fontFamily: "InterRegular !important" as any,
    fontWeight: 500,
    "& .MuiOutlinedInput-input": {
      color: `${Theme.black}`,
    },
    "& .MuiInputLabel-root": {
      color: `${Theme.black}`,
    },
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  topfarmManagne: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {},
  },
  farmManagnement: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  farmtitle: {
    color: `${Theme.purple}`,
    borderRightColor: `${Theme.lightGray}`,
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    padding: "10px 15px 10px 10px",
    fontFamily: "InterRegular !important" as any,
    fontWeight: 500,
    fontSize: "32px",
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  farmContent: {
    display: "flex",
    flexWrap: "wrap",
    width: "50%",
    textAlign: "start",
    paddingLeft: "15px",

    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  rewardIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  mainIcon: {
    [theme.breakpoints.down("xs")]: {
      width: "30px",
    },
  },
  listBorder: {},
  listHeading: {
    color: `${Theme.gray}`,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      fontFamily: "InterRegular !important" as any,
    },
  },
  listHeadings: {
    color: `${Theme.gray}`,
    fontWeight: 400,
    fontSize: "14px",
    fontFamily: "InterRegular !important" as any,
    lineHeight: "24px",
  },
  listDetails: {
    display: "flex",
    flexDirection: "column !important" as any,
    alignItems: "flex-start",
    justifyContent: "space-around",
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {},
  },
  arrowView: {
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {},
  },
  progressCircle: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  circleprogres: {
    width: "30px !important" as any,
    height: "30px !important" as any,

    [theme.breakpoints.down("xs")]: {
      width: "15px !important" as any,
      height: "15px !important" as any,
    },
  },
  percentage: {
    color: `${Theme.black}`,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
      fontFamily: "InterRegular !important" as any,
    },
  },
  percentages: {
    color: `${Theme.black}`,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
  },
  paddingVal: {
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5px",
    },
  },
  paddingVals: {
    paddingLeft: "10px",
  },
  listCard: {
    borderBottom: `1px solid ${Theme.borderGray}`,
    margin: "15px 0",
    padding: "10px 0",
    [theme.breakpoints.down("xs")]: {},
  },
  imageCount: {
    color: `${Theme.gray}`,
    fontWeight: 400,
    height: "36px",
    fontSize: "14px",
    lineHeight: "24px",
    paddingLeft: "10px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "18px",
      top: "5px",
      fontSize: "9px",
    },
  },

  
  firstImage: {
    position: "relative",
    left: "20px",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      left: "0px",
      zIndex: 11,
    },
  },
  secondImage: {
    position: "relative",
    left: "10px",
    [theme.breakpoints.down("xs")]: {
      left: "-8px",
      zIndex: 1,
    },
  },
  thirdImage: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      left: "-15px",
    },
  },
  firstIcon: {
    position: "relative",
    right: "20px",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {},
  },
  secondIcon: {
    position: "relative",
    right: "10px",
    [theme.breakpoints.down("xs")]: {},
  },
  imgHeader: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  card: {
    height: "350px",
    padding: "30px",
    background: "#fff",
    borderRadius: "0.6em",
    border: `1px solid ${Theme.lightGray}`,
    margin: "1em",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all ease 200ms",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  subHeaders: {
    display: "flex",
    margin: "15px 0px ",
    alignItems: "center",
    fontFamily: "InterRegular !important" as any,
    "& div": {
      width: "45%",
      textAlign: "start",
    },
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  footerBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "InterRegular !important" as any,
    margin: "10px 0",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontFamily: "InterRegular !important" as any,
    },
  },
  btnWidth: {
    width: "49%",
    [theme.breakpoints.down("xs")]: {},
  },
  headermangne: {
    paddingLeft: "24px",
    [theme.breakpoints.down("xs")]: {},
  },
  Arrowforward: {},
  gridbutton: {},
  etherumIcon: {
    width: "16px",
    position: "absolute",
    top: "12px",
  },
  selectNetwork: {
    position: "relative",
  },
}));
