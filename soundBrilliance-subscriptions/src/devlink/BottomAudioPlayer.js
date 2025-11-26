"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BottomAudioPlayer.module.css";

export function BottomAudioPlayer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "audio-player_wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "audio-player_container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "audio-player_meta-wrapper")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "audio-player_meta-image")}
            loading="lazy"
            width="auto"
            height="auto"
            id="player-image"
            alt=""
            src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "audio-player_meta", "is-player")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "audio-player_meta-artist")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-color-black")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-size-small",
                    "text-style-muted",
                    "text-style-overflow-el"
                  )}
                  tag="div"
                  id="player-subtitle"
                >
                  {"Sub Title"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-size-large",
                "text-color-black",
                "text-style-overflow-el"
              )}
              tag="div"
              id="player-title"
            >
              {"Title"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "audio-player_embed")}
          tag="div"
          id="player-embed"
        />
      </_Builtin.Block>
    </_Component>
  );
}
