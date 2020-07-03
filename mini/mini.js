const includes = {
  ":root": {
    "--generic-border-color": "rgba(0,0,0,0.3)",
    "--generic-box-shadow": "0 .25rem .25rem 0 rgba(0,0,0,0.125),0 .125rem .125rem -.125rem rgba(0,0,0,0.25)"
  },
  "html": {
    "font-size": "16px"
  },
  "a,b,del,em,i,ins,q,span,strong,u": {
    "font-size": "1em"
  },
  "html,*": {
    "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, sans-serif",
    "line-height": "1.5",
    "-webkit-text-size-adjust": "100%"
  },
  "*": {
    "font-size": "1rem"
  },
  "body": {
    "margin": "0",
    "color": "var(--fore-color)",
    "background": "var(--back-color)"
  },
  "details": {
    "display": "block"
  },
  "summary": {
    "display": "list-item"
  },
  "abbr[title]": {
    "border-bottom": "none",
    "text-decoration": "underline dotted"
  },
  "input": {
    "overflow": "visible"
  },
  "img": {
    "max-width": "100%",
    "height": "auto"
  },
  "h1,h2,h3,h4,h5,h6": {
    "line-height": "1.2",
    "margin": "calc(1.5 * var(--universal-margin)) var(--universal-margin)",
    "font-weight": "500"
  },
  "h1 small,h2 small,h3 small,h4 small,h5 small,h6 small": {
    "color": "var(--secondary-fore-color)",
    "display": "block",
    "margin-top": "-.25rem"
  },
  "h1": {
    "font-size": "calc(1rem * var(--heading-ratio) * var(--heading-ratio) * var(--heading-ratio) * var(--heading-ratio))"
  },
  "h2": {
    "font-size": "calc(1rem * var(--heading-ratio) * var(--heading-ratio) * var(--heading-ratio))"
  },
  "h3": {
    "font-size": "calc(1rem * var(--heading-ratio) * var(--heading-ratio))"
  },
  "h4": {
    "font-size": "calc(1rem * var(--heading-ratio))"
  },
  "h5": {
    "font-size": "1rem"
  },
  "h6": {
    "font-size": "calc(1rem / var(--heading-ratio))"
  },
  "p": {
    "margin": "var(--universal-margin)"
  },
  "ol,ul": {
    "margin": "var(--universal-margin)",
    "padding-left": "calc(2 * var(--universal-margin))"
  },
  "b,strong": {
    "font-weight": "700"
  },
  "hr": {
    "box-sizing": "content-box",
    "border": "0",
    "line-height": "1.25em",
    "margin": "var(--universal-margin)",
    "height": ".0625rem",
    "background": "linear-gradient(to right, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent)"
  },
  "blockquote": {
    "display": "block",
    "position": "relative",
    "font-style": "italic",
    "color": "var(--secondary-fore-color)",
    "margin": "var(--universal-margin)",
    "padding": "calc(3 * var(--universal-padding))",
    "border": ".0625rem solid var(--secondary-border-color)",
    "border-left": ".375rem solid var(--blockquote-color)",
    "border-radius": "0 var(--universal-border-radius) var(--universal-border-radius) 0"
  },
  "blockquote:before": {
    "position": "absolute",
    "top": "calc(0rem - var(--universal-padding))",
    "left": "0",
    "font-family": "sans-serif",
    "font-size": "3rem",
    "font-weight": "700",
    "content": "'\\201c'",
    "color": "var(--blockquote-color)"
  },
  "blockquote[cite]:after": {
    "font-style": "normal",
    "font-size": ".75em",
    "font-weight": "700",
    "content": "'\\a—  ' attr(cite)",
    "white-space": "pre"
  },
  "code,kbd,pre,samp": {
    "font-family": "Menlo, Consolas, monospace",
    "font-size": ".85em"
  },
  "code": {
    "background": "var(--secondary-back-color)",
    "border-radius": "var(--universal-border-radius)",
    "padding": "calc(var(--universal-padding) / 4) calc(var(--universal-padding) / 2)"
  },
  "kbd": {
    "background": "var(--fore-color)",
    "color": "var(--back-color)",
    "border-radius": "var(--universal-border-radius)",
    "padding": "calc(var(--universal-padding) / 4) calc(var(--universal-padding) / 2)"
  },
  "pre": {
    "overflow": "auto",
    "background": "var(--secondary-back-color)",
    "padding": "calc(1.5 * var(--universal-padding))",
    "margin": "var(--universal-margin)",
    "border": ".0625rem solid var(--secondary-border-color)",
    "border-left": ".25rem solid var(--pre-color)",
    "border-radius": "0 var(--universal-border-radius) var(--universal-border-radius) 0"
  },
  "sup,sub,code,kbd": {
    "line-height": "0",
    "position": "relative",
    "vertical-align": "baseline"
  },
  "small,sup,sub,figcaption": {
    "font-size": ".75em"
  },
  "sup": {
    "top": "-.5em"
  },
  "sub": {
    "bottom": "-.25em"
  },
  "figure": {
    "margin": "var(--universal-margin)"
  },
  "figcaption": {
    "color": "var(--secondary-fore-color)"
  },
  "a": {
    "text-decoration": "none"
  },
  "a:link": {
    "color": "var(--a-link-color)"
  },
  "a:visited": {
    "color": "var(--a-visited-color)"
  },
  "a:hover,a:focus": {
    "text-decoration": "underline"
  },
  ".container": {
    "margin": "0 auto",
    "padding": "0 calc(1.5 * var(--universal-padding))"
  },
  ".row": {
    "box-sizing": "border-box",
    "display": "flex",
    "flex": "0 1 auto",
    "flex-flow": "row wrap"
  },
  ".col-sm,[class^='col-sm-'],[class^='col-sm-offset-'],.row[class*='cols-sm-']>*": {
    "box-sizing": "border-box",
    "flex": "0 0 auto",
    "padding": "0 calc(var(--universal-padding) / 2)"
  },
  ".col-sm,.row.cols-sm>*": {
    "max-width": "100%",
    "flex-grow": "1",
    "flex-basis": "0"
  },
  ".col-sm-1,.row.cols-sm-1>*": {
    "max-width": "8.33333%",
    "flex-basis": "8.33333%"
  },
  ".col-sm-offset-0": {
    "margin-left": "0"
  },
  ".col-sm-2,.row.cols-sm-2>*": {
    "max-width": "16.66667%",
    "flex-basis": "16.66667%"
  },
  ".col-sm-offset-1": {
    "margin-left": "8.33333%"
  },
  ".col-sm-3,.row.cols-sm-3>*": {
    "max-width": "25%",
    "flex-basis": "25%"
  },
  ".col-sm-offset-2": {
    "margin-left": "16.66667%"
  },
  ".col-sm-4,.row.cols-sm-4>*": {
    "max-width": "33.33333%",
    "flex-basis": "33.33333%"
  },
  ".col-sm-offset-3": {
    "margin-left": "25%"
  },
  ".col-sm-5,.row.cols-sm-5>*": {
    "max-width": "41.66667%",
    "flex-basis": "41.66667%"
  },
  ".col-sm-offset-4": {
    "margin-left": "33.33333%"
  },
  ".col-sm-6,.row.cols-sm-6>*": {
    "max-width": "50%",
    "flex-basis": "50%"
  },
  ".col-sm-offset-5": {
    "margin-left": "41.66667%"
  },
  ".col-sm-7,.row.cols-sm-7>*": {
    "max-width": "58.33333%",
    "flex-basis": "58.33333%"
  },
  ".col-sm-offset-6": {
    "margin-left": "50%"
  },
  ".col-sm-8,.row.cols-sm-8>*": {
    "max-width": "66.66667%",
    "flex-basis": "66.66667%"
  },
  ".col-sm-offset-7": {
    "margin-left": "58.33333%"
  },
  ".col-sm-9,.row.cols-sm-9>*": {
    "max-width": "75%",
    "flex-basis": "75%"
  },
  ".col-sm-offset-8": {
    "margin-left": "66.66667%"
  },
  ".col-sm-10,.row.cols-sm-10>*": {
    "max-width": "83.33333%",
    "flex-basis": "83.33333%"
  },
  ".col-sm-offset-9": {
    "margin-left": "75%"
  },
  ".col-sm-11,.row.cols-sm-11>*": {
    "max-width": "91.66667%",
    "flex-basis": "91.66667%"
  },
  ".col-sm-offset-10": {
    "margin-left": "83.33333%"
  },
  ".col-sm-12,.row.cols-sm-12>*": {
    "max-width": "100%",
    "flex-basis": "100%"
  },
  ".col-sm-offset-11": {
    "margin-left": "91.66667%"
  },
  ".col-sm-normal": {
    "order": "initial"
  },
  ".col-sm-first": {
    "order": "-999"
  },
  ".col-sm-last": {
    "order": "999"
  },
  "@media screen and (min-width: 768px)": {
    ".responsive-padding": {
      "padding": "calc(var(--universal-padding) / 2) !important"
    }
  },
  "@media screen and (min-width: 1280px)": {
    ".visually-hidden-lg": {
      "position": "absolute !important",
      "width": "1px !important",
      "height": "1px !important",
      "margin": "-1px !important",
      "border": "0 !important",
      "padding": "0 !important",
      "clip": "rect(0 0 0 0) !important",
      "-webkit-clip-path": "inset(100%) !important",
      "clip-path": "inset(100%) !important",
      "overflow": "hidden !important"
    }
  },
  ".card": {
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "align-self": "center",
    "position": "relative",
    "width": "100%",
    "background": "var(--card-back-color)",
    "color": "var(--card-fore-color)",
    "border": ".0625rem solid var(--card-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "margin": "var(--universal-margin)",
    "overflow": "hidden"
  },
  "@media screen and (min-width: 320px)": {
    ".card": {
      "max-width": "320px"
    }
  },
  ".card>.section": {
    "background": "var(--card-back-color)",
    "color": "var(--card-fore-color)",
    "box-sizing": "border-box",
    "margin": "0",
    "border": "0",
    "border-radius": "0",
    "border-bottom": ".0625rem solid var(--card-border-color)",
    "padding": "var(--universal-padding)",
    "width": "100%"
  },
  ".card>.section.media": {
    "height": "200px",
    "padding": "0",
    "-o-object-fit": "cover",
    "object-fit": "cover"
  },
  ".card>.section:last-child": {
    "border-bottom": "0"
  },
  "@media screen and (min-width: 240px)": {
    ".card.small": {
      "max-width": "240px"
    }
  },
  "@media screen and (min-width: 480px)": {
    ".card.large": {
      "max-width": "480px"
    }
  },
  ".card.fluid": {
    "max-width": "100%",
    "width": "auto"
  },
  ".card.warning": {
    "--card-back-color": "#ffca28",
    "--card-border-color": "#e8b825"
  },
  ".card.error": {
    "--card-back-color": "#b71c1c",
    "--card-fore-color": "#f8f8f8",
    "--card-border-color": "#a71a1a"
  },
  ".card>.section.dark": {
    "--card-back-color": "#e0e0e0"
  },
  ".card>.section.double-padded": {
    "padding": "calc(1.5 * var(--universal-padding))"
  },
  "form": {
    "background": "var(--form-back-color)",
    "color": "var(--form-fore-color)",
    "border": ".0625rem solid var(--form-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "margin": "var(--universal-margin)",
    "padding": "calc(2 * var(--universal-padding)) var(--universal-padding)"
  },
  "fieldset": {
    "border": ".0625rem solid var(--form-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "margin": "calc(var(--universal-margin) / 4)",
    "padding": "var(--universal-padding)"
  },
  "legend": {
    "box-sizing": "border-box",
    "display": "table",
    "max-width": "100%",
    "white-space": "normal",
    "font-weight": "700",
    "padding": "calc(var(--universal-padding) / 2)"
  },
  "label": {
    "padding": "calc(var(--universal-padding) / 2) var(--universal-padding)"
  },
  ".input-group": {
    "display": "inline-block"
  },
  ".input-group.fluid": {
    "display": "flex",
    "align-items": "center",
    "justify-content": "center"
  },
  ".input-group.fluid>input": {
    "max-width": "100%",
    "flex-grow": "1",
    "flex-basis": "0px"
  },
  "@media screen and (max-width: 767px)": {
    ".visually-hidden-sm": {
      "position": "absolute !important",
      "width": "1px !important",
      "height": "1px !important",
      "margin": "-1px !important",
      "border": "0 !important",
      "padding": "0 !important",
      "clip": "rect(0 0 0 0) !important",
      "-webkit-clip-path": "inset(100%) !important",
      "clip-path": "inset(100%) !important",
      "overflow": "hidden !important"
    }
  },
  ".input-group.vertical": {
    "display": "flex",
    "align-items": "stretch",
    "flex-direction": "column"
  },
  ".input-group.vertical>input": {
    "max-width": "100%",
    "flex-grow": "1",
    "flex-basis": "0px"
  },
  "[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button": {
    "height": "auto"
  },
  "[type='search']": {
    "-webkit-appearance": "textfield",
    "outline-offset": "-2px"
  },
  "[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration": {
    "-webkit-appearance": "none"
  },
  "input:not([type]),[type='text'],[type='email'],[type='number'],[type='search'],[type='password'],[type='url'],[type='tel'],[type='checkbox'],[type='radio'],textarea,select": {
    "box-sizing": "border-box",
    "background": "var(--input-back-color)",
    "color": "var(--input-fore-color)",
    "border": ".0625rem solid var(--input-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "margin": "calc(var(--universal-margin) / 2)",
    "padding": "var(--universal-padding) calc(1.5 * var(--universal-padding))"
  },
  "input:not([type='button']):not([type='submit']):not([type='reset']):hover,input:not([type='button']):not([type='submit']):not([type='reset']):focus,textarea:hover,textarea:focus,select:hover,select:focus": {
    "border-color": "var(--input-focus-color)",
    "box-shadow": "none"
  },
  "input:not([type='button']):not([type='submit']):not([type='reset']):invalid,input:not([type='button']):not([type='submit']):not([type='reset']):focus:invalid,textarea:invalid,textarea:focus:invalid,select:invalid,select:focus:invalid": {
    "border-color": "var(--input-invalid-color)",
    "box-shadow": "none"
  },
  "input:not([type='button']):not([type='submit']):not([type='reset'])[readonly],textarea[readonly],select[readonly]": {
    "background": "var(--secondary-back-color)"
  },
  "select": {
    "max-width": "100%"
  },
  "option": {
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  "[type='checkbox'],[type='radio']": {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none",
    "position": "relative",
    "height": "calc(1rem + var(--universal-padding) / 2)",
    "width": "calc(1rem + var(--universal-padding) / 2)",
    "vertical-align": "text-bottom",
    "padding": "0",
    "flex-basis": "calc(1rem + var(--universal-padding) / 2) !important",
    "flex-grow": "0 !important"
  },
  "[type='checkbox']:checked:before,[type='radio']:checked:before": {
    "position": "absolute"
  },
  "[type='checkbox']:checked:before": {
    "content": "'\\2713'",
    "font-family": "sans-serif",
    "font-size": "calc(1rem + var(--universal-padding) / 2)",
    "top": "calc(0rem - var(--universal-padding))",
    "left": "calc(var(--universal-padding) / 4)"
  },
  "[type='radio']": {
    "border-radius": "100%"
  },
  "[type='radio']:checked:before": {
    "border-radius": "100%",
    "content": "''",
    "top": "calc(.0625rem + var(--universal-padding) / 2)",
    "left": "calc(.0625rem + var(--universal-padding) / 2)",
    "background": "var(--input-fore-color)",
    "width": "0.5rem",
    "height": "0.5rem"
  },
  ":placeholder-shown": {
    "color": "var(--input-fore-color)"
  },
  "::-ms-placeholder": {
    "color": "var(--input-fore-color)",
    "opacity": "0.54"
  },
  "button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner": {
    "border-style": "none",
    "padding": "0"
  },
  "button,html [type='button'],[type='reset'],[type='submit']": {
    "-webkit-appearance": "button"
  },
  "button": {
    "overflow": "visible",
    "text-transform": "none"
  },
  "button,[type='button'],[type='submit'],[type='reset'],a.button,label.button,.button,a[role='button'],label[role='button'],[role='button']": {
    "display": "inline-block",
    "background": "var(--button-back-color)",
    "color": "var(--button-fore-color)",
    "border": ".0625rem solid var(--button-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "padding": "var(--universal-padding) calc(1.5 * var(--universal-padding))",
    "margin": "var(--universal-margin)",
    "text-decoration": "none",
    "cursor": "pointer",
    "transition": "background 0.3s"
  },
  "button:hover,button:focus,[type='button']:hover,[type='button']:focus,[type='submit']:hover,[type='submit']:focus,[type='reset']:hover,[type='reset']:focus,a.button:hover,a.button:focus,label.button:hover,label.button:focus,.button:hover,.button:focus,a[role='button']:hover,a[role='button']:focus,label[role='button']:hover,label[role='button']:focus,[role='button']:hover,[role='button']:focus": {
    "background": "var(--button-hover-back-color)",
    "border-color": "var(--button-hover-border-color)"
  },
  "input:disabled,input[disabled],textarea:disabled,textarea[disabled],select:disabled,select[disabled],button:disabled,button[disabled],.button:disabled,.button[disabled],[role='button']:disabled,[role='button'][disabled]": {
    "cursor": "not-allowed",
    "opacity": ".75"
  },
  ".button-group": {
    "display": "flex",
    "border": ".0625rem solid var(--button-group-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "margin": "var(--universal-margin)"
  },
  ".button-group>button,.button-group [type='button'],.button-group>[type='submit'],.button-group>[type='reset'],.button-group>.button,.button-group>[role='button']": {
    "margin": "0",
    "max-width": "100%",
    "flex": "1 1 auto",
    "text-align": "center",
    "border": "0",
    "border-radius": "0",
    "box-shadow": "none"
  },
  ".button-group>:not(:first-child)": {
    "border-left": ".0625rem solid var(--button-group-border-color)"
  },
  "button.primary,[type='button'].primary,[type='submit'].primary,[type='reset'].primary,.button.primary,[role='button'].primary": {
    "--button-back-color": "#1976d2",
    "--button-fore-color": "#f8f8f8"
  },
  "button.primary:hover,button.primary:focus,[type='button'].primary:hover,[type='button'].primary:focus,[type='submit'].primary:hover,[type='submit'].primary:focus,[type='reset'].primary:hover,[type='reset'].primary:focus,.button.primary:hover,.button.primary:focus,[role='button'].primary:hover,[role='button'].primary:focus": {
    "--button-hover-back-color": "#1565c0"
  },
  "button.secondary,[type='button'].secondary,[type='submit'].secondary,[type='reset'].secondary,.button.secondary,[role='button'].secondary": {
    "--button-back-color": "#d32f2f",
    "--button-fore-color": "#f8f8f8"
  },
  "button.secondary:hover,button.secondary:focus,[type='button'].secondary:hover,[type='button'].secondary:focus,[type='submit'].secondary:hover,[type='submit'].secondary:focus,[type='reset'].secondary:hover,[type='reset'].secondary:focus,.button.secondary:hover,.button.secondary:focus,[role='button'].secondary:hover,[role='button'].secondary:focus": {
    "--button-hover-back-color": "#c62828"
  },
  "button.tertiary,[type='button'].tertiary,[type='submit'].tertiary,[type='reset'].tertiary,.button.tertiary,[role='button'].tertiary": {
    "--button-back-color": "#308732",
    "--button-fore-color": "#f8f8f8"
  },
  "button.tertiary:hover,button.tertiary:focus,[type='button'].tertiary:hover,[type='button'].tertiary:focus,[type='submit'].tertiary:hover,[type='submit'].tertiary:focus,[type='reset'].tertiary:hover,[type='reset'].tertiary:focus,.button.tertiary:hover,.button.tertiary:focus,[role='button'].tertiary:hover,[role='button'].tertiary:focus": {
    "--button-hover-back-color": "#277529"
  },
  "button.inverse,[type='button'].inverse,[type='submit'].inverse,[type='reset'].inverse,.button.inverse,[role='button'].inverse": {
    "--button-back-color": "#212121",
    "--button-fore-color": "#f8f8f8"
  },
  "button.inverse:hover,button.inverse:focus,[type='button'].inverse:hover,[type='button'].inverse:focus,[type='submit'].inverse:hover,[type='submit'].inverse:focus,[type='reset'].inverse:hover,[type='reset'].inverse:focus,.button.inverse:hover,.button.inverse:focus,[role='button'].inverse:hover,[role='button'].inverse:focus": {
    "--button-hover-back-color": "#111"
  },
  "button.small,[type='button'].small,[type='submit'].small,[type='reset'].small,.button.small,[role='button'].small": {
    "padding": "calc(0.5 * var(--universal-padding)) calc(0.75 * var(--universal-padding))",
    "margin": "var(--universal-margin)"
  },
  "button.large,[type='button'].large,[type='submit'].large,[type='reset'].large,.button.large,[role='button'].large": {
    "padding": "calc(1.5 * var(--universal-padding)) calc(2 * var(--universal-padding))",
    "margin": "var(--universal-margin)"
  },
  "header": {
    "height": "3.1875rem",
    "background": "var(--header-back-color)",
    "color": "var(--header-fore-color)",
    "border-bottom": ".0625rem solid var(--header-border-color)",
    "padding": "calc(var(--universal-padding) / 4) 0",
    "white-space": "nowrap",
    "overflow-x": "auto",
    "overflow-y": "hidden"
  },
  "header.row": {
    "box-sizing": "content-box"
  },
  "header .logo": {
    "color": "var(--header-fore-color)",
    "font-size": "1.75rem",
    "padding": "var(--universal-padding) calc(2 * var(--universal-padding))",
    "text-decoration": "none"
  },
  "header button,header [type='button'],header .button,header [role='button']": {
    "box-sizing": "border-box",
    "position": "relative",
    "top": "calc(0rem - var(--universal-padding) / 4)",
    "height": "calc(3.1875rem + var(--universal-padding) / 2)",
    "background": "var(--header-back-color)",
    "line-height": "calc(3.1875rem - var(--universal-padding) * 1.5)",
    "text-align": "center",
    "color": "var(--header-fore-color)",
    "border": "0",
    "border-radius": "0",
    "margin": "0",
    "text-transform": "uppercase"
  },
  "header button:hover,header button:focus,header [type='button']:hover,header [type='button']:focus,header .button:hover,header .button:focus,header [role='button']:hover,header [role='button']:focus": {
    "background": "var(--header-hover-back-color)"
  },
  "nav": {
    "background": "var(--nav-back-color)",
    "color": "var(--nav-fore-color)",
    "border": ".0625rem solid var(--nav-border-color)",
    "border-radius": "var(--universal-border-radius)",
    "margin": "var(--universal-margin)"
  },
  "nav *": {
    "padding": "var(--universal-padding) calc(1.5 * var(--universal-padding))"
  },
  "nav a,nav a:visited": {
    "display": "block",
    "color": "var(--nav-link-color)",
    "border-radius": "var(--universal-border-radius)",
    "transition": "background 0.3s"
  },
  "nav a:hover,nav a:focus,nav a:visited:hover,nav a:visited:focus": {
    "text-decoration": "none",
    "background": "var(--nav-hover-back-color)"
  },
  "nav .sublink-1": {
    "position": "relative",
    "margin-left": "calc(2 * var(--universal-padding))"
  },
  "nav .sublink-1:before": {
    "position": "absolute",
    "left": "calc(var(--universal-padding) - 1 * var(--universal-padding))",
    "top": "-.0625rem",
    "content": "''",
    "height": "100%",
    "border": ".0625rem solid var(--nav-border-color)",
    "border-left": "0"
  },
  "nav .sublink-2": {
    "position": "relative",
    "margin-left": "calc(4 * var(--universal-padding))"
  },
  "nav .sublink-2:before": {
    "position": "absolute",
    "left": "calc(var(--universal-padding) - 3 * var(--universal-padding))",
    "top": "-.0625rem",
    "content": "''",
    "height": "100%",
    "border": ".0625rem solid var(--nav-border-color)",
    "border-left": "0"
  },
  "footer": {
    "background": "var(--footer-back-color)",
    "color": "var(--footer-fore-color)",
    "border-top": ".0625rem solid var(--footer-border-color)",
    "padding": "calc(2 * var(--universal-padding)) var(--universal-padding)",
    "font-size": ".875rem"
  },
  "footer a,footer a:visited": {
    "color": "var(--footer-link-color)"
  },
  "header.sticky": {
    "position": "sticky",
    "z-index": "1101",
    "top": "0"
  },
  "footer.sticky": {
    "position": "sticky",
    "z-index": "1101",
    "bottom": "0"
  },
  ".drawer-toggle:before": {
    "display": "inline-block",
    "position": "relative",
    "vertical-align": "bottom",
    "content": "'\\00a0\\2261\\00a0'",
    "font-family": "sans-serif",
    "font-size": "1.5em"
  },
  "[type='checkbox'].drawer": {
    "height": "1px",
    "width": "1px",
    "margin": "-1px",
    "overflow": "hidden",
    "position": "absolute",
    "clip": "rect(0 0 0 0)",
    "-webkit-clip-path": "inset(100%)",
    "clip-path": "inset(100%)"
  },
  "[type='checkbox'].drawer+*": {
    "display": "block",
    "box-sizing": "border-box",
    "position": "fixed",
    "top": "0",
    "width": "320px",
    "height": "100vh",
    "overflow-y": "auto",
    "background": "var(--drawer-back-color)",
    "border": ".0625rem solid var(--drawer-border-color)",
    "border-radius": "0",
    "margin": "0",
    "z-index": "1110",
    "right": "-320px",
    "transition": "right 0.3s"
  },
  "[type='checkbox'].drawer+* .drawer-close": {
    "position": "absolute",
    "top": "var(--universal-margin)",
    "right": "var(--universal-margin)",
    "z-index": "1111",
    "width": "2rem",
    "height": "2rem",
    "border-radius": "var(--universal-border-radius)",
    "padding": "var(--universal-padding)",
    "margin": "0",
    "cursor": "pointer",
    "transition": "background 0.3s"
  },
  "[type='checkbox'].drawer+* .drawer-close:before": {
    "display": "block",
    "content": "'\\00D7'",
    "color": "var(--drawer-close-color)",
    "position": "relative",
    "font-family": "sans-serif",
    "font-size": "2rem",
    "line-height": "1",
    "text-align": "center"
  },
  "[type='checkbox'].drawer+* .drawer-close:hover,[type='checkbox'].drawer+* .drawer-close:focus": {
    "background": "var(--drawer-hover-back-color)"
  },
  "@media screen and (max-width: 320px)": {
    "[type='checkbox'].drawer+*": {
      "width": "100%"
    }
  },
  "[type='checkbox'].drawer:checked+*": {
    "right": "0"
  },
  "table": {
    "border-collapse": "separate",
    "border-spacing": "0",
    "margin": "0",
    "display": "flex",
    "flex": "0 1 auto",
    "flex-flow": "row wrap",
    "padding": "var(--universal-padding)",
    "padding-top": "0"
  },
  "table caption": {
    "font-size": "1.5rem",
    "margin": "calc(2 * var(--universal-margin)) 0",
    "max-width": "100%",
    "flex": "0 0 100%"
  },
  "table thead,table tbody": {
    "display": "flex",
    "flex-flow": "row wrap",
    "border": ".0625rem solid var(--table-border-color)"
  },
  "table thead": {
    "z-index": "999",
    "border-radius": "var(--universal-border-radius) var(--universal-border-radius) 0 0",
    "border-bottom": ".0625rem solid var(--table-border-separator-color)"
  },
  "table tbody": {
    "border-top": "0",
    "margin-top": "calc(0 - var(--universal-margin))",
    "border-radius": "0 0 var(--universal-border-radius) var(--universal-border-radius)"
  },
  "table tr": {
    "display": "flex",
    "padding": "0"
  },
  "table th,table td": {
    "padding": "calc(2 * var(--universal-padding))"
  },
  "table th": {
    "text-align": "left",
    "background": "var(--table-head-back-color)",
    "color": "var(--table-head-fore-color)"
  },
  "table td": {
    "background": "var(--table-body-back-color)",
    "color": "var(--table-body-fore-color)",
    "border-top": ".0625rem solid var(--table-border-color)"
  },
  "table:not(.horizontal)": {
    "overflow": "auto",
    "max-height": "400px"
  },
  "table:not(.horizontal) thead,table:not(.horizontal) tbody": {
    "max-width": "100%",
    "flex": "0 0 100%"
  },
  "table:not(.horizontal) tr": {
    "flex-flow": "row wrap",
    "flex": "0 0 100%"
  },
  "table:not(.horizontal) th,table:not(.horizontal) td": {
    "flex": "1 0 0%",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  "table:not(.horizontal) thead": {
    "position": "sticky",
    "top": "0"
  },
  "table:not(.horizontal) tbody tr:first-child td": {
    "border-top": "0"
  },
  "table.horizontal": {
    "border": "0"
  },
  "table.horizontal thead,table.horizontal tbody": {
    "border": "0",
    "flex": ".2 0 0",
    "flex-flow": "row nowrap"
  },
  "table.horizontal tbody": {
    "overflow": "auto",
    "justify-content": "space-between",
    "flex": ".8 0 0",
    "margin-left": "0",
    "padding-bottom": "calc(var(--universal-padding) / 4)"
  },
  "table.horizontal tr": {
    "flex-direction": "column",
    "flex": "1 0 auto"
  },
  "table.horizontal th,table.horizontal td": {
    "width": "auto",
    "border": "0",
    "border-bottom": ".0625rem solid var(--table-border-color)"
  },
  "table.horizontal th:not(:first-child),table.horizontal td:not(:first-child)": {
    "border-top": "0"
  },
  "table.horizontal th": {
    "text-align": "right",
    "border-left": ".0625rem solid var(--table-border-color)",
    "border-right": ".0625rem solid var(--table-border-separator-color)"
  },
  "table.horizontal thead tr:first-child": {
    "padding-left": "0"
  },
  "table.horizontal th:first-child,table.horizontal td:first-child": {
    "border-top": ".0625rem solid var(--table-border-color)"
  },
  "table.horizontal tbody tr:last-child td": {
    "border-right": ".0625rem solid var(--table-border-color)"
  },
  "table.horizontal tbody tr:last-child td:first-child": {
    "border-top-right-radius": "0.25rem"
  },
  "table.horizontal tbody tr:last-child td:last-child": {
    "border-bottom-right-radius": "0.25rem"
  },
  "table.horizontal thead tr:first-child th:first-child": {
    "border-top-left-radius": "0.25rem"
  },
  "table.horizontal thead tr:first-child th:last-child": {
    "border-bottom-left-radius": "0.25rem"
  },
  "table.striped tr:nth-of-type(2n)>td": {
    "background": "var(--table-body-alt-back-color)"
  },
  "@media screen and (max-width: 768px)": {
    "table.hoverable tr:hover,table.hoverable tr:hover>td,table.hoverable tr:focus,table.hoverable tr:focus>td": {
      "background": "var(--table-body-hover-back-color)"
    }
  },
  "table.hoverable tr:hover,table.hoverable tr:hover>td,table.hoverable tr:focus,table.hoverable tr:focus>td": {
    "background": "var(--table-body-hover-back-color)"
  },
  "mark": {
    "background": "var(--mark-back-color)",
    "color": "var(--mark-fore-color)",
    "font-size": ".95em",
    "line-height": "1em",
    "border-radius": "var(--universal-border-radius)",
    "padding": "calc(var(--universal-padding) / 4) calc(var(--universal-padding) / 2)"
  },
  "mark.inline-block": {
    "display": "inline-block",
    "font-size": "1em",
    "line-height": "1.5",
    "padding": "calc(var(--universal-padding) / 2) var(--universal-padding)"
  },
  ".toast": {
    "position": "fixed",
    "bottom": "calc(var(--universal-margin) * 3)",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "z-index": "1111",
    "color": "var(--toast-fore-color)",
    "background": "var(--toast-back-color)",
    "border-radius": "calc(var(--universal-border-radius) * 16)",
    "padding": "var(--universal-padding) calc(var(--universal-padding) * 3)"
  },
  ".tooltip": {
    "position": "relative",
    "display": "inline-block"
  },
  ".tooltip:before,.tooltip:after": {
    "position": "absolute",
    "opacity": "0",
    "clip": "rect(0 0 0 0)",
    "-webkit-clip-path": "inset(100%)",
    "clip-path": "inset(100%)",
    "transition": "all 0.3s",
    "z-index": "1010",
    "left": "50%"
  },
  ".tooltip:not(.bottom):before,.tooltip:not(.bottom):after": {
    "bottom": "75%"
  },
  ".tooltip.bottom:before,.tooltip.bottom:after": {
    "top": "75%"
  },
  ".tooltip:hover:before,.tooltip:hover:after,.tooltip:focus:before,.tooltip:focus:after": {
    "opacity": "1",
    "clip": "auto",
    "-webkit-clip-path": "inset(0%)",
    "clip-path": "inset(0%)"
  },
  ".tooltip:before": {
    "content": "''",
    "background": "transparent",
    "border": "var(--universal-margin) solid transparent",
    "left": "calc(50% - var(--universal-margin))"
  },
  ".tooltip:not(.bottom):before": {
    "border-top-color": "#212121"
  },
  ".tooltip.bottom:before": {
    "border-bottom-color": "#212121"
  },
  ".tooltip:after": {
    "content": "attr(aria-label)",
    "color": "var(--tooltip-fore-color)",
    "background": "var(--tooltip-back-color)",
    "border-radius": "var(--universal-border-radius)",
    "padding": "var(--universal-padding)",
    "white-space": "nowrap",
    "transform": "translateX(-50%)"
  },
  ".tooltip:not(.bottom):after": {
    "margin-bottom": "calc(2 * var(--universal-margin))"
  },
  ".tooltip.bottom:after": {
    "margin-top": "calc(2 * var(--universal-margin))"
  },
  "[type='checkbox'].modal": {
    "height": "1px",
    "width": "1px",
    "margin": "-1px",
    "overflow": "hidden",
    "position": "absolute",
    "clip": "rect(0 0 0 0)",
    "-webkit-clip-path": "inset(100%)",
    "clip-path": "inset(100%)"
  },
  "[type='checkbox'].modal+div": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "display": "none",
    "width": "100vw",
    "height": "100vh",
    "background": "var(--modal-overlay-color)"
  },
  "[type='checkbox'].modal+div .card": {
    "margin": "0 auto",
    "max-height": "50vh",
    "overflow": "auto"
  },
  "[type='checkbox'].modal+div .card .modal-close": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "width": "1.75rem",
    "height": "1.75rem",
    "border-radius": "var(--universal-border-radius)",
    "padding": "var(--universal-padding)",
    "margin": "0",
    "cursor": "pointer",
    "transition": "background 0.3s"
  },
  "[type='checkbox'].modal+div .card .modal-close:before": {
    "display": "block",
    "content": "'\\00D7'",
    "color": "var(--modal-close-color)",
    "position": "relative",
    "font-family": "sans-serif",
    "font-size": "1.75rem",
    "line-height": "1",
    "text-align": "center"
  },
  "[type='checkbox'].modal+div .card .modal-close:hover,[type='checkbox'].modal+div .card .modal-close:focus": {
    "background": "var(--modal-close-hover-color)"
  },
  "[type='checkbox'].modal:checked+div": {
    "display": "flex",
    "flex": "0 1 auto",
    "z-index": "1200"
  },
  "[type='checkbox'].modal:checked+div .card .modal-close": {
    "z-index": "1211"
  },
  ".collapse": {
    "width": "calc(100% - 2 * var(--universal-margin))",
    "opacity": "1",
    "display": "flex",
    "flex-direction": "column",
    "margin": "var(--universal-margin)",
    "border-radius": "var(--universal-border-radius)"
  },
  ".collapse>[type='radio'],.collapse>[type='checkbox']": {
    "height": "1px",
    "width": "1px",
    "margin": "-1px",
    "overflow": "hidden",
    "position": "absolute",
    "clip": "rect(0 0 0 0)",
    "-webkit-clip-path": "inset(100%)",
    "clip-path": "inset(100%)"
  },
  ".collapse>label": {
    "flex-grow": "1",
    "display": "inline-block",
    "height": "1.5rem",
    "cursor": "pointer",
    "transition": "background 0.3s",
    "color": "var(--collapse-label-fore-color)",
    "background": "var(--collapse-label-back-color)",
    "border": ".0625rem solid var(--collapse-border-color)",
    "padding": "calc(1.5 * var(--universal-padding))"
  },
  ".collapse>label:hover,.collapse>label:focus": {
    "background": "var(--collapse-label-hover-back-color)"
  },
  ".collapse>label+div": {
    "flex-basis": "auto",
    "height": "1px",
    "width": "1px",
    "margin": "-1px",
    "overflow": "hidden",
    "position": "absolute",
    "clip": "rect(0 0 0 0)",
    "-webkit-clip-path": "inset(100%)",
    "clip-path": "inset(100%)",
    "transition": "max-height 0.3s",
    "max-height": "1px"
  },
  ".collapse>:checked+label": {
    "background": "var(--collapse-selected-label-back-color)",
    "border-bottom-color": "var(--collapse-selected-label-border-color)"
  },
  ".collapse>:checked+label+div": {
    "box-sizing": "border-box",
    "position": "relative",
    "width": "100%",
    "height": "auto",
    "overflow": "auto",
    "margin": "0",
    "background": "var(--collapse-content-back-color)",
    "border": ".0625rem solid var(--collapse-border-color)",
    "border-top": "0",
    "padding": "var(--universal-padding)",
    "clip": "auto",
    "-webkit-clip-path": "inset(0%)",
    "clip-path": "inset(0%)",
    "max-height": "400px"
  },
  ".collapse>label:not(:first-of-type)": {
    "border-top": "0"
  },
  ".collapse>label:first-of-type": {
    "border-radius": "var(--universal-border-radius) var(--universal-border-radius) 0 0"
  },
  ".collapse>label:last-of-type:not(:first-of-type)": {
    "border-radius": "0 0 var(--universal-border-radius) var(--universal-border-radius)"
  },
  ".collapse>label:last-of-type:first-of-type": {
    "border-radius": "var(--universal-border-radius)"
  },
  ".collapse>:checked:last-of-type:not(:first-of-type)+label": {
    "border-radius": "0"
  },
  ".collapse>:checked:last-of-type+label+div": {
    "border-radius": "0 0 var(--universal-border-radius) var(--universal-border-radius)"
  },
  "mark.secondary": {
    "--mark-back-color": "#d32f2f"
  },
  "mark.tertiary": {
    "--mark-back-color": "#308732"
  },
  "mark.tag": {
    "padding": "calc(var(--universal-padding)/2) var(--universal-padding)",
    "border-radius": "1em"
  },
  "progress": {
    "display": "block",
    "vertical-align": "baseline",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none",
    "height": ".75rem",
    "width": "calc(100% - 2 * var(--universal-margin))",
    "margin": "var(--universal-margin)",
    "border": "0",
    "border-radius": "calc(2 * var(--universal-border-radius))",
    "background": "var(--progress-back-color)",
    "color": "var(--progress-fore-color)"
  },
  "progress::-webkit-progress-value": {
    "background": "var(--progress-fore-color)",
    "border-top-left-radius": "calc(2 * var(--universal-border-radius))",
    "border-bottom-left-radius": "calc(2 * var(--universal-border-radius))"
  },
  "progress::-webkit-progress-bar": {
    "background": "var(--progress-back-color)"
  },
  "progress::-moz-progress-bar": {
    "background": "var(--progress-fore-color)",
    "border-top-left-radius": "calc(2 * var(--universal-border-radius))",
    "border-bottom-left-radius": "calc(2 * var(--universal-border-radius))"
  },
  "progress[value='1000']::-webkit-progress-value": {
    "border-radius": "calc(2 * var(--universal-border-radius))"
  },
  "progress[value='1000']::-moz-progress-bar": {
    "border-radius": "calc(2 * var(--universal-border-radius))"
  },
  "progress.inline": {
    "display": "inline-block",
    "vertical-align": "middle",
    "width": "60%"
  },
  "@keyframes spinner-donut-anim": {
    "0%": {
      "transform": "rotate(0deg)"
    },
    "100%": {
      "transform": "rotate(360deg)"
    }
  },
  ".spinner": {
    "display": "inline-block",
    "margin": "var(--universal-margin)",
    "border": ".25rem solid var(--spinner-back-color)",
    "border-left": ".25rem solid var(--spinner-fore-color)",
    "border-radius": "50%",
    "width": "1.25rem",
    "height": "1.25rem",
    "animation": "spinner-donut-anim 1.2s linear infinite"
  },
  "progress.primary": {
    "--progress-fore-color": "#1976d2"
  },
  "progress.secondary": {
    "--progress-fore-color": "#d32f2f"
  },
  "progress.tertiary": {
    "--progress-fore-color": "#308732"
  },
  ".spinner.primary": {
    "--spinner-fore-color": "#1976d2"
  },
  ".spinner.secondary": {
    "--spinner-fore-color": "#d32f2f"
  },
  ".spinner.tertiary": {
    "--spinner-fore-color": "#308732"
  },
  "span[class^='icon-']": {
    "display": "inline-block",
    "height": "1em",
    "width": "1em",
    "vertical-align": "-0.125em",
    "background-size": "contain",
    "margin": "0 calc(var(--universal-margin) / 4)"
  },
  "span[class^='icon-'].secondary": {
    "-webkit-filter": "invert(25%)",
    "filter": "invert(25%)"
  },
  "span[class^='icon-'].inverse": {
    "-webkit-filter": "invert(100%)",
    "filter": "invert(100%)"
  },
  "span.icon-alert": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-bookmark": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z%27%3E%3C/path%3E%3C/svg%3E')"
  },
  "span.icon-calendar": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-credit": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%271%27 y=%274%27 width=%2722%27 height=%2716%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%271%27 y1=%2710%27 x2=%2723%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-edit": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34%27%3E%3C/path%3E%3Cpolygon points=%2718 2 22 6 12 16 8 16 8 12 18 2%27%3E%3C/polygon%3E%3C/svg%3E')"
  },
  "span.icon-link": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6%27%3E%3C/path%3E%3Cpolyline points=%2715 3 21 3 21 9%27%3E%3C/polyline%3E%3Cline x1=%2710%27 y1=%2714%27 x2=%2721%27 y2=%273%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-help": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3%27%3E%3C/path%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%2717%27 x2=%2712%27 y2=%2717%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-home": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z%27%3E%3C/path%3E%3Cpolyline points=%279 22 9 12 15 12 15 22%27%3E%3C/polyline%3E%3C/svg%3E')"
  },
  "span.icon-info": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%278%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-lock": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%2711%27 width=%2718%27 height=%2711%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cpath d=%27M7 11V7a5 5 0 0 1 10 0v4%27%3E%3C/path%3E%3C/svg%3E')"
  },
  "span.icon-mail": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z%27%3E%3C/path%3E%3Cpolyline points=%2722,6 12,13 2,6%27%3E%3C/polyline%3E%3C/svg%3E')"
  },
  "span.icon-location": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z%27%3E%3C/path%3E%3Ccircle cx=%2712%27 cy=%2710%27 r=%273%27%3E%3C/circle%3E%3C/svg%3E')"
  },
  "span.icon-phone": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z%27%3E%3C/path%3E%3C/svg%3E')"
  },
  "span.icon-rss": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M4 11a9 9 0 0 1 9 9%27%3E%3C/path%3E%3Cpath d=%27M4 4a16 16 0 0 1 16 16%27%3E%3C/path%3E%3Ccircle cx=%275%27 cy=%2719%27 r=%271%27%3E%3C/circle%3E%3C/svg%3E')"
  },
  "span.icon-search": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-settings": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%273%27%3E%3C/circle%3E%3Cpath d=%27M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z%27%3E%3C/path%3E%3C/svg%3E')"
  },
  "span.icon-share": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2718%27 cy=%275%27 r=%273%27%3E%3C/circle%3E%3Ccircle cx=%276%27 cy=%2712%27 r=%273%27%3E%3C/circle%3E%3Ccircle cx=%2718%27 cy=%2719%27 r=%273%27%3E%3C/circle%3E%3Cline x1=%278.59%27 y1=%2713.51%27 x2=%2715.42%27 y2=%2717.49%27%3E%3C/line%3E%3Cline x1=%2715.41%27 y1=%276.51%27 x2=%278.59%27 y2=%2710.49%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-cart": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%279%27 cy=%2721%27 r=%271%27%3E%3C/circle%3E%3Ccircle cx=%2720%27 cy=%2721%27 r=%271%27%3E%3C/circle%3E%3Cpath d=%27M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6%27%3E%3C/path%3E%3C/svg%3E')"
  },
  "span.icon-upload": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4%27%3E%3C/path%3E%3Cpolyline points=%2717 8 12 3 7 8%27%3E%3C/polyline%3E%3Cline x1=%2712%27 y1=%273%27 x2=%2712%27 y2=%2715%27%3E%3C/line%3E%3C/svg%3E')"
  },
  "span.icon-user": {
    "background-image": "url('data: image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2%27%3E%3C/path%3E%3Ccircle cx=%2712%27 cy=%277%27 r=%274%27%3E%3C/circle%3E%3C/svg%3E')"
  },
  ".hidden": {
    "display": "none !important"
  },
  ".visually-hidden": {
    "position": "absolute !important",
    "width": "1px !important",
    "height": "1px !important",
    "margin": "-1px !important",
    "border": "0 !important",
    "padding": "0 !important",
    "clip": "rect(0 0 0 0) !important",
    "-webkit-clip-path": "inset(100%) !important",
    "clip-path": "inset(100%) !important",
    "overflow": "hidden !important"
  },
  ".bordered": {
    "border": ".0625rem solid var(--generic-border-color) !important"
  },
  ".rounded": {
    "border-radius": "var(--universal-border-radius) !important"
  },
  ".circular": {
    "border-radius": "50% !important"
  },
  ".shadowed": {
    "box-shadow": "var(--generic-box-shadow) !important"
  },
  ".responsive-margin": {
    "margin": "calc(var(--universal-margin) / 4) !important"
  },
  ".responsive-padding": {
    "padding": "calc(var(--universal-padding) / 4) !important"
  },
  "@media screen and (min-width: 768px) and (max-width: 1279px)": {
    ".visually-hidden-md": {
      "position": "absolute !important",
      "width": "1px !important",
      "height": "1px !important",
      "margin": "-1px !important",
      "border": "0 !important",
      "padding": "0 !important",
      "clip": "rect(0 0 0 0) !important",
      "-webkit-clip-path": "inset(100%) !important",
      "clip-path": "inset(100%) !important",
      "overflow": "hidden !important"
    }
  }
}

module.exports = includes;
