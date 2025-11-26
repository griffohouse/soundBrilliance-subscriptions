import * as React from "react";
import * as Types from "./types";

declare function PlaylistItem(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  backgroundImage?: Types.Asset.Image;
  songs?: React.ReactNode;
  type?: React.ReactNode;
  mood?: Types.Builtin.Text;
  wistiaSource?: Types.Builtin.Text;
}): React.JSX.Element;
