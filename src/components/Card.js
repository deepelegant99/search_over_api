import React from "react";

const Card = ({ name, role, url, image_url }) => {
  return (
    <>
      <div>
        <img src={image_url} alt={"some"} />
      </div>
      <div>Name: {name}</div>
      <div>Role: {role}</div>
      <div>URL: {url}</div>
    </>
  );
};

export default Card;
