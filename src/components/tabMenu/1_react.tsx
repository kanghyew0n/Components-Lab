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

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id);

  const clickedItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? prev : id));
  };

  const currentData = data.find((d) => d.id === currentId)?.description;

  return (
    <>
      <h3>
        #1. React <sub>현재 desc만 html 그리기</sub>
      </h3>
      <div className={cx("container")}>
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
        <div className={cx("description")}>
          {currentData || ""}
        </div>
      </div>
    </>
  );
};
export default TabMenu1;
