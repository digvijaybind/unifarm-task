import { makeStyles } from "@material-ui/core/styles";
import { BorderStyle } from "@material-ui/icons";
import { hover } from "@testing-library/user-event/dist/hover";
import Theme from "../assets/Theme";
export const useStyles: any = makeStyles((theme) => ({
  button: {
    textTransform: "unset",
    borderRadius: "10px",
    borderStyle: "solid",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "19px",
    padding: "10px",
    margin: theme.spacing(1),
    borderWidth: "1px",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "InterRegular !important" as any,
      minWidth: 32,
      paddingLeft: 8,
      paddingRight: 8,
      "& .MuiButton-startIcon": {
        margin: 0,
      },
    },
  },
  buttonWidth: {
    width: "100%",
  },
  buttonText: {
    fontFamily: "InterRegular !important" as any,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("md")]: {},
  },
  grayBorder: {
    borderColor: `${Theme.borderGray}`,
    color: `${Theme.black}`,
  },
  buttonLeftIcon: {
    marginRight: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "20px",
      marginRight: "10px",
    },
  },
  buttonRightIcon: {
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "20px",
      marginRight: "10px",
    },
  },
  pupleBorder: {
    borderColor: `${Theme.purple}`,
    color: `${Theme.purple}`,
    "&:hover": {
      backgroundColor: `${Theme.purple}`,
      color: `${Theme.white}`,
    },
  },
  blueBorder: {
    borderColor: `${Theme.blue}`,
    color: `${Theme.blue}`,
  },
  blueBackground: {
    backgroundColor: "rgba(216, 243, 255, 0.5)",
  },
  fillButton: {
    backgroundColor: `${Theme.purple}`,
    color: `${Theme.white}`,
  },
  iconView: {
    width: "20px",
    marginRight: "20px",
  },
  tabManagne: {
    margin: "15px 0",
    height: "40px",
    borderColor: `${Theme.borderGray}`,
    color: `${Theme.borderGray}`,
    borderRadius: "10px",
    "MuiTabs-root": {
      borderBottomWidth: "1px",
      borderStyle: "solid",
      backgroundColor: "red",
    },
    // MuiTabs-root : {

    // }
  },
  backgroundiconback: {
    display: "flex",
    alignItems: "center",
    // boxShadow: "inset 0px -2px 0px rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    width: "63px",
    height: "60px",
    borderRadius: "35px",
  },
  smallSize: {
    width: "30px",
    height: "30px",
  },
  Iconcenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
  },
  smallIcon: {
    width: "13px",
  },
  searchContent: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    fontFamily: "InterRegular !important" as any,
  },
  searchInputs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "InterRegular !important" as any,
  },
  fields: {
    marginRight: "25px",
    fontFamily: "InterRegular !important" as any,
  },
  displayType: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typeCard: {
    borderColor: `${Theme.borderGray}`,
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "10px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  listType: {
    borderRadius: "25px 0px 0px 25px",
    color: `${Theme.gray}`,
  },
  gridType: {
    borderRadius: "0px 25px 25px 0px",
    color: `${Theme.gray}`,
  },
  selectedType: {
    color: `${Theme.white}`,
    backgroundColor: `${Theme.purple}`,
  },
  Selectdrop: {
    "& .MuiInputBase-rootre": {
      backgroundColor: "red",
    },
  },
  btntext: {
    fontSize: "10px",
    fontFamily: "InterRegular !important" as any,
  },
 
  Alltabmang: {
    borderBottom: `1px solid ${Theme.borderGray}`,
  },
  seletedLink: {
    color: `${Theme.purple}`,
    fontWidth: 700,
    fontSize: "16px",
  },
}));
