import React from "react";

export default function Avartar({ image, isNew }) {
  return (
    <div>
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}
