"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BtnHeader.module.css";

export function BtnHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "header7_logo-wrapper")}
      tag="div"
    >
      <_Builtin.Image
        loading="lazy"
        width="292"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/64c824e621a070167388ee4d_logo.svg"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "icon-embed-xsmall")}
        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M220%20128a4%204%200%200%201-4%204h-84v84a4%204%200%200%201-8%200v-84H40a4%204%200%200%201%200-8h84V40a4%204%200%200%201%208%200v84h84a4%204%200%200%201%204%204Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
      />
      <_Builtin.Image
        loading="lazy"
        width="184"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/6530a049ed44cac48d8a7216_btnrh-logo-1.svg"
      />
    </_Component>
  );
}
