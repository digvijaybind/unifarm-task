import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "../../components/button/CommonButton";
import FireIcon from "../../assets/icons/Fire.svg";
import { useStyles } from "../SampleStyle";

const Listpage = (props: { ListDetails: any }) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [AllDetails, setAllDetails] = useState<any[]>([]);

  useEffect(() => {
    setAllDetails(props.ListDetails);
  }, [props.ListDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className={classes.listBorder}>
        {AllDetails?.map((data) => {
          {
            console.log(data?.rewards, "data?.Rewards");
          }
          return (
            <div className={classes.listCard}>
              <Grid xs={12} container direction="row" alignItems={"center"}>
                <Grid item xs={1} md={1} lg={1}>
                  <img src={data.mainIcon} className={classes.mainIcon} />
                  {/* <Iconbackground icon={Fire} color={"#E5E5E5"} /> */}
                </Grid>
                <Grid
                  item
                  xs={7.2}
                  md={7.5}
                  lg={7.5}
                  container
                  direction="row"
                  // spacing={1}
                >
                  <Grid
                    item
                    xs={2.9}
                    md={3}
                    lg={3}
                    className={classes.listDetails}
                  >
                    <div className={classes.listHeading}>
                      Cohort 29 {data.fireIcon && <img src={FireIcon} />}
                    </div>
                    <div className={classes.percentage}>{data.cohort29}</div>
                  </Grid>
                  <Grid
                    item
                    xs={2.9}
                    md={3}
                    lg={3}
                    className={classes.listDetails}
                  >
                    <div className={classes.listHeading}>Pool Filled</div>
                    <div className={classes.progressCircle}>
                      <CircularProgress
                        variant="determinate"
                        value={Number(data.poolFilled)}
                        // size={30}
                        className={classes.circleprogres}
                        thickness={6}
                        color={
                          Number(data.poolFilled) > 50 ? "success" : "error"
                        }
                      />
                      <div
                        className={`${classes.percentage} ${classes.paddingVal}`}
                      >
                        {data.poolFilled + " %"}
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={3.6}
                    md={3}
                    lg={3}
                    className={classes.listDetails}
                  >
                    <div className={classes.listHeading}>Rewards</div>
                    {data?.Rewards !== undefined && (
                      <div className={classes.rewardIcons}>
                        {data?.rewards.map((item: any, index: any) => (
                          <>
                            {index < 3 && (
                              <img
                                src={item.icon}
                                alt=""
                                key={index}
                                className={`${classes.threeicon} ${
                                  (index === 0 && classes.firstImage) ||
                                  (index === 1 && classes.secondImage) ||
                                  (index === 2 && classes.thirdImage)
                                }`}
                              />
                            )}
                          </>
                        ))}
                        {data?.rewards.length > 3 && (
                          <div className={classes.imageCount}>
                            +{data?.rewards.length - 4}
                          </div>
                        )}
                      </div>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={2.5}
                    md={3}
                    lg={3}
                    className={classes.listDetails}
                  >
                    <div className={classes.listHeading}>APY</div>
                    <div className={classes.percentage}>{data.apy}</div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={3.5}
                  md={2.5}
                  lg={2.5}
                  container
                  direction="row"
                  justifyItems={"flex-start"}
                >
                  <Button
                    colors={"primary"}
                    btnName={data.button.title}
                    variants={"contained"}
                    border={"blue"}
                    icon={data.button.icon}
                    leftIcon
                  />
                </Grid>
                <Grid
                  item
                  xs={0.3}
                  md={1}
                  lg={1}
                  className={`${classes.centerAlign} ${classes.arrowView}`}
                >
                  <ArrowForwardIosIcon className={classes.Arrowforward} />
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listpage;
