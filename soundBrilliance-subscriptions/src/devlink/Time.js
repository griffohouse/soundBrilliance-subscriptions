"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Time.module.css";

export function Time({
  as: _Component = _Builtin.Block,
  time = "20m",
  bottom,
  uppercase,
  theme,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "artist-single-playlist_mood-wrapper")}
      tag="div"
      bottom={bottom}
      uppercase={uppercase}
      theme={theme}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "audio-single-playlist_mood")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-size-tiny")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-style-pill",
              "is-blurred",
              "is-tiny"
            )}
            tag="div"
          >
            {time}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
