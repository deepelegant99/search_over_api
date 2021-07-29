import React from "react";

const DisplayList = ({list}) => {
  return (
    <div>
      {list.map((dic) => {
        return (
          <>
            <div>{dic.name}</div>
            <div>{dic.role}</div>
            <div>{dic.url}</div>
          </>
        );
      })}
    </div>
  );
};

export default DisplayList;
