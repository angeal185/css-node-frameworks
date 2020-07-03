const includes = {
  "html": {
    "font-size": "62.5%"
  },
  "body": {
    "font-size": "1.5em",
    "line-height": "1.6",
    "font-weight": "400",
    "font-family": "'Raleway', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    "color": "#222"
  },

  "p": {
    "margin-top": "0"
  },
  "a": {
    "color": "#1EAEDB"
  },
  "a:hover": {
    "color": "#0FA0CE"
  },


  "ul": {
    "list-style": "circle inside"
  },
  "ol": {
    "list-style": "decimal inside"
  },
  "ol, ul": {
    "padding-left": "0",
    "margin-top": "0"
  },
  "ul ul,ul ol,ol ol,ol ul": {
    "margin": "1.5rem 0 1.5rem 3rem",
    "font-size": "90%"
  },
  "li": {
    "margin-bottom": "1rem"
  },
  "code": {
    "padding": ".2rem .5rem",
    "margin": "0 .2rem",
    "font-size": "90%",
    "white-space": "nowrap",
    "background": "#F1F1F1",
    "border": "1px solid #E1E1E1",
    "border-radius": "4px"
  },
  "pre>code": {
    "display": "block",
    "padding": "1rem 1.5rem",
    "white-space": "pre"
  },
  "th,td": {
    "padding": "12px 15px",
    "text-align": "left",
    "border-bottom": "1px solid #E1E1E1"
  },
  "th:first-child,td:first-child": {
    "padding-left": "0"
  },
  "th:last-child,td:last-child": {
    "padding-right": "0"
  },
  "button,.button": {
    "margin-bottom": "1rem"
  },
  "input,textarea,select,fieldset": {
    "margin-bottom": "1.5rem"
  },
  "pre,blockquote,dl,figure,table,p,ul,ol,form": {
    "margin-bottom": "2.5rem"
  },
  ".u-full-width": {
    "width": "100%",
    "box-sizing": "border-box"
  },
  ".u-max-full-width": {
    "max-width": "100%",
    "box-sizing": "border-box"
  },
  ".u-pull-right": {
    "float": "right"
  },
  ".u-pull-left": {
    "float": "left"
  },
  "hr": {
    "margin-top": "3rem",
    "margin-bottom": "3.5rem",
    "border-width": "0",
    "border-top": "1px solid #E1E1E1"
  },
  ".container:after,.row:after,.u-cf": {
    "content": "''",
    "display": "table",
    "clear": "both"
  }
}


module.exports = includes;