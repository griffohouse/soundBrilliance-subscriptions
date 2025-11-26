"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubmitButton.module.css";

export function SubmitButton({
  as: _Component = _Builtin.FormButton,
  buttonText = "Create Account",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "submit_button")}
      type="submit"
      data-wait="Please wait..."
      value={buttonText}
    />
  );
}
