import * as React from "react";
import * as Types from "./types";

declare function FormField(props: {
  as?: React.ElementType;
  label?: React.ReactNode;
  name?: Types.Builtin.Text;
  type?: Types.Builtin.Text;
  placeholder?: Types.Builtin.Text;
  required?: Types.Builtin.Text;
  value?: Types.Builtin.Text;
  inputMode?: Types.Builtin.Text;
  autocomplete?: Types.Builtin.Text;
}): React.JSX.Element;
