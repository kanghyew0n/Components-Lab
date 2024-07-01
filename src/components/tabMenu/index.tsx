import TabMenu1 from "./1_react";
import TabMenu2 from "./2_react";
import TabMenu3 from "./3_react";
import cx from "./cx";

const TabMenus = () => {
  return (
    <div className={cx("TabMenus")}>
      <h2>탭메뉴</h2>
      <TabMenu1 />
      <TabMenu2 />
      <TabMenu3 />
    </div>
  );
};

export default TabMenus;
