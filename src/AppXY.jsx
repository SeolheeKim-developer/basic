import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //const [x, setX] = useState(0);
  //const [y, setY] = useState(0);
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        //setX(e.clientX);
        //setY(e.clientY);
        //관련된 값  하나의 객체로 관리
        //setPosition({ x: e.clientX, y: e.clientY });
        //만약 수평으로만 이동이 가능하다면?
        setPosition((prev) => ({ x: e.clientX, y: prev.y }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
