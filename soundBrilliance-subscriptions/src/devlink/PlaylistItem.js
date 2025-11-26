"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PlaylistItem.module.css";

export function PlaylistItem({
  as: _Component = _Builtin.Block,
  name = "2 Songs",
  backgroundImage = "",
  songs = "Length",
  type = "Calm",
  mood,
  wistiaSource,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "artist-visuals_item")}
      tag="div"
      wistia-src={wistiaSource}
      mood={mood}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "artist-visuals_link")}
        value="%3Cscript%20charset%3D%22ISO-8859-1%22%20src%3D%22%2F%2Ffast.wistia.com%2Fassets%2Fexternal%2FE-v1.js%22%20async%3E%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22wistia_embed%20wistia_async_nbqxpvps09%20settingsControl%3Dtrue%20qualityControl%3Dtrue%20playbackRateControl%3Dfalse%20%20popover%3Dtrue%20popoverContent%3Dhtml%20popoverOverlayOpacity%3D0.8%22%20style%3D%22display%3Ainline-block%3Bheight%3A100%25%3Bposition%3Arelative%3Bwidth%3A100%25%22%3E%3C%2Fdiv%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "artist-visuals_content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "artist-visuals_content-left")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-embed-large", "mobile-small")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zM9.5%2016.5v-9l7%204.5l-7%204.5z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "artist-visuals_content-right")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-style-muted")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-style-allcaps",
                "text-size-small"
              )}
              tag="div"
            >
              {songs}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-style-h5")}
            tag="div"
          >
            {name}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "artist-visuals_overlay")}
        tag="div"
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "artist-visuals_background-image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={backgroundImage}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "artist-visuals_content-mood")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-style-pill", "text-size-tiny")}
          tag="div"
        >
          {type}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
