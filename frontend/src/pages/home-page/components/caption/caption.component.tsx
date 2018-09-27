import * as React from "react"

const style = require("./caption.style.scss");


export const CaptionComponent = () => (
  <div className={style.caption}>
    <p className={style.title}>Legislation Uploaded.</p>
    <p className={style.subtitle}>Let's find out what's in Beld & Road Countries Legislation.</p>
  </div>
);
