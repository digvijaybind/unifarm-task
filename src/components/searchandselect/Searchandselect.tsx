import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { useStyles } from "../CommonClass";
import { FormatListBulleted, GridView } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SearchProps {
  changeView?: any;
}
const Searchandselect = (props: SearchProps) => {
  const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];
  const classes = useStyles();
  const [selectType, setSelectType] = useState(false);
  const [SearchData, setSearchData] = useState({
    search: "",
    sort: "",
  });

  useEffect(() => {
    props.changeView(selectType, SearchData);
  }, [selectType, SearchData]);

  const onTagsChange = (event: any, key: string): void => {
    let data = event.target.value;
    setSearchData((prev: any) => ({
      ...prev,
      [key]: data,
    }));
  };
 
  return (
    <div className={classes.searchContent}>
      <div className={classes.searchInputs}>
        <div className={classes.fields}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            value={SearchData.search}
            onChange={(event: any) => onTagsChange(event, "search")}
          />
        </div>
        <Stack spacing={2} sx={{ width: 250 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={SearchData.sort}
              onChange={(event: any) => onTagsChange(event, "sort")}
            >
              <MenuItem value={"asc"}>A-Z</MenuItem>
              <MenuItem value={"desc"}>Z-A</MenuItem>
            </Select>
          </FormControl>
          {/* <Autocomplete
            id="size-small-filled"
            size="small"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films[13]}
            onChange={(event: any)=>onTagsChange(event,values, 'search' )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.title}
                  size="small"
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Size small"
                placeholder="Favorites"
                variant="standard"
                className={classes.Selectdrop}
              />
            )}
          /> */}
        </Stack>
      </div>
      <div>
        <div className={classes.displayType}>
          <div
            className={`${classes.typeCard} ${classes.listType} ${
              !selectType && classes.selectedType
            }`}
            onClick={() => setSelectType(false)}
          >
            <FormatListBulleted />
          </div>
          <div
            className={`${classes.typeCard} ${classes.gridType} ${
              selectType && classes.selectedType
            } `}
            onClick={() => setSelectType(true)}
          >
            <GridView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchandselect;
