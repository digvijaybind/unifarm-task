import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "../../components/button/CommonButton";
import { useStyles } from "../SampleStyle";
import Card from "@mui/material/Card";
import LINKicon from "../../assets/icons/LINKicon.svg";

const GridPage = (props: { GridDetails: any }) => {
  const classes = useStyles();
  const [stakeBtn, setStakeBtn] = useState<string[]>([]);
  const [AllDetails, setAllDetails] = useState<any[]>([]);

  useEffect(() => {
    setAllDetails(props.GridDetails);
  }, [props.GridDetails]);
  const onStack = (data: any) => {
    setStakeBtn([...stakeBtn, data]);
  };

  console.log(stakeBtn, "stakeBtn");
  const getType = (data: any) => {
    if (data > 50) return "success";
    else if (data > 20) return "error";
  };

  return (
    <div>
      {/* <Card> */}
      <Grid xs={12} container direction="row" alignItems={"center"}>
        {AllDetails.map((data: any, id: any) => {
          return (
            // <div className={classes.listCard}>
            <Grid
              xs={12}
              md={6}
              lg={4}
              container
              direction="column"
              // alignItems={"center"}
              // justifyItems={"flex-start"}
            >
              <div className={classes.card}>
                <div className={classes.imgHeader}>
                  <img src={data.mainIcon} alt="" />
                  <div className={classes.headermangne}>
                    <div className={classes.listHeadings}>Cohort 29</div>
                    <div className={classes.percentages}>{data.cohort}</div>
                  </div>
                </div>
                <div className={classes.subHeaders}>
                  <div className={classes.listHeadings}>Pool Filled</div>
                  <div className={classes.progressCircle}>
                    <CircularProgress
                      variant="determinate"
                      value={data.PoolFilled}
                      size={30}
                      thickness={6}
                      color={getType(data.PoolFilled)}
                    />
                    <div
                      className={`${classes.percentages} ${classes.paddingVals}`}
                    >
                      {data.PoolFilled + " %"}
                    </div>
                  </div>
                </div>
                <div className={classes.subHeaders}>
                  <div className={classes.listHeadings}>Rewards</div>
                  <div className={classes.rewardIcons}>
                    {data?.rewards?.map((item: any, index: any) => (
                      <>
                        {index < 3 && (
                          <img
                            src={item.icon}
                            alt=""
                            key={index}
                            className={`${
                              (index === 2 && classes.firstIcon) ||
                              (index === 1 && classes.secondIcon)
                            }`}
                          />
                        )}
                      </>
                    ))}
                    {data?.rewards?.length > 3 && (
                      <div className={classes.listHeadings}>
                        +{data?.rewards?.length - 4}
                      </div>
                    )}
                  </div>
                </div>
                <div className={classes.subHeaders}>
                  <div className={classes.listHeadings}>APY</div>
                  <div className={classes.percentages}>{data.APY}</div>
                </div>
                <div className={classes.footerBtn}>
                  {data?.button.length > 0 &&
                    data?.button?.map((btn: any, key: any) => (
                      <div className={classes.btnWidth}>
                        <Button
                          colors={"primary"}
                          btnName={btn.title}
                          variants={"contained"}
                          border={key === 0 ? "blue" : "purple"}
                          icon={btn.icon}
                          blueBg={btn.background}
                          leftIcon={key === 0 ? true : false}
                          width
                        />
                      </div>
                    ))}
                </div>
              </div>
            </Grid>
            // </div>
          );
        })}
      </Grid>
      {/* </Card> */}
    </div>
  );
};

export default GridPage;
