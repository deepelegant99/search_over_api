import React from "react";

const DisplayList = ({list}) => {
  return (
    <div>
      {list.map((dic) => {
        return (
          <>
            <div>Name: {dic.name}</div>
            <div>Role: {dic.role}</div>
            <div>URL:  {dic.url}</div>
            <div>Image URL: {dic.image_url}</div>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default DisplayList;
