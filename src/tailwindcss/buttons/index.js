const _ = require("lodash");
const Color = require("color");
const { transparent } = require("../extend/colors");

module.exports = function (options) {
  const { addComponents, theme, e } = options;
  const colors = theme("colors");

  addComponents([
    {
      ".btn": {
        "@apply relative inline-block w-auto px-4 py-3 overflow-hidden text-center text-base duration-300 ease-in-out transform bg-gray-100 border border-transparent rounded cursor-pointer leading-normal": {},
        "&:focus": {
          "@apply shadow-outline outline-none": {},
        },
        "&:active": {
          "@apply scale-95 shadow-none outline-none": {},
        },
      },
    },
    {
      ".btn-block": {
        "@apply w-full": {},
      },
    },
    {
      ".btn-link": {
        "@apply bg-transparent border border-transparent": {},
        padding: "0!important",
        "&:hover": {
          "@apply underline": {},
        },
        "&:focus": {
          "@apply shadow-none outline-none": {},
        },
        "&:active": {
          "@apply scale-95 shadow-none outline-none": {},
        },
      },
    },
    {
      ".btn-sm": {
        "@apply px-3 py-2 text-sm": {},
      },
      ".btn-xs": {
        "@apply px-2 py-1 text-xs": {},
      },
      ".btn-lg": {
        "@apply px-5 py-4 text-lg": {},
      },
      ".btn-xl": {
        "@apply px-6 py-5 text-lg": {},
      },
      // Icons
      "[class*='btn-icon']": {
        "@apply inline-flex items-center": {},
      },
      ".btn-icon-xs svg": {
        "@apply wh-2": {},
      },
      ".btn-icon-sm svg": {
        "@apply wh-4": {},
      },
      ".btn-icon svg": {
        "@apply wh-6": {},
      },
      ".btn-icon-lg svg": {
        "@apply wh-8": {},
      },
      ".btn-icon-xl svg": {
        "@apply wh-10": {},
      },
      ".btn-icon-2xl svg": {
        "@apply wh-12": {},
      },
      // Animate buttons
      ".btn-animate-down": {
        "&:hover": {
          "@apply translate-y-px": {},
        },
      },
      ".btn-animate-up": {
        "&:hover": {
          "@apply -translate-y-px": {},
        },
      },
    },
    ..._.map(colors, (colorOptions, name) => {
      if (colorOptions === "transparent") {
        return null;
      }

      let bgColor = "";
      if (_.isObject(colorOptions)) {
        bgColor = colorOptions[400];
      } else {
        bgColor = colorOptions;
      }

      let softBgColor = "";
      if (_.isObject(colorOptions)) {
        softBgColor = colorOptions[50];
      } else {
        softBgColor = colorOptions;
      }

      let textColor = "";
      if (_.isObject(colorOptions)) {
        textColor = colorOptions[50];
      } else {
        if (colorOptions === "#ffffff") textColor = "#000000";
        if (colorOptions === "#000000") textColor = "#ffffff";
      }

      return {
        [`.btn-${e(name)}`]: {
          backgroundColor: bgColor,
          color: textColor,
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(bgColor)
              .alpha(0.5)
              .rgb()
              .toString()}`,
          },
          "&:hover": {
            backgroundColor: _.get(
              colorOptions,
              "hoverBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
          "&:active": {
            backgroundColor: _.get(
              colorOptions,
              "activeBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
        },
        [`.btn-outline-${e(name)}`]: {
          color: bgColor,
          borderColor: bgColor,
          backgroundColor: "transparent",
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(textColor)
              .alpha(0.5)
              .rgb()
              .toString()}`,
          },
          "&:hover": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "hoverBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
          "&:active": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "activeBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
        },
        [`.btn-${e(name)}-soft`]: {
          color: bgColor,
          backgroundColor: softBgColor,
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(bgColor)
              .alpha(0.5)
              .rgb()
              .toString()}`,
          },
          "&:hover": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "hoverBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
            "@apply translate-y-px": {},
          },
          "&:active": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "activeBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
        },
      };
    }),
  ]);
};
