"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AudioWrapper.module.css";

export function AudioWrapper({
  as: _Component = _Builtin.Block,
  cover = "",
  title = "Title",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "audio-wrapper_component")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "audio-wrapper_layout")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "audio-wrapper_image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={cover}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "audio-wrapper_title")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-style-italic")}
            tag="h3"
          >
            {title}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
