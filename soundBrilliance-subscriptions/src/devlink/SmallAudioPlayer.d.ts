import * as React from "react";
import * as Types from "./types";

declare function SmallAudioPlayer(props: {
  as?: React.ElementType;
  source?: Types.Builtin.Text;
  thumbnail?: Types.Builtin.Text;
  title?: React.ReactNode;
  clean?: Types.Builtin.Text;
  theme?: Types.Builtin.Text;
  variant?: "Base" | "Smaller";
}): React.JSX.Element;
