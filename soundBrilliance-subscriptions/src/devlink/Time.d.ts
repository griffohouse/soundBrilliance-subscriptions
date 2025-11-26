import * as React from "react";
import * as Types from "./types";

declare function Time(props: {
  as?: React.ElementType;
  time?: React.ReactNode;
  bottom?: Types.Builtin.Text;
  uppercase?: Types.Builtin.Text;
  theme?: Types.Builtin.Text;
}): React.JSX.Element;
