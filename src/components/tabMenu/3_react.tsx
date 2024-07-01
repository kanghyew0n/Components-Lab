import { useState } from "react";
import cx from "./cx";
import data from "./data";

const TabMenuItem = ({
  id,
  title,
  description,
  current,
  clickedItem,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  clickedItem: () => void;
}) => {
  return (
    <li key={id} className={cx("item", { current })}>
      <div className={cx("tab")} onClick={clickedItem}>
        {title}
      </div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

// 스크린리더를 읽어줄때 의미 있음, title => desc 순서로 읽게됨
const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const clickedItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? prev : id));
  };

  return (
    <>
      <h3>#3. React <sub>한 리스트 안에 title/desc 모두 있게 처리</sub></h3>
      <ul className={cx("container", 'tabMenu3')}>
        {data.map((d) => (
          <TabMenuItem
            {...d}
            key={d.id}
            current={d.id === currentId}
            clickedItem={clickedItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};
export default TabMenu3;
