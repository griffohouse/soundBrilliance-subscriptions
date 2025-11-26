"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SbApp.module.css";

export function SbApp({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "logo_app_wrapper")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Image
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/691f7f81f3f7f6a777269968_sb_logo.svg"
      />
    </_Component>
  );
}
