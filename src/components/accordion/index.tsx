import cx from "./cx";
import Accordion1 from "./1_react";
import Accordion2 from "./2_react";
import Accordion3 from "./3_react";

const Accordions = () => {
  return (
    <div className={cx("Accordions")}>
      <h2>아코디언</h2>
      <Accordion1 />
      <Accordion2 />
      <Accordion3/>
    </div>
  );
};

export default Accordions;
