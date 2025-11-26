"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AppleDownload.module.css";

export function AppleDownload({
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
        src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/6925f67425e4bce130638f0d_appledownload.svg"
      />
    </_Component>
  );
}
