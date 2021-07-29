import React from "react";
import Card from "./Card";

const DisplayList = ({ list }) => {
  return (
    <div>
      {list.map((dic) => {
        return(
        <Card
          name={dic.name}
          role={dic.role}
          url={dic.url}
          image_url={dic.image_url}
        />)
      })}
    </div>
  );
};

export default DisplayList;
// <>
//     <div>Name: {dic.name}</div>
//     <div>Role: {dic.role}</div>
//     <div>URL:  {dic.url}</div>
//     <div>Image URL: {dic.image_url}</div>
//     <br />
//   </>
