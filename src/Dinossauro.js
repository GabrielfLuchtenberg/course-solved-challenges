import React from "react";
import "./styles.css";

const Dino = props => (
  <div style={{ color: props.color }}>
    <span>█████████</span>
    <span>█▄█████▄█</span>
    <span>█▼▼▼▼▼</span>
    <span>█</span>
    {props.children && <span>█{props.children}</span>}
    <span>█▲▲▲▲▲</span>
    <span>█████████</span>
    <span> ██ ██</span>
  </div>
);

export { Dino };
