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
          <form method="GET" action={url}>
            <button>URL</button>
            </form>
          </div>
        </div>
      </card>
    </>
  );
};

export default Card;

 
