import React, { useCallback, useEffect, useState } from "react";
import { useStyles } from "../SampleStyle";
import TextField from "@mui/material/TextField";
import { ListData } from "../../assets/Json";
import { GridData } from "../../assets/GridData";
import Toggle from "../../components/toggle/Toggle";
import Alltabs from "../../components/tabs/Alltabs";
import Searchandselect from "../../components/searchandselect/Searchandselect";
import Iconbackground from "../../components/iconwithbackground/Iconbackground";
import bridge from "../../assets/icons/bridge.svg";
import GridPage from "../grid/GridPage";
import Listpage from "../list/Listpage";
import { Streetview } from "@material-ui/icons";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

const Content = (props: { tabValue: any }) => {
  const classes = useStyles();
  const [View, setView] = useState(false);
  const [tabPage, setTabPage] = useState<number>(0);
  const [ListDetails, setListDetails] = useState<any[]>([]);

  const handleTab = (data: any) => {
    setTabPage(data);
    props.tabValue(data);
  };

  useEffect(() => {
    if (View) {
      setListDetails(GridData);
    } else {
      setListDetails(ListData);
    }
  }, [View]);

  console.log(ListDetails, "details");

  const filterList = useCallback(
    (data: any, SearchData: any) => {
      setView(data);
      if (SearchData.sort === "asc") {
        const strAscending = [...ListDetails].sort((a, b) =>
          a.Cohort29 > b.Cohort29 ? 1 : -1
        );
        setListDetails(strAscending);
      }

      if (SearchData.sort === "desc") {
        const strDescending = [...ListDetails].sort((a, b) =>
          a.Cohort29 > b.Cohort29 ||
          a.APY > b.APY ||
          a.PoolFilled > b.PoolFilled
            ? -1
            : 1
        );
        setListDetails(strDescending);
      }

      const list = ListDetails.filter((data) => {
        if (SearchData.search === "") return data;
        else if (
          (data.APY !== null &&
            data.APY.toString()
              .toLowerCase()
              .includes(SearchData.search.toLowerCase())) ||
          (data.Cohort29 != null &&
            data.Cohort29.toString()
              .toLowerCase()
              .includes(SearchData.search.toLowerCase())) ||
          (data.PoolFilled != null &&
            data.PoolFilled.toString()
              .toLowerCase()
              .includes(SearchData.search.toLowerCase()))
        ) {
          return data;
        }
      });
      setListDetails(list);
    },
    [ListDetails]
  );

  return (
    <div>
      <div className={classes.topfarmManagne}>
        <div className={classes.farmManagnement}>
          <div className={classes.farmtitle}>Farms</div>

          <div className={classes.farmContent}>
            Stake one token and earn multiple token as rewards with high APY and
            low risk
          </div>
        </div>
        <div>
          <Toggle />
        </div>
      </div>

      <Alltabs tabChange={(data: number) => handleTab(data)} />

      <Searchandselect
        changeView={(data: any, SearchData: any) =>
          filterList(data, SearchData)
        }
      />

      {tabPage === 0 ? (
        <>
          {View ? (
            <GridPage GridDetails={ListDetails} />
          ) : (
            <Listpage ListDetails={ListDetails} />
          )}
        </>
      ) : (
        <>No Data Found</>
      )}
    </div>
  );
};

export default Content;
