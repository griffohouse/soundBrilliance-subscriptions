import * as React from "react";
import * as Types from "./types";

declare function GradientCard(props: {
  as?: React.ElementType;
  stat?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "Base" | "BG 1" | "BG 2" | "BG 3" | "BG 4";
}): React.JSX.Element;
