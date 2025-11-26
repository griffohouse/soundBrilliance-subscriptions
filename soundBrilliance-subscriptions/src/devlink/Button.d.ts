import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
