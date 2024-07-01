import { useState } from "react";
import cx from "./cx";
import data from "./data";

const TabMenuItem = ({
  id,
  title,
  current,
  clickedItem,
}: {
  id: string;
  title: string;
  current: boolean;
  clickedItem: () => void;
}) => {
  return (
    <li key={id} className={cx("tab", { current })} onClick={clickedItem}>
      {title}
    </li>
  );
};

const TabMenu2 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id);

  const clickedItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? prev : id));
  };

  return (
    <>
      <h3>
        #2. React <sub>다 그려놓고 hidden/show css로 처리</sub>
      </h3>
      <div className={cx("container", "tabMenu2")}>
        <ul className={cx("tabList")}>
          {data.map((d) => (
            <TabMenuItem
              {...d}
              key={d.id}
              current={d.id === currentId}
              clickedItem={clickedItem(d.id)}
            />
          ))}
        </ul>
        {data.map((d) => (
          <div className={cx("description", { current: currentId === d.id })}>
            {d.description || ""}
          </div>
        ))}
      </div>
    </>
  );
};
export default TabMenu2;
