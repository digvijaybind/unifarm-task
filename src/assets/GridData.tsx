import FTXicon from "../assets/icons/FTXicon.svg";
import Tether from "../assets/icons/tether.svg";
import DAIicon from "../assets/icons/DAIicon.svg";
import DOTicon from "../assets/icons/DOTicon.svg";
import LINKicon from "../assets/icons/LINKicon.svg";
import Uni from "../assets/icons/Uni.svg";
import Reward11 from "../assets/icons/grid/reward1.1.svg";
import Reward12 from "../assets/icons/grid/reward1.2.svg";
import Reward13 from "../assets/icons/grid/reward1.3.svg";
import Reward21 from "../assets/icons/grid/reward2.1.svg";
import Reward22 from "../assets/icons/grid/reward2.2.svg";
import Reward23 from "../assets/icons/grid/reward2.3.svg";
import Reward31 from "../assets/icons/grid/reward3.1.svg";
import Reward32 from "../assets/icons/grid/reward3.2.svg";
import Reward33 from "../assets/icons/grid/reward3.3.svg";
import Reward41 from "../assets/icons/grid/reward4.1.svg";
import Reward42 from "../assets/icons/grid/reward4.2.svg";
import Reward43 from "../assets/icons/grid/reward4.3.svg";
import Reward51 from "../assets/icons/grid/reward5.1.svg";
import Reward52 from "../assets/icons/grid/reward5.2.svg";
import Reward53 from "../assets/icons/grid/reward5.3.svg";
import Reward61 from "../assets/icons/grid/reward6.1.svg";
import Reward62 from "../assets/icons/grid/reward6.2.svg";
import Reward63 from "../assets/icons/grid/reward6.3.svg";
import rocket from "../assets/icons/reward/rocket.svg";
import Calculator from "../assets/icons/reward/calculator.svg";
const GridData = [
  {
    mainIcon: Tether,
    cohort29: "USDT",
    poolFilled: 93.86,
    rewards: [{ icon: Reward11 }, { icon: Reward12 }, { icon: Reward13 }],
    apy: "94.08%",
    button: [
      {
        icon: rocket,
        title: "Get Upto 200%",
        background: false,
      },
      {
        title: "Stake",
        background: false,
      },
    ],
  },

  {
    mainIcon: FTXicon,
    cohort29: "FTX",
    poolFilled: 78.57,
    rewards: [
      { icon: Reward21 },
      { icon: Reward22 },
      { icon: Reward23 },
      { icon: Reward21 },
      { icon: Reward21 },

      { icon: Reward21 },
    ],
    apy: "93.86%",
    button: [
      {
        icon: rocket,
        title: "Boosted",
        background: true,
      },

      {
        title: "Stake",
        background: false,
      },
    ],
  },
  {
    mainIcon: LINKicon,
    cohort29: "LINK",
    poolFilled: 24.9,
    rewards: [{ icon: Reward31 }, { icon: Reward32 }, { icon: Reward33 }],
    apy: "22.97%%",
    button: [
      {
        icon: Calculator,
        title: "Calculate APY",
        background: false,
      },
      {
        title: "stake",
        background: false,
      },
    ],
  },
  {
    mainIcon: Uni,
    cohort29: "Uni",
    poolFilled: 93.86,
    rewards: [{ icon: Reward41 }, { icon: Reward42 }, { icon: Reward43 }],
    apy: "94.08%",
    button: [
      {
        icon: Calculator,
        title: "Calculate APY",
        background: true,
      },
      {
        title: "Stake",
        background: true,
      },
    ],
  },
  {
    mainIcon: FTXicon,
    cohort29: "FTX",
    poolFilled: 78.57,
    rewards: [{ icon: Reward51 }, { icon: Reward52 }, { icon: Reward53 }],
    apy: "93.86%",
    button: [
      {
        icon: rocket,
        title: "Boosted",
        background: true,
      },

      {
        title: "Stake",
        background: false,
      },
    ],
  },
  {
    mainIcon: LINKicon,
    cohort29: "LINK",
    poolFilled: 24.9,
    rewards: [{ icon: Reward61 }, { icon: Reward62 }, { icon: Reward63 }],
    apy: "22.97%%",
    button: [
      {
        icon: rocket,
        title: "Calculate APY",
        background: false,
      },
      {
        title: "stake",
        background: false,
      },
    ],
  },
];

export { GridData };
