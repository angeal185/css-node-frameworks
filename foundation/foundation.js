const includes = {
  "@media print,screen and (min-width:40em)": {
    ".hide-for-medium": {
      "display": "none!important"
    }
  },
  "html": {
    "-webkit-box-sizing": "border-box",
    "box-sizing": "border-box",
    "font-size": "100%"
  },
  "body": {
    "margin": "0",
    "padding": "0",
    "background": "#fefefe",
    "font-family": "'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif",
    "font-weight": "400",
    "line-height": "1.5",
    "color": "#0a0a0a",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
  },
  "h1": {
    "font-size": "2em",
    "margin": ".67em 0"
  },
  "hr": {
    "clear": "both",
    "max-width": "75rem",
    "height": "0",
    "margin": "1.25rem auto",
    "border-top": "0",
    "border-right": "0",
    "border-bottom": "1px solid #cacaca",
    "border-left": "0"
  },
  "pre": {
    "overflow": "auto"
  },
  "a": {
    "line-height": "inherit",
    "color": "#1779ba",
    "text-decoration": "none",
    "cursor": "pointer"
  },
  "abbr[title]": {
    "border-bottom": "none",
    "text-decoration": "underline dotted",
    "-webkit-text-decoration": "underline dotted"
  },
  "b,strong": {
    "font-weight": "700",
    "line-height": "inherit"
  },
  "code,kbd,samp": {
    "font-family": "monospace,monospace",
    "font-size": "1em"
  },
  "small": {
    "font-size": "80%",
    "line-height": "inherit"
  },
  "sub,sup": {
    "font-size": "75%",
    "line-height": "0",
    "position": "relative",
    "vertical-align": "baseline"
  },
  "sub": {
    "bottom": "-.25em"
  },
  "sup": {
    "top": "-.5em"
  },
  "img": {
    "display": "inline-block",
    "vertical-align": "middle",
    "max-width": "100%",
    "height": "auto",
    "-ms-interpolation-mode": "bicubic"
  },
  "button,input,optgroup,select,textarea": {
    "font-family": "inherit"
  },
  "button,input": {
    "overflow": "visible"
  },
  "button,select": {
    "text-transform": "none"
  },
  "[type=button],[type=reset],[type=submit],button": {
    "-webkit-appearance": "button"
  },
  "[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner": {
    "border-style": "none",
    "padding": "0"
  },
  "[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring": {
    "outline": "1px dotted ButtonText"
  },
  "fieldset": {
    "margin": "0",
    "padding": "0",
    "border": "0"
  },
  "legend": {
    "max-width": "100%",
    "margin-bottom": ".5rem"
  },
  "progress": {
    "vertical-align": "baseline"
  },
  "textarea": {
    "max-width": "100%"
  },
  "[type=checkbox],[type=radio]": {
    "-webkit-box-sizing": "border-box",
    "box-sizing": "border-box",
    "padding": "0"
  },
  "[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button": {
    "height": "auto"
  },
  "[type=search]": {
    "-webkit-appearance": "textfield",
    "outline-offset": "-2px"
  },
  "[type=search]::-webkit-search-decoration": {
    "-webkit-appearance": "none"
  },
  "::-webkit-file-upload-button": {
    "-webkit-appearance": "button",
    "font": "inherit"
  },
  "details": {
    "display": "block"
  },
  "summary": {
    "display": "list-item"
  },
  "template": {
    "display": "none"
  },
  "[hidden]": {
    "display": "none"
  },
  ".foundation-mq": {
    "font-family": "'small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em'"
  },
  "*,::after,::before": {
    "-webkit-box-sizing": "inherit",
    "box-sizing": "inherit"
  },
  "select": {
    "height": "2.4375rem",
    "margin": "0 0 1rem",
    "padding": ".5rem",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none",
    "border": "1px solid #cacaca",
    "border-radius": "0",
    "background-color": "#fefefe",
    "font-family": "inherit",
    "font-size": "1rem",
    "font-weight": "400",
    "line-height": "1.5",
    "color": "#0a0a0a",
    "background-image": "url('data: image/svg+xml,utf8,<svg xmlns=%27http//www.w3.org/2000/svg%27 version=%271.1%27 width=%2732%27 height=%2724%27 viewBox=%270 0 32 24%27><polygon points=%270,0 32,0 16,24%27 style=%27fill rgb%28138, 138, 138%29%27></polygon></svg>')",
    "background-origin": "content-box",
    "background-position": "right -1rem center",
    "background-repeat": "no-repeat",
    "background-size": "9px 6px",
    "padding-right": "1.5rem",
    "-webkit-transition": "border-color .25s ease-in-out,-webkit-box-shadow .5s",
    "transition": "box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s"
  },
  ".map_canvas embed,.map_canvas img,.map_canvas object,.mqa-display embed,.mqa-display img,.mqa-display object": {
    "max-width": "none!important"
  },
  "button": {
    "padding": "0",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none",
    "border": "0",
    "border-radius": "0",
    "background": "0 0",
    "line-height": "1",
    "cursor": "auto"
  },
  "[data-whatinput=mouse] button": {
    "outline": "0"
  },
  ".is-visible": {
    "display": "block!important"
  },
  ".is-hidden": {
    "display": "none!important"
  },
  "[type=color],[type=date],[type=datetime-local],[type=datetime],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],textarea": {
    "display": "block",
    "-webkit-box-sizing": "border-box",
    "box-sizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "margin": "0 0 1rem",
    "padding": ".5rem",
    "border": "1px solid #cacaca",
    "border-radius": "0",
    "background-color": "#fefefe",
    "-webkit-box-shadow": "inset 0 1px 2px rgba(10,10,10,.1)",
    "box-shadow": "inset 0 1px 2px rgba(10,10,10,.1)",
    "font-family": "inherit",
    "font-size": "1rem",
    "font-weight": "400",
    "line-height": "1.5",
    "color": "#0a0a0a",
    "-webkit-transition": "border-color .25s ease-in-out,-webkit-box-shadow .5s",
    "transition": "box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none"
  },
  "[type=color]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=datetime]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,textarea:focus": {
    "outline": "0",
    "border": "1px solid #8a8a8a",
    "background-color": "#fefefe",
    "-webkit-box-shadow": "0 0 5px #cacaca",
    "box-shadow": "0 0 5px #cacaca",
    "-webkit-transition": "border-color .25s ease-in-out,-webkit-box-shadow .5s",
    "transition": "box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s"
  },
  "textarea[rows]": {
    "height": "auto"
  },
  "input:disabled,input[readonly],textarea:disabled,textarea[readonly]": {
    "background-color": "#e6e6e6",
    "cursor": "not-allowed"
  },
  "[type=button],[type=submit]": {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "appearance": "none",
    "border-radius": "0"
  },
  "input[type=search]": {
    "-webkit-box-sizing": "border-box",
    "box-sizing": "border-box"
  },
  "::-webkit-input-placeholder": {
    "color": "#cacaca"
  },
  "::-moz-placeholder": {
    "color": "#cacaca"
  },
  ":-ms-input-placeholder": {
    "color": "#cacaca"
  },
  "::-ms-input-placeholder": {
    "color": "#cacaca"
  },
  "::placeholder": {
    "color": "#cacaca"
  },
  "[type=checkbox],[type=file],[type=radio]": {
    "margin": "0 0 1rem"
  },
  "[type=checkbox]+label,[type=radio]+label": {
    "display": "inline-block",
    "vertical-align": "baseline",
    "margin-left": ".5rem",
    "margin-right": "1rem",
    "margin-bottom": "0"
  },
  "[type=checkbox]+label[for],[type=radio]+label[for]": {
    "cursor": "pointer"
  },
  "label>[type=checkbox],label>[type=radio]": {
    "margin-right": ".5rem"
  },
  "[type=file]": {
    "width": "100%"
  },
  "label": {
    "display": "block",
    "margin": "0",
    "font-size": ".875rem",
    "font-weight": "400",
    "line-height": "1.8",
    "color": "#0a0a0a"
  },
  "label.middle": {
    "margin": "0 0 1rem",
    "padding": ".5625rem 0"
  },
  ".help-text": {
    "margin-top": "-.5rem",
    "font-size": ".8125rem",
    "font-style": "italic",
    "color": "#0a0a0a"
  },
  ".input-group": {
    "display": "flex",
    "width": "100%",
    "margin-bottom": "1rem",
    "-webkit-box-align": "stretch",
    "-webkit-align-items": "stretch",
    "-ms-flex-align": "stretch",
    "align-items": "stretch"
  },
  ".input-group>:first-child,.input-group>:first-child.input-group-button>*": {
    "border-radius": "0"
  },
  ".input-group>:last-child,.input-group>:last-child.input-group-button>*": {
    "border-radius": "0"
  },
  ".input-group-button,.input-group-button a,.input-group-button button,.input-group-button input,.input-group-button label,.input-group-field,.input-group-label": {
    "margin": "0",
    "white-space": "nowrap"
  },
  ".input-group-label": {
    "padding": "0 1rem",
    "border": "1px solid #cacaca",
    "background": "#e6e6e6",
    "color": "#0a0a0a",
    "text-align": "center",
    "white-space": "nowrap",
    "display": "flex",
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto",
    "-webkit-box-align": "center",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"
  },
  ".input-group-label:first-child": {
    "border-right": "0"
  },
  ".input-group-label:last-child": {
    "border-left": "0"
  },
  ".input-group-field": {
    "border-radius": "0",
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px",
    "min-width": "0"
  },
  ".input-group-button": {
    "padding-top": "0",
    "padding-bottom": "0",
    "text-align": "center",
    "display": "flex",
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto"
  },
  ".input-group-button a,.input-group-button button,.input-group-button input,.input-group-button label": {
    "-webkit-align-self": "stretch",
    "-ms-flex-item-align": "stretch",
    "align-self": "stretch",
    "height": "auto",
    "padding-top": "0",
    "padding-bottom": "0",
    "font-size": "1rem"
  },
  ".fieldset": {
    "margin": "1.125rem 0",
    "padding": "1.25rem",
    "border": "1px solid #cacaca"
  },
  ".fieldset legend": {
    "margin": "0",
    "margin-left": "-.1875rem",
    "padding": "0 .1875rem"
  },
  "@media screen and (min-width:0\\0)": {
    "select": {
      "background-image": "url('data:image/png,base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==')"
    }
  },
  "select:focus": {
    "outline": "0",
    "border": "1px solid #8a8a8a",
    "background-color": "#fefefe",
    "-webkit-box-shadow": "0 0 5px #cacaca",
    "box-shadow": "0 0 5px #cacaca",
    "-webkit-transition": "border-color .25s ease-in-out,-webkit-box-shadow .5s",
    "transition": "box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s"
  },
  "select:disabled": {
    "background-color": "#e6e6e6",
    "cursor": "not-allowed"
  },
  "select::-ms-expand": {
    "display": "none"
  },
  "select[multiple]": {
    "height": "auto",
    "background-image": "none"
  },
  "select:not([multiple])": {
    "padding-top": "0",
    "padding-bottom": "0"
  },
  ".is-invalid-input:not(:focus)": {
    "border-color": "#cc4b37",
    "background-color": "#f9ecea"
  },
  ".is-invalid-input:not(:focus)::-webkit-input-placeholder": {
    "color": "#cc4b37"
  },
  ".is-invalid-input:not(:focus)::-moz-placeholder": {
    "color": "#cc4b37"
  },
  ".is-invalid-input:not(:focus):-ms-input-placeholder": {
    "color": "#cc4b37"
  },
  ".is-invalid-input:not(:focus)::-ms-input-placeholder": {
    "color": "#cc4b37"
  },
  ".is-invalid-input:not(:focus)::placeholder": {
    "color": "#cc4b37"
  },
  ".is-invalid-label": {
    "color": "#cc4b37"
  },
  ".form-error": {
    "display": "none",
    "margin-top": "-.5rem",
    "margin-bottom": "1rem",
    "font-size": ".75rem",
    "font-weight": "700",
    "color": "#cc4b37"
  },
  ".form-error.is-visible": {
    "display": "block"
  },
  "blockquote,dd,div,dl,dt,form,h1,h2,h3,h4,h5,h6,li,ol,p,pre,td,th,ul": {
    "margin": "0",
    "padding": "0"
  },
  "p": {
    "margin-bottom": "1rem",
    "font-size": "inherit",
    "line-height": "1.6",
    "text-rendering": "optimizeLegibility"
  },
  "em,i": {
    "font-style": "italic",
    "line-height": "inherit"
  },
  ".h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6": {
    "font-family": "'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif",
    "font-style": "normal",
    "font-weight": "400",
    "color": "inherit",
    "text-rendering": "optimizeLegibility"
  },
  ".h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 small,h2 small,h3 small,h4 small,h5 small,h6 small": {
    "line-height": "0",
    "color": "#cacaca"
  },
  ".h1,h1": {
    "font-size": "1.5rem",
    "line-height": "1.4",
    "margin-top": "0",
    "margin-bottom": ".5rem"
  },
  ".h2,h2": {
    "font-size": "1.25rem",
    "line-height": "1.4",
    "margin-top": "0",
    "margin-bottom": ".5rem"
  },
  ".h3,h3": {
    "font-size": "1.1875rem",
    "line-height": "1.4",
    "margin-top": "0",
    "margin-bottom": ".5rem"
  },
  ".h4,h4": {
    "font-size": "1.125rem",
    "line-height": "1.4",
    "margin-top": "0",
    "margin-bottom": ".5rem"
  },
  ".h5,h5": {
    "font-size": "1.0625rem",
    "line-height": "1.4",
    "margin-top": "0",
    "margin-bottom": ".5rem"
  },
  ".h6,h6": {
    "font-size": "1rem",
    "line-height": "1.4",
    "margin-top": "0",
    "margin-bottom": ".5rem"
  },
  "a:focus,a:hover": {
    "color": "#1468a0"
  },
  "a img": {
    "border": "0"
  },
  "dl,ol,ul": {
    "margin-bottom": "1rem",
    "list-style-position": "outside",
    "line-height": "1.6"
  },
  "li": {
    "font-size": "inherit"
  },
  "ul": {
    "margin-left": "1.25rem",
    "list-style-type": "disc"
  },
  "ol": {
    "margin-left": "1.25rem"
  },
  "ol ol,ol ul,ul ol,ul ul": {
    "margin-left": "1.25rem",
    "margin-bottom": "0"
  },
  "dl": {
    "margin-bottom": "1rem"
  },
  "dl dt": {
    "margin-bottom": ".3rem",
    "font-weight": "700"
  },
  "blockquote": {
    "margin": "0 0 1rem",
    "padding": ".5625rem 1.25rem 0 1.1875rem",
    "border-left": "1px solid #cacaca"
  },
  "blockquote,blockquote p": {
    "line-height": "1.6",
    "color": "#8a8a8a"
  },
  "abbr,abbr[title]": {
    "border-bottom": "1px dotted #0a0a0a",
    "cursor": "help",
    "text-decoration": "none"
  },
  "figure": {
    "margin": "0"
  },
  "kbd": {
    "margin": "0",
    "padding": ".125rem .25rem 0",
    "background-color": "#e6e6e6",
    "font-family": "Consolas,'Liberation Mono',Courier,monospace",
    "color": "#0a0a0a"
  },
  ".subheader": {
    "margin-top": ".2rem",
    "margin-bottom": ".5rem",
    "font-weight": "400",
    "line-height": "1.4",
    "color": "#8a8a8a"
  },
  ".lead": {
    "font-size": "125%",
    "line-height": "1.6"
  },
  ".stat": {
    "font-size": "2.5rem",
    "line-height": "1"
  },
  "p+.stat": {
    "margin-top": "-1rem"
  },
  "ol.no-bullet,ul.no-bullet": {
    "margin-left": "0",
    "list-style": "none"
  },
  ".cite-block,cite": {
    "display": "block",
    "color": "#8a8a8a",
    "font-size": ".8125rem"
  },
  ".cite-block:before,cite:before": {
    "content": "'— '"
  },
  ".code-inline,code": {
    "border": "1px solid #cacaca",
    "background-color": "#e6e6e6",
    "font-family": "Consolas,'Liberation Mono',Courier,monospace",
    "font-weight": "400",
    "color": "#0a0a0a",
    "display": "inline",
    "max-width": "100%",
    "word-wrap": "break-word",
    "padding": ".125rem .3125rem .0625rem"
  },
  ".code-block": {
    "border": "1px solid #cacaca",
    "background-color": "#e6e6e6",
    "font-family": "Consolas,'Liberation Mono',Courier,monospace",
    "font-weight": "400",
    "color": "#0a0a0a",
    "display": "block",
    "overflow": "auto",
    "white-space": "pre",
    "padding": "1rem",
    "margin-bottom": "1.5rem"
  },
  ".text-left": {
    "text-align": "left"
  },
  ".text-right": {
    "text-align": "right"
  },
  ".text-center": {
    "text-align": "center"
  },
  ".text-justify": {
    "text-align": "justify"
  },
  "@media print,screen and (min-width:64em)": {
    ".hide-for-large": {
      "display": "none!important"
    }
  },
  ".show-for-print": {
    "display": "none!important"
  },
  "@media print": {
    "*": {
      "background": "0 0!important",
      "color": "#000!important",
      "-webkit-print-color-adjust": "economy",
      "color-adjust": "economy",
      "-webkit-box-shadow": "none!important",
      "box-shadow": "none!important",
      "text-shadow": "none!important"
    },
    ".show-for-print": {
      "display": "block!important"
    },
    ".hide-for-print": {
      "display": "none!important"
    },
    "table.show-for-print": {
      "display": "table!important"
    },
    "thead.show-for-print": {
      "display": "table-header-group!important"
    },
    "tbody.show-for-print": {
      "display": "table-row-group!important"
    },
    "tr.show-for-print": {
      "display": "table-row!important"
    },
    "td.show-for-print": {
      "display": "table-cell!important"
    },
    "th.show-for-print": {
      "display": "table-cell!important"
    },
    "a,a:visited": {
      "text-decoration": "underline"
    },
    "a[href]:after": {
      "content": "' (' attr(href) ')'"
    },
    ".ir a:after,a[href^='#']:after,a[href^='javascript:']:after": {
      "content": "''"
    },
    "abbr[title]:after": {
      "content": "' (' attr(title) ')'"
    },
    "blockquote,pre": {
      "border": "1px solid #8a8a8a",
      "page-break-inside": "avoid"
    },
    "thead": {
      "display": "table-header-group"
    },
    "img,tr": {
      "page-break-inside": "avoid"
    },
    "img": {
      "max-width": "100%!important"
    },
    "@page": {
      "margin": ".5cm"
    },
    "h2,h3,p": {
      "orphans": "3",
      "widows": "3"
    },
    "h2,h3": {
      "page-break-after": "avoid"
    },
    ".print-break-inside": {
      "page-break-inside": "auto"
    }
  },
  ".grid-container": {
    "padding-right": ".625rem",
    "padding-left": ".625rem",
    "max-width": "75rem",
    "margin-left": "auto",
    "margin-right": "auto"
  },
  ".grid-container.fluid": {
    "padding-right": ".625rem",
    "padding-left": ".625rem",
    "max-width": "100%",
    "margin-left": "auto",
    "margin-right": "auto"
  },
  ".grid-container.full": {
    "padding-right": "0",
    "padding-left": "0",
    "max-width": "100%",
    "margin-left": "auto",
    "margin-right": "auto"
  },
  ".grid-x": {
    "display": "flex",
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "normal",
    "-webkit-flex-flow": "row wrap",
    "-ms-flex-flow": "row wrap",
    "flex-flow": "row wrap"
  },
  ".cell": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto",
    "min-height": "0",
    "min-width": "0",
    "width": "100%"
  },
  ".cell.auto": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px"
  },
  ".cell.shrink": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto"
  },
  ".grid-x>.auto": {
    "width": "auto"
  },
  ".grid-x>.shrink": {
    "width": "auto"
  },
  ".grid-x>.small-1,.grid-x>.small-10,.grid-x>.small-11,.grid-x>.small-12,.grid-x>.small-2,.grid-x>.small-3,.grid-x>.small-4,.grid-x>.small-5,.grid-x>.small-6,.grid-x>.small-7,.grid-x>.small-8,.grid-x>.small-9,.grid-x>.small-full,.grid-x>.small-shrink": {
    "-webkit-flex-basis": "auto",
    "-ms-flex-preferred-size": "auto",
    "flex-basis": "auto"
  },
  ".grid-x>.small-1,.grid-x>.small-10,.grid-x>.small-11,.grid-x>.small-12,.grid-x>.small-2,.grid-x>.small-3,.grid-x>.small-4,.grid-x>.small-5,.grid-x>.small-6,.grid-x>.small-7,.grid-x>.small-8,.grid-x>.small-9": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto"
  },
  ".grid-x>.small-1": {
    "width": "8.33333%"
  },
  ".grid-x>.small-2": {
    "width": "16.66667%"
  },
  ".grid-x>.small-3": {
    "width": "25%"
  },
  ".grid-x>.small-4": {
    "width": "33.33333%"
  },
  ".grid-x>.small-5": {
    "width": "41.66667%"
  },
  ".grid-x>.small-6": {
    "width": "50%"
  },
  ".grid-x>.small-7": {
    "width": "58.33333%"
  },
  ".grid-x>.small-8": {
    "width": "66.66667%"
  },
  ".grid-x>.small-9": {
    "width": "75%"
  },
  ".grid-x>.small-10": {
    "width": "83.33333%"
  },
  ".grid-x>.small-11": {
    "width": "91.66667%"
  },
  ".grid-x>.small-12": {
    "width": "100%"
  },
  ".grid-margin-x:not(.grid-x)>.cell": {
    "width": "auto"
  },
  ".grid-margin-y:not(.grid-y)>.cell": {
    "height": "auto"
  },
  ".grid-margin-x": {
    "margin-left": "-.625rem",
    "margin-right": "-.625rem"
  },
  ".grid-margin-x>.cell": {
    "width": "calc(100% - 1.25rem)",
    "margin-left": ".625rem",
    "margin-right": ".625rem"
  },
  ".grid-margin-x>.auto": {
    "width": "auto"
  },
  ".grid-margin-x>.shrink": {
    "width": "auto"
  },
  ".grid-margin-x>.small-1": {
    "width": "calc(8.33333% - 1.25rem)"
  },
  ".grid-margin-x>.small-2": {
    "width": "calc(16.66667% - 1.25rem)"
  },
  ".grid-margin-x>.small-3": {
    "width": "calc(25% - 1.25rem)"
  },
  ".grid-margin-x>.small-4": {
    "width": "calc(33.33333% - 1.25rem)"
  },
  ".grid-margin-x>.small-5": {
    "width": "calc(41.66667% - 1.25rem)"
  },
  ".grid-margin-x>.small-6": {
    "width": "calc(50% - 1.25rem)"
  },
  ".grid-margin-x>.small-7": {
    "width": "calc(58.33333% - 1.25rem)"
  },
  ".grid-margin-x>.small-8": {
    "width": "calc(66.66667% - 1.25rem)"
  },
  ".grid-margin-x>.small-9": {
    "width": "calc(75% - 1.25rem)"
  },
  ".grid-margin-x>.small-10": {
    "width": "calc(83.33333% - 1.25rem)"
  },
  ".grid-margin-x>.small-11": {
    "width": "calc(91.66667% - 1.25rem)"
  },
  ".grid-margin-x>.small-12": {
    "width": "calc(100% - 1.25rem)"
  },
  ".grid-padding-x .grid-padding-x": {
    "margin-right": "-.625rem",
    "margin-left": "-.625rem"
  },
  ".grid-container:not(.full)>.grid-padding-x": {
    "margin-right": "-.625rem",
    "margin-left": "-.625rem"
  },
  ".grid-padding-x>.cell": {
    "padding-right": ".625rem",
    "padding-left": ".625rem"
  },
  ".small-up-1>.cell": {
    "width": "100%"
  },
  ".small-up-2>.cell": {
    "width": "50%"
  },
  ".small-up-3>.cell": {
    "width": "33.33333%"
  },
  ".small-up-4>.cell": {
    "width": "25%"
  },
  ".small-up-5>.cell": {
    "width": "20%"
  },
  ".small-up-6>.cell": {
    "width": "16.66667%"
  },
  ".small-up-7>.cell": {
    "width": "14.28571%"
  },
  ".small-up-8>.cell": {
    "width": "12.5%"
  },
  ".grid-margin-x.small-up-1>.cell": {
    "width": "calc(100% - 1.25rem)"
  },
  ".grid-margin-x.small-up-2>.cell": {
    "width": "calc(50% - 1.25rem)"
  },
  ".grid-margin-x.small-up-3>.cell": {
    "width": "calc(33.33333% - 1.25rem)"
  },
  ".grid-margin-x.small-up-4>.cell": {
    "width": "calc(25% - 1.25rem)"
  },
  ".grid-margin-x.small-up-5>.cell": {
    "width": "calc(20% - 1.25rem)"
  },
  ".grid-margin-x.small-up-6>.cell": {
    "width": "calc(16.66667% - 1.25rem)"
  },
  ".grid-margin-x.small-up-7>.cell": {
    "width": "calc(14.28571% - 1.25rem)"
  },
  ".grid-margin-x.small-up-8>.cell": {
    "width": "calc(12.5% - 1.25rem)"
  },
  ".small-margin-collapse": {
    "margin-right": "0",
    "margin-left": "0"
  },
  ".small-margin-collapse>.cell": {
    "margin-right": "0",
    "margin-left": "0"
  },
  ".small-margin-collapse>.small-1": {
    "width": "8.33333%"
  },
  ".small-margin-collapse>.small-2": {
    "width": "16.66667%"
  },
  ".small-margin-collapse>.small-3": {
    "width": "25%"
  },
  ".small-margin-collapse>.small-4": {
    "width": "33.33333%"
  },
  ".small-margin-collapse>.small-5": {
    "width": "41.66667%"
  },
  ".small-margin-collapse>.small-6": {
    "width": "50%"
  },
  ".small-margin-collapse>.small-7": {
    "width": "58.33333%"
  },
  ".small-margin-collapse>.small-8": {
    "width": "66.66667%"
  },
  ".small-margin-collapse>.small-9": {
    "width": "75%"
  },
  ".small-margin-collapse>.small-10": {
    "width": "83.33333%"
  },
  ".small-margin-collapse>.small-11": {
    "width": "91.66667%"
  },
  ".small-margin-collapse>.small-12": {
    "width": "100%"
  },
  ".small-padding-collapse": {
    "margin-right": "0",
    "margin-left": "0"
  },
  ".small-padding-collapse>.cell": {
    "padding-right": "0",
    "padding-left": "0"
  },
  ".small-offset-0": {
    "margin-left": "0"
  },
  ".grid-margin-x>.small-offset-0": {
    "margin-left": "calc(0% + .625rem)"
  },
  ".small-offset-1": {
    "margin-left": "8.33333%"
  },
  ".grid-margin-x>.small-offset-1": {
    "margin-left": "calc(8.33333% + .625rem)"
  },
  ".small-offset-2": {
    "margin-left": "16.66667%"
  },
  ".grid-margin-x>.small-offset-2": {
    "margin-left": "calc(16.66667% + .625rem)"
  },
  ".small-offset-3": {
    "margin-left": "25%"
  },
  ".grid-margin-x>.small-offset-3": {
    "margin-left": "calc(25% + .625rem)"
  },
  ".small-offset-4": {
    "margin-left": "33.33333%"
  },
  ".grid-margin-x>.small-offset-4": {
    "margin-left": "calc(33.33333% + .625rem)"
  },
  ".small-offset-5": {
    "margin-left": "41.66667%"
  },
  ".grid-margin-x>.small-offset-5": {
    "margin-left": "calc(41.66667% + .625rem)"
  },
  ".small-offset-6": {
    "margin-left": "50%"
  },
  ".grid-margin-x>.small-offset-6": {
    "margin-left": "calc(50% + .625rem)"
  },
  ".small-offset-7": {
    "margin-left": "58.33333%"
  },
  ".grid-margin-x>.small-offset-7": {
    "margin-left": "calc(58.33333% + .625rem)"
  },
  ".small-offset-8": {
    "margin-left": "66.66667%"
  },
  ".grid-margin-x>.small-offset-8": {
    "margin-left": "calc(66.66667% + .625rem)"
  },
  ".small-offset-9": {
    "margin-left": "75%"
  },
  ".grid-margin-x>.small-offset-9": {
    "margin-left": "calc(75% + .625rem)"
  },
  ".small-offset-10": {
    "margin-left": "83.33333%"
  },
  ".grid-margin-x>.small-offset-10": {
    "margin-left": "calc(83.33333% + .625rem)"
  },
  ".small-offset-11": {
    "margin-left": "91.66667%"
  },
  ".grid-margin-x>.small-offset-11": {
    "margin-left": "calc(91.66667% + .625rem)"
  },
  ".grid-y": {
    "display": "flex",
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-flow": "column nowrap",
    "-ms-flex-flow": "column nowrap",
    "flex-flow": "column nowrap"
  },
  ".grid-y>.cell": {
    "height": "auto",
    "max-height": "none"
  },
  ".grid-y>.auto": {
    "height": "auto"
  },
  ".grid-y>.shrink": {
    "height": "auto"
  },
  ".grid-y>.small-1,.grid-y>.small-10,.grid-y>.small-11,.grid-y>.small-12,.grid-y>.small-2,.grid-y>.small-3,.grid-y>.small-4,.grid-y>.small-5,.grid-y>.small-6,.grid-y>.small-7,.grid-y>.small-8,.grid-y>.small-9,.grid-y>.small-full,.grid-y>.small-shrink": {
    "-webkit-flex-basis": "auto",
    "-ms-flex-preferred-size": "auto",
    "flex-basis": "auto"
  },
  ".grid-y>.small-1,.grid-y>.small-10,.grid-y>.small-11,.grid-y>.small-12,.grid-y>.small-2,.grid-y>.small-3,.grid-y>.small-4,.grid-y>.small-5,.grid-y>.small-6,.grid-y>.small-7,.grid-y>.small-8,.grid-y>.small-9": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto"
  },
  ".grid-y>.small-1": {
    "height": "8.33333%"
  },
  ".grid-y>.small-2": {
    "height": "16.66667%"
  },
  ".grid-y>.small-3": {
    "height": "25%"
  },
  ".grid-y>.small-4": {
    "height": "33.33333%"
  },
  ".grid-y>.small-5": {
    "height": "41.66667%"
  },
  ".grid-y>.small-6": {
    "height": "50%"
  },
  ".grid-y>.small-7": {
    "height": "58.33333%"
  },
  ".grid-y>.small-8": {
    "height": "66.66667%"
  },
  ".grid-y>.small-9": {
    "height": "75%"
  },
  ".grid-y>.small-10": {
    "height": "83.33333%"
  },
  ".grid-y>.small-11": {
    "height": "91.66667%"
  },
  ".grid-y>.small-12": {
    "height": "100%"
  },
  ".grid-padding-y .grid-padding-y": {
    "margin-top": "-.625rem",
    "margin-bottom": "-.625rem"
  },
  ".grid-padding-y>.cell": {
    "padding-top": ".625rem",
    "padding-bottom": ".625rem"
  },
  ".grid-margin-y": {
    "margin-top": "-.625rem",
    "margin-bottom": "-.625rem"
  },
  ".grid-margin-y>.cell": {
    "height": "calc(100% - 1.25rem)",
    "margin-top": ".625rem",
    "margin-bottom": ".625rem"
  },
  ".grid-margin-y>.auto": {
    "height": "auto"
  },
  ".grid-margin-y>.shrink": {
    "height": "auto"
  },
  ".grid-margin-y>.small-1": {
    "height": "calc(8.33333% - 1.25rem)"
  },
  ".grid-margin-y>.small-2": {
    "height": "calc(16.66667% - 1.25rem)"
  },
  ".grid-margin-y>.small-3": {
    "height": "calc(25% - 1.25rem)"
  },
  ".grid-margin-y>.small-4": {
    "height": "calc(33.33333% - 1.25rem)"
  },
  ".grid-margin-y>.small-5": {
    "height": "calc(41.66667% - 1.25rem)"
  },
  ".grid-margin-y>.small-6": {
    "height": "calc(50% - 1.25rem)"
  },
  ".grid-margin-y>.small-7": {
    "height": "calc(58.33333% - 1.25rem)"
  },
  ".grid-margin-y>.small-8": {
    "height": "calc(66.66667% - 1.25rem)"
  },
  ".grid-margin-y>.small-9": {
    "height": "calc(75% - 1.25rem)"
  },
  ".grid-margin-y>.small-10": {
    "height": "calc(83.33333% - 1.25rem)"
  },
  ".grid-margin-y>.small-11": {
    "height": "calc(91.66667% - 1.25rem)"
  },
  ".grid-margin-y>.small-12": {
    "height": "calc(100% - 1.25rem)"
  },
  ".grid-frame": {
    "overflow": "hidden",
    "position": "relative",
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flex-wrap": "nowrap",
    "-webkit-box-align": "stretch",
    "-webkit-align-items": "stretch",
    "-ms-flex-align": "stretch",
    "align-items": "stretch",
    "width": "100vw"
  },
  ".cell .grid-frame": {
    "width": "100%"
  },
  ".cell-block": {
    "overflow-x": "auto",
    "max-width": "100%",
    "-webkit-overflow-scrolling": "touch",
    "-ms-overflow-style": "-ms-autohiding-scrollbar"
  },
  ".cell-block-y": {
    "overflow-y": "auto",
    "max-height": "100%",
    "min-height": "100%",
    "-webkit-overflow-scrolling": "touch",
    "-ms-overflow-style": "-ms-autohiding-scrollbar"
  },
  ".cell-block-container": {
    "display": "flex",
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-direction": "column",
    "-ms-flex-direction": "column",
    "flex-direction": "column",
    "max-height": "100%"
  },
  ".cell-block-container>.grid-x": {
    "max-height": "100%",
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flex-wrap": "nowrap"
  },
  ".grid-y.grid-frame": {
    "width": "auto",
    "overflow": "hidden",
    "position": "relative",
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flex-wrap": "nowrap",
    "-webkit-box-align": "stretch",
    "-webkit-align-items": "stretch",
    "-ms-flex-align": "stretch",
    "align-items": "stretch",
    "height": "100vh"
  },
  ".cell .grid-y.grid-frame": {
    "height": "100%"
  },
  ".grid-frame.grid-margin-y": {
    "height": "calc(100vh + 1.25rem)"
  },
  ".button": {
    "display": "inline-block",
    "vertical-align": "middle",
    "margin": "0 0 1rem 0",
    "padding": ".85em 1em",
    "border": "1px solid transparent",
    "border-radius": "0",
    "-webkit-transition": "background-color .25s ease-out,color .25s ease-out",
    "transition": "background-color .25s ease-out,color .25s ease-out",
    "font-family": "inherit",
    "font-size": ".9rem",
    "-webkit-appearance": "none",
    "line-height": "1",
    "text-align": "center",
    "cursor": "pointer"
  },
  "[data-whatinput=mouse] .button": {
    "outline": "0"
  },
  ".button.tiny": {
    "font-size": ".6rem"
  },
  ".button.small": {
    "font-size": ".75rem"
  },
  ".button.large": {
    "font-size": "1.25rem"
  },
  ".button.expanded": {
    "display": "block",
    "width": "100%",
    "margin-right": "0",
    "margin-left": "0"
  },
  ".button,.button.disabled,.button.disabled:focus,.button.disabled:hover,.button[disabled],.button[disabled]:focus,.button[disabled]:hover": {
    "background-color": "#1779ba",
    "color": "#fefefe"
  },
  ".button:focus,.button:hover": {
    "background-color": "#14679e",
    "color": "#fefefe"
  },
  ".button.primary,.button.primary.disabled,.button.primary.disabled:focus,.button.primary.disabled:hover,.button.primary[disabled],.button.primary[disabled]:focus,.button.primary[disabled]:hover": {
    "background-color": "#1779ba",
    "color": "#fefefe"
  },
  ".button.primary:focus,.button.primary:hover": {
    "background-color": "#126195",
    "color": "#fefefe"
  },
  ".button.secondary,.button.secondary.disabled,.button.secondary.disabled:focus,.button.secondary.disabled:hover,.button.secondary[disabled],.button.secondary[disabled]:focus,.button.secondary[disabled]:hover": {
    "background-color": "#767676",
    "color": "#fefefe"
  },
  ".button.secondary:focus,.button.secondary:hover": {
    "background-color": "#5e5e5e",
    "color": "#fefefe"
  },
  ".button.success,.button.success.disabled,.button.success.disabled:focus,.button.success.disabled:hover,.button.success[disabled],.button.success[disabled]:focus,.button.success[disabled]:hover": {
    "background-color": "#3adb76",
    "color": "#0a0a0a"
  },
  ".button.success:focus,.button.success:hover": {
    "background-color": "#22bb5b",
    "color": "#0a0a0a"
  },
  ".button.warning,.button.warning.disabled,.button.warning.disabled:focus,.button.warning.disabled:hover,.button.warning[disabled],.button.warning[disabled]:focus,.button.warning[disabled]:hover": {
    "background-color": "#ffae00",
    "color": "#0a0a0a"
  },
  ".button.warning:focus,.button.warning:hover": {
    "background-color": "#cc8b00",
    "color": "#0a0a0a"
  },
  ".button.alert,.button.alert.disabled,.button.alert.disabled:focus,.button.alert.disabled:hover,.button.alert[disabled],.button.alert[disabled]:focus,.button.alert[disabled]:hover": {
    "background-color": "#cc4b37",
    "color": "#fefefe"
  },
  ".button.alert:focus,.button.alert:hover": {
    "background-color": "#a53b2a",
    "color": "#fefefe"
  },
  ".button.hollow,.button.hollow.disabled,.button.hollow.disabled:focus,.button.hollow.disabled:hover,.button.hollow:focus,.button.hollow:hover,.button.hollow[disabled],.button.hollow[disabled]:focus,.button.hollow[disabled]:hover": {
    "background-color": "transparent"
  },
  ".button.hollow,.button.hollow.disabled,.button.hollow.disabled:focus,.button.hollow.disabled:hover,.button.hollow[disabled],.button.hollow[disabled]:focus,.button.hollow[disabled]:hover": {
    "border": "1px solid #1779ba",
    "color": "#1779ba"
  },
  ".button.hollow:focus,.button.hollow:hover": {
    "border-color": "#0c3d5d",
    "color": "#0c3d5d"
  },
  ".button.hollow.primary,.button.hollow.primary.disabled,.button.hollow.primary.disabled:focus,.button.hollow.primary.disabled:hover,.button.hollow.primary[disabled],.button.hollow.primary[disabled]:focus,.button.hollow.primary[disabled]:hover": {
    "border": "1px solid #1779ba",
    "color": "#1779ba"
  },
  ".button.hollow.primary:focus,.button.hollow.primary:hover": {
    "border-color": "#0c3d5d",
    "color": "#0c3d5d"
  },
  ".button.hollow.secondary,.button.hollow.secondary.disabled,.button.hollow.secondary.disabled:focus,.button.hollow.secondary.disabled:hover,.button.hollow.secondary[disabled],.button.hollow.secondary[disabled]:focus,.button.hollow.secondary[disabled]:hover": {
    "border": "1px solid #767676",
    "color": "#767676"
  },
  ".button.hollow.secondary:focus,.button.hollow.secondary:hover": {
    "border-color": "#3b3b3b",
    "color": "#3b3b3b"
  },
  ".button.hollow.success,.button.hollow.success.disabled,.button.hollow.success.disabled:focus,.button.hollow.success.disabled:hover,.button.hollow.success[disabled],.button.hollow.success[disabled]:focus,.button.hollow.success[disabled]:hover": {
    "border": "1px solid #3adb76",
    "color": "#3adb76"
  },
  ".button.hollow.success:focus,.button.hollow.success:hover": {
    "border-color": "#157539",
    "color": "#157539"
  },
  ".button.hollow.warning,.button.hollow.warning.disabled,.button.hollow.warning.disabled:focus,.button.hollow.warning.disabled:hover,.button.hollow.warning[disabled],.button.hollow.warning[disabled]:focus,.button.hollow.warning[disabled]:hover": {
    "border": "1px solid #ffae00",
    "color": "#ffae00"
  },
  ".button.hollow.warning:focus,.button.hollow.warning:hover": {
    "border-color": "#805700",
    "color": "#805700"
  },
  ".button.hollow.alert,.button.hollow.alert.disabled,.button.hollow.alert.disabled:focus,.button.hollow.alert.disabled:hover,.button.hollow.alert[disabled],.button.hollow.alert[disabled]:focus,.button.hollow.alert[disabled]:hover": {
    "border": "1px solid #cc4b37",
    "color": "#cc4b37"
  },
  ".button.hollow.alert:focus,.button.hollow.alert:hover": {
    "border-color": "#67251a",
    "color": "#67251a"
  },
  ".button.clear,.button.clear.disabled,.button.clear.disabled:focus,.button.clear.disabled:hover,.button.clear:focus,.button.clear:hover,.button.clear[disabled],.button.clear[disabled]:focus,.button.clear[disabled]:hover": {
    "border-color": "transparent",
    "background-color": "transparent"
  },
  ".button.clear,.button.clear.disabled,.button.clear.disabled:focus,.button.clear.disabled:hover,.button.clear[disabled],.button.clear[disabled]:focus,.button.clear[disabled]:hover": {
    "color": "#1779ba"
  },
  ".button.clear:focus,.button.clear:hover": {
    "color": "#0c3d5d"
  },
  ".button.clear.primary,.button.clear.primary.disabled,.button.clear.primary.disabled:focus,.button.clear.primary.disabled:hover,.button.clear.primary[disabled],.button.clear.primary[disabled]:focus,.button.clear.primary[disabled]:hover": {
    "color": "#1779ba"
  },
  ".button.clear.primary:focus,.button.clear.primary:hover": {
    "color": "#0c3d5d"
  },
  ".button.clear.secondary,.button.clear.secondary.disabled,.button.clear.secondary.disabled:focus,.button.clear.secondary.disabled:hover,.button.clear.secondary[disabled],.button.clear.secondary[disabled]:focus,.button.clear.secondary[disabled]:hover": {
    "color": "#767676"
  },
  ".button.clear.secondary:focus,.button.clear.secondary:hover": {
    "color": "#3b3b3b"
  },
  ".button.clear.success,.button.clear.success.disabled,.button.clear.success.disabled:focus,.button.clear.success.disabled:hover,.button.clear.success[disabled],.button.clear.success[disabled]:focus,.button.clear.success[disabled]:hover": {
    "color": "#3adb76"
  },
  ".button.clear.success:focus,.button.clear.success:hover": {
    "color": "#157539"
  },
  ".button.clear.warning,.button.clear.warning.disabled,.button.clear.warning.disabled:focus,.button.clear.warning.disabled:hover,.button.clear.warning[disabled],.button.clear.warning[disabled]:focus,.button.clear.warning[disabled]:hover": {
    "color": "#ffae00"
  },
  ".button.clear.warning:focus,.button.clear.warning:hover": {
    "color": "#805700"
  },
  ".button.clear.alert,.button.clear.alert.disabled,.button.clear.alert.disabled:focus,.button.clear.alert.disabled:hover,.button.clear.alert[disabled],.button.clear.alert[disabled]:focus,.button.clear.alert[disabled]:hover": {
    "color": "#cc4b37"
  },
  ".button.clear.alert:focus,.button.clear.alert:hover": {
    "color": "#67251a"
  },
  ".button.disabled,.button[disabled]": {
    "opacity": ".25",
    "cursor": "not-allowed"
  },
  ".button.dropdown::after": {
    "display": "inline-block",
    "width": "0",
    "height": "0",
    "border": "inset .4em",
    "content": "''",
    "border-bottom-width": "0",
    "border-top-style": "solid",
    "border-color": "#fefefe transparent transparent",
    "position": "relative",
    "top": ".4em",
    "float": "right",
    "margin-left": "1em"
  },
  ".button.dropdown.clear::after,.button.dropdown.hollow::after": {
    "border-top-color": "#1779ba"
  },
  ".button.dropdown.clear.primary::after,.button.dropdown.hollow.primary::after": {
    "border-top-color": "#1779ba"
  },
  ".button.dropdown.clear.secondary::after,.button.dropdown.hollow.secondary::after": {
    "border-top-color": "#767676"
  },
  ".button.dropdown.clear.success::after,.button.dropdown.hollow.success::after": {
    "border-top-color": "#3adb76"
  },
  ".button.dropdown.clear.warning::after,.button.dropdown.hollow.warning::after": {
    "border-top-color": "#ffae00"
  },
  ".button.dropdown.clear.alert::after,.button.dropdown.hollow.alert::after": {
    "border-top-color": "#cc4b37"
  },
  ".button.arrow-only::after": {
    "top": "-.1em",
    "float": "none",
    "margin-left": "0"
  },
  "a.button:focus,a.button:hover": {
    "text-decoration": "none"
  },
  ".button-group": {
    "margin-bottom": "1rem",
    "display": "flex",
    "-webkit-flex-wrap": "wrap",
    "-ms-flex-wrap": "wrap",
    "flex-wrap": "wrap",
    "-webkit-box-align": "stretch",
    "-webkit-align-items": "stretch",
    "-ms-flex-align": "stretch",
    "align-items": "stretch",
    "-webkit-box-flex": "1",
    "-webkit-flex-grow": "1",
    "-ms-flex-positive": "1",
    "flex-grow": "1"
  },
  ".button-group::after,.button-group::before": {
    "display": "none"
  },
  ".button-group::after": {
    "clear": "both"
  },
  ".button-group .button": {
    "margin": "0",
    "margin-right": "1px",
    "margin-bottom": "1px",
    "font-size": ".9rem",
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto"
  },
  ".button-group .button:last-child": {
    "margin-right": "0"
  },
  ".button-group.tiny .button": {
    "font-size": ".6rem"
  },
  ".button-group.small .button": {
    "font-size": ".75rem"
  },
  ".button-group.large .button": {
    "font-size": "1.25rem"
  },
  ".button-group.expanded .button": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px",
    "margin-right": "0"
  },
  ".button-group.primary .button,.button-group.primary .button.disabled,.button-group.primary .button.disabled:focus,.button-group.primary .button.disabled:hover,.button-group.primary .button[disabled],.button-group.primary .button[disabled]:focus,.button-group.primary .button[disabled]:hover": {
    "background-color": "#1779ba",
    "color": "#fefefe"
  },
  ".button-group.primary .button:focus,.button-group.primary .button:hover": {
    "background-color": "#126195",
    "color": "#fefefe"
  },
  ".button-group.secondary .button,.button-group.secondary .button.disabled,.button-group.secondary .button.disabled:focus,.button-group.secondary .button.disabled:hover,.button-group.secondary .button[disabled],.button-group.secondary .button[disabled]:focus,.button-group.secondary .button[disabled]:hover": {
    "background-color": "#767676",
    "color": "#fefefe"
  },
  ".button-group.secondary .button:focus,.button-group.secondary .button:hover": {
    "background-color": "#5e5e5e",
    "color": "#fefefe"
  },
  ".button-group.success .button,.button-group.success .button.disabled,.button-group.success .button.disabled:focus,.button-group.success .button.disabled:hover,.button-group.success .button[disabled],.button-group.success .button[disabled]:focus,.button-group.success .button[disabled]:hover": {
    "background-color": "#3adb76",
    "color": "#0a0a0a"
  },
  ".button-group.success .button:focus,.button-group.success .button:hover": {
    "background-color": "#22bb5b",
    "color": "#0a0a0a"
  },
  ".button-group.warning .button,.button-group.warning .button.disabled,.button-group.warning .button.disabled:focus,.button-group.warning .button.disabled:hover,.button-group.warning .button[disabled],.button-group.warning .button[disabled]:focus,.button-group.warning .button[disabled]:hover": {
    "background-color": "#ffae00",
    "color": "#0a0a0a"
  },
  ".button-group.warning .button:focus,.button-group.warning .button:hover": {
    "background-color": "#cc8b00",
    "color": "#0a0a0a"
  },
  ".button-group.alert .button,.button-group.alert .button.disabled,.button-group.alert .button.disabled:focus,.button-group.alert .button.disabled:hover,.button-group.alert .button[disabled],.button-group.alert .button[disabled]:focus,.button-group.alert .button[disabled]:hover": {
    "background-color": "#cc4b37",
    "color": "#fefefe"
  },
  ".button-group.alert .button:focus,.button-group.alert .button:hover": {
    "background-color": "#a53b2a",
    "color": "#fefefe"
  },
  ".button-group.hollow .button,.button-group.hollow .button.disabled,.button-group.hollow .button.disabled:focus,.button-group.hollow .button.disabled:hover,.button-group.hollow .button:focus,.button-group.hollow .button:hover,.button-group.hollow .button[disabled],.button-group.hollow .button[disabled]:focus,.button-group.hollow .button[disabled]:hover": {
    "background-color": "transparent"
  },
  ".button-group.hollow .button,.button-group.hollow .button.disabled,.button-group.hollow .button.disabled:focus,.button-group.hollow .button.disabled:hover,.button-group.hollow .button[disabled],.button-group.hollow .button[disabled]:focus,.button-group.hollow .button[disabled]:hover": {
    "border": "1px solid #1779ba",
    "color": "#1779ba"
  },
  ".button-group.hollow .button:focus,.button-group.hollow .button:hover": {
    "border-color": "#0c3d5d",
    "color": "#0c3d5d"
  },
  ".button-group.hollow .button.primary,.button-group.hollow .button.primary.disabled,.button-group.hollow .button.primary.disabled:focus,.button-group.hollow .button.primary.disabled:hover,.button-group.hollow .button.primary[disabled],.button-group.hollow .button.primary[disabled]:focus,.button-group.hollow .button.primary[disabled]:hover,.button-group.hollow.primary .button,.button-group.hollow.primary .button.disabled,.button-group.hollow.primary .button.disabled:focus,.button-group.hollow.primary .button.disabled:hover,.button-group.hollow.primary .button[disabled],.button-group.hollow.primary .button[disabled]:focus,.button-group.hollow.primary .button[disabled]:hover": {
    "border": "1px solid #1779ba",
    "color": "#1779ba"
  },
  ".button-group.hollow .button.primary:focus,.button-group.hollow .button.primary:hover,.button-group.hollow.primary .button:focus,.button-group.hollow.primary .button:hover": {
    "border-color": "#0c3d5d",
    "color": "#0c3d5d"
  },
  ".button-group.hollow .button.secondary,.button-group.hollow .button.secondary.disabled,.button-group.hollow .button.secondary.disabled:focus,.button-group.hollow .button.secondary.disabled:hover,.button-group.hollow .button.secondary[disabled],.button-group.hollow .button.secondary[disabled]:focus,.button-group.hollow .button.secondary[disabled]:hover,.button-group.hollow.secondary .button,.button-group.hollow.secondary .button.disabled,.button-group.hollow.secondary .button.disabled:focus,.button-group.hollow.secondary .button.disabled:hover,.button-group.hollow.secondary .button[disabled],.button-group.hollow.secondary .button[disabled]:focus,.button-group.hollow.secondary .button[disabled]:hover": {
    "border": "1px solid #767676",
    "color": "#767676"
  },
  ".button-group.hollow .button.secondary:focus,.button-group.hollow .button.secondary:hover,.button-group.hollow.secondary .button:focus,.button-group.hollow.secondary .button:hover": {
    "border-color": "#3b3b3b",
    "color": "#3b3b3b"
  },
  ".button-group.hollow .button.success,.button-group.hollow .button.success.disabled,.button-group.hollow .button.success.disabled:focus,.button-group.hollow .button.success.disabled:hover,.button-group.hollow .button.success[disabled],.button-group.hollow .button.success[disabled]:focus,.button-group.hollow .button.success[disabled]:hover,.button-group.hollow.success .button,.button-group.hollow.success .button.disabled,.button-group.hollow.success .button.disabled:focus,.button-group.hollow.success .button.disabled:hover,.button-group.hollow.success .button[disabled],.button-group.hollow.success .button[disabled]:focus,.button-group.hollow.success .button[disabled]:hover": {
    "border": "1px solid #3adb76",
    "color": "#3adb76"
  },
  ".button-group.hollow .button.success:focus,.button-group.hollow .button.success:hover,.button-group.hollow.success .button:focus,.button-group.hollow.success .button:hover": {
    "border-color": "#157539",
    "color": "#157539"
  },
  ".button-group.hollow .button.warning,.button-group.hollow .button.warning.disabled,.button-group.hollow .button.warning.disabled:focus,.button-group.hollow .button.warning.disabled:hover,.button-group.hollow .button.warning[disabled],.button-group.hollow .button.warning[disabled]:focus,.button-group.hollow .button.warning[disabled]:hover,.button-group.hollow.warning .button,.button-group.hollow.warning .button.disabled,.button-group.hollow.warning .button.disabled:focus,.button-group.hollow.warning .button.disabled:hover,.button-group.hollow.warning .button[disabled],.button-group.hollow.warning .button[disabled]:focus,.button-group.hollow.warning .button[disabled]:hover": {
    "border": "1px solid #ffae00",
    "color": "#ffae00"
  },
  ".button-group.hollow .button.warning:focus,.button-group.hollow .button.warning:hover,.button-group.hollow.warning .button:focus,.button-group.hollow.warning .button:hover": {
    "border-color": "#805700",
    "color": "#805700"
  },
  ".button-group.hollow .button.alert,.button-group.hollow .button.alert.disabled,.button-group.hollow .button.alert.disabled:focus,.button-group.hollow .button.alert.disabled:hover,.button-group.hollow .button.alert[disabled],.button-group.hollow .button.alert[disabled]:focus,.button-group.hollow .button.alert[disabled]:hover,.button-group.hollow.alert .button,.button-group.hollow.alert .button.disabled,.button-group.hollow.alert .button.disabled:focus,.button-group.hollow.alert .button.disabled:hover,.button-group.hollow.alert .button[disabled],.button-group.hollow.alert .button[disabled]:focus,.button-group.hollow.alert .button[disabled]:hover": {
    "border": "1px solid #cc4b37",
    "color": "#cc4b37"
  },
  ".button-group.hollow .button.alert:focus,.button-group.hollow .button.alert:hover,.button-group.hollow.alert .button:focus,.button-group.hollow.alert .button:hover": {
    "border-color": "#67251a",
    "color": "#67251a"
  },
  ".button-group.clear .button,.button-group.clear .button.disabled,.button-group.clear .button.disabled:focus,.button-group.clear .button.disabled:hover,.button-group.clear .button:focus,.button-group.clear .button:hover,.button-group.clear .button[disabled],.button-group.clear .button[disabled]:focus,.button-group.clear .button[disabled]:hover": {
    "border-color": "transparent",
    "background-color": "transparent"
  },
  ".button-group.clear .button,.button-group.clear .button.disabled,.button-group.clear .button.disabled:focus,.button-group.clear .button.disabled:hover,.button-group.clear .button[disabled],.button-group.clear .button[disabled]:focus,.button-group.clear .button[disabled]:hover": {
    "color": "#1779ba"
  },
  ".button-group.clear .button:focus,.button-group.clear .button:hover": {
    "color": "#0c3d5d"
  },
  ".button-group.clear .button.primary,.button-group.clear .button.primary.disabled,.button-group.clear .button.primary.disabled:focus,.button-group.clear .button.primary.disabled:hover,.button-group.clear .button.primary[disabled],.button-group.clear .button.primary[disabled]:focus,.button-group.clear .button.primary[disabled]:hover,.button-group.clear.primary .button,.button-group.clear.primary .button.disabled,.button-group.clear.primary .button.disabled:focus,.button-group.clear.primary .button.disabled:hover,.button-group.clear.primary .button[disabled],.button-group.clear.primary .button[disabled]:focus,.button-group.clear.primary .button[disabled]:hover": {
    "color": "#1779ba"
  },
  ".button-group.clear .button.primary:focus,.button-group.clear .button.primary:hover,.button-group.clear.primary .button:focus,.button-group.clear.primary .button:hover": {
    "color": "#0c3d5d"
  },
  ".button-group.clear .button.secondary,.button-group.clear .button.secondary.disabled,.button-group.clear .button.secondary.disabled:focus,.button-group.clear .button.secondary.disabled:hover,.button-group.clear .button.secondary[disabled],.button-group.clear .button.secondary[disabled]:focus,.button-group.clear .button.secondary[disabled]:hover,.button-group.clear.secondary .button,.button-group.clear.secondary .button.disabled,.button-group.clear.secondary .button.disabled:focus,.button-group.clear.secondary .button.disabled:hover,.button-group.clear.secondary .button[disabled],.button-group.clear.secondary .button[disabled]:focus,.button-group.clear.secondary .button[disabled]:hover": {
    "color": "#767676"
  },
  ".button-group.clear .button.secondary:focus,.button-group.clear .button.secondary:hover,.button-group.clear.secondary .button:focus,.button-group.clear.secondary .button:hover": {
    "color": "#3b3b3b"
  },
  ".button-group.clear .button.success,.button-group.clear .button.success.disabled,.button-group.clear .button.success.disabled:focus,.button-group.clear .button.success.disabled:hover,.button-group.clear .button.success[disabled],.button-group.clear .button.success[disabled]:focus,.button-group.clear .button.success[disabled]:hover,.button-group.clear.success .button,.button-group.clear.success .button.disabled,.button-group.clear.success .button.disabled:focus,.button-group.clear.success .button.disabled:hover,.button-group.clear.success .button[disabled],.button-group.clear.success .button[disabled]:focus,.button-group.clear.success .button[disabled]:hover": {
    "color": "#3adb76"
  },
  ".button-group.clear .button.success:focus,.button-group.clear .button.success:hover,.button-group.clear.success .button:focus,.button-group.clear.success .button:hover": {
    "color": "#157539"
  },
  ".button-group.clear .button.warning,.button-group.clear .button.warning.disabled,.button-group.clear .button.warning.disabled:focus,.button-group.clear .button.warning.disabled:hover,.button-group.clear .button.warning[disabled],.button-group.clear .button.warning[disabled]:focus,.button-group.clear .button.warning[disabled]:hover,.button-group.clear.warning .button,.button-group.clear.warning .button.disabled,.button-group.clear.warning .button.disabled:focus,.button-group.clear.warning .button.disabled:hover,.button-group.clear.warning .button[disabled],.button-group.clear.warning .button[disabled]:focus,.button-group.clear.warning .button[disabled]:hover": {
    "color": "#ffae00"
  },
  ".button-group.clear .button.warning:focus,.button-group.clear .button.warning:hover,.button-group.clear.warning .button:focus,.button-group.clear.warning .button:hover": {
    "color": "#805700"
  },
  ".button-group.clear .button.alert,.button-group.clear .button.alert.disabled,.button-group.clear .button.alert.disabled:focus,.button-group.clear .button.alert.disabled:hover,.button-group.clear .button.alert[disabled],.button-group.clear .button.alert[disabled]:focus,.button-group.clear .button.alert[disabled]:hover,.button-group.clear.alert .button,.button-group.clear.alert .button.disabled,.button-group.clear.alert .button.disabled:focus,.button-group.clear.alert .button.disabled:hover,.button-group.clear.alert .button[disabled],.button-group.clear.alert .button[disabled]:focus,.button-group.clear.alert .button[disabled]:hover": {
    "color": "#cc4b37"
  },
  ".button-group.clear .button.alert:focus,.button-group.clear .button.alert:hover,.button-group.clear.alert .button:focus,.button-group.clear.alert .button:hover": {
    "color": "#67251a"
  },
  ".button-group.no-gaps .button": {
    "margin-right": "-.0625rem"
  },
  ".button-group.no-gaps .button+.button": {
    "border-left-color": "transparent"
  },
  ".button-group.stacked,.button-group.stacked-for-medium,.button-group.stacked-for-small": {
    "-webkit-flex-wrap": "wrap",
    "-ms-flex-wrap": "wrap",
    "flex-wrap": "wrap"
  },
  ".button-group.stacked .button,.button-group.stacked-for-medium .button,.button-group.stacked-for-small .button": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 100%",
    "-ms-flex": "0 0 100%",
    "flex": "0 0 100%"
  },
  ".button-group.stacked .button:last-child,.button-group.stacked-for-medium .button:last-child,.button-group.stacked-for-small .button:last-child": {
    "margin-bottom": "0"
  },
  ".button-group.stacked-for-medium.expanded .button,.button-group.stacked-for-small.expanded .button,.button-group.stacked.expanded .button": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px",
    "margin-right": "0"
  },
  "@media print,screen and (max-width:39.99875em)": {
    ".hide-for-small-only": {
      "display": "none!important"
    }
  },
  "@media print,screen and (max-width:63.99875em)": {
    ".top-bar.stacked-for-medium": {
      "-webkit-flex-wrap": "wrap",
      "-ms-flex-wrap": "wrap",
      "flex-wrap": "wrap"
    },
    ".top-bar.stacked-for-medium .top-bar-left,.top-bar.stacked-for-medium .top-bar-right": {
      "-webkit-box-flex": "0",
      "-webkit-flex": "0 0 100%",
      "-ms-flex": "0 0 100%",
      "flex": "0 0 100%",
      "max-width": "100%"
    }
  },
  ".close-button": {
    "position": "absolute",
    "z-index": "10",
    "color": "#8a8a8a",
    "cursor": "pointer"
  },
  "[data-whatinput=mouse] .close-button": {
    "outline": "0"
  },
  ".close-button:focus,.close-button:hover": {
    "color": "#0a0a0a"
  },
  ".close-button.small": {
    "right": ".66rem",
    "top": ".33em",
    "font-size": "1.5em",
    "line-height": "1"
  },
  ".close-button,.close-button.medium": {
    "right": "1rem",
    "top": ".5rem",
    "font-size": "2em",
    "line-height": "1"
  },
  ".label": {
    "display": "inline-block",
    "padding": ".33333rem .5rem",
    "border-radius": "0",
    "font-size": ".8rem",
    "line-height": "1",
    "white-space": "nowrap",
    "cursor": "default",
    "background": "#1779ba",
    "color": "#fefefe"
  },
  ".label.primary": {
    "background": "#1779ba",
    "color": "#fefefe"
  },
  ".label.secondary": {
    "background": "#767676",
    "color": "#fefefe"
  },
  ".label.success": {
    "background": "#3adb76",
    "color": "#0a0a0a"
  },
  ".label.warning": {
    "background": "#ffae00",
    "color": "#0a0a0a"
  },
  ".label.alert": {
    "background": "#cc4b37",
    "color": "#fefefe"
  },
  ".progress": {
    "height": "1rem",
    "margin-bottom": "1rem",
    "border-radius": "0",
    "background-color": "#cacaca"
  },
  ".progress.primary .progress-meter": {
    "background-color": "#1779ba"
  },
  ".progress.secondary .progress-meter": {
    "background-color": "#767676"
  },
  ".progress.success .progress-meter": {
    "background-color": "#3adb76"
  },
  ".progress.warning .progress-meter": {
    "background-color": "#ffae00"
  },
  ".progress.alert .progress-meter": {
    "background-color": "#cc4b37"
  },
  ".progress-meter": {
    "position": "relative",
    "display": "block",
    "width": "0%",
    "height": "100%",
    "background-color": "#1779ba"
  },
  ".progress-meter-text": {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "-webkit-transform": "translate(-50%,-50%)",
    "-ms-transform": "translate(-50%,-50%)",
    "transform": "translate(-50%,-50%)",
    "margin": "0",
    "font-size": ".75rem",
    "font-weight": "700",
    "color": "#fefefe",
    "white-space": "nowrap"
  },
  ".slider": {
    "position": "relative",
    "height": ".5rem",
    "margin-top": "1.25rem",
    "margin-bottom": "2.25rem",
    "background-color": "#e6e6e6",
    "cursor": "pointer",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    "-ms-touch-action": "none",
    "touch-action": "none"
  },
  ".slider-fill": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "display": "inline-block",
    "max-width": "100%",
    "height": ".5rem",
    "background-color": "#cacaca",
    "-webkit-transition": "all .2s ease-in-out",
    "transition": "all .2s ease-in-out"
  },
  ".slider-fill.is-dragging": {
    "-webkit-transition": "all 0s linear",
    "transition": "all 0s linear"
  },
  ".slider-handle": {
    "position": "absolute",
    "top": "50%",
    "-webkit-transform": "translateY(-50%)",
    "-ms-transform": "translateY(-50%)",
    "transform": "translateY(-50%)",
    "left": "0",
    "z-index": "1",
    "display": "inline-block",
    "width": "1.4rem",
    "height": "1.4rem",
    "border-radius": "0",
    "background-color": "#1779ba",
    "-webkit-transition": "all .2s ease-in-out",
    "transition": "all .2s ease-in-out",
    "-ms-touch-action": "manipulation",
    "touch-action": "manipulation"
  },
  "[data-whatinput=mouse] .slider-handle": {
    "outline": "0"
  },
  ".slider-handle:hover": {
    "background-color": "#14679e"
  },
  ".slider-handle.is-dragging": {
    "-webkit-transition": "all 0s linear",
    "transition": "all 0s linear"
  },
  ".slider.disabled,.slider[disabled]": {
    "opacity": ".25",
    "cursor": "not-allowed"
  },
  ".slider.vertical": {
    "display": "inline-block",
    "width": ".5rem",
    "height": "12.5rem",
    "margin": "0 1.25rem",
    "-webkit-transform": "scale(1,-1)",
    "-ms-transform": "scale(1,-1)",
    "transform": "scale(1,-1)"
  },
  ".slider.vertical .slider-fill": {
    "top": "0",
    "width": ".5rem",
    "max-height": "100%"
  },
  ".slider.vertical .slider-handle": {
    "position": "absolute",
    "top": "0",
    "left": "50%",
    "width": "1.4rem",
    "height": "1.4rem",
    "-webkit-transform": "translateX(-50%)",
    "-ms-transform": "translateX(-50%)",
    "transform": "translateX(-50%)"
  },
  ".switch": {
    "height": "2rem",
    "position": "relative",
    "margin-bottom": "1rem",
    "outline": "0",
    "font-size": ".875rem",
    "font-weight": "700",
    "color": "#fefefe",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none"
  },
  ".switch-input": {
    "position": "absolute",
    "margin-bottom": "0",
    "opacity": "0"
  },
  ".switch-paddle": {
    "position": "relative",
    "display": "block",
    "width": "4rem",
    "height": "2rem",
    "border-radius": "0",
    "background": "#cacaca",
    "-webkit-transition": "all .25s ease-out",
    "transition": "all .25s ease-out",
    "font-weight": "inherit",
    "color": "inherit",
    "cursor": "pointer"
  },
  "input+.switch-paddle": {
    "margin": "0"
  },
  ".switch-paddle::after": {
    "position": "absolute",
    "top": ".25rem",
    "left": ".25rem",
    "display": "block",
    "width": "1.5rem",
    "height": "1.5rem",
    "-webkit-transform": "translate3d(0,0,0)",
    "transform": "translate3d(0,0,0)",
    "border-radius": "0",
    "background": "#fefefe",
    "-webkit-transition": "all .25s ease-out",
    "transition": "all .25s ease-out",
    "content": "''"
  },
  "input:checked~.switch-paddle": {
    "background": "#1779ba"
  },
  "input:checked~.switch-paddle::after": {
    "left": "2.25rem"
  },
  "input:disabled~.switch-paddle": {
    "cursor": "not-allowed",
    "opacity": ".5"
  },
  "[data-whatinput=mouse] input:focus~.switch-paddle": {
    "outline": "0"
  },
  ".switch-active,.switch-inactive": {
    "position": "absolute",
    "top": "50%",
    "-webkit-transform": "translateY(-50%)",
    "-ms-transform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  ".switch-active": {
    "left": "8%",
    "display": "none"
  },
  "input:checked+label>.switch-active": {
    "display": "block"
  },
  ".switch-inactive": {
    "right": "15%"
  },
  "input:checked+label>.switch-inactive": {
    "display": "none"
  },
  ".switch.tiny": {
    "height": "1.5rem"
  },
  ".switch.tiny .switch-paddle": {
    "width": "3rem",
    "height": "1.5rem",
    "font-size": ".625rem"
  },
  ".switch.tiny .switch-paddle::after": {
    "top": ".25rem",
    "left": ".25rem",
    "width": "1rem",
    "height": "1rem"
  },
  ".switch.tiny input:checked~.switch-paddle::after": {
    "left": "1.75rem"
  },
  ".switch.small": {
    "height": "1.75rem"
  },
  ".switch.small .switch-paddle": {
    "width": "3.5rem",
    "height": "1.75rem",
    "font-size": ".75rem"
  },
  ".switch.small .switch-paddle::after": {
    "top": ".25rem",
    "left": ".25rem",
    "width": "1.25rem",
    "height": "1.25rem"
  },
  ".switch.small input:checked~.switch-paddle::after": {
    "left": "2rem"
  },
  ".switch.large": {
    "height": "2.5rem"
  },
  ".switch.large .switch-paddle": {
    "width": "5rem",
    "height": "2.5rem",
    "font-size": "1rem"
  },
  ".switch.large .switch-paddle::after": {
    "top": ".25rem",
    "left": ".25rem",
    "width": "2rem",
    "height": "2rem"
  },
  ".switch.large input:checked~.switch-paddle::after": {
    "left": "2.75rem"
  },
  "table": {
    "border-collapse": "collapse",
    "width": "100%",
    "margin-bottom": "1rem",
    "border-radius": "0"
  },
  "tbody,tfoot,thead": {
    "border": "1px solid #f1f1f1",
    "background-color": "#fefefe"
  },
  "caption": {
    "padding": ".5rem .625rem .625rem",
    "font-weight": "700"
  },
  "thead": {
    "background": "#f8f8f8",
    "color": "#0a0a0a"
  },
  "tfoot": {
    "background": "#f1f1f1",
    "color": "#0a0a0a"
  },
  "tfoot tr,thead tr": {
    "background": "0 0"
  },
  "tfoot td,tfoot th,thead td,thead th": {
    "padding": ".5rem .625rem .625rem",
    "font-weight": "700",
    "text-align": "left"
  },
  "tbody td,tbody th": {
    "padding": ".5rem .625rem .625rem"
  },
  "tbody tr:nth-child(even)": {
    "border-bottom": "0",
    "background-color": "#f1f1f1"
  },
  "table.unstriped tbody": {
    "background-color": "#fefefe"
  },
  "table.unstriped tbody tr": {
    "border-bottom": "1px solid #f1f1f1",
    "background-color": "#fefefe"
  },
  "table.scroll": {
    "display": "block",
    "width": "100%",
    "overflow-x": "auto"
  },
  "table.hover thead tr:hover": {
    "background-color": "#f3f3f3"
  },
  "table.hover tfoot tr:hover": {
    "background-color": "#ececec"
  },
  "table.hover tbody tr:hover": {
    "background-color": "#f9f9f9"
  },
  "table.hover:not(.unstriped) tr:nth-of-type(even):hover": {
    "background-color": "#ececec"
  },
  ".table-scroll": {
    "overflow-x": "auto"
  },
  ".badge": {
    "display": "inline-block",
    "min-width": "2.1em",
    "padding": ".3em",
    "border-radius": "50%",
    "font-size": ".6rem",
    "text-align": "center",
    "background": "#1779ba",
    "color": "#fefefe"
  },
  ".badge.primary": {
    "background": "#1779ba",
    "color": "#fefefe"
  },
  ".badge.secondary": {
    "background": "#767676",
    "color": "#fefefe"
  },
  ".badge.success": {
    "background": "#3adb76",
    "color": "#0a0a0a"
  },
  ".badge.warning": {
    "background": "#ffae00",
    "color": "#0a0a0a"
  },
  ".badge.alert": {
    "background": "#cc4b37",
    "color": "#fefefe"
  },
  ".breadcrumbs": {
    "margin": "0 0 1rem 0",
    "list-style": "none"
  },
  ".breadcrumbs::after,.breadcrumbs::before": {
    "display": "table",
    "content": "' '",
    "-webkit-flex-basis": "0",
    "-ms-flex-preferred-size": "0",
    "flex-basis": "0",
    "-webkit-box-ordinal-group": "2",
    "-webkit-order": "1",
    "-ms-flex-order": "1",
    "order": "1"
  },
  ".breadcrumbs::after": {
    "clear": "both"
  },
  ".breadcrumbs li": {
    "float": "left",
    "font-size": ".6875rem",
    "color": "#0a0a0a",
    "cursor": "default",
    "text-transform": "uppercase"
  },
  ".breadcrumbs li:not(:last-child)::after": {
    "position": "relative",
    "margin": "0 .75rem",
    "opacity": "1",
    "content": "'/'",
    "color": "#cacaca"
  },
  ".breadcrumbs a": {
    "color": "#1779ba"
  },
  ".breadcrumbs a:hover": {
    "text-decoration": "underline"
  },
  ".breadcrumbs .disabled": {
    "color": "#cacaca",
    "cursor": "not-allowed"
  },
  ".callout": {
    "position": "relative",
    "margin": "0 0 1rem 0",
    "padding": "1rem",
    "border": "1px solid rgba(10,10,10,.25)",
    "border-radius": "0",
    "background-color": "#fff",
    "color": "#0a0a0a"
  },
  ".callout>:first-child": {
    "margin-top": "0"
  },
  ".callout>:last-child": {
    "margin-bottom": "0"
  },
  ".callout.primary": {
    "background-color": "#d7ecfa",
    "color": "#0a0a0a"
  },
  ".callout.secondary": {
    "background-color": "#eaeaea",
    "color": "#0a0a0a"
  },
  ".callout.success": {
    "background-color": "#e1faea",
    "color": "#0a0a0a"
  },
  ".callout.warning": {
    "background-color": "#fff3d9",
    "color": "#0a0a0a"
  },
  ".callout.alert": {
    "background-color": "#f7e4e1",
    "color": "#0a0a0a"
  },
  ".callout.small": {
    "padding-top": ".5rem",
    "padding-right": ".5rem",
    "padding-bottom": ".5rem",
    "padding-left": ".5rem"
  },
  ".callout.large": {
    "padding-top": "3rem",
    "padding-right": "3rem",
    "padding-bottom": "3rem",
    "padding-left": "3rem"
  },
  ".card": {
    "display": "flex",
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-direction": "column",
    "-ms-flex-direction": "column",
    "flex-direction": "column",
    "-webkit-box-flex": "1",
    "-webkit-flex-grow": "1",
    "-ms-flex-positive": "1",
    "flex-grow": "1",
    "margin-bottom": "1rem",
    "border": "1px solid #e6e6e6",
    "border-radius": "0",
    "background": "#fefefe",
    "-webkit-box-shadow": "none",
    "box-shadow": "none",
    "overflow": "hidden",
    "color": "#0a0a0a"
  },
  ".card>:last-child": {
    "margin-bottom": "0"
  },
  ".card-divider": {
    "display": "flex",
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 1 auto",
    "-ms-flex": "0 1 auto",
    "flex": "0 1 auto",
    "padding": "1rem",
    "background": "#e6e6e6"
  },
  ".card-divider>:last-child": {
    "margin-bottom": "0"
  },
  ".card-section": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 0 auto",
    "-ms-flex": "1 0 auto",
    "flex": "1 0 auto",
    "padding": "1rem"
  },
  ".card-section>:last-child": {
    "margin-bottom": "0"
  },
  ".card-image": {
    "min-height": "1px"
  },
  ".dropdown-pane": {
    "position": "absolute",
    "z-index": "10",
    "display": "none",
    "width": "300px",
    "padding": "1rem",
    "visibility": "hidden",
    "border": "1px solid #cacaca",
    "border-radius": "0",
    "background-color": "#fefefe",
    "font-size": "1rem"
  },
  ".dropdown-pane.is-opening": {
    "display": "block"
  },
  ".dropdown-pane.is-open": {
    "display": "block",
    "visibility": "visible"
  },
  ".dropdown-pane.tiny": {
    "width": "100px"
  },
  ".dropdown-pane.small": {
    "width": "200px"
  },
  ".dropdown-pane.large": {
    "width": "400px"
  },
  ".pagination": {
    "margin-left": "0",
    "margin-bottom": "1rem"
  },
  ".pagination::after,.pagination::before": {
    "display": "table",
    "content": "' '",
    "-webkit-flex-basis": "0",
    "-ms-flex-preferred-size": "0",
    "flex-basis": "0",
    "-webkit-box-ordinal-group": "2",
    "-webkit-order": "1",
    "-ms-flex-order": "1",
    "order": "1"
  },
  ".pagination::after": {
    "clear": "both"
  },
  ".pagination li": {
    "margin-right": ".0625rem",
    "border-radius": "0",
    "font-size": ".875rem",
    "display": "none"
  },
  ".pagination li:first-child,.pagination li:last-child": {
    "display": "inline-block"
  },
  ".pagination a,.pagination button": {
    "display": "block",
    "padding": ".1875rem .625rem",
    "border-radius": "0",
    "color": "#0a0a0a"
  },
  ".pagination a:hover,.pagination button:hover": {
    "background": "#e6e6e6"
  },
  ".pagination .current": {
    "padding": ".1875rem .625rem",
    "background": "#1779ba",
    "color": "#fefefe",
    "cursor": "default"
  },
  ".pagination .disabled": {
    "padding": ".1875rem .625rem",
    "color": "#cacaca",
    "cursor": "not-allowed"
  },
  ".pagination .disabled:hover": {
    "background": "0 0"
  },
  ".pagination .ellipsis::after": {
    "padding": ".1875rem .625rem",
    "content": "'\\2026'",
    "color": "#0a0a0a"
  },
  ".pagination-previous a::before,.pagination-previous.disabled::before": {
    "display": "inline-block",
    "margin-right": ".5rem",
    "content": "'«'"
  },
  ".pagination-next a::after,.pagination-next.disabled::after": {
    "display": "inline-block",
    "margin-left": ".5rem",
    "content": "'»'"
  },
  ".has-tip": {
    "position": "relative",
    "display": "inline-block",
    "border-bottom": "dotted 1px #8a8a8a",
    "font-weight": "700",
    "cursor": "help"
  },
  ".tooltip": {
    "position": "absolute",
    "top": "calc(100% + .6495rem)",
    "z-index": "1200",
    "max-width": "10rem",
    "padding": ".75rem",
    "border-radius": "0",
    "background-color": "#0a0a0a",
    "font-size": "80%",
    "color": "#fefefe"
  },
  ".tooltip::before": {
    "position": "absolute"
  },
  ".tooltip.bottom::before": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset .75rem",
    "content": "''",
    "border-top-width": "0",
    "border-bottom-style": "solid",
    "border-color": "transparent transparent #0a0a0a",
    "bottom": "100%"
  },
  ".tooltip.bottom.align-center::before": {
    "left": "50%",
    "-webkit-transform": "translateX(-50%)",
    "-ms-transform": "translateX(-50%)",
    "transform": "translateX(-50%)"
  },
  ".tooltip.top::before": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset .75rem",
    "content": "''",
    "border-bottom-width": "0",
    "border-top-style": "solid",
    "border-color": "#0a0a0a transparent transparent",
    "top": "100%",
    "bottom": "auto"
  },
  ".tooltip.top.align-center::before": {
    "left": "50%",
    "-webkit-transform": "translateX(-50%)",
    "-ms-transform": "translateX(-50%)",
    "transform": "translateX(-50%)"
  },
  ".tooltip.left::before": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset .75rem",
    "content": "''",
    "border-right-width": "0",
    "border-left-style": "solid",
    "border-color": "transparent transparent transparent #0a0a0a",
    "left": "100%"
  },
  ".tooltip.left.align-center::before": {
    "bottom": "auto",
    "top": "50%",
    "-webkit-transform": "translateY(-50%)",
    "-ms-transform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  ".tooltip.right::before": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset .75rem",
    "content": "''",
    "border-left-width": "0",
    "border-right-style": "solid",
    "border-color": "transparent #0a0a0a transparent transparent",
    "right": "100%",
    "left": "auto"
  },
  ".tooltip.right.align-center::before": {
    "bottom": "auto",
    "top": "50%",
    "-webkit-transform": "translateY(-50%)",
    "-ms-transform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  ".tooltip.align-top::before": {
    "bottom": "auto",
    "top": "10%"
  },
  ".tooltip.align-bottom::before": {
    "bottom": "10%",
    "top": "auto"
  },
  ".tooltip.align-left::before": {
    "left": "10%",
    "right": "auto"
  },
  ".tooltip.align-right::before": {
    "left": "auto",
    "right": "10%"
  },
  ".accordion": {
    "margin-left": "0",
    "background": "#fefefe",
    "list-style-type": "none"
  },
  ".accordion[disabled] .accordion-title": {
    "cursor": "not-allowed"
  },
  ".accordion-item:first-child>:first-child": {
    "border-radius": "0"
  },
  ".accordion-item:last-child>:last-child": {
    "border-radius": "0"
  },
  ".accordion-title": {
    "position": "relative",
    "display": "block",
    "padding": "1.25rem 1rem",
    "border": "1px solid #e6e6e6",
    "border-bottom": "0",
    "font-size": ".75rem",
    "line-height": "1",
    "color": "#1779ba"
  },
  ":last-child:not(.is-active)>.accordion-title": {
    "border-bottom": "1px solid #e6e6e6",
    "border-radius": "0"
  },
  ".accordion-title:focus,.accordion-title:hover": {
    "background-color": "#e6e6e6"
  },
  ".accordion-title::before": {
    "position": "absolute",
    "top": "50%",
    "right": "1rem",
    "margin-top": "-.5rem",
    "content": "'+'"
  },
  ".is-active>.accordion-title::before": {
    "content": "'–'"
  },
  ".accordion-content": {
    "display": "none",
    "padding": "1rem",
    "border": "1px solid #e6e6e6",
    "border-bottom": "0",
    "background-color": "#fefefe",
    "color": "#0a0a0a"
  },
  ":last-child>.accordion-content:last-child": {
    "border-bottom": "1px solid #e6e6e6"
  },
  ".media-object": {
    "display": "flex",
    "margin-bottom": "1rem",
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flex-wrap": "nowrap"
  },
  ".media-object img": {
    "max-width": "none"
  },
  ".media-object-section": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 1 auto",
    "-ms-flex": "0 1 auto",
    "flex": "0 1 auto"
  },
  ".media-object-section:first-child": {
    "padding-right": "1rem"
  },
  ".media-object-section:last-child:not(:nth-child(2))": {
    "padding-left": "1rem"
  },
  ".media-object-section>:last-child": {
    "margin-bottom": "0"
  },
  ".media-object-section.main-section": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px"
  },
  ".orbit": {
    "position": "relative"
  },
  ".orbit-container": {
    "position": "relative",
    "height": "0",
    "margin": "0",
    "list-style": "none",
    "overflow": "hidden"
  },
  ".orbit-slide": {
    "width": "100%",
    "position": "absolute"
  },
  ".orbit-slide.no-motionui.is-active": {
    "top": "0",
    "left": "0"
  },
  ".orbit-figure": {
    "margin": "0"
  },
  ".orbit-image": {
    "width": "100%",
    "max-width": "100%",
    "margin": "0"
  },
  ".orbit-caption": {
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "margin-bottom": "0",
    "padding": "1rem",
    "background-color": "rgba(10,10,10,.5)",
    "color": "#fefefe"
  },
  ".orbit-next,.orbit-previous": {
    "position": "absolute",
    "top": "50%",
    "-webkit-transform": "translateY(-50%)",
    "-ms-transform": "translateY(-50%)",
    "transform": "translateY(-50%)",
    "z-index": "10",
    "padding": "1rem",
    "color": "#fefefe"
  },
  "[data-whatinput=mouse] .orbit-next,[data-whatinput=mouse] .orbit-previous": {
    "outline": "0"
  },
  ".orbit-next:active,.orbit-next:focus,.orbit-next:hover,.orbit-previous:active,.orbit-previous:focus,.orbit-previous:hover": {
    "background-color": "rgba(10,10,10,.5)"
  },
  ".orbit-previous": {
    "left": "0"
  },
  ".orbit-next": {
    "left": "auto",
    "right": "0"
  },
  ".orbit-bullets": {
    "position": "relative",
    "margin-top": ".8rem",
    "margin-bottom": ".8rem",
    "text-align": "center"
  },
  "[data-whatinput=mouse] .orbit-bullets": {
    "outline": "0"
  },
  ".orbit-bullets button": {
    "width": "1.2rem",
    "height": "1.2rem",
    "margin": ".1rem",
    "border-radius": "50%",
    "background-color": "#cacaca"
  },
  ".orbit-bullets button:hover": {
    "background-color": "#8a8a8a"
  },
  ".orbit-bullets button.is-active": {
    "background-color": "#8a8a8a"
  },
  ".flex-video,.responsive-embed": {
    "position": "relative",
    "height": "0",
    "margin-bottom": "1rem",
    "padding-bottom": "75%",
    "overflow": "hidden"
  },
  ".flex-video embed,.flex-video iframe,.flex-video object,.flex-video video,.responsive-embed embed,.responsive-embed iframe,.responsive-embed object,.responsive-embed video": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  },
  ".flex-video.widescreen,.responsive-embed.widescreen": {
    "padding-bottom": "56.25%"
  },
  ".tabs": {
    "margin": "0",
    "border": "1px solid #e6e6e6",
    "background": "#fefefe",
    "list-style-type": "none"
  },
  ".tabs::after,.tabs::before": {
    "display": "table",
    "content": "' '",
    "-webkit-flex-basis": "0",
    "-ms-flex-preferred-size": "0",
    "flex-basis": "0",
    "-webkit-box-ordinal-group": "2",
    "-webkit-order": "1",
    "-ms-flex-order": "1",
    "order": "1"
  },
  ".tabs::after": {
    "clear": "both"
  },
  ".tabs.vertical>li": {
    "display": "block",
    "float": "none",
    "width": "auto"
  },
  ".tabs.simple>li>a": {
    "padding": "0"
  },
  ".tabs.simple>li>a:hover": {
    "background": "0 0"
  },
  ".tabs.primary": {
    "background": "#1779ba"
  },
  ".tabs.primary>li>a": {
    "color": "#fefefe"
  },
  ".tabs.primary>li>a:focus,.tabs.primary>li>a:hover": {
    "background": "#1673b1"
  },
  ".tabs-title": {
    "float": "left"
  },
  ".tabs-title>a": {
    "display": "block",
    "padding": "1.25rem 1.5rem",
    "font-size": ".75rem",
    "line-height": "1",
    "color": "#1779ba"
  },
  "[data-whatinput=mouse] .tabs-title>a": {
    "outline": "0"
  },
  ".tabs-title>a:hover": {
    "background": "#fefefe",
    "color": "#1468a0"
  },
  ".tabs-title>a:focus,.tabs-title>a[aria-selected=true]": {
    "background": "#e6e6e6",
    "color": "#1779ba"
  },
  ".tabs-content": {
    "border": "1px solid #e6e6e6",
    "border-top": "0",
    "background": "#fefefe",
    "color": "#0a0a0a",
    "-webkit-transition": "all .5s ease",
    "transition": "all .5s ease"
  },
  ".tabs-content.vertical": {
    "border": "1px solid #e6e6e6",
    "border-left": "0"
  },
  ".tabs-panel": {
    "display": "none",
    "padding": "1rem"
  },
  ".tabs-panel.is-active": {
    "display": "block"
  },
  ".thumbnail": {
    "display": "inline-block",
    "max-width": "100%",
    "margin-bottom": "1rem",
    "border": "4px solid #fefefe",
    "border-radius": "0",
    "-webkit-box-shadow": "0 0 0 1px rgba(10,10,10,.2)",
    "box-shadow": "0 0 0 1px rgba(10,10,10,.2)",
    "line-height": "0"
  },
  "a.thumbnail": {
    "-webkit-transition": "-webkit-box-shadow .2s ease-out",
    "transition": "box-shadow .2s ease-out,-webkit-box-shadow .2s ease-out"
  },
  "a.thumbnail:focus,a.thumbnail:hover": {
    "-webkit-box-shadow": "0 0 6px 1px rgba(23,121,186,.5)",
    "box-shadow": "0 0 6px 1px rgba(23,121,186,.5)"
  },
  "a.thumbnail image": {
    "-webkit-box-shadow": "none",
    "box-shadow": "none"
  },
  ".menu": {
    "padding": "0",
    "margin": "0",
    "list-style": "none",
    "position": "relative",
    "display": "flex",
    "-webkit-flex-wrap": "wrap",
    "-ms-flex-wrap": "wrap",
    "flex-wrap": "wrap"
  },
  "[data-whatinput=mouse] .menu li": {
    "outline": "0"
  },
  ".menu .button,.menu a": {
    "line-height": "1",
    "text-decoration": "none",
    "display": "block",
    "padding": ".7rem 1rem"
  },
  ".menu a,.menu button,.menu input,.menu select": {
    "margin-bottom": "0"
  },
  ".menu input": {
    "display": "inline-block"
  },
  ".menu,.menu.horizontal": {
    "-webkit-flex-wrap": "wrap",
    "-ms-flex-wrap": "wrap",
    "flex-wrap": "wrap",
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "normal",
    "-webkit-flex-direction": "row",
    "-ms-flex-direction": "row",
    "flex-direction": "row"
  },
  ".menu.vertical": {
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flex-wrap": "nowrap",
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-direction": "column",
    "-ms-flex-direction": "column",
    "flex-direction": "column"
  },
  ".menu.expanded li": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px"
  },
  ".menu.simple": {
    "-webkit-box-align": "center",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"
  },
  ".menu.simple li+li": {
    "margin-left": "1rem"
  },
  ".menu.simple a": {
    "padding": "0"
  },
  ".menu.nested": {
    "margin-right": "0",
    "margin-left": "1rem"
  },
  ".menu.icons a": {
    "display": "flex"
  },
  ".menu.icon-bottom a,.menu.icon-left a,.menu.icon-right a,.menu.icon-top a": {
    "display": "flex"
  },
  ".menu.icon-left li a": {
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "normal",
    "-webkit-flex-flow": "row nowrap",
    "-ms-flex-flow": "row nowrap",
    "flex-flow": "row nowrap"
  },
  ".menu.icon-left li a i,.menu.icon-left li a img,.menu.icon-left li a svg": {
    "margin-right": ".25rem"
  },
  ".menu.icon-right li a": {
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "normal",
    "-webkit-flex-flow": "row nowrap",
    "-ms-flex-flow": "row nowrap",
    "flex-flow": "row nowrap"
  },
  ".menu.icon-right li a i,.menu.icon-right li a img,.menu.icon-right li a svg": {
    "margin-left": ".25rem"
  },
  ".menu.icon-top li a": {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-flow": "column nowrap",
    "-ms-flex-flow": "column nowrap",
    "flex-flow": "column nowrap"
  },
  ".menu.icon-top li a i,.menu.icon-top li a img,.menu.icon-top li a svg": {
    "-webkit-align-self": "stretch",
    "-ms-flex-item-align": "stretch",
    "align-self": "stretch",
    "margin-bottom": ".25rem",
    "text-align": "center"
  },
  ".menu.icon-bottom li a": {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-flow": "column nowrap",
    "-ms-flex-flow": "column nowrap",
    "flex-flow": "column nowrap"
  },
  ".menu.icon-bottom li a i,.menu.icon-bottom li a img,.menu.icon-bottom li a svg": {
    "-webkit-align-self": "stretch",
    "-ms-flex-item-align": "stretch",
    "align-self": "stretch",
    "margin-bottom": ".25rem",
    "text-align": "center"
  },
  ".menu .is-active>a": {
    "background": "#1779ba",
    "color": "#fefefe"
  },
  ".menu .active>a": {
    "background": "#1779ba",
    "color": "#fefefe"
  },
  ".menu.align-left": {
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start"
  },
  ".menu.align-right li": {
    "display": "flex",
    "-webkit-box-pack": "end",
    "-webkit-justify-content": "flex-end",
    "-ms-flex-pack": "end",
    "justify-content": "flex-end"
  },
  ".menu.align-right li .submenu li": {
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start"
  },
  ".menu.align-right.vertical li": {
    "display": "block",
    "text-align": "right"
  },
  ".menu.align-right.vertical li .submenu li": {
    "text-align": "right"
  },
  ".menu.align-right .nested": {
    "margin-right": "1rem",
    "margin-left": "0"
  },
  ".menu.align-center li": {
    "display": "flex",
    "-webkit-box-pack": "center",
    "-webkit-justify-content": "center",
    "-ms-flex-pack": "center",
    "justify-content": "center"
  },
  ".menu.align-center li .submenu li": {
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start"
  },
  ".menu .menu-text": {
    "padding": ".7rem 1rem",
    "font-weight": "700",
    "line-height": "1",
    "color": "inherit"
  },
  ".menu-centered>.menu": {
    "-webkit-box-pack": "center",
    "-webkit-justify-content": "center",
    "-ms-flex-pack": "center",
    "justify-content": "center"
  },
  ".menu-centered>.menu li": {
    "display": "flex",
    "-webkit-box-pack": "center",
    "-webkit-justify-content": "center",
    "-ms-flex-pack": "center",
    "justify-content": "center"
  },
  ".menu-centered>.menu li .submenu li": {
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start"
  },
  ".no-js [data-responsive-menu] ul": {
    "display": "none"
  },
  ".menu-icon": {
    "position": "relative",
    "display": "inline-block",
    "vertical-align": "middle",
    "width": "20px",
    "height": "16px",
    "cursor": "pointer"
  },
  ".menu-icon::after": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "display": "block",
    "width": "100%",
    "height": "2px",
    "background": "#fefefe",
    "-webkit-box-shadow": "0 7px 0 #fefefe,0 14px 0 #fefefe",
    "box-shadow": "0 7px 0 #fefefe,0 14px 0 #fefefe",
    "content": "''"
  },
  ".menu-icon:hover::after": {
    "background": "#cacaca",
    "-webkit-box-shadow": "0 7px 0 #cacaca,0 14px 0 #cacaca",
    "box-shadow": "0 7px 0 #cacaca,0 14px 0 #cacaca"
  },
  ".menu-icon.dark": {
    "position": "relative",
    "display": "inline-block",
    "vertical-align": "middle",
    "width": "20px",
    "height": "16px",
    "cursor": "pointer"
  },
  ".menu-icon.dark::after": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "display": "block",
    "width": "100%",
    "height": "2px",
    "background": "#0a0a0a",
    "-webkit-box-shadow": "0 7px 0 #0a0a0a,0 14px 0 #0a0a0a",
    "box-shadow": "0 7px 0 #0a0a0a,0 14px 0 #0a0a0a",
    "content": "''"
  },
  ".menu-icon.dark:hover::after": {
    "background": "#8a8a8a",
    "-webkit-box-shadow": "0 7px 0 #8a8a8a,0 14px 0 #8a8a8a",
    "box-shadow": "0 7px 0 #8a8a8a,0 14px 0 #8a8a8a"
  },
  ".accordion-menu li": {
    "width": "100%"
  },
  ".accordion-menu a": {
    "padding": ".7rem 1rem"
  },
  ".accordion-menu .is-accordion-submenu a": {
    "padding": ".7rem 1rem"
  },
  ".accordion-menu .nested.is-accordion-submenu": {
    "margin-right": "0",
    "margin-left": "1rem"
  },
  ".accordion-menu.align-right .nested.is-accordion-submenu": {
    "margin-right": "1rem",
    "margin-left": "0"
  },
  ".accordion-menu .is-accordion-submenu-parent:not(.has-submenu-toggle)>a": {
    "position": "relative"
  },
  ".accordion-menu .is-accordion-submenu-parent:not(.has-submenu-toggle)>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-bottom-width": "0",
    "border-top-style": "solid",
    "border-color": "#1779ba transparent transparent",
    "position": "absolute",
    "top": "50%",
    "margin-top": "-3px",
    "right": "1rem"
  },
  ".accordion-menu.align-left .is-accordion-submenu-parent>a::after": {
    "right": "1rem",
    "left": "auto"
  },
  ".accordion-menu.align-right .is-accordion-submenu-parent>a::after": {
    "right": "auto",
    "left": "1rem"
  },
  ".accordion-menu .is-accordion-submenu-parent[aria-expanded=true]>a::after": {
    "-webkit-transform": "rotate(180deg)",
    "-ms-transform": "rotate(180deg)",
    "transform": "rotate(180deg)",
    "-webkit-transform-origin": "50% 50%",
    "-ms-transform-origin": "50% 50%",
    "transform-origin": "50% 50%"
  },
  ".is-accordion-submenu-parent": {
    "position": "relative"
  },
  ".has-submenu-toggle>a": {
    "margin-right": "40px"
  },
  ".submenu-toggle": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "width": "40px",
    "height": "40px",
    "cursor": "pointer"
  },
  ".submenu-toggle::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-bottom-width": "0",
    "border-top-style": "solid",
    "border-color": "#1779ba transparent transparent",
    "top": "0",
    "bottom": "0",
    "margin": "auto"
  },
  ".submenu-toggle[aria-expanded=true]::after": {
    "-webkit-transform": "scaleY(-1)",
    "-ms-transform": "scaleY(-1)",
    "transform": "scaleY(-1)",
    "-webkit-transform-origin": "50% 50%",
    "-ms-transform-origin": "50% 50%",
    "transform-origin": "50% 50%"
  },
  ".submenu-toggle-text": {
    "position": "absolute!important",
    "width": "1px!important",
    "height": "1px!important",
    "padding": "0!important",
    "overflow": "hidden!important",
    "clip": "rect(0,0,0,0)!important",
    "white-space": "nowrap!important",
    "border": "0!important"
  },
  ".is-drilldown": {
    "position": "relative",
    "overflow": "hidden"
  },
  ".is-drilldown li": {
    "display": "block"
  },
  ".is-drilldown.animate-height": {
    "-webkit-transition": "height .5s",
    "transition": "height .5s"
  },
  ".drilldown a": {
    "padding": ".7rem 1rem",
    "background": "#fefefe"
  },
  ".drilldown .is-drilldown-submenu": {
    "position": "absolute",
    "top": "0",
    "left": "100%",
    "z-index": "-1",
    "width": "100%",
    "background": "#fefefe",
    "-webkit-transition": "-webkit-transform .15s linear",
    "transition": "transform .15s linear,-webkit-transform .15s linear"
  },
  ".drilldown .is-drilldown-submenu.is-active": {
    "z-index": "1",
    "display": "block",
    "-webkit-transform": "translateX(-100%)",
    "-ms-transform": "translateX(-100%)",
    "transform": "translateX(-100%)"
  },
  ".drilldown .is-drilldown-submenu.is-closing": {
    "-webkit-transform": "translateX(100%)",
    "-ms-transform": "translateX(100%)",
    "transform": "translateX(100%)"
  },
  ".drilldown .is-drilldown-submenu a": {
    "padding": ".7rem 1rem"
  },
  ".drilldown .nested.is-drilldown-submenu": {
    "margin-right": "0",
    "margin-left": "0"
  },
  ".drilldown .drilldown-submenu-cover-previous": {
    "min-height": "100%"
  },
  ".drilldown .is-drilldown-submenu-parent>a": {
    "position": "relative"
  },
  ".drilldown .is-drilldown-submenu-parent>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-right-width": "0",
    "border-left-style": "solid",
    "border-color": "transparent transparent transparent #1779ba",
    "position": "absolute",
    "top": "50%",
    "margin-top": "-6px",
    "right": "1rem"
  },
  ".drilldown.align-left .is-drilldown-submenu-parent>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-right-width": "0",
    "border-left-style": "solid",
    "border-color": "transparent transparent transparent #1779ba",
    "right": "1rem",
    "left": "auto"
  },
  ".drilldown.align-right .is-drilldown-submenu-parent>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-left-width": "0",
    "border-right-style": "solid",
    "border-color": "transparent #1779ba transparent transparent",
    "right": "auto",
    "left": "1rem"
  },
  ".drilldown .js-drilldown-back>a::before": {
    "display": "inline-block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-left-width": "0",
    "border-right-style": "solid",
    "border-color": "transparent #1779ba transparent transparent",
    "vertical-align": "middle",
    "margin-right": ".75rem"
  },
  ".dropdown.menu>li.opens-left>.is-dropdown-submenu": {
    "top": "100%",
    "right": "0",
    "left": "auto"
  },
  ".dropdown.menu>li.opens-right>.is-dropdown-submenu": {
    "top": "100%",
    "right": "auto",
    "left": "0"
  },
  ".dropdown.menu>li.is-dropdown-submenu-parent>a": {
    "position": "relative",
    "padding-right": "1.5rem"
  },
  ".dropdown.menu>li.is-dropdown-submenu-parent>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-bottom-width": "0",
    "border-top-style": "solid",
    "border-color": "#1779ba transparent transparent",
    "right": "5px",
    "left": "auto",
    "margin-top": "-3px"
  },
  "[data-whatinput=mouse] .dropdown.menu a": {
    "outline": "0"
  },
  ".dropdown.menu>li>a": {
    "padding": ".7rem 1rem"
  },
  ".dropdown.menu>li.is-active>a": {
    "background": "0 0",
    "color": "#1779ba"
  },
  ".no-js .dropdown.menu ul": {
    "display": "none"
  },
  ".dropdown.menu .nested.is-dropdown-submenu": {
    "margin-right": "0",
    "margin-left": "0"
  },
  ".dropdown.menu.vertical>li .is-dropdown-submenu": {
    "top": "0"
  },
  ".dropdown.menu.vertical>li.opens-left>.is-dropdown-submenu": {
    "top": "0",
    "right": "100%",
    "left": "auto"
  },
  ".dropdown.menu.vertical>li.opens-right>.is-dropdown-submenu": {
    "right": "auto",
    "left": "100%"
  },
  ".dropdown.menu.vertical>li>a::after": {
    "right": "14px"
  },
  ".dropdown.menu.vertical>li.opens-left>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-left-width": "0",
    "border-right-style": "solid",
    "border-color": "transparent #1779ba transparent transparent",
    "right": "auto",
    "left": "5px"
  },
  ".dropdown.menu.vertical>li.opens-right>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-right-width": "0",
    "border-left-style": "solid",
    "border-color": "transparent transparent transparent #1779ba"
  },
  ".dropdown.menu.align-right .is-dropdown-submenu.first-sub": {
    "top": "100%",
    "right": "0",
    "left": "auto"
  },
  ".is-dropdown-menu.vertical": {
    "width": "100px"
  },
  ".is-dropdown-menu.vertical.align-right": {
    "float": "right"
  },
  ".is-dropdown-submenu-parent": {
    "position": "relative"
  },
  ".is-dropdown-submenu-parent a::after": {
    "position": "absolute",
    "top": "50%",
    "right": "5px",
    "left": "auto",
    "margin-top": "-6px"
  },
  ".is-dropdown-submenu-parent.opens-inner>.is-dropdown-submenu": {
    "top": "100%",
    "left": "auto"
  },
  ".is-dropdown-submenu-parent.opens-left>.is-dropdown-submenu": {
    "right": "100%",
    "left": "auto"
  },
  ".is-dropdown-submenu-parent.opens-right>.is-dropdown-submenu": {
    "right": "auto",
    "left": "100%"
  },
  ".is-dropdown-submenu": {
    "position": "absolute",
    "top": "0",
    "left": "100%",
    "z-index": "1",
    "display": "none",
    "min-width": "200px",
    "border": "1px solid #cacaca",
    "background": "#fefefe"
  },
  ".dropdown .is-dropdown-submenu a": {
    "padding": ".7rem 1rem"
  },
  ".is-dropdown-submenu .is-dropdown-submenu-parent>a::after": {
    "right": "14px"
  },
  ".is-dropdown-submenu .is-dropdown-submenu-parent.opens-left>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-left-width": "0",
    "border-right-style": "solid",
    "border-color": "transparent #1779ba transparent transparent",
    "right": "auto",
    "left": "5px"
  },
  ".is-dropdown-submenu .is-dropdown-submenu-parent.opens-right>a::after": {
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "content": "''",
    "border-right-width": "0",
    "border-left-style": "solid",
    "border-color": "transparent transparent transparent #1779ba"
  },
  ".is-dropdown-submenu .is-dropdown-submenu": {
    "margin-top": "-1px"
  },
  ".is-dropdown-submenu>li": {
    "width": "100%"
  },
  ".is-dropdown-submenu.js-dropdown-active": {
    "display": "block"
  },
  ".is-off-canvas-open": {
    "overflow": "hidden"
  },
  ".js-off-canvas-overlay": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "z-index": "11",
    "width": "100%",
    "height": "100%",
    "-webkit-transition": "opacity .5s ease,visibility .5s ease",
    "transition": "opacity .5s ease,visibility .5s ease",
    "background": "rgba(254,254,254,.25)",
    "opacity": "0",
    "visibility": "hidden",
    "overflow": "hidden"
  },
  ".js-off-canvas-overlay.is-visible": {
    "opacity": "1",
    "visibility": "visible"
  },
  ".js-off-canvas-overlay.is-closable": {
    "cursor": "pointer"
  },
  ".js-off-canvas-overlay.is-overlay-absolute": {
    "position": "absolute"
  },
  ".js-off-canvas-overlay.is-overlay-fixed": {
    "position": "fixed"
  },
  ".off-canvas-wrapper": {
    "position": "relative",
    "overflow": "hidden"
  },
  ".off-canvas": {
    "position": "fixed",
    "z-index": "12",
    "-webkit-transition": "-webkit-transform .5s ease",
    "transition": "transform .5s ease,-webkit-transform .5s ease",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
    "background": "#e6e6e6"
  },
  "[data-whatinput=mouse] .off-canvas": {
    "outline": "0"
  },
  ".off-canvas.is-transition-push": {
    "z-index": "12"
  },
  ".off-canvas.is-closed": {
    "visibility": "hidden"
  },
  ".off-canvas.is-transition-overlap": {
    "z-index": "13"
  },
  ".off-canvas.is-transition-overlap.is-open": {
    "-webkit-box-shadow": "0 0 10px rgba(10,10,10,.7)",
    "box-shadow": "0 0 10px rgba(10,10,10,.7)"
  },
  ".off-canvas.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".off-canvas-absolute": {
    "position": "absolute",
    "z-index": "12",
    "-webkit-transition": "-webkit-transform .5s ease",
    "transition": "transform .5s ease,-webkit-transform .5s ease",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
    "background": "#e6e6e6"
  },
  "[data-whatinput=mouse] .off-canvas-absolute": {
    "outline": "0"
  },
  ".off-canvas-absolute.is-transition-push": {
    "z-index": "12"
  },
  ".off-canvas-absolute.is-closed": {
    "visibility": "hidden"
  },
  ".off-canvas-absolute.is-transition-overlap": {
    "z-index": "13"
  },
  ".off-canvas-absolute.is-transition-overlap.is-open": {
    "-webkit-box-shadow": "0 0 10px rgba(10,10,10,.7)",
    "box-shadow": "0 0 10px rgba(10,10,10,.7)"
  },
  ".off-canvas-absolute.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".position-left": {
    "top": "0",
    "left": "0",
    "height": "100%",
    "overflow-y": "auto",
    "width": "250px",
    "-webkit-transform": "translateX(-250px)",
    "-ms-transform": "translateX(-250px)",
    "transform": "translateX(-250px)"
  },
  ".off-canvas-content .off-canvas.position-left": {
    "-webkit-transform": "translateX(-250px)",
    "-ms-transform": "translateX(-250px)",
    "transform": "translateX(-250px)"
  },
  ".off-canvas-content .off-canvas.position-left.is-transition-overlap.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".off-canvas-content.is-open-left.has-transition-push": {
    "-webkit-transform": "translateX(250px)",
    "-ms-transform": "translateX(250px)",
    "transform": "translateX(250px)"
  },
  ".position-left.is-transition-push": {
    "-webkit-box-shadow": "inset -13px 0 20px -13px rgba(10,10,10,.25)",
    "box-shadow": "inset -13px 0 20px -13px rgba(10,10,10,.25)"
  },
  ".position-right": {
    "top": "0",
    "right": "0",
    "height": "100%",
    "overflow-y": "auto",
    "width": "250px",
    "-webkit-transform": "translateX(250px)",
    "-ms-transform": "translateX(250px)",
    "transform": "translateX(250px)"
  },
  ".off-canvas-content .off-canvas.position-right": {
    "-webkit-transform": "translateX(250px)",
    "-ms-transform": "translateX(250px)",
    "transform": "translateX(250px)"
  },
  ".off-canvas-content .off-canvas.position-right.is-transition-overlap.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".off-canvas-content.is-open-right.has-transition-push": {
    "-webkit-transform": "translateX(-250px)",
    "-ms-transform": "translateX(-250px)",
    "transform": "translateX(-250px)"
  },
  ".position-right.is-transition-push": {
    "-webkit-box-shadow": "inset 13px 0 20px -13px rgba(10,10,10,.25)",
    "box-shadow": "inset 13px 0 20px -13px rgba(10,10,10,.25)"
  },
  ".position-top": {
    "top": "0",
    "left": "0",
    "width": "100%",
    "overflow-x": "auto",
    "height": "250px",
    "-webkit-transform": "translateY(-250px)",
    "-ms-transform": "translateY(-250px)",
    "transform": "translateY(-250px)"
  },
  ".off-canvas-content .off-canvas.position-top": {
    "-webkit-transform": "translateY(-250px)",
    "-ms-transform": "translateY(-250px)",
    "transform": "translateY(-250px)"
  },
  ".off-canvas-content .off-canvas.position-top.is-transition-overlap.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".off-canvas-content.is-open-top.has-transition-push": {
    "-webkit-transform": "translateY(250px)",
    "-ms-transform": "translateY(250px)",
    "transform": "translateY(250px)"
  },
  ".position-top.is-transition-push": {
    "-webkit-box-shadow": "inset 0 -13px 20px -13px rgba(10,10,10,.25)",
    "box-shadow": "inset 0 -13px 20px -13px rgba(10,10,10,.25)"
  },
  ".position-bottom": {
    "bottom": "0",
    "left": "0",
    "width": "100%",
    "overflow-x": "auto",
    "height": "250px",
    "-webkit-transform": "translateY(250px)",
    "-ms-transform": "translateY(250px)",
    "transform": "translateY(250px)"
  },
  ".off-canvas-content .off-canvas.position-bottom": {
    "-webkit-transform": "translateY(250px)",
    "-ms-transform": "translateY(250px)",
    "transform": "translateY(250px)"
  },
  ".off-canvas-content .off-canvas.position-bottom.is-transition-overlap.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".off-canvas-content.is-open-bottom.has-transition-push": {
    "-webkit-transform": "translateY(-250px)",
    "-ms-transform": "translateY(-250px)",
    "transform": "translateY(-250px)"
  },
  ".position-bottom.is-transition-push": {
    "-webkit-box-shadow": "inset 0 13px 20px -13px rgba(10,10,10,.25)",
    "box-shadow": "inset 0 13px 20px -13px rgba(10,10,10,.25)"
  },
  ".off-canvas-content": {
    "-webkit-transform": "none",
    "-ms-transform": "none",
    "transform": "none",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden"
  },
  ".off-canvas-content.has-transition-overlap,.off-canvas-content.has-transition-push": {
    "-webkit-transition": "-webkit-transform .5s ease",
    "transition": "transform .5s ease,-webkit-transform .5s ease"
  },
  ".off-canvas-content.has-transition-push": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  ".off-canvas-content .off-canvas.is-open": {
    "-webkit-transform": "translate(0,0)",
    "-ms-transform": "translate(0,0)",
    "transform": "translate(0,0)"
  },
  "html.is-reveal-open": {
    "position": "fixed",
    "width": "100%",
    "overflow-y": "hidden"
  },
  "html.is-reveal-open.zf-has-scroll": {
    "overflow-y": "scroll"
  },
  "html.is-reveal-open body": {
    "overflow-y": "hidden"
  },
  ".reveal-overlay": {
    "position": "fixed",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "z-index": "1005",
    "display": "none",
    "background-color": "rgba(10,10,10,.45)",
    "overflow-y": "auto"
  },
  ".reveal": {
    "z-index": "1006",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
    "display": "none",
    "padding": "1rem",
    "border": "1px solid #cacaca",
    "border-radius": "0",
    "background-color": "#fefefe",
    "position": "relative",
    "top": "100px",
    "margin-right": "auto",
    "margin-left": "auto",
    "overflow-y": "auto"
  },
  "[data-whatinput=mouse] .reveal": {
    "outline": "0"
  },
  ".reveal .column": {
    "min-width": "0"
  },
  ".reveal>:last-child": {
    "margin-bottom": "0"
  },
  ".reveal.collapse": {
    "padding": "0"
  },
  ".reveal.full": {
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "width": "100%",
    "max-width": "none",
    "height": "100%",
    "min-height": "100%",
    "margin-left": "0",
    "border": "0",
    "border-radius": "0"
  },
  ".reveal.without-overlay": {
    "position": "fixed"
  },
  ".sticky-container": {
    "position": "relative"
  },
  ".sticky": {
    "position": "relative",
    "z-index": "0",
    "-webkit-transform": "translate3d(0,0,0)",
    "transform": "translate3d(0,0,0)"
  },
  ".sticky.is-stuck": {
    "position": "fixed",
    "z-index": "5",
    "width": "100%"
  },
  ".sticky.is-stuck.is-at-top": {
    "top": "0"
  },
  ".sticky.is-stuck.is-at-bottom": {
    "bottom": "0"
  },
  ".sticky.is-anchored": {
    "position": "relative",
    "right": "auto",
    "left": "auto"
  },
  ".sticky.is-anchored.is-at-bottom": {
    "bottom": "0"
  },
  ".title-bar": {
    "padding": ".5rem",
    "background": "#0a0a0a",
    "color": "#fefefe",
    "display": "flex",
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start",
    "-webkit-box-align": "center",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"
  },
  ".title-bar .menu-icon": {
    "margin-left": ".25rem",
    "margin-right": ".25rem"
  },
  ".title-bar-left,.title-bar-right": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 0px",
    "-ms-flex": "1 1 0px",
    "flex": "1 1 0px"
  },
  ".title-bar-right": {
    "text-align": "right"
  },
  ".title-bar-title": {
    "display": "inline-block",
    "vertical-align": "middle",
    "font-weight": "700"
  },
  ".top-bar": {
    "display": "flex",
    "-webkit-flex-wrap": "wrap",
    "-ms-flex-wrap": "wrap",
    "flex-wrap": "wrap",
    "-webkit-box-pack": "justify",
    "-webkit-justify-content": "space-between",
    "-ms-flex-pack": "justify",
    "justify-content": "space-between",
    "-webkit-box-align": "center",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center",
    "padding": ".5rem"
  },
  ".top-bar,.top-bar ul": {
    "background-color": "#e6e6e6"
  },
  ".top-bar input": {
    "max-width": "200px",
    "margin-right": "1rem"
  },
  ".top-bar .input-group-field": {
    "width": "100%",
    "margin-right": "0"
  },
  ".top-bar input.button": {
    "width": "auto"
  },
  ".top-bar .top-bar-left,.top-bar .top-bar-right": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 100%",
    "-ms-flex": "0 0 100%",
    "flex": "0 0 100%",
    "max-width": "100%"
  },
  "@media print,screen and (max-width:74.99875em)": {
    ".top-bar.stacked-for-large": {
      "-webkit-flex-wrap": "wrap",
      "-ms-flex-wrap": "wrap",
      "flex-wrap": "wrap"
    },
    ".top-bar.stacked-for-large .top-bar-left,.top-bar.stacked-for-large .top-bar-right": {
      "-webkit-box-flex": "0",
      "-webkit-flex": "0 0 100%",
      "-ms-flex": "0 0 100%",
      "flex": "0 0 100%",
      "max-width": "100%"
    }
  },
  ".top-bar-title": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto",
    "margin": ".5rem 1rem .5rem 0"
  },
  ".top-bar-left,.top-bar-right": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 0 auto",
    "-ms-flex": "0 0 auto",
    "flex": "0 0 auto"
  },
  ".float-left": {
    "float": "left!important"
  },
  ".float-right": {
    "float": "right!important"
  },
  ".float-center": {
    "display": "block",
    "margin-right": "auto",
    "margin-left": "auto"
  },
  ".clearfix::after,.clearfix::before": {
    "display": "table",
    "content": "' '",
    "-webkit-flex-basis": "0",
    "-ms-flex-preferred-size": "0",
    "flex-basis": "0",
    "-webkit-box-ordinal-group": "2",
    "-webkit-order": "1",
    "-ms-flex-order": "1",
    "order": "1"
  },
  ".clearfix::after": {
    "clear": "both"
  },
  ".align-left": {
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start"
  },
  ".align-right": {
    "-webkit-box-pack": "end",
    "-webkit-justify-content": "flex-end",
    "-ms-flex-pack": "end",
    "justify-content": "flex-end"
  },
  ".align-center": {
    "-webkit-box-pack": "center",
    "-webkit-justify-content": "center",
    "-ms-flex-pack": "center",
    "justify-content": "center"
  },
  ".align-justify": {
    "-webkit-box-pack": "justify",
    "-webkit-justify-content": "space-between",
    "-ms-flex-pack": "justify",
    "justify-content": "space-between"
  },
  ".align-spaced": {
    "-webkit-justify-content": "space-around",
    "-ms-flex-pack": "distribute",
    "justify-content": "space-around"
  },
  ".align-left.vertical.menu>li>a": {
    "-webkit-box-pack": "start",
    "-webkit-justify-content": "flex-start",
    "-ms-flex-pack": "start",
    "justify-content": "flex-start"
  },
  ".align-right.vertical.menu>li>a": {
    "-webkit-box-pack": "end",
    "-webkit-justify-content": "flex-end",
    "-ms-flex-pack": "end",
    "justify-content": "flex-end"
  },
  ".align-center.vertical.menu>li>a": {
    "-webkit-box-pack": "center",
    "-webkit-justify-content": "center",
    "-ms-flex-pack": "center",
    "justify-content": "center"
  },
  ".align-top": {
    "-webkit-box-align": "start",
    "-webkit-align-items": "flex-start",
    "-ms-flex-align": "start",
    "align-items": "flex-start"
  },
  ".align-self-top": {
    "-webkit-align-self": "flex-start",
    "-ms-flex-item-align": "start",
    "align-self": "flex-start"
  },
  ".align-bottom": {
    "-webkit-box-align": "end",
    "-webkit-align-items": "flex-end",
    "-ms-flex-align": "end",
    "align-items": "flex-end"
  },
  ".align-self-bottom": {
    "-webkit-align-self": "flex-end",
    "-ms-flex-item-align": "end",
    "align-self": "flex-end"
  },
  ".align-middle": {
    "-webkit-box-align": "center",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"
  },
  ".align-self-middle": {
    "-webkit-align-self": "center",
    "-ms-flex-item-align": "center",
    "align-self": "center"
  },
  ".align-stretch": {
    "-webkit-box-align": "stretch",
    "-webkit-align-items": "stretch",
    "-ms-flex-align": "stretch",
    "align-items": "stretch"
  },
  ".align-self-stretch": {
    "-webkit-align-self": "stretch",
    "-ms-flex-item-align": "stretch",
    "align-self": "stretch"
  },
  ".align-center-middle": {
    "-webkit-box-pack": "center",
    "-webkit-justify-content": "center",
    "-ms-flex-pack": "center",
    "justify-content": "center",
    "-webkit-box-align": "center",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center",
    "-webkit-align-content": "center",
    "-ms-flex-line-pack": "center",
    "align-content": "center"
  },
  ".small-order-1": {
    "-webkit-box-ordinal-group": "2",
    "-webkit-order": "1",
    "-ms-flex-order": "1",
    "order": "1"
  },
  ".small-order-2": {
    "-webkit-box-ordinal-group": "3",
    "-webkit-order": "2",
    "-ms-flex-order": "2",
    "order": "2"
  },
  ".small-order-3": {
    "-webkit-box-ordinal-group": "4",
    "-webkit-order": "3",
    "-ms-flex-order": "3",
    "order": "3"
  },
  ".small-order-4": {
    "-webkit-box-ordinal-group": "5",
    "-webkit-order": "4",
    "-ms-flex-order": "4",
    "order": "4"
  },
  ".small-order-5": {
    "-webkit-box-ordinal-group": "6",
    "-webkit-order": "5",
    "-ms-flex-order": "5",
    "order": "5"
  },
  ".small-order-6": {
    "-webkit-box-ordinal-group": "7",
    "-webkit-order": "6",
    "-ms-flex-order": "6",
    "order": "6"
  },
  ".flex-container": {
    "display": "flex"
  },
  ".flex-child-auto": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 1 auto",
    "-ms-flex": "1 1 auto",
    "flex": "1 1 auto"
  },
  ".flex-child-grow": {
    "-webkit-box-flex": "1",
    "-webkit-flex": "1 0 auto",
    "-ms-flex": "1 0 auto",
    "flex": "1 0 auto"
  },
  ".flex-child-shrink": {
    "-webkit-box-flex": "0",
    "-webkit-flex": "0 1 auto",
    "-ms-flex": "0 1 auto",
    "flex": "0 1 auto"
  },
  ".flex-dir-row": {
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "normal",
    "-webkit-flex-direction": "row",
    "-ms-flex-direction": "row",
    "flex-direction": "row"
  },
  ".flex-dir-row-reverse": {
    "-webkit-box-orient": "horizontal",
    "-webkit-box-direction": "reverse",
    "-webkit-flex-direction": "row-reverse",
    "-ms-flex-direction": "row-reverse",
    "flex-direction": "row-reverse"
  },
  ".flex-dir-column": {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    "-webkit-flex-direction": "column",
    "-ms-flex-direction": "column",
    "flex-direction": "column"
  },
  ".flex-dir-column-reverse": {
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "reverse",
    "-webkit-flex-direction": "column-reverse",
    "-ms-flex-direction": "column-reverse",
    "flex-direction": "column-reverse"
  },
  ".hide": {
    "display": "none!important"
  },
  ".invisible": {
    "visibility": "hidden"
  },
  "@media screen and (max-width:0em),screen and (min-width:40em)": {
    ".show-for-small-only": {
      "display": "none!important"
    }
  },
  "@media screen and (max-width:39.99875em)": {
    ".show-for-medium": {
      "display": "none!important"
    }
  },
  "@media print,screen and (min-width:40em) and (max-width:63.99875em)": {
    ".hide-for-medium-only": {
      "display": "none!important"
    }
  },
  "@media screen and (max-width:39.99875em),screen and (min-width:64em)": {
    ".show-for-medium-only": {
      "display": "none!important"
    }
  },
  "@media screen and (max-width:63.99875em)": {
    ".show-for-large": {
      "display": "none!important"
    }
  },
  "@media print,screen and (min-width:64em) and (max-width:74.99875em)": {
    ".hide-for-large-only": {
      "display": "none!important"
    }
  },
  "@media screen and (max-width:63.99875em),screen and (min-width:75em)": {
    ".show-for-large-only": {
      "display": "none!important"
    }
  },
  ".show-for-sr,.show-on-focus": {
    "position": "absolute!important",
    "width": "1px!important",
    "height": "1px!important",
    "padding": "0!important",
    "overflow": "hidden!important",
    "clip": "rect(0,0,0,0)!important",
    "white-space": "nowrap!important",
    "border": "0!important"
  },
  ".show-on-focus:active,.show-on-focus:focus": {
    "position": "static!important",
    "width": "auto!important",
    "height": "auto!important",
    "overflow": "visible!important",
    "clip": "auto!important",
    "white-space": "normal!important"
  },
  ".hide-for-portrait,.show-for-landscape": {
    "display": "block!important"
  },
  "@media screen and (orientation:landscape)": {
    ".hide-for-landscape,.show-for-portrait": {
      "display": "none!important"
    }
  },
  "@media screen and (orientation:portrait)": {
    ".hide-for-landscape,.show-for-portrait": {
      "display": "block!important"
    }
  },
  ".hide-for-landscape,.show-for-portrait": {
    "display": "none!important"
  }
}

module.exports = includes;
