import React from "react";
import preloader from "../../../Image/25.gif";
import p from "./preloader.module.css";

export const Preloader = () => {
  return (
      <div className={p.preloader}>
          <img src={preloader}/>
      </div>
  )


}