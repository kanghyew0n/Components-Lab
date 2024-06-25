import { useState } from "react";

const Test_React = () => {
  const [show, toggle] = useState(false);

  return (
    <div>
      테스트2 - 리액트
      <button onClick={() => toggle((prev) => !prev)}>토글</button>
      <p>{show ? "켜짐" : "꺼짐"}</p>
    </div>
  );
};

export default Test_React;
