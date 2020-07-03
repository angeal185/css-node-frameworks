const includes = {
  "html": {
    "font-family": "sans-serif",
    "-ms-text-size-adjust": "100%",
    "-webkit-text-size-adjust": "100%"
  },
  "body": {
    "color": "#111",
    "font-size": "1.1em",
    "line-height": "1.5",
    "background": "#fff"
  },
  "article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary": {
    "display": "block"
  },
  "audio,canvas,progress,video": {
    "display": "inline-block",
    "vertical-align": "baseline"
  },
  "audio:not([controls])": {
    "display": "none",
    "height": "0"
  },
  "[hidden],template": {
    "display": "none"
  },
  "a": {
    "color": "#0074d9",
    "text-decoration": "none",
    "box-shadow": "none",
    "transition": "all 0.3s"
  },
  "a:active,a:hover": {
    "outline": "0"
  },
  "abbr[title]": {
    "border-bottom": "1px dotted"
  },
  "b,strong": {
    "font-weight": "bold"
  },
  "dfn": {
    "font-style": "italic"
  },
  "h1": {
    "font-size": "2em",
    "margin": "0.67em 0"
  },
  "mark": {
    "background": "#ff0",
    "color": "#000"
  },
  "small": {
    "font-size": "80%"
  },
  "sub,sup": {
    "font-size": "75%",
    "line-height": "0",
    "position": "relative",
    "vertical-align": "baseline"
  },
  "sup": {
    "top": "-0.5em"
  },
  "sub": {
    "bottom": "-0.25em"
  },
  "img": {
    "border": "0"
  },
  "svg:not(:root)": {
    "overflow": "hidden"
  },
  "figure": {
    "margin": "1em 40px"
  },
  "hr": {
    "-moz-box-sizing": "content-box",
    "box-sizing": "content-box",
    "height": "0"
  },
  "pre": {
    "text-align": "left",
    "padding": ".3em .6em",
    "background": "#f5f5f5",
    "border-radius": ".2em"
  },
  "code,kbd,pre,samp": {
    "font-family": "monospace, monospace",
    "font-size": "1em"
  },
  "button,input,optgroup,select,textarea": {
    "color": "inherit",
    "font": "inherit",
    "margin": "0"
  },
  "button": {
    "overflow": "visible"
  },
  "button,select": {
    "text-transform": "none"
  },
  "button,html input[type='button'],input[type='reset'],input[type='submit']": {
    "-webkit-appearance": "button",
    "cursor": "pointer"
  },
  "button[disabled],input[disabled]": {
    "cursor": "default"
  },
  "button::-moz-focus-inner,input::-moz-focus-inner": {
    "border": "0",
    "padding": "0"
  },
  "input": {
    "line-height": "normal"
  },
  "input[type='checkbox'],input[type='radio']": {
    "box-sizing": "border-box",
    "padding": "0"
  },
  "input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button": {
    "height": "auto"
  },
  "input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration": {
    "-webkit-appearance": "none"
  },
  "fieldset": {
    "border": "0",
    "padding": "0"
  },
  "legend": {
    "border": "0",
    "padding": "0"
  },
  "textarea": {
    "height": "auto"
  },
  "optgroup": {
    "font-weight": "bold"
  },
  "table": {
    "text-align": "left"
  },
  "td,th": {
    "padding": ".3em 2.4em .3em .6em"
  },
  "*": {
    "box-sizing": "inherit"
  },
  "html,body": {
    "font-family": "Arial, Helvetica, sans-serif",
    "box-sizing": "border-box",
    "height": "100%"
  },
  "main": {
    "display": "block"
  },
  "h1,h2,h3,h4,h5,h6": {
    "margin": "0",
    "padding": ".6em 0"
  },
  "li": {
    "margin": "0 0 .3em"
  },
  "code": {
    "padding": ".3em .6em",
    "font-size": ".8em",
    "background": "#f5f5f5"
  },
  "pre code": {
    "padding": "0"
  },
  "blockquote": {
    "padding": "0 0 0 1em",
    "margin": "0 0 0 .1em",
    "box-shadow": "inset 5px 0 rgba(17,17,17,0.3)"
  },
  "label": {
    "cursor": "pointer"
  },
  "[class^='icon-']:before,[class*=' icon-']:before": {
    "margin": "0 .6em 0 0"
  },
  "i[class^='icon-']:before,i[class*=' icon-']:before": {
    "margin": "0"
  },
  ".label,[data-tooltip]:after,button,.button,[type=submit],.dropimage": {
    "display": "inline-block",
    "text-align": "center",
    "letter-spacing": "inherit",
    "margin": "0",
    "padding": ".3em .9em",
    "vertical-align": "middle",
    "background": "#0074d9",
    "color": "#fff",
    "border": "0",
    "border-radius": ".2em",
    "width": "auto",
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none"
  },
  ".success.label,.success[data-tooltip]:after,button.success,.success.button,.success[type=submit],.success.dropimage": {
    "background": "#2ecc40"
  },
  ".warning.label,.warning[data-tooltip]:after,button.warning,.warning.button,.warning[type=submit],.warning.dropimage": {
    "background": "#ff851b"
  },
  ".error.label,.error[data-tooltip]:after,button.error,.error.button,.error[type=submit],.error.dropimage": {
    "background": "#ff4136"
  },
  ".pseudo.label,.pseudo[data-tooltip]:after,button.pseudo,.pseudo.button,.pseudo[type=submit],.pseudo.dropimage": {
    "background-color": "transparent",
    "color": "inherit"
  },
  ".label,[data-tooltip]:after": {
    "font-size": ".6em",
    "padding": ".4em .6em",
    "margin-left": "1em",
    "line-height": "1"
  },
  "button,.button,[type=submit],.dropimage": {
    "margin": ".3em 0",
    "cursor": "pointer",
    "transition": "all 0.3s",
    "border-radius": ".2em",
    "height": "auto",
    "vertical-align": "baseline",
    "box-shadow": "0 0 rgba(0,0,0,0) inset"
  },
  "button:hover,.button:hover,:hover[type=submit],.dropimage:hover,button:focus,.button:focus,:focus[type=submit],.dropimage:focus": {
    "box-shadow": "inset 0 0 0 99em rgba(255,255,255,0.2)",
    "border": "0"
  },
  "button.pseudo:hover,.pseudo.button:hover,.pseudo:hover[type=submit],.pseudo.dropimage:hover,button.pseudo:focus,.pseudo.button:focus,.pseudo:focus[type=submit],.pseudo.dropimage:focus": {
    "box-shadow": "inset 0 0 0 99em rgba(17,17,17,0.1)"
  },
  "button.active,.active.button,.active[type=submit],.active.dropimage,button:active,.button:active,:active[type=submit],.dropimage:active,button.pseudo:active,.pseudo.button:active,.pseudo:active[type=submit],.pseudo.dropimage:active": {
    "box-shadow": "inset 0 0 0 99em rgba(17,17,17,0.2)"
  },
  "button[disabled],.button[disabled],[disabled][type=submit],.dropimage[disabled]": {
    "cursor": "default",
    "box-shadow": "none",
    "background": "#bbb"
  },
  ":checked+.toggle,:checked+.toggle:hover": {
    "box-shadow": "inset 0 0 0 99em rgba(17,17,17,0.2)"
  },
  "[type]+.toggle": {
    "padding": ".3em .9em",
    "margin-right": "0"
  },
  "[type]+.toggle:after,[type]+.toggle:before": {
    "display": "none"
  },
  "input,textarea,.select select": {
    "line-height": "1.5",
    "margin": "0",
    "height": "2.1em",
    "padding": ".3em .6em",
    "border": "1px solid #ccc",
    "background-color": "#fff",
    "border-radius": ".2em",
    "transition": "all 0.3s",
    "width": "100%"
  },
  "input:focus,textarea:focus,.select select:focus": {
    "border": "1px solid #0074d9",
    "outline": "0"
  },
  "[type=file],[type=color]": {
    "cursor": "pointer"
  },
  "[type=file]": {
    "height": "auto"
  },
  "select": {
    "background": "#fff url('data: image/svg+xml, base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjMiPjxwYXRoIGQ9Im0gMCwxIDEsMiAxLC0yIHoiLz48L3N2Zz4=') no-repeat scroll 95% center/10px 15px",
    "background-position": "calc(100% - 15px) center",
    "border": "1px solid #ccc",
    "border-radius": ".2em",
    "cursor": "pointer",
    "width": "100%",
    "height": "2.2em",
    "box-sizing": "border-box",
    "padding": ".3em .45em",
    "transition": "all 0.3s",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    "appearance": "none"
  },
  "select::-ms-expand": {
    "display": "none"
  },
  "select:focus,select:active": {
    "border": "1px solid #0074d9",
    "transition": "outline 0s"
  },
  "select:-moz-focusring": {
    "color": "transparent",
    "text-shadow": "0 0 0 #111"
  },
  "select option": {
    "font-size": "inherit",
    "padding": ".45em"
  },
  "select[multiple]": {
    "height": "auto",
    "background": "none",
    "padding": "0"
  },
  "[type=radio],[type=checkbox]": {
    "opacity": "0",
    "width": "0",
    "position": "absolute",
    "display": "inline-block"
  },
  "[type=radio]+.checkable:hover:before,[type=checkbox]+.checkable:hover:before,:focus[type=radio]+.checkable:before,:focus[type=checkbox]+.checkable:before": {
    "border": "1px solid #0074d9"
  },
  "[type=radio]+.checkable,[type=checkbox]+.checkable": {
    "position": "relative",
    "cursor": "pointer",
    "padding-left": "1.5em",
    "margin-right": ".6em"
  },
  "[type=radio]+.checkable:before,[type=checkbox]+.checkable:before,[type=radio]+.checkable:after,[type=checkbox]+.checkable:after": {
    "content": "''",
    "position": "absolute",
    "display": "inline-block",
    "left": "0",
    "top": "50%",
    "transform": "translateY(-50%)",
    "font-size": "1em",
    "line-height": "1em",
    "color": "transparent",
    "font-family": "sans",
    "text-align": "center",
    "box-sizing": "border-box",
    "width": "1em",
    "height": "1em",
    "border-radius": "50%",
    "transition": "all 0.3s"
  },
  "[type=radio]+.checkable:before,[type=checkbox]+.checkable:before": {
    "border": "1px solid #aaa"
  },
  ":checked[type=radio]+.checkable:after,:checked[type=checkbox]+.checkable:after": {
    "background": "#555",
    "transform": "scale(0.5) translateY(-100%)"
  },
  "[type=checkbox]+.checkable:before": {
    "border-radius": ".2em"
  },
  "[type=checkbox]+.checkable:after": {
    "content": "'âœ”'",
    "background": "none",
    "transform": "scale(2) translateY(-25%)",
    "visibility": "hidden",
    "opacity": "0"
  },
  ":checked[type=checkbox]+.checkable:after": {
    "color": "#111",
    "background": "none",
    "transform": "translateY(-50%)",
    "transition": "all 0.3s",
    "visibility": "visible",
    "opacity": "1"
  },
  "th": {
    "text-align": "left",
    "font-weight": "900",
    "color": "#fff",
    "background-color": "#0074d9"
  },
  ".success th": {
    "background-color": "#2ecc40"
  },
  ".warning th": {
    "background-color": "#ff851b"
  },
  ".error th": {
    "background-color": "#ff4136"
  },
  ".dull th": {
    "background-color": "#aaa"
  },
  "tr:nth-child(even)": {
    "background": "rgba(0,0,0,0.05)"
  },
  ".flex": {
    "display": "flex",
    "margin-left": "-.6em",
    "width": "calc(100% + .6em)",
    "flex-wrap": "wrap",
    "transition": "all .3s ease"
  },
  ".flex>*": {
    "box-sizing": "border-box",
    "flex": "1 1 auto",
    "padding-left": ".6em",
    "padding-bottom": ".6em"
  },
  ".flex[class*='one']>*,.flex[class*='two']>*,.flex[class*='three']>*,.flex[class*='four']>*,.flex[class*='five']>*,.flex[class*='six']>*,.flex[class*='seven']>*,.flex[class*='eight']>*,.flex[class*='nine']>*,.flex[class*='ten']>*,.flex[class*='eleven']>*,.flex[class*='twelve']>*": {
    "flex-grow": "0"
  },
  ".flex.grow>*": {
    "flex-grow": "1"
  },
  ".center": {
    "justify-content": "center"
  },
  ".one>*": {
    "width": "100%"
  },
  ".two>*": {
    "width": "50%"
  },
  ".three>*": {
    "width": "33.33333%"
  },
  ".four>*": {
    "width": "25%"
  },
  ".five>*": {
    "width": "20%"
  },
  ".six>*": {
    "width": "16.66666%"
  },
  ".seven>*": {
    "width": "14.28571%"
  },
  ".eight>*": {
    "width": "12.5%"
  },
  ".nine>*": {
    "width": "11.11111%"
  },
  ".ten>*": {
    "width": "10%"
  },
  ".eleven>*": {
    "width": "9.09091%"
  },
  ".twelve>*": {
    "width": "8.33333%"
  },
  "@media all and (min-width: 500px)": {
    ".off-none-500": {
      "margin-left": "0"
    },
    ".off-half-500": {
      "margin-left": "50%"
    },
    ".off-third-500": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-500": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-500": {
      "margin-left": "25%"
    },
    ".off-three-fourth-500": {
      "margin-left": "75%"
    },
    ".off-fifth-500": {
      "margin-left": "20%"
    },
    ".off-two-fifth-500": {
      "margin-left": "40%"
    },
    ".off-three-fifth-500": {
      "margin-left": "60%"
    },
    ".off-four-fifth-500": {
      "margin-left": "80%"
    },
    ".off-sixth-500": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 600px)": {
    ".off-none-600": {
      "margin-left": "0"
    },
    ".off-half-600": {
      "margin-left": "50%"
    },
    ".off-third-600": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-600": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-600": {
      "margin-left": "25%"
    },
    ".off-three-fourth-600": {
      "margin-left": "75%"
    },
    ".off-fifth-600": {
      "margin-left": "20%"
    },
    ".off-two-fifth-600": {
      "margin-left": "40%"
    },
    ".off-three-fifth-600": {
      "margin-left": "60%"
    },
    ".off-four-fifth-600": {
      "margin-left": "80%"
    },
    ".off-sixth-600": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 700px)": {
    ".off-none-700": {
      "margin-left": "0"
    },
    ".off-half-700": {
      "margin-left": "50%"
    },
    ".off-third-700": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-700": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-700": {
      "margin-left": "25%"
    },
    ".off-three-fourth-700": {
      "margin-left": "75%"
    },
    ".off-fifth-700": {
      "margin-left": "20%"
    },
    ".off-two-fifth-700": {
      "margin-left": "40%"
    },
    ".off-three-fifth-700": {
      "margin-left": "60%"
    },
    ".off-four-fifth-700": {
      "margin-left": "80%"
    },
    ".off-sixth-700": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 800px)": {
    ".off-none-800": {
      "margin-left": "0"
    },
    ".off-half-800": {
      "margin-left": "50%"
    },
    ".off-third-800": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-800": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-800": {
      "margin-left": "25%"
    },
    ".off-three-fourth-800": {
      "margin-left": "75%"
    },
    ".off-fifth-800": {
      "margin-left": "20%"
    },
    ".off-two-fifth-800": {
      "margin-left": "40%"
    },
    ".off-three-fifth-800": {
      "margin-left": "60%"
    },
    ".off-four-fifth-800": {
      "margin-left": "80%"
    },
    ".off-sixth-800": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 900px)": {
    ".off-none-900": {
      "margin-left": "0"
    },
    ".off-half-900": {
      "margin-left": "50%"
    },
    ".off-third-900": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-900": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-900": {
      "margin-left": "25%"
    },
    ".off-three-fourth-900": {
      "margin-left": "75%"
    },
    ".off-fifth-900": {
      "margin-left": "20%"
    },
    ".off-two-fifth-900": {
      "margin-left": "40%"
    },
    ".off-three-fifth-900": {
      "margin-left": "60%"
    },
    ".off-four-fifth-900": {
      "margin-left": "80%"
    },
    ".off-sixth-900": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1000px)": {
    ".off-none-1000": {
      "margin-left": "0"
    },
    ".off-half-1000": {
      "margin-left": "50%"
    },
    ".off-third-1000": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1000": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1000": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1000": {
      "margin-left": "75%"
    },
    ".off-fifth-1000": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1000": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1000": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1000": {
      "margin-left": "80%"
    },
    ".off-sixth-1000": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1100px)": {
    ".off-none-1100": {
      "margin-left": "0"
    },
    ".off-half-1100": {
      "margin-left": "50%"
    },
    ".off-third-1100": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1100": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1100": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1100": {
      "margin-left": "75%"
    },
    ".off-fifth-1100": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1100": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1100": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1100": {
      "margin-left": "80%"
    },
    ".off-sixth-1100": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1200px)": {
    ".off-none-1200": {
      "margin-left": "0"
    },
    ".off-half-1200": {
      "margin-left": "50%"
    },
    ".off-third-1200": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1200": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1200": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1200": {
      "margin-left": "75%"
    },
    ".off-fifth-1200": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1200": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1200": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1200": {
      "margin-left": "80%"
    },
    ".off-sixth-1200": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1300px)": {
    ".off-none-1300": {
      "margin-left": "0"
    },
    ".off-half-1300": {
      "margin-left": "50%"
    },
    ".off-third-1300": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1300": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1300": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1300": {
      "margin-left": "75%"
    },
    ".off-fifth-1300": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1300": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1300": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1300": {
      "margin-left": "80%"
    },
    ".off-sixth-1300": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1400px)": {
    ".off-none-1400": {
      "margin-left": "0"
    },
    ".off-half-1400": {
      "margin-left": "50%"
    },
    ".off-third-1400": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1400": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1400": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1400": {
      "margin-left": "75%"
    },
    ".off-fifth-1400": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1400": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1400": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1400": {
      "margin-left": "80%"
    },
    ".off-sixth-1400": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1500px)": {
    ".off-none-1500": {
      "margin-left": "0"
    },
    ".off-half-1500": {
      "margin-left": "50%"
    },
    ".off-third-1500": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1500": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1500": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1500": {
      "margin-left": "75%"
    },
    ".off-fifth-1500": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1500": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1500": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1500": {
      "margin-left": "80%"
    },
    ".off-sixth-1500": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1600px)": {
    ".off-none-1600": {
      "margin-left": "0"
    },
    ".off-half-1600": {
      "margin-left": "50%"
    },
    ".off-third-1600": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1600": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1600": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1600": {
      "margin-left": "75%"
    },
    ".off-fifth-1600": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1600": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1600": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1600": {
      "margin-left": "80%"
    },
    ".off-sixth-1600": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1700px)": {
    ".off-none-1700": {
      "margin-left": "0"
    },
    ".off-half-1700": {
      "margin-left": "50%"
    },
    ".off-third-1700": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1700": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1700": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1700": {
      "margin-left": "75%"
    },
    ".off-fifth-1700": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1700": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1700": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1700": {
      "margin-left": "80%"
    },
    ".off-sixth-1700": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1800px)": {
    ".off-none-1800": {
      "margin-left": "0"
    },
    ".off-half-1800": {
      "margin-left": "50%"
    },
    ".off-third-1800": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1800": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1800": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1800": {
      "margin-left": "75%"
    },
    ".off-fifth-1800": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1800": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1800": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1800": {
      "margin-left": "80%"
    },
    ".off-sixth-1800": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 1900px)": {
    ".off-none-1900": {
      "margin-left": "0"
    },
    ".off-half-1900": {
      "margin-left": "50%"
    },
    ".off-third-1900": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-1900": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-1900": {
      "margin-left": "25%"
    },
    ".off-three-fourth-1900": {
      "margin-left": "75%"
    },
    ".off-fifth-1900": {
      "margin-left": "20%"
    },
    ".off-two-fifth-1900": {
      "margin-left": "40%"
    },
    ".off-three-fifth-1900": {
      "margin-left": "60%"
    },
    ".off-four-fifth-1900": {
      "margin-left": "80%"
    },
    ".off-sixth-1900": {
      "margin-left": "16.66666%"
    }
  },
  "@media all and (min-width: 2000px)": {
    ".off-none-2000": {
      "margin-left": "0"
    },
    ".off-half-2000": {
      "margin-left": "50%"
    },
    ".off-third-2000": {
      "margin-left": "33.33333%"
    },
    ".off-two-third-2000": {
      "margin-left": "66.66666%"
    },
    ".off-fourth-2000": {
      "margin-left": "25%"
    },
    ".off-three-fourth-2000": {
      "margin-left": "75%"
    },
    ".off-fifth-2000": {
      "margin-left": "20%"
    },
    ".off-two-fifth-2000": {
      "margin-left": "40%"
    },
    ".off-three-fifth-2000": {
      "margin-left": "60%"
    },
    ".off-four-fifth-2000": {
      "margin-left": "80%"
    },
    ".off-sixth-2000": {
      "margin-left": "16.66666%"
    }
  },
  ".full": {
    "width": "100%"
  },
  ".half": {
    "width": "50%"
  },
  ".third": {
    "width": "33.33333%"
  },
  ".two-third": {
    "width": "66.66666%"
  },
  ".fourth": {
    "width": "25%"
  },
  ".three-fourth": {
    "width": "75%"
  },
  ".fifth": {
    "width": "20%"
  },
  ".two-fifth": {
    "width": "40%"
  },
  ".three-fifth": {
    "width": "60%"
  },
  ".four-fifth": {
    "width": "80%"
  },
  ".sixth": {
    "width": "16.66666%"
  },
  ".none": {
    "display": "none"
  },
  ".off-none": {
    "margin-left": "0"
  },
  ".off-half": {
    "margin-left": "50%"
  },
  ".off-third": {
    "margin-left": "33.33333%"
  },
  ".off-two-third": {
    "margin-left": "66.66666%"
  },
  ".off-fourth": {
    "margin-left": "25%"
  },
  ".off-three-fourth": {
    "margin-left": "75%"
  },
  ".off-fifth": {
    "margin-left": "20%"
  },
  ".off-two-fifth": {
    "margin-left": "40%"
  },
  ".off-three-fifth": {
    "margin-left": "60%"
  },
  ".off-four-fifth": {
    "margin-left": "80%"
  },
  ".off-sixth": {
    "margin-left": "16.66666%"
  },
  "nav": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "right": "0",
    "height": "3em",
    "padding": "0 .6em",
    "background": "#fff",
    "box-shadow": "0 0 0.2em rgba(17,17,17,0.2)",
    "z-index": "10000",
    "transition": "all .3s",
    "transform-style": "preserve-3d"
  },
  "nav .brand,nav .menu,nav .burger": {
    "float": "right",
    "position": "relative",
    "top": "50%",
    "-webkit-transform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  "nav .brand": {
    "font-weight": "700",
    "float": "left",
    "padding": "0 .6em",
    "max-width": "50%",
    "white-space": "nowrap",
    "color": "inherit"
  },
  "nav .brand *": {
    "vertical-align": "middle"
  },
  "nav .logo": {
    "height": "2em",
    "margin-right": ".3em"
  },
  "nav .select::after": {
    "height": "calc(100% - 1px)",
    "padding": "0",
    "line-height": "2.4em"
  },
  "nav .menu>*": {
    "margin-right": ".6em"
  },
  "nav .burger": {
    "display": "none"
  },
  "@media all and (max-width: 60em)": {
    "nav .burger": {
      "display": "inline-block",
      "cursor": "pointer",
      "bottom": "-1000em",
      "margin": "0"
    },
    "nav .burger ~ .menu,nav .show:checked ~ .burger": {
      "position": "fixed",
      "min-height": "100%",
      "top": "0",
      "right": "0",
      "bottom": "-1000em",
      "margin": "0",
      "background": "#fff",
      "transition": "all .5s ease",
      "transform": "none"
    },
    "nav .burger ~ .menu": {
      "z-index": "11"
    },
    "nav .show:checked ~ .burger": {
      "color": "transparent",
      "width": "100%",
      "border-radius": "0",
      "background": "rgba(0,0,0,0.2)",
      "transition": "all .5s ease"
    },
    "nav .show ~ .menu": {
      "width": "70%",
      "max-width": "300px",
      "transform-origin": "center right",
      "transition": "all .25s ease",
      "transform": "scaleX(0)"
    },
    "nav .show ~ .menu>*": {
      "transform": "translateX(100%)",
      "transition": "all 0s ease .5s"
    },
    "nav .show:checked ~ .menu>*:nth-child(1)": {
      "transition": "all .5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s"
    },
    "nav .show:checked ~ .menu>*:nth-child(2)": {
      "transition": "all .5s cubic-bezier(0.645, 0.045, 0.355, 1) .1s"
    },
    "nav .show:checked ~ .menu>*:nth-child(3)": {
      "transition": "all .5s cubic-bezier(0.645, 0.045, 0.355, 1) .2s"
    },
    "nav .show:checked ~ .menu>*:nth-child(4)": {
      "transition": "all .5s cubic-bezier(0.645, 0.045, 0.355, 1) .3s"
    },
    "nav .show:checked ~ .menu>*:nth-child(5)": {
      "transition": "all .5s cubic-bezier(0.645, 0.045, 0.355, 1) .4s"
    },
    "nav .show:checked ~ .menu>*:nth-child(6)": {
      "transition": "all .5s cubic-bezier(0.645, 0.045, 0.355, 1) .5s"
    },
    "nav .show:checked ~ .menu": {
      "transform": "scaleX(1)"
    },
    "nav .show:checked ~ .menu>*": {
      "transform": "translateX(0)",
      "transition": "all .5s ease-in-out .6s"
    },
    "nav .burger ~ .menu>*": {
      "display": "block",
      "margin": ".3em",
      "text-align": "left",
      "max-width": "calc(100% - .6em)"
    },
    "nav .burger ~ .menu>a": {
      "padding": ".3em .9em"
    }
  },
  ".stack,.stack .toggle": {
    "margin-top": "0",
    "margin-bottom": "0",
    "display": "block",
    "width": "100%",
    "text-align": "left",
    "border-radius": "0"
  },
  ".stack:first-child,.stack:first-child .toggle": {
    "border-top-left-radius": ".2em",
    "border-top-right-radius": ".2em"
  },
  ".stack:last-child,.stack:last-child .toggle": {
    "border-bottom-left-radius": ".2em",
    "border-bottom-right-radius": ".2em"
  },
  "input.stack,textarea.stack,select.stack": {
    "transition": "border-bottom 0 ease 0",
    "border-bottom-width": "0"
  },
  "input.stack:last-child,textarea.stack:last-child,select.stack:last-child": {
    "border-bottom-width": "1px"
  },
  "input.stack:focus+input,input.stack:focus+textarea,input.stack:focus+select,textarea.stack:focus+input,textarea.stack:focus+textarea,textarea.stack:focus+select,select.stack:focus+input,select.stack:focus+textarea,select.stack:focus+select": {
    "border-top-color": "#0074d9"
  },
  ".card,.modal .overlay ~ *": {
    "position": "relative",
    "box-shadow": "0",
    "border-radius": ".2em",
    "border": "1px solid #ccc",
    "overflow": "hidden",
    "text-align": "left",
    "background": "#fff",
    "margin-bottom": ".6em",
    "padding": "0",
    "transition": "all .3s ease"
  },
  ".hidden.card,.modal .overlay ~ .hidden,:checked+.card,.modal .overlay ~ :checked+*,.modal .overlay:checked+*": {
    "font-size": "0",
    "padding": "0",
    "margin": "0",
    "border": "0"
  },
  ".card>*,.modal .overlay ~ *>*": {
    "max-width": "100%",
    "display": "block"
  },
  ".card>*:last-child,.modal .overlay ~ *>*:last-child": {
    "margin-bottom": "0"
  },
  ".card header,.modal .overlay ~ * header,.card section,.modal .overlay ~ * section,.card>p,.modal .overlay ~ *>p": {
    "padding": ".6em .8em"
  },
  ".card section,.modal .overlay ~ * section": {
    "padding": ".6em .8em 0"
  },
  ".card hr,.modal .overlay ~ * hr": {
    "border": "none",
    "height": "1px",
    "background-color": "#eee"
  },
  ".card header,.modal .overlay ~ * header": {
    "font-weight": "bold",
    "position": "relative",
    "border-bottom": "1px solid #eee"
  },
  ".card header h1,.modal .overlay ~ * header h1,.card header h2,.modal .overlay ~ * header h2,.card header h3,.modal .overlay ~ * header h3,.card header h4,.modal .overlay ~ * header h4,.card header h5,.modal .overlay ~ * header h5,.card header h6,.modal .overlay ~ * header h6": {
    "padding": "0",
    "margin": "0 2em 0 0",
    "line-height": "1",
    "display": "inline-block",
    "vertical-align": "text-bottom"
  },
  ".card header:last-child,.modal .overlay ~ * header:last-child": {
    "border-bottom": "0"
  },
  ".card footer,.modal .overlay ~ * footer": {
    "padding": ".8em"
  },
  ".card p,.modal .overlay ~ * p": {
    "margin": ".3em 0"
  },
  ".card p:first-child,.modal .overlay ~ * p:first-child": {
    "margin-top": "0"
  },
  ".card p:last-child,.modal .overlay ~ * p:last-child": {
    "margin-bottom": "0"
  },
  ".card>p,.modal .overlay ~ *>p": {
    "margin": "0",
    "padding-right": "2.5em"
  },
  ".card .close,.modal .overlay ~ * .close": {
    "position": "absolute",
    "top": ".4em",
    "right": ".3em",
    "font-size": "1.2em",
    "padding": "0 .5em",
    "cursor": "pointer",
    "width": "auto"
  },
  ".card .close:hover,.modal .overlay ~ * .close:hover": {
    "color": "#ff4136"
  },
  ".card h1+.close,.modal .overlay ~ * h1+.close": {
    "margin": ".2em"
  },
  ".card h2+.close,.modal .overlay ~ * h2+.close": {
    "margin": ".1em"
  },
  ".card .dangerous,.modal .overlay ~ * .dangerous": {
    "background": "#ff4136",
    "float": "right"
  },
  ".modal": {
    "text-align": "center"
  },
  ".modal>input": {
    "display": "none"
  },
  ".modal>input ~ *": {
    "opacity": "0",
    "max-height": "0",
    "overflow": "hidden"
  },
  ".modal .overlay": {
    "top": "0",
    "left": "0",
    "bottom": "0",
    "right": "0",
    "position": "fixed",
    "margin": "0",
    "border-radius": "0",
    "background": "rgba(17,17,17,0.6)",
    "transition": "all 0.3s",
    "z-index": "100000"
  },
  ".modal .overlay:before,.modal .overlay:after": {
    "display": "none"
  },
  ".modal .overlay ~ *": {
    "border": "0",
    "position": "fixed",
    "top": "50%",
    "left": "50%",
    "transform": "translateX(-50%) translateY(-50%) scale(0.2, 0.2)",
    "z-index": "1000000",
    "transition": "all 0.3s"
  },
  ".modal>input:checked ~ *": {
    "display": "block",
    "opacity": "1",
    "max-height": "10000px",
    "transition": "all 0.3s"
  },
  ".modal>input:checked ~ .overlay ~ *": {
    "max-height": "90%",
    "overflow": "auto",
    "-webkit-transform": "translateX(-50%) translateY(-50%) scale(1, 1)",
    "transform": "translateX(-50%) translateY(-50%) scale(1, 1)"
  },
  "@media (max-width: 60em)": {
    ".modal .overlay ~ *": {
      "min-width": "90%"
    }
  },
  ".dropimage": {
    "position": "relative",
    "display": "block",
    "padding": "0",
    "padding-bottom": "56.25%",
    "overflow": "hidden",
    "cursor": "pointer",
    "border": "0",
    "margin": ".3em 0",
    "border-radius": ".2em",
    "background-color": "#ddd",
    "background-size": "cover",
    "background-position": "center center",
    "background-image": "url('data: image/svg+xml, base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iNjQwIiB2ZXJzaW9uPSIxLjEiPjxnIHN0eWxlPSJmaWxsOiMzMzMiPjxwYXRoIGQ9Ik0gMTg3IDIzMCBDIDE3NSAyMzAgMTY1IDI0MCAxNjUgMjUyIEwgMTY1IDMwMCBMIDE2NSA0MDggQyAxNjUgNDIwIDE3NSA0MzAgMTg3IDQzMCBMIDQ2MyA0MzAgQyA0NzUgNDMwIDQ4NSA0MjAgNDg1IDQwOCBMIDQ4NSAzMDAgTCA0ODUgMjUyIEMgNDg1IDI0MCA0NzUgMjMwIDQ2MyAyMzAgTCAxODcgMjMwIHogTSAzNjAgMjU2IEEgNzAgNzIgMCAwIDEgNDMwIDMyOCBBIDcwIDcyIDAgMCAxIDM2MCA0MDAgQSA3MCA3MiAwIDAgMSAyOTAgMzI4IEEgNzAgNzIgMCAwIDEgMzYwIDI1NiB6Ii8+PGNpcmNsZSBjeD0iMzYwIiBjeT0iMzMwIiByPSI0MSIvPjxwYXRoIGQ9Im0yMDUgMjI1IDUtMTAgMjAgMCA1IDEwLTMwIDAiLz48cGF0aCBkPSJNMjg1IDIwMEwyNzAgMjI1IDM3NiAyMjUgMzYxIDIwMCAyODUgMjAwek0zMTAgMjA1TDMzNyAyMDUgMzM3IDIxOCAzMTAgMjE4IDMxMCAyMDV6Ii8+PHBhdGggZD0ibTQwNSAyMjUgNS0xMCAyMCAwIDUgMTAtMzAgMCIvPjwvZz48L3N2Zz4=')"
  },
  ".dropimage input": {
    "left": "0",
    "width": "100%",
    "height": "100%",
    "border": "0",
    "margin": "0",
    "padding": "0",
    "opacity": "0",
    "cursor": "pointer",
    "position": "absolute"
  },
  ".tabs": {
    "position": "relative",
    "overflow": "hidden"
  },
  ".tabs>label img": {
    "float": "left",
    "margin-left": ".6em"
  },
  ".tabs>.row": {
    "width": "calc(100% + 2 * .6em)",
    "display": "table",
    "table-layout": "fixed",
    "position": "relative",
    "padding-left": "0",
    "transition": "all .3s",
    "border-spacing": "0",
    "margin": "0"
  },
  ".tabs>.row:before,.tabs>.row:after": {
    "display": "none"
  },
  ".tabs>.row>*,.tabs>.row img": {
    "display": "table-cell",
    "vertical-align": "top",
    "margin": "0",
    "width": "100%"
  },
  ".tabs>input": {
    "display": "none"
  },
  ".tabs>input+*": {
    "width": "100%"
  },
  ".tabs>input+label": {
    "width": "auto"
  },
  ".two.tabs>.row": {
    "width": "200%",
    "left": "-100%"
  },
  ".two.tabs>input:nth-of-type(1):checked ~ .row": {
    "margin-left": "100%"
  },
  ".two.tabs>label img": {
    "width": "48%",
    "margin": "4% 0 4% 4%"
  },
  ".three.tabs>.row": {
    "width": "300%",
    "left": "-200%"
  },
  ".three.tabs>input:nth-of-type(1):checked ~ .row": {
    "margin-left": "200%"
  },
  ".three.tabs>input:nth-of-type(2):checked ~ .row": {
    "margin-left": "100%"
  },
  ".three.tabs>label img": {
    "width": "30%",
    "margin": "5% 0 5% 5%"
  },
  ".four.tabs>.row": {
    "width": "400%",
    "left": "-300%"
  },
  ".four.tabs>input:nth-of-type(1):checked ~ .row": {
    "margin-left": "300%"
  },
  ".four.tabs>input:nth-of-type(2):checked ~ .row": {
    "margin-left": "200%"
  },
  ".four.tabs>input:nth-of-type(3):checked ~ .row": {
    "margin-left": "100%"
  },
  ".four.tabs>label img": {
    "width": "22%",
    "margin": "4% 0 4% 4%"
  },
  ".tabs>label:first-of-type img": {
    "margin-left": "0"
  },
  "[data-tooltip]": {
    "position": "relative"
  },
  "[data-tooltip]:after,[data-tooltip]:before": {
    "position": "absolute",
    "z-index": "10",
    "opacity": "0",
    "border-width": "0",
    "height": "0",
    "padding": "0",
    "overflow": "hidden",
    "transition": "opacity .6s ease, height 0s ease .6s",
    "top": "calc(100% - 6px)",
    "left": "0",
    "margin-top": "12px"
  },
  "[data-tooltip]:after": {
    "margin-left": "0",
    "font-size": ".8em",
    "background": "#111",
    "content": "attr(data-tooltip)",
    "white-space": "nowrap"
  },
  "[data-tooltip]:before": {
    "content": "''",
    "width": "0",
    "height": "0",
    "border-width": "0",
    "border-style": "solid",
    "border-color": "transparent transparent #111",
    "margin-top": "0",
    "left": "10px"
  },
  "[data-tooltip]:hover:after,[data-tooltip]:focus:after,[data-tooltip]:hover:before,[data-tooltip]:focus:before": {
    "opacity": "1",
    "border-width": "6px",
    "height": "auto"
  },
  "[data-tooltip]:hover:after,[data-tooltip]:focus:after": {
    "padding": ".45em .9em"
  },
  ".tooltip-top:after,.tooltip-top:before": {
    "top": "auto",
    "bottom": "calc(100% - 6px)",
    "left": "0",
    "margin-bottom": "12px"
  },
  ".tooltip-top:before": {
    "border-color": "#111 transparent transparent",
    "margin-bottom": "0",
    "left": "10px"
  },
  ".tooltip-right:after,.tooltip-right:before": {
    "left": "100%",
    "margin-left": "6px",
    "margin-top": "0",
    "top": "0"
  },
  ".tooltip-right:before": {
    "border-color": "transparent #111 transparent transparent",
    "margin-left": "-6px",
    "left": "100%",
    "top": "7px"
  },
  ".tooltip-left:after,.tooltip-left:before": {
    "right": "100%",
    "margin-right": "6px",
    "left": "auto",
    "margin-top": "0",
    "top": "0"
  },
  ".tooltip-left:before": {
    "border-color": "transparent transparent transparent #111",
    "margin-right": "-6px",
    "right": "100%",
    "top": "7px"
  }
}

module.exports = includes;
