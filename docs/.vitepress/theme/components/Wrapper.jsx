import React from "react";
import './style.css'
import ButtonPlayground from "./button/ButtonPlayground";

export default function Wrapper({children, compConfig}) {
  const [config, setConfig] = React.useState({});

  return (
    <>
      <div className="dyvix-playground-wrapper">
      <div className="dyvix-hud-overlay">
      

      </div>
      <div>
        {React.cloneElement(children)}
      </div>
      </div>
    </>
  )
}