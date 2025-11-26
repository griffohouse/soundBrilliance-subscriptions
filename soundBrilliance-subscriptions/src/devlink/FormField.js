"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormField.module.css";

export function FormField({
  as: _Component = _Builtin.Block,
  label = "Email Address",
  name = "Name",
  type = "Type",
  placeholder = "Placeholder",
  required = "Required",
  value = "Value",
  inputMode = "Input Mode",
  autocomplete = "Autocomplete",
}) {
  return (
    <_Component className={_utils.cx(_styles, "form_field")} tag="div">
      <_Builtin.FormBlockLabel htmlFor="email">{label}</_Builtin.FormBlockLabel>
      <_Builtin.DOM
        className={_utils.cx(_styles, "form_field")}
        tag="input"
        slot=""
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        inputmode={inputMode}
        autocomplete={autocomplete}
      />
    </_Component>
  );
}
