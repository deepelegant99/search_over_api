import React from "react";

const Card = ({ name, role, url, image_url }) => {
  return (
    <>
      <div>
        <img src={image_url} alt={"some"} />
      </div>
      <div>{name}</div>
      <div>{role}</div>
      <div>{url}</div>
    </>
  );
};

export default Card;
