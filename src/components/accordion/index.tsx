import cx from "./cx";
import Accordion1 from "./1_react";
import Accordion2 from "./2_react";
import Accordion3 from "./3_react";
import Accordion4 from "./4_vanilla";
import Accordion5 from "./5_vanilla";
import Accordion6 from "./6_react";
import Accordion7 from "./7_react";
import Accordion8 from "./8_react";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h2>아코디언</h2>
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4 />
      <Accordion5 />
      <Accordion6 />
      <Accordion7 />
      <Accordion8 />
    </div>
  );
};

export default Accordions;
