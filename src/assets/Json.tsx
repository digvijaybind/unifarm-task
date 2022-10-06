import FTXicon from "../assets/icons/FTXicon.svg";
import DAIicon from "../assets/icons/DAIicon.svg";
import DOTicon from "../assets/icons/DOTicon.svg";
import LINKicon from "../assets/icons/LINKicon.svg";
import Uni from "../assets/icons/Uni.svg";
import Reward11 from "../assets/icons/reward/reward1.1.svg";
import Reward12 from "../assets/icons/reward/reward1.2.svg";
import Reward13 from "../assets/icons/reward/reward1.3.svg";
import Reward21 from "../assets/icons/reward/reward2.1.svg";
import Reward22 from "../assets/icons/reward/reward2.2.svg";
import Reward23 from "../assets/icons/reward/reward2.3.svg";
import Reward31 from "../assets/icons/reward/reward3.1.svg";
import Reward32 from "../assets/icons/reward/reward3.2.svg";
import Reward33 from "../assets/icons/reward/reward3.3.svg";
import Reward41 from "../assets/icons/reward/reward4.1.svg";
import Reward42 from "../assets/icons/reward/reward4.2.svg";
import Reward43 from "../assets/icons/reward/reward4.3.svg";
import rocket from "../assets/icons/reward/rocket.svg";
import Calculator from "../assets/icons/reward/calculator.svg";
const ListData = [
  {
    mainIcon: FTXicon,
    Cohort29: "FTX",
    PoolFilled: 78.24,
    Rewards: [
      { icon: Reward11 },
      { icon: Reward12 },
      { icon: Reward13 },
      { icon: Reward31 },
      { icon: Reward32 },
    ],
    APY: "98%",
    fireIcon: true,
    button: {
      icon: rocket,
      title: "Get Upto 200%",
      background: false,
    },
  },

  {
    mainIcon: LINKicon,
    Cohort29: "LINK",
    PoolFilled: 24.9,
    Rewards: [{ icon: Reward21 }, { icon: Reward22 }, { icon: Reward23 }],
    APY: "22.97%",
    button: {
      icon: rocket,
      title: "Boosted",
      background: true,
    },
  },
  {
    mainIcon: DAIicon,
    Cohort29: "DAI",
    PoolFilled: 49.3,
    Rewards: [
      { icon: Reward31 },
      { icon: Reward32 },
      { icon: Reward33 },
      { icon: Reward31 },
      { icon: Reward32 },
      { icon: Reward33 },
    ],
    APY: "39.28%",
    fireIcon: true,
    button: {
      icon: Calculator,
      title: "Calculate APY",
      background: false,
    },
  },
  {
    mainIcon: Uni,
    Cohort29: "Uni",
    PoolFilled: 10.86,
    Rewards: [{ icon: Reward41 }, { icon: Reward42 }, { icon: Reward43 }],
    APY: "96.41%",
    button: {
      icon: rocket,
      title: "Boosted",
      background: true,
    },
  },
  {
    mainIcon: DOTicon,
    Cohort29: "Dot",
    PoolFilled: 10.86,
    Rewards: [{ icon: Reward41 }, { icon: Reward42 }, { icon: Reward43 }],
    APY: "96.41%",
    button: {
      icon: Calculator,
      title: "Calculate APY",
      background: false,
    },
  },
];

export { ListData };
