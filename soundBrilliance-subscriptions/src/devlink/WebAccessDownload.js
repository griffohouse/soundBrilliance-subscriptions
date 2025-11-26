"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WebAccessDownload.module.css";

export function WebAccessDownload({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "download_link_wrapper")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Image
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/6925f7689c80564798c50675_webaccess.svg"
      />
    </_Component>
  );
}
