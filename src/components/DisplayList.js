import React from "react";

const DisplayList = ({list}) => {
  return (
    <div>
      {list.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default DisplayList;
