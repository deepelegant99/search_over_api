import React from "react";
import '../App.js'

const Card = ({ name, role, url, image_url }) => {
  return (
    <>
      <card>
        <img src={image_url} />
        <div className="menu">
          <div>
            <label>{name}</label>
          </div>
          <div>
            <label>{role}</label>
          </div>
          <div>
            <button src={url}>URL</button>
          </div>
        </div>
      </card>
    </>
  );
};

export default Card;

 
