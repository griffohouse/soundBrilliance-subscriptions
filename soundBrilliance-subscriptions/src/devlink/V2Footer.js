"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./V2Footer.module.css";

export function V2Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer7_component")}
      tag="footer"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-vertical",
              "padding-xxlarge"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer7_top-wrapper")}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "footer7_logo-link")}
                id={_utils.cx(
                  _styles,
                  "w-node-_4391e5a1-59a4-deaa-7c6c-490da8611ca9-a8611ca4"
                )}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "footer7_logo")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/68913a1f8634c4528abe68f3_logo-light.svg"
                />
              </_Builtin.NavbarBrand>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer7_credit-text")}
                tag="div"
              >
                {"© 2025 soundBrilliance™ "}
                <br />
                {"Pat. No. 12165622"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer-small")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "footer7_link-list")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "text-color-white",
                    "text-style-muted"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"FAQ"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "text-color-white",
                    "text-style-muted"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "text-color-white",
                    "text-style-muted"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Terms"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
