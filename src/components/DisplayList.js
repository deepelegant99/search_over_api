import React from "react";
import Card from "./Card";

const DisplayList = ({ list }) => {
  return (
    <div className="gallery">
      {list.map((dic) => {
        return (
          <Card
            name={dic.name}
            role={dic.role}
            url={dic.url}
            image_url={dic.image_url}
          />
        );
      })}
    </div>
  );
};

export default DisplayList;
