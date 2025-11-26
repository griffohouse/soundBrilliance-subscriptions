"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GradientCard.module.css";

export function GradientCard({
  as: _Component = _Builtin.Block,
  stat = "-",
  title = "Card Title",
  description = "Card Description",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "BG 1": "w-variant-bf61927b-6581-148c-3528-58534e07bbbd",
    "BG 2": "w-variant-25735bdd-0570-e125-7ee6-9bc3a4b93c9c",
    "BG 3": "w-variant-9d34d21a-fa24-8b0e-dbb8-728354edd65a",
    "BG 4": "w-variant-a76cd8e3-b9a8-cf3a-20cc-9b7f824a1a5d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "gradient-card_component",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(
          _styles,
          "gradient-card_stat",
          _activeStyleVariant
        )}
        tag="h3"
      >
        {stat}
      </_Builtin.Heading>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "gradient-card_title",
          _activeStyleVariant
        )}
        tag="div"
      >
        {title}
      </_Builtin.Block>
      <_Builtin.Paragraph
        className={_utils.cx(
          _styles,
          "gradient-card_description",
          _activeStyleVariant
        )}
      >
        {description}
      </_Builtin.Paragraph>
    </_Component>
  );
}
