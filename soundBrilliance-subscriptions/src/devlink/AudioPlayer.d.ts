import * as React from "react";
import * as Types from "./types";

declare function AudioPlayer(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  artist?: React.ReactNode;
  audioSource?: Types.Builtin.Text;
  theme?: Types.Builtin.Text;
  singleTrack?: Types.Builtin.Text;
  type?: Types.Builtin.Text;
  hideArtist?: Types.Builtin.Text;
  thumbnail?: Types.Builtin.Text;
}): React.JSX.Element;
