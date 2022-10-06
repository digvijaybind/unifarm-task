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
    cohort29: "FTX",
    poolFilled: 78.24,
    rewards: [
      { icon: Reward11 },
      { icon: Reward12 },
      { icon: Reward13 },
      { icon: Reward31 },
      { icon: Reward32 },
    ],
    apy: "98%",
    fireIcon: true,
    button: {
      icon: rocket,
      title: "Get Upto 200%",
      background: false,
    },
  },

  {
    mainIcon: LINKicon,
    cohort29: "LINK",
    poolFilled: 24.9,
    rewards: [{ icon: Reward21 }, { icon: Reward22 }, { icon: Reward23 }],
    apy: "22.97%",
    button: {
      icon: rocket,
      title: "Boosted",
      background: true,
    },
  },
  {
    mainIcon: DAIicon,
    cohort29: "DAI",
    poolFilled: 49.3,
    rewards: [
      { icon: Reward31 },
      { icon: Reward32 },
      { icon: Reward33 },
      { icon: Reward31 },
      { icon: Reward32 },
      { icon: Reward33 },
    ],
    apy: "39.28%",
    fireIcon: true,
    button: {
      icon: Calculator,
      title: "Calculate APY",
      background: false,
    },
  },
  {
    mainIcon: Uni,
    cohort29: "Uni",
    poolFilled: 10.86,
    rewards: [{ icon: Reward41 }, { icon: Reward42 }, { icon: Reward43 }],
    apy: "96.41%",
    button: {
      icon: rocket,
      title: "Boosted",
      background: true,
    },
  },
  {
    mainIcon: DOTicon,
    cohort29: "Dot",
    poolFilled: 10.86,
    rewards: [{ icon: Reward41 }, { icon: Reward42 }, { icon: Reward43 }],
     apy: "96.41%",
    button: {
      icon: Calculator,
      title: "Calculate APY",
      background: false,
    },
  },
];

export { ListData };
