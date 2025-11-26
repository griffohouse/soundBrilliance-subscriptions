import * as React from "react";
import * as Types from "./types";

declare function AudioWrapper(props: {
  as?: React.ElementType;
  cover?: Types.Asset.Image;
  title?: React.ReactNode;
}): React.JSX.Element;
