"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SmallAudioPlayer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-736":{"id":"e-736","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-737"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7878b025-e3a0-5daf-845c-e791e19fd364","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7878b025-e3a0-5daf-845c-e791e19fd364","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1710198970315}},"actionLists":{"a-27":{"id":"a-27","title":"Roating 2","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"7878b025-e3a0-5daf-845c-e791e19fd364"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":4000,"target":{"useEventTarget":true,"id":"7878b025-e3a0-5daf-845c-e791e19fd364"},"zValue":360,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"7878b025-e3a0-5daf-845c-e791e19fd364"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693236179450}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SmallAudioPlayer({
  as: _Component = _Builtin.Block,
  source,
  thumbnail,
  title = "Title",
  clean,
  theme,
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    Smaller: "w-variant-112aa654-9c01-0088-7a9d-a8d8bb9160b8",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "audio-player_component",
        "is-full",
        _activeStyleVariant
      )}
      tag="div"
      data-source={source}
      thumbnail={thumbnail}
      clean={clean}
      theme={theme}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "audio-player_full-wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "audio-player_layout",
            "is-full",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "audio_player-content",
              "is-full",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "audio-player_controls",
                "is-full",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "audio-player_play",
                  "is-full",
                  _activeStyleVariant
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(
                    _styles,
                    "icon-embed-medium",
                    "text-color-white",
                    "hide-tablet",
                    _activeStyleVariant
                  )}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zM9.5%2016.5v-9l7%204.5l-7%204.5z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "audio-player_pause",
                  "is-full",
                  _activeStyleVariant
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(
                    _styles,
                    "icon-embed-medium",
                    "text-color-white",
                    _activeStyleVariant
                  )}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zm-1%2014H9V8h2v8zm4%200h-2V8h2v8z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "audio-player_loading",
                  _activeStyleVariant
                )}
                data-w-id="7878b025-e3a0-5daf-845c-e791e19fd364"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(
                    _styles,
                    "icon-embed-medium",
                    "text-color-white",
                    _activeStyleVariant
                  )}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--bx%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M2%2011h5v2H2zm15%200h5v2h-5zm-6%206h2v5h-2zm0-15h2v5h-2zM4.222%205.636l1.414-1.414l3.536%203.536l-1.414%201.414zm15.556%2012.728l-1.414%201.414l-3.536-3.536l1.414-1.414zm-12.02-3.536l1.414%201.414l-3.536%203.536l-1.414-1.414zm7.07-7.071l3.536-3.535l1.414%201.415l-3.536%203.535z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "audio-player_meta",
                "is-full",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-size-tiny",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-style-allcaps",
                    "text-color-white",
                    "text-style-muted",
                    _activeStyleVariant
                  )}
                  tag="div"
                  title=""
                >
                  {title}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "hide", _activeStyleVariant)}
                  tag="div"
                  subtitle=""
                >
                  {"soundBrilliance"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "audio-player_time",
                "hide",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "audio-player_duration",
                  "text-size-small",
                  "text-color-black",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {" "}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
