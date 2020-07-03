
const items = ["bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada","wobble","jello","heartBeat","backInDown","backInLeft","backInRight","backInUp","backOutDown","backOutLeft","backOutRight","backOutUp","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeInTopLeft","fadeInTopRight","fadeInBottomLeft","fadeInBottomRight","fadeOut","fadeOutDownBig","fadeOutDown","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomRight","fadeOutBottomLeft","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedInRight","lightSpeedInLeft","lightSpeedOutRight","lightSpeedOutLeft","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"]


const includes = {
  ":root": {
    "--animate-duration": "1s",
    "--animate-delay": "1s",
    "--animate-repeat": "1"
  },
  ".animate__animated": {
    "-webkit-animation-duration": "var(--animate-duration)",
    "animation-duration": "var(--animate-duration)",
    "-webkit-animation-fill-mode": "both",
    "animation-fill-mode": "both"
  },
  ".animate__animated.animate__infinite": {
    "-webkit-animation-iteration-count": "infinite",
    "animation-iteration-count": "infinite"
  },
  ".animate__animated.animate__repeat-1": {
    "-webkit-animation-iteration-count": "var(--animate-repeat)",
    "animation-iteration-count": "var(--animate-repeat)"
  },
  ".animate__animated.animate__repeat-2": {
    "-webkit-animation-iteration-count": "calc(var(--animate-repeat)*2)",
    "animation-iteration-count": "calc(var(--animate-repeat)*2)"
  },
  ".animate__animated.animate__repeat-3": {
    "-webkit-animation-iteration-count": "calc(var(--animate-repeat)*3)",
    "animation-iteration-count": "calc(var(--animate-repeat)*3)"
  },
  ".animate__animated.animate__delay-1s": {
    "-webkit-animation-delay": "var(--animate-delay)",
    "animation-delay": "var(--animate-delay)"
  },
  ".animate__animated.animate__delay-2s": {
    "-webkit-animation-delay": "calc(var(--animate-delay)*2)",
    "animation-delay": "calc(var(--animate-delay)*2)"
  },
  ".animate__animated.animate__delay-3s": {
    "-webkit-animation-delay": "calc(var(--animate-delay)*3)",
    "animation-delay": "calc(var(--animate-delay)*3)"
  },
  ".animate__animated.animate__delay-4s": {
    "-webkit-animation-delay": "calc(var(--animate-delay)*4)",
    "animation-delay": "calc(var(--animate-delay)*4)"
  },
  ".animate__animated.animate__delay-5s": {
    "-webkit-animation-delay": "calc(var(--animate-delay)*5)",
    "animation-delay": "calc(var(--animate-delay)*5)"
  },
  ".animate__animated.animate__faster": {
    "-webkit-animation-duration": "calc(var(--animate-duration)/2)",
    "animation-duration": "calc(var(--animate-duration)/2)"
  },
  ".animate__animated.animate__fast": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*0.8)",
    "animation-duration": "calc(var(--animate-duration)*0.8)"
  },
  ".animate__animated.animate__slow": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*2)",
    "animation-duration": "calc(var(--animate-duration)*2)"
  },
  ".animate__animated.animate__slower": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*3)",
    "animation-duration": "calc(var(--animate-duration)*3)"
  },
  "@media (prefers-reduced-motion:reduce),print": {
    ".animate__animated": {
      "-webkit-animation-duration": "1ms!important",
      "animation-duration": "1ms!important",
      "-webkit-transition-duration": "1ms!important",
      "transition-duration": "1ms!important",
      "-webkit-animation-iteration-count": "1!important",
      "animation-iteration-count": "1!important"
    },
    ".animate__animated[class*=Out]": {
      "opacity": "0"
    }
  },
  "@-webkit-keyframes bounce": {
    "0%,20%,53%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "40%,43%": {
      "-webkit-animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "-webkit-transform": "translate3d(0,-30px,0) scaleY(1.1)",
      "transform": "translate3d(0,-30px,0) scaleY(1.1)"
    },
    "70%": {
      "-webkit-animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "-webkit-transform": "translate3d(0,-15px,0) scaleY(1.05)",
      "transform": "translate3d(0,-15px,0) scaleY(1.05)"
    },
    "80%": {
      "-webkit-transition-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "transition-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "-webkit-transform": "translateZ(0) scaleY(.95)",
      "transform": "translateZ(0) scaleY(.95)"
    },
    "90%": {
      "-webkit-transform": "translate3d(0,-4px,0) scaleY(1.02)",
      "transform": "translate3d(0,-4px,0) scaleY(1.02)"
    }
  },
  "@keyframes bounce": {
    "0%,20%,53%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "40%,43%": {
      "-webkit-animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "-webkit-transform": "translate3d(0,-30px,0) scaleY(1.1)",
      "transform": "translate3d(0,-30px,0) scaleY(1.1)"
    },
    "70%": {
      "-webkit-animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "animation-timing-function": "cubic-bezier(.755,.05,.855,.06)",
      "-webkit-transform": "translate3d(0,-15px,0) scaleY(1.05)",
      "transform": "translate3d(0,-15px,0) scaleY(1.05)"
    },
    "80%": {
      "-webkit-transition-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "transition-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "-webkit-transform": "translateZ(0) scaleY(.95)",
      "transform": "translateZ(0) scaleY(.95)"
    },
    "90%": {
      "-webkit-transform": "translate3d(0,-4px,0) scaleY(1.02)",
      "transform": "translate3d(0,-4px,0) scaleY(1.02)"
    }
  },
  ".animate__bounce": {
    "-webkit-animation-name": "bounce",
    "animation-name": "bounce",
    "-webkit-transform-origin": "center bottom",
    "transform-origin": "center bottom"
  },
  "@-webkit-keyframes flash": {
    "0%,50%,to": {
      "opacity": "1"
    },
    "25%,75%": {
      "opacity": "0"
    }
  },
  "@keyframes flash": {
    "0%,50%,to": {
      "opacity": "1"
    },
    "25%,75%": {
      "opacity": "0"
    }
  },
  ".animate__flash": {
    "-webkit-animation-name": "flash",
    "animation-name": "flash"
  },
  "@-webkit-keyframes pulse": {
    "0%": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    },
    "50%": {
      "-webkit-transform": "scale3d(1.05,1.05,1.05)",
      "transform": "scale3d(1.05,1.05,1.05)"
    },
    "to": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  "@keyframes pulse": {
    "0%": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    },
    "50%": {
      "-webkit-transform": "scale3d(1.05,1.05,1.05)",
      "transform": "scale3d(1.05,1.05,1.05)"
    },
    "to": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  ".animate__pulse": {
    "-webkit-animation-name": "pulse",
    "animation-name": "pulse",
    "-webkit-animation-timing-function": "ease-in-out",
    "animation-timing-function": "ease-in-out"
  },
  "@-webkit-keyframes rubberBand": {
    "0%": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    },
    "30%": {
      "-webkit-transform": "scale3d(1.25,.75,1)",
      "transform": "scale3d(1.25,.75,1)"
    },
    "40%": {
      "-webkit-transform": "scale3d(.75,1.25,1)",
      "transform": "scale3d(.75,1.25,1)"
    },
    "50%": {
      "-webkit-transform": "scale3d(1.15,.85,1)",
      "transform": "scale3d(1.15,.85,1)"
    },
    "65%": {
      "-webkit-transform": "scale3d(.95,1.05,1)",
      "transform": "scale3d(.95,1.05,1)"
    },
    "75%": {
      "-webkit-transform": "scale3d(1.05,.95,1)",
      "transform": "scale3d(1.05,.95,1)"
    },
    "to": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  "@keyframes rubberBand": {
    "0%": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    },
    "30%": {
      "-webkit-transform": "scale3d(1.25,.75,1)",
      "transform": "scale3d(1.25,.75,1)"
    },
    "40%": {
      "-webkit-transform": "scale3d(.75,1.25,1)",
      "transform": "scale3d(.75,1.25,1)"
    },
    "50%": {
      "-webkit-transform": "scale3d(1.15,.85,1)",
      "transform": "scale3d(1.15,.85,1)"
    },
    "65%": {
      "-webkit-transform": "scale3d(.95,1.05,1)",
      "transform": "scale3d(.95,1.05,1)"
    },
    "75%": {
      "-webkit-transform": "scale3d(1.05,.95,1)",
      "transform": "scale3d(1.05,.95,1)"
    },
    "to": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  ".animate__rubberBand": {
    "-webkit-animation-name": "rubberBand",
    "animation-name": "rubberBand"
  },
  "@-webkit-keyframes shakeX": {
    "0%,to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "10%,30%,50%,70%,90%": {
      "-webkit-transform": "translate3d(-10px,0,0)",
      "transform": "translate3d(-10px,0,0)"
    },
    "20%,40%,60%,80%": {
      "-webkit-transform": "translate3d(10px,0,0)",
      "transform": "translate3d(10px,0,0)"
    }
  },
  "@keyframes shakeX": {
    "0%,to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "10%,30%,50%,70%,90%": {
      "-webkit-transform": "translate3d(-10px,0,0)",
      "transform": "translate3d(-10px,0,0)"
    },
    "20%,40%,60%,80%": {
      "-webkit-transform": "translate3d(10px,0,0)",
      "transform": "translate3d(10px,0,0)"
    }
  },
  ".animate__shakeX": {
    "-webkit-animation-name": "shakeX",
    "animation-name": "shakeX"
  },
  "@-webkit-keyframes shakeY": {
    "0%,to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "10%,30%,50%,70%,90%": {
      "-webkit-transform": "translate3d(0,-10px,0)",
      "transform": "translate3d(0,-10px,0)"
    },
    "20%,40%,60%,80%": {
      "-webkit-transform": "translate3d(0,10px,0)",
      "transform": "translate3d(0,10px,0)"
    }
  },
  "@keyframes shakeY": {
    "0%,to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "10%,30%,50%,70%,90%": {
      "-webkit-transform": "translate3d(0,-10px,0)",
      "transform": "translate3d(0,-10px,0)"
    },
    "20%,40%,60%,80%": {
      "-webkit-transform": "translate3d(0,10px,0)",
      "transform": "translate3d(0,10px,0)"
    }
  },
  ".animate__shakeY": {
    "-webkit-animation-name": "shakeY",
    "animation-name": "shakeY"
  },
  "@-webkit-keyframes headShake": {
    "0%": {
      "-webkit-transform": "translateX(0)",
      "transform": "translateX(0)"
    },
    "6.5%": {
      "-webkit-transform": "translateX(-6px) rotateY(-9deg)",
      "transform": "translateX(-6px) rotateY(-9deg)"
    },
    "18.5%": {
      "-webkit-transform": "translateX(5px) rotateY(7deg)",
      "transform": "translateX(5px) rotateY(7deg)"
    },
    "31.5%": {
      "-webkit-transform": "translateX(-3px) rotateY(-5deg)",
      "transform": "translateX(-3px) rotateY(-5deg)"
    },
    "43.5%": {
      "-webkit-transform": "translateX(2px) rotateY(3deg)",
      "transform": "translateX(2px) rotateY(3deg)"
    },
    "50%": {
      "-webkit-transform": "translateX(0)",
      "transform": "translateX(0)"
    }
  },
  "@keyframes headShake": {
    "0%": {
      "-webkit-transform": "translateX(0)",
      "transform": "translateX(0)"
    },
    "6.5%": {
      "-webkit-transform": "translateX(-6px) rotateY(-9deg)",
      "transform": "translateX(-6px) rotateY(-9deg)"
    },
    "18.5%": {
      "-webkit-transform": "translateX(5px) rotateY(7deg)",
      "transform": "translateX(5px) rotateY(7deg)"
    },
    "31.5%": {
      "-webkit-transform": "translateX(-3px) rotateY(-5deg)",
      "transform": "translateX(-3px) rotateY(-5deg)"
    },
    "43.5%": {
      "-webkit-transform": "translateX(2px) rotateY(3deg)",
      "transform": "translateX(2px) rotateY(3deg)"
    },
    "50%": {
      "-webkit-transform": "translateX(0)",
      "transform": "translateX(0)"
    }
  },
  ".animate__headShake": {
    "-webkit-animation-timing-function": "ease-in-out",
    "animation-timing-function": "ease-in-out",
    "-webkit-animation-name": "headShake",
    "animation-name": "headShake"
  },
  "@-webkit-keyframes swing": {
    "20%": {
      "-webkit-transform": "rotate(15deg)",
      "transform": "rotate(15deg)"
    },
    "40%": {
      "-webkit-transform": "rotate(-10deg)",
      "transform": "rotate(-10deg)"
    },
    "60%": {
      "-webkit-transform": "rotate(5deg)",
      "transform": "rotate(5deg)"
    },
    "80%": {
      "-webkit-transform": "rotate(-5deg)",
      "transform": "rotate(-5deg)"
    },
    "to": {
      "-webkit-transform": "rotate(0deg)",
      "transform": "rotate(0deg)"
    }
  },
  "@keyframes swing": {
    "20%": {
      "-webkit-transform": "rotate(15deg)",
      "transform": "rotate(15deg)"
    },
    "40%": {
      "-webkit-transform": "rotate(-10deg)",
      "transform": "rotate(-10deg)"
    },
    "60%": {
      "-webkit-transform": "rotate(5deg)",
      "transform": "rotate(5deg)"
    },
    "80%": {
      "-webkit-transform": "rotate(-5deg)",
      "transform": "rotate(-5deg)"
    },
    "to": {
      "-webkit-transform": "rotate(0deg)",
      "transform": "rotate(0deg)"
    }
  },
  ".animate__swing": {
    "-webkit-transform-origin": "top center",
    "transform-origin": "top center",
    "-webkit-animation-name": "swing",
    "animation-name": "swing"
  },
  "@-webkit-keyframes tada": {
    "0%": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    },
    "10%,20%": {
      "-webkit-transform": "scale3d(.9,.9,.9) rotate(-3deg)",
      "transform": "scale3d(.9,.9,.9) rotate(-3deg)"
    },
    "30%,50%,70%,90%": {
      "-webkit-transform": "scale3d(1.1,1.1,1.1) rotate(3deg)",
      "transform": "scale3d(1.1,1.1,1.1) rotate(3deg)"
    },
    "40%,60%,80%": {
      "-webkit-transform": "scale3d(1.1,1.1,1.1) rotate(-3deg)",
      "transform": "scale3d(1.1,1.1,1.1) rotate(-3deg)"
    },
    "to": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  "@keyframes tada": {
    "0%": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    },
    "10%,20%": {
      "-webkit-transform": "scale3d(.9,.9,.9) rotate(-3deg)",
      "transform": "scale3d(.9,.9,.9) rotate(-3deg)"
    },
    "30%,50%,70%,90%": {
      "-webkit-transform": "scale3d(1.1,1.1,1.1) rotate(3deg)",
      "transform": "scale3d(1.1,1.1,1.1) rotate(3deg)"
    },
    "40%,60%,80%": {
      "-webkit-transform": "scale3d(1.1,1.1,1.1) rotate(-3deg)",
      "transform": "scale3d(1.1,1.1,1.1) rotate(-3deg)"
    },
    "to": {
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  ".animate__tada": {
    "-webkit-animation-name": "tada",
    "animation-name": "tada"
  },
  "@-webkit-keyframes wobble": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "15%": {
      "-webkit-transform": "translate3d(-25%,0,0) rotate(-5deg)",
      "transform": "translate3d(-25%,0,0) rotate(-5deg)"
    },
    "30%": {
      "-webkit-transform": "translate3d(20%,0,0) rotate(3deg)",
      "transform": "translate3d(20%,0,0) rotate(3deg)"
    },
    "45%": {
      "-webkit-transform": "translate3d(-15%,0,0) rotate(-3deg)",
      "transform": "translate3d(-15%,0,0) rotate(-3deg)"
    },
    "60%": {
      "-webkit-transform": "translate3d(10%,0,0) rotate(2deg)",
      "transform": "translate3d(10%,0,0) rotate(2deg)"
    },
    "75%": {
      "-webkit-transform": "translate3d(-5%,0,0) rotate(-1deg)",
      "transform": "translate3d(-5%,0,0) rotate(-1deg)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes wobble": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "15%": {
      "-webkit-transform": "translate3d(-25%,0,0) rotate(-5deg)",
      "transform": "translate3d(-25%,0,0) rotate(-5deg)"
    },
    "30%": {
      "-webkit-transform": "translate3d(20%,0,0) rotate(3deg)",
      "transform": "translate3d(20%,0,0) rotate(3deg)"
    },
    "45%": {
      "-webkit-transform": "translate3d(-15%,0,0) rotate(-3deg)",
      "transform": "translate3d(-15%,0,0) rotate(-3deg)"
    },
    "60%": {
      "-webkit-transform": "translate3d(10%,0,0) rotate(2deg)",
      "transform": "translate3d(10%,0,0) rotate(2deg)"
    },
    "75%": {
      "-webkit-transform": "translate3d(-5%,0,0) rotate(-1deg)",
      "transform": "translate3d(-5%,0,0) rotate(-1deg)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__wobble": {
    "-webkit-animation-name": "wobble",
    "animation-name": "wobble"
  },
  "@-webkit-keyframes jello": {
    "0%,11.1%,to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "22.2%": {
      "-webkit-transform": "skewX(-12.5deg) skewY(-12.5deg)",
      "transform": "skewX(-12.5deg) skewY(-12.5deg)"
    },
    "33.3%": {
      "-webkit-transform": "skewX(6.25deg) skewY(6.25deg)",
      "transform": "skewX(6.25deg) skewY(6.25deg)"
    },
    "44.4%": {
      "-webkit-transform": "skewX(-3.125deg) skewY(-3.125deg)",
      "transform": "skewX(-3.125deg) skewY(-3.125deg)"
    },
    "55.5%": {
      "-webkit-transform": "skewX(1.5625deg) skewY(1.5625deg)",
      "transform": "skewX(1.5625deg) skewY(1.5625deg)"
    },
    "66.6%": {
      "-webkit-transform": "skewX(-.78125deg) skewY(-.78125deg)",
      "transform": "skewX(-.78125deg) skewY(-.78125deg)"
    },
    "77.7%": {
      "-webkit-transform": "skewX(.390625deg) skewY(.390625deg)",
      "transform": "skewX(.390625deg) skewY(.390625deg)"
    },
    "88.8%": {
      "-webkit-transform": "skewX(-.1953125deg) skewY(-.1953125deg)",
      "transform": "skewX(-.1953125deg) skewY(-.1953125deg)"
    }
  },
  "@keyframes jello": {
    "0%,11.1%,to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "22.2%": {
      "-webkit-transform": "skewX(-12.5deg) skewY(-12.5deg)",
      "transform": "skewX(-12.5deg) skewY(-12.5deg)"
    },
    "33.3%": {
      "-webkit-transform": "skewX(6.25deg) skewY(6.25deg)",
      "transform": "skewX(6.25deg) skewY(6.25deg)"
    },
    "44.4%": {
      "-webkit-transform": "skewX(-3.125deg) skewY(-3.125deg)",
      "transform": "skewX(-3.125deg) skewY(-3.125deg)"
    },
    "55.5%": {
      "-webkit-transform": "skewX(1.5625deg) skewY(1.5625deg)",
      "transform": "skewX(1.5625deg) skewY(1.5625deg)"
    },
    "66.6%": {
      "-webkit-transform": "skewX(-.78125deg) skewY(-.78125deg)",
      "transform": "skewX(-.78125deg) skewY(-.78125deg)"
    },
    "77.7%": {
      "-webkit-transform": "skewX(.390625deg) skewY(.390625deg)",
      "transform": "skewX(.390625deg) skewY(.390625deg)"
    },
    "88.8%": {
      "-webkit-transform": "skewX(-.1953125deg) skewY(-.1953125deg)",
      "transform": "skewX(-.1953125deg) skewY(-.1953125deg)"
    }
  },
  ".animate__jello": {
    "-webkit-animation-name": "jello",
    "animation-name": "jello",
    "-webkit-transform-origin": "center",
    "transform-origin": "center"
  },
  "@-webkit-keyframes heartBeat": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    },
    "14%": {
      "-webkit-transform": "scale(1.3)",
      "transform": "scale(1.3)"
    },
    "28%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    },
    "42%": {
      "-webkit-transform": "scale(1.3)",
      "transform": "scale(1.3)"
    },
    "70%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    }
  },
  "@keyframes heartBeat": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    },
    "14%": {
      "-webkit-transform": "scale(1.3)",
      "transform": "scale(1.3)"
    },
    "28%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    },
    "42%": {
      "-webkit-transform": "scale(1.3)",
      "transform": "scale(1.3)"
    },
    "70%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    }
  },
  ".animate__heartBeat": {
    "-webkit-animation-name": "heartBeat",
    "animation-name": "heartBeat",
    "-webkit-animation-duration": "calc(var(--animate-duration)*1.3)",
    "animation-duration": "calc(var(--animate-duration)*1.3)",
    "-webkit-animation-timing-function": "ease-in-out",
    "animation-timing-function": "ease-in-out"
  },
  "@-webkit-keyframes backInDown": {
    "0%": {
      "-webkit-transform": "translateY(-1200px) scale(.7)",
      "transform": "translateY(-1200px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  "@keyframes backInDown": {
    "0%": {
      "-webkit-transform": "translateY(-1200px) scale(.7)",
      "transform": "translateY(-1200px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  ".animate__backInDown": {
    "-webkit-animation-name": "backInDown",
    "animation-name": "backInDown"
  },
  "@-webkit-keyframes backInLeft": {
    "0%": {
      "-webkit-transform": "translateX(-2000px) scale(.7)",
      "transform": "translateX(-2000px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  "@keyframes backInLeft": {
    "0%": {
      "-webkit-transform": "translateX(-2000px) scale(.7)",
      "transform": "translateX(-2000px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  ".animate__backInLeft": {
    "-webkit-animation-name": "backInLeft",
    "animation-name": "backInLeft"
  },
  "@-webkit-keyframes backInRight": {
    "0%": {
      "-webkit-transform": "translateX(2000px) scale(.7)",
      "transform": "translateX(2000px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  "@keyframes backInRight": {
    "0%": {
      "-webkit-transform": "translateX(2000px) scale(.7)",
      "transform": "translateX(2000px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  ".animate__backInRight": {
    "-webkit-animation-name": "backInRight",
    "animation-name": "backInRight"
  },
  "@-webkit-keyframes backInUp": {
    "0%": {
      "-webkit-transform": "translateY(1200px) scale(.7)",
      "transform": "translateY(1200px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  "@keyframes backInUp": {
    "0%": {
      "-webkit-transform": "translateY(1200px) scale(.7)",
      "transform": "translateY(1200px) scale(.7)",
      "opacity": ".7"
    },
    "80%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    }
  },
  ".animate__backInUp": {
    "-webkit-animation-name": "backInUp",
    "animation-name": "backInUp"
  },
  "@-webkit-keyframes backOutDown": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateY(700px) scale(.7)",
      "transform": "translateY(700px) scale(.7)",
      "opacity": ".7"
    }
  },
  "@keyframes backOutDown": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateY(700px) scale(.7)",
      "transform": "translateY(700px) scale(.7)",
      "opacity": ".7"
    }
  },
  ".animate__backOutDown": {
    "-webkit-animation-name": "backOutDown",
    "animation-name": "backOutDown"
  },
  "@-webkit-keyframes backOutLeft": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateX(-2000px) scale(.7)",
      "transform": "translateX(-2000px) scale(.7)",
      "opacity": ".7"
    }
  },
  "@keyframes backOutLeft": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateX(-2000px) scale(.7)",
      "transform": "translateX(-2000px) scale(.7)",
      "opacity": ".7"
    }
  },
  ".animate__backOutLeft": {
    "-webkit-animation-name": "backOutLeft",
    "animation-name": "backOutLeft"
  },
  "@-webkit-keyframes backOutRight": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateX(2000px) scale(.7)",
      "transform": "translateX(2000px) scale(.7)",
      "opacity": ".7"
    }
  },
  "@keyframes backOutRight": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateX(0) scale(.7)",
      "transform": "translateX(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateX(2000px) scale(.7)",
      "transform": "translateX(2000px) scale(.7)",
      "opacity": ".7"
    }
  },
  ".animate__backOutRight": {
    "-webkit-animation-name": "backOutRight",
    "animation-name": "backOutRight"
  },
  "@-webkit-keyframes backOutUp": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateY(-700px) scale(.7)",
      "transform": "translateY(-700px) scale(.7)",
      "opacity": ".7"
    }
  },
  "@keyframes backOutUp": {
    "0%": {
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)",
      "opacity": "1"
    },
    "20%": {
      "-webkit-transform": "translateY(0) scale(.7)",
      "transform": "translateY(0) scale(.7)",
      "opacity": ".7"
    },
    "to": {
      "-webkit-transform": "translateY(-700px) scale(.7)",
      "transform": "translateY(-700px) scale(.7)",
      "opacity": ".7"
    }
  },
  ".animate__backOutUp": {
    "-webkit-animation-name": "backOutUp",
    "animation-name": "backOutUp"
  },
  "@-webkit-keyframes bounceIn": {
    "0%,20%,40%,60%,80%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    },
    "20%": {
      "-webkit-transform": "scale3d(1.1,1.1,1.1)",
      "transform": "scale3d(1.1,1.1,1.1)"
    },
    "40%": {
      "-webkit-transform": "scale3d(.9,.9,.9)",
      "transform": "scale3d(.9,.9,.9)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(1.03,1.03,1.03)",
      "transform": "scale3d(1.03,1.03,1.03)"
    },
    "80%": {
      "-webkit-transform": "scale3d(.97,.97,.97)",
      "transform": "scale3d(.97,.97,.97)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  "@keyframes bounceIn": {
    "0%,20%,40%,60%,80%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    },
    "20%": {
      "-webkit-transform": "scale3d(1.1,1.1,1.1)",
      "transform": "scale3d(1.1,1.1,1.1)"
    },
    "40%": {
      "-webkit-transform": "scale3d(.9,.9,.9)",
      "transform": "scale3d(.9,.9,.9)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(1.03,1.03,1.03)",
      "transform": "scale3d(1.03,1.03,1.03)"
    },
    "80%": {
      "-webkit-transform": "scale3d(.97,.97,.97)",
      "transform": "scale3d(.97,.97,.97)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "scaleX(1)",
      "transform": "scaleX(1)"
    }
  },
  ".animate__bounceIn": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*0.75)",
    "animation-duration": "calc(var(--animate-duration)*0.75)",
    "-webkit-animation-name": "bounceIn",
    "animation-name": "bounceIn"
  },
  "@-webkit-keyframes bounceInDown": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-3000px,0) scaleY(3)",
      "transform": "translate3d(0,-3000px,0) scaleY(3)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,25px,0) scaleY(.9)",
      "transform": "translate3d(0,25px,0) scaleY(.9)"
    },
    "75%": {
      "-webkit-transform": "translate3d(0,-10px,0) scaleY(.95)",
      "transform": "translate3d(0,-10px,0) scaleY(.95)"
    },
    "90%": {
      "-webkit-transform": "translate3d(0,5px,0) scaleY(.985)",
      "transform": "translate3d(0,5px,0) scaleY(.985)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes bounceInDown": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-3000px,0) scaleY(3)",
      "transform": "translate3d(0,-3000px,0) scaleY(3)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,25px,0) scaleY(.9)",
      "transform": "translate3d(0,25px,0) scaleY(.9)"
    },
    "75%": {
      "-webkit-transform": "translate3d(0,-10px,0) scaleY(.95)",
      "transform": "translate3d(0,-10px,0) scaleY(.95)"
    },
    "90%": {
      "-webkit-transform": "translate3d(0,5px,0) scaleY(.985)",
      "transform": "translate3d(0,5px,0) scaleY(.985)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__bounceInDown": {
    "-webkit-animation-name": "bounceInDown",
    "animation-name": "bounceInDown"
  },
  "@-webkit-keyframes bounceInLeft": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-3000px,0,0) scaleX(3)",
      "transform": "translate3d(-3000px,0,0) scaleX(3)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(25px,0,0) scaleX(1)",
      "transform": "translate3d(25px,0,0) scaleX(1)"
    },
    "75%": {
      "-webkit-transform": "translate3d(-10px,0,0) scaleX(.98)",
      "transform": "translate3d(-10px,0,0) scaleX(.98)"
    },
    "90%": {
      "-webkit-transform": "translate3d(5px,0,0) scaleX(.995)",
      "transform": "translate3d(5px,0,0) scaleX(.995)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes bounceInLeft": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-3000px,0,0) scaleX(3)",
      "transform": "translate3d(-3000px,0,0) scaleX(3)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(25px,0,0) scaleX(1)",
      "transform": "translate3d(25px,0,0) scaleX(1)"
    },
    "75%": {
      "-webkit-transform": "translate3d(-10px,0,0) scaleX(.98)",
      "transform": "translate3d(-10px,0,0) scaleX(.98)"
    },
    "90%": {
      "-webkit-transform": "translate3d(5px,0,0) scaleX(.995)",
      "transform": "translate3d(5px,0,0) scaleX(.995)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__bounceInLeft": {
    "-webkit-animation-name": "bounceInLeft",
    "animation-name": "bounceInLeft"
  },
  "@-webkit-keyframes bounceInRight": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(3000px,0,0) scaleX(3)",
      "transform": "translate3d(3000px,0,0) scaleX(3)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(-25px,0,0) scaleX(1)",
      "transform": "translate3d(-25px,0,0) scaleX(1)"
    },
    "75%": {
      "-webkit-transform": "translate3d(10px,0,0) scaleX(.98)",
      "transform": "translate3d(10px,0,0) scaleX(.98)"
    },
    "90%": {
      "-webkit-transform": "translate3d(-5px,0,0) scaleX(.995)",
      "transform": "translate3d(-5px,0,0) scaleX(.995)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes bounceInRight": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(3000px,0,0) scaleX(3)",
      "transform": "translate3d(3000px,0,0) scaleX(3)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(-25px,0,0) scaleX(1)",
      "transform": "translate3d(-25px,0,0) scaleX(1)"
    },
    "75%": {
      "-webkit-transform": "translate3d(10px,0,0) scaleX(.98)",
      "transform": "translate3d(10px,0,0) scaleX(.98)"
    },
    "90%": {
      "-webkit-transform": "translate3d(-5px,0,0) scaleX(.995)",
      "transform": "translate3d(-5px,0,0) scaleX(.995)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__bounceInRight": {
    "-webkit-animation-name": "bounceInRight",
    "animation-name": "bounceInRight"
  },
  "@-webkit-keyframes bounceInUp": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,3000px,0) scaleY(5)",
      "transform": "translate3d(0,3000px,0) scaleY(5)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,-20px,0) scaleY(.9)",
      "transform": "translate3d(0,-20px,0) scaleY(.9)"
    },
    "75%": {
      "-webkit-transform": "translate3d(0,10px,0) scaleY(.95)",
      "transform": "translate3d(0,10px,0) scaleY(.95)"
    },
    "90%": {
      "-webkit-transform": "translate3d(0,-5px,0) scaleY(.985)",
      "transform": "translate3d(0,-5px,0) scaleY(.985)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes bounceInUp": {
    "0%,60%,75%,90%,to": {
      "-webkit-animation-timing-function": "cubic-bezier(.215,.61,.355,1)",
      "animation-timing-function": "cubic-bezier(.215,.61,.355,1)"
    },
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,3000px,0) scaleY(5)",
      "transform": "translate3d(0,3000px,0) scaleY(5)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,-20px,0) scaleY(.9)",
      "transform": "translate3d(0,-20px,0) scaleY(.9)"
    },
    "75%": {
      "-webkit-transform": "translate3d(0,10px,0) scaleY(.95)",
      "transform": "translate3d(0,10px,0) scaleY(.95)"
    },
    "90%": {
      "-webkit-transform": "translate3d(0,-5px,0) scaleY(.985)",
      "transform": "translate3d(0,-5px,0) scaleY(.985)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__bounceInUp": {
    "-webkit-animation-name": "bounceInUp",
    "animation-name": "bounceInUp"
  },
  "@-webkit-keyframes bounceOut": {
    "20%": {
      "-webkit-transform": "scale3d(.9,.9,.9)",
      "transform": "scale3d(.9,.9,.9)"
    },
    "50%,55%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(1.1,1.1,1.1)",
      "transform": "scale3d(1.1,1.1,1.1)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    }
  },
  "@keyframes bounceOut": {
    "20%": {
      "-webkit-transform": "scale3d(.9,.9,.9)",
      "transform": "scale3d(.9,.9,.9)"
    },
    "50%,55%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(1.1,1.1,1.1)",
      "transform": "scale3d(1.1,1.1,1.1)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    }
  },
  ".animate__bounceOut": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*0.75)",
    "animation-duration": "calc(var(--animate-duration)*0.75)",
    "-webkit-animation-name": "bounceOut",
    "animation-name": "bounceOut"
  },
  "@-webkit-keyframes bounceOutDown": {
    "20%": {
      "-webkit-transform": "translate3d(0,10px,0) scaleY(.985)",
      "transform": "translate3d(0,10px,0) scaleY(.985)"
    },
    "40%,45%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,-20px,0) scaleY(.9)",
      "transform": "translate3d(0,-20px,0) scaleY(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,2000px,0) scaleY(3)",
      "transform": "translate3d(0,2000px,0) scaleY(3)"
    }
  },
  "@keyframes bounceOutDown": {
    "20%": {
      "-webkit-transform": "translate3d(0,10px,0) scaleY(.985)",
      "transform": "translate3d(0,10px,0) scaleY(.985)"
    },
    "40%,45%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,-20px,0) scaleY(.9)",
      "transform": "translate3d(0,-20px,0) scaleY(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,2000px,0) scaleY(3)",
      "transform": "translate3d(0,2000px,0) scaleY(3)"
    }
  },
  ".animate__bounceOutDown": {
    "-webkit-animation-name": "bounceOutDown",
    "animation-name": "bounceOutDown"
  },
  "@-webkit-keyframes bounceOutLeft": {
    "20%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(20px,0,0) scaleX(.9)",
      "transform": "translate3d(20px,0,0) scaleX(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-2000px,0,0) scaleX(2)",
      "transform": "translate3d(-2000px,0,0) scaleX(2)"
    }
  },
  "@keyframes bounceOutLeft": {
    "20%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(20px,0,0) scaleX(.9)",
      "transform": "translate3d(20px,0,0) scaleX(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-2000px,0,0) scaleX(2)",
      "transform": "translate3d(-2000px,0,0) scaleX(2)"
    }
  },
  ".animate__bounceOutLeft": {
    "-webkit-animation-name": "bounceOutLeft",
    "animation-name": "bounceOutLeft"
  },
  "@-webkit-keyframes bounceOutRight": {
    "20%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(-20px,0,0) scaleX(.9)",
      "transform": "translate3d(-20px,0,0) scaleX(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(2000px,0,0) scaleX(2)",
      "transform": "translate3d(2000px,0,0) scaleX(2)"
    }
  },
  "@keyframes bounceOutRight": {
    "20%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(-20px,0,0) scaleX(.9)",
      "transform": "translate3d(-20px,0,0) scaleX(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(2000px,0,0) scaleX(2)",
      "transform": "translate3d(2000px,0,0) scaleX(2)"
    }
  },
  ".animate__bounceOutRight": {
    "-webkit-animation-name": "bounceOutRight",
    "animation-name": "bounceOutRight"
  },
  "@-webkit-keyframes bounceOutUp": {
    "20%": {
      "-webkit-transform": "translate3d(0,-10px,0) scaleY(.985)",
      "transform": "translate3d(0,-10px,0) scaleY(.985)"
    },
    "40%,45%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,20px,0) scaleY(.9)",
      "transform": "translate3d(0,20px,0) scaleY(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-2000px,0) scaleY(3)",
      "transform": "translate3d(0,-2000px,0) scaleY(3)"
    }
  },
  "@keyframes bounceOutUp": {
    "20%": {
      "-webkit-transform": "translate3d(0,-10px,0) scaleY(.985)",
      "transform": "translate3d(0,-10px,0) scaleY(.985)"
    },
    "40%,45%": {
      "opacity": "1",
      "-webkit-transform": "translate3d(0,20px,0) scaleY(.9)",
      "transform": "translate3d(0,20px,0) scaleY(.9)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-2000px,0) scaleY(3)",
      "transform": "translate3d(0,-2000px,0) scaleY(3)"
    }
  },
  ".animate__bounceOutUp": {
    "-webkit-animation-name": "bounceOutUp",
    "animation-name": "bounceOutUp"
  },
  "@-webkit-keyframes fadeIn": {
    "0%": {
      "opacity": "0"
    },
    "to": {
      "opacity": "1"
    }
  },
  "@keyframes fadeIn": {
    "0%": {
      "opacity": "0"
    },
    "to": {
      "opacity": "1"
    }
  },
  ".animate__fadeIn": {
    "-webkit-animation-name": "fadeIn",
    "animation-name": "fadeIn"
  },
  "@-webkit-keyframes fadeInDown": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInDown": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInDown": {
    "-webkit-animation-name": "fadeInDown",
    "animation-name": "fadeInDown"
  },
  "@-webkit-keyframes fadeInDownBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-2000px,0)",
      "transform": "translate3d(0,-2000px,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInDownBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-2000px,0)",
      "transform": "translate3d(0,-2000px,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInDownBig": {
    "-webkit-animation-name": "fadeInDownBig",
    "animation-name": "fadeInDownBig"
  },
  "@-webkit-keyframes fadeInLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInLeft": {
    "-webkit-animation-name": "fadeInLeft",
    "animation-name": "fadeInLeft"
  },
  "@-webkit-keyframes fadeInLeftBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-2000px,0,0)",
      "transform": "translate3d(-2000px,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInLeftBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-2000px,0,0)",
      "transform": "translate3d(-2000px,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInLeftBig": {
    "-webkit-animation-name": "fadeInLeftBig",
    "animation-name": "fadeInLeftBig"
  },
  "@-webkit-keyframes fadeInRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInRight": {
    "-webkit-animation-name": "fadeInRight",
    "animation-name": "fadeInRight"
  },
  "@-webkit-keyframes fadeInRightBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(2000px,0,0)",
      "transform": "translate3d(2000px,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInRightBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(2000px,0,0)",
      "transform": "translate3d(2000px,0,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInRightBig": {
    "-webkit-animation-name": "fadeInRightBig",
    "animation-name": "fadeInRightBig"
  },
  "@-webkit-keyframes fadeInUp": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInUp": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInUp": {
    "-webkit-animation-name": "fadeInUp",
    "animation-name": "fadeInUp"
  },
  "@-webkit-keyframes fadeInUpBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,2000px,0)",
      "transform": "translate3d(0,2000px,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInUpBig": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,2000px,0)",
      "transform": "translate3d(0,2000px,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInUpBig": {
    "-webkit-animation-name": "fadeInUpBig",
    "animation-name": "fadeInUpBig"
  },
  "@-webkit-keyframes fadeInTopLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,-100%,0)",
      "transform": "translate3d(-100%,-100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInTopLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,-100%,0)",
      "transform": "translate3d(-100%,-100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInTopLeft": {
    "-webkit-animation-name": "fadeInTopLeft",
    "animation-name": "fadeInTopLeft"
  },
  "@-webkit-keyframes fadeInTopRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,-100%,0)",
      "transform": "translate3d(100%,-100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInTopRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,-100%,0)",
      "transform": "translate3d(100%,-100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInTopRight": {
    "-webkit-animation-name": "fadeInTopRight",
    "animation-name": "fadeInTopRight"
  },
  "@-webkit-keyframes fadeInBottomLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,100%,0)",
      "transform": "translate3d(-100%,100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInBottomLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,100%,0)",
      "transform": "translate3d(-100%,100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInBottomLeft": {
    "-webkit-animation-name": "fadeInBottomLeft",
    "animation-name": "fadeInBottomLeft"
  },
  "@-webkit-keyframes fadeInBottomRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,100%,0)",
      "transform": "translate3d(100%,100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes fadeInBottomRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,100%,0)",
      "transform": "translate3d(100%,100%,0)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__fadeInBottomRight": {
    "-webkit-animation-name": "fadeInBottomRight",
    "animation-name": "fadeInBottomRight"
  },
  "@-webkit-keyframes fadeOut": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0"
    }
  },
  "@keyframes fadeOut": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0"
    }
  },
  ".animate__fadeOut": {
    "-webkit-animation-name": "fadeOut",
    "animation-name": "fadeOut"
  },
  "@-webkit-keyframes fadeOutDown": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)"
    }
  },
  "@keyframes fadeOutDown": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)"
    }
  },
  ".animate__fadeOutDown": {
    "-webkit-animation-name": "fadeOutDown",
    "animation-name": "fadeOutDown"
  },
  "@-webkit-keyframes fadeOutDownBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,2000px,0)",
      "transform": "translate3d(0,2000px,0)"
    }
  },
  "@keyframes fadeOutDownBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,2000px,0)",
      "transform": "translate3d(0,2000px,0)"
    }
  },
  ".animate__fadeOutDownBig": {
    "-webkit-animation-name": "fadeOutDownBig",
    "animation-name": "fadeOutDownBig"
  },
  "@-webkit-keyframes fadeOutLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)"
    }
  },
  "@keyframes fadeOutLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)"
    }
  },
  ".animate__fadeOutLeft": {
    "-webkit-animation-name": "fadeOutLeft",
    "animation-name": "fadeOutLeft"
  },
  "@-webkit-keyframes fadeOutLeftBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-2000px,0,0)",
      "transform": "translate3d(-2000px,0,0)"
    }
  },
  "@keyframes fadeOutLeftBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-2000px,0,0)",
      "transform": "translate3d(-2000px,0,0)"
    }
  },
  ".animate__fadeOutLeftBig": {
    "-webkit-animation-name": "fadeOutLeftBig",
    "animation-name": "fadeOutLeftBig"
  },
  "@-webkit-keyframes fadeOutRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)"
    }
  },
  "@keyframes fadeOutRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)"
    }
  },
  ".animate__fadeOutRight": {
    "-webkit-animation-name": "fadeOutRight",
    "animation-name": "fadeOutRight"
  },
  "@-webkit-keyframes fadeOutRightBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(2000px,0,0)",
      "transform": "translate3d(2000px,0,0)"
    }
  },
  "@keyframes fadeOutRightBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(2000px,0,0)",
      "transform": "translate3d(2000px,0,0)"
    }
  },
  ".animate__fadeOutRightBig": {
    "-webkit-animation-name": "fadeOutRightBig",
    "animation-name": "fadeOutRightBig"
  },
  "@-webkit-keyframes fadeOutUp": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)"
    }
  },
  "@keyframes fadeOutUp": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)"
    }
  },
  ".animate__fadeOutUp": {
    "-webkit-animation-name": "fadeOutUp",
    "animation-name": "fadeOutUp"
  },
  "@-webkit-keyframes fadeOutUpBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-2000px,0)",
      "transform": "translate3d(0,-2000px,0)"
    }
  },
  "@keyframes fadeOutUpBig": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(0,-2000px,0)",
      "transform": "translate3d(0,-2000px,0)"
    }
  },
  ".animate__fadeOutUpBig": {
    "-webkit-animation-name": "fadeOutUpBig",
    "animation-name": "fadeOutUpBig"
  },
  "@-webkit-keyframes fadeOutTopLeft": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,-100%,0)",
      "transform": "translate3d(-100%,-100%,0)"
    }
  },
  "@keyframes fadeOutTopLeft": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,-100%,0)",
      "transform": "translate3d(-100%,-100%,0)"
    }
  },
  ".animate__fadeOutTopLeft": {
    "-webkit-animation-name": "fadeOutTopLeft",
    "animation-name": "fadeOutTopLeft"
  },
  "@-webkit-keyframes fadeOutTopRight": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,-100%,0)",
      "transform": "translate3d(100%,-100%,0)"
    }
  },
  "@keyframes fadeOutTopRight": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,-100%,0)",
      "transform": "translate3d(100%,-100%,0)"
    }
  },
  ".animate__fadeOutTopRight": {
    "-webkit-animation-name": "fadeOutTopRight",
    "animation-name": "fadeOutTopRight"
  },
  "@-webkit-keyframes fadeOutBottomRight": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,100%,0)",
      "transform": "translate3d(100%,100%,0)"
    }
  },
  "@keyframes fadeOutBottomRight": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,100%,0)",
      "transform": "translate3d(100%,100%,0)"
    }
  },
  ".animate__fadeOutBottomRight": {
    "-webkit-animation-name": "fadeOutBottomRight",
    "animation-name": "fadeOutBottomRight"
  },
  "@-webkit-keyframes fadeOutBottomLeft": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,100%,0)",
      "transform": "translate3d(-100%,100%,0)"
    }
  },
  "@keyframes fadeOutBottomLeft": {
    "0%": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,100%,0)",
      "transform": "translate3d(-100%,100%,0)"
    }
  },
  ".animate__fadeOutBottomLeft": {
    "-webkit-animation-name": "fadeOutBottomLeft",
    "animation-name": "fadeOutBottomLeft"
  },
  "@-webkit-keyframes flip": {
    "0%": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)",
      "transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)",
      "-webkit-animation-timing-function": "ease-out",
      "animation-timing-function": "ease-out"
    },
    "40%": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)",
      "transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)",
      "-webkit-animation-timing-function": "ease-out",
      "animation-timing-function": "ease-out"
    },
    "50%": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)",
      "transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "80%": {
      "-webkit-transform": "perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)",
      "transform": "perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "to": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)",
      "transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    }
  },
  "@keyframes flip": {
    "0%": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)",
      "transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)",
      "-webkit-animation-timing-function": "ease-out",
      "animation-timing-function": "ease-out"
    },
    "40%": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)",
      "transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)",
      "-webkit-animation-timing-function": "ease-out",
      "animation-timing-function": "ease-out"
    },
    "50%": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)",
      "transform": "perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "80%": {
      "-webkit-transform": "perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)",
      "transform": "perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "to": {
      "-webkit-transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)",
      "transform": "perspective(400px) scaleX(1) translateZ(0) rotateY(0deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    }
  },
  ".animate__animated.animate__flip": {
    "-webkit-backface-visibility": "visible",
    "backface-visibility": "visible",
    "-webkit-animation-name": "flip",
    "animation-name": "flip"
  },
  "@-webkit-keyframes flipInX": {
    "0%": {
      "-webkit-transform": "perspective(400px) rotateX(90deg)",
      "transform": "perspective(400px) rotateX(90deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in",
      "opacity": "0"
    },
    "40%": {
      "-webkit-transform": "perspective(400px) rotateX(-20deg)",
      "transform": "perspective(400px) rotateX(-20deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "60%": {
      "-webkit-transform": "perspective(400px) rotateX(10deg)",
      "transform": "perspective(400px) rotateX(10deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "perspective(400px) rotateX(-5deg)",
      "transform": "perspective(400px) rotateX(-5deg)"
    },
    "to": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    }
  },
  "@keyframes flipInX": {
    "0%": {
      "-webkit-transform": "perspective(400px) rotateX(90deg)",
      "transform": "perspective(400px) rotateX(90deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in",
      "opacity": "0"
    },
    "40%": {
      "-webkit-transform": "perspective(400px) rotateX(-20deg)",
      "transform": "perspective(400px) rotateX(-20deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "60%": {
      "-webkit-transform": "perspective(400px) rotateX(10deg)",
      "transform": "perspective(400px) rotateX(10deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "perspective(400px) rotateX(-5deg)",
      "transform": "perspective(400px) rotateX(-5deg)"
    },
    "to": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    }
  },
  ".animate__flipInX": {
    "-webkit-backface-visibility": "visible!important",
    "backface-visibility": "visible!important",
    "-webkit-animation-name": "flipInX",
    "animation-name": "flipInX"
  },
  "@-webkit-keyframes flipInY": {
    "0%": {
      "-webkit-transform": "perspective(400px) rotateY(90deg)",
      "transform": "perspective(400px) rotateY(90deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in",
      "opacity": "0"
    },
    "40%": {
      "-webkit-transform": "perspective(400px) rotateY(-20deg)",
      "transform": "perspective(400px) rotateY(-20deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "60%": {
      "-webkit-transform": "perspective(400px) rotateY(10deg)",
      "transform": "perspective(400px) rotateY(10deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "perspective(400px) rotateY(-5deg)",
      "transform": "perspective(400px) rotateY(-5deg)"
    },
    "to": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    }
  },
  "@keyframes flipInY": {
    "0%": {
      "-webkit-transform": "perspective(400px) rotateY(90deg)",
      "transform": "perspective(400px) rotateY(90deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in",
      "opacity": "0"
    },
    "40%": {
      "-webkit-transform": "perspective(400px) rotateY(-20deg)",
      "transform": "perspective(400px) rotateY(-20deg)",
      "-webkit-animation-timing-function": "ease-in",
      "animation-timing-function": "ease-in"
    },
    "60%": {
      "-webkit-transform": "perspective(400px) rotateY(10deg)",
      "transform": "perspective(400px) rotateY(10deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "perspective(400px) rotateY(-5deg)",
      "transform": "perspective(400px) rotateY(-5deg)"
    },
    "to": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    }
  },
  ".animate__flipInY": {
    "-webkit-backface-visibility": "visible!important",
    "backface-visibility": "visible!important",
    "-webkit-animation-name": "flipInY",
    "animation-name": "flipInY"
  },
  "@-webkit-keyframes flipOutX": {
    "0%": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    },
    "30%": {
      "-webkit-transform": "perspective(400px) rotateX(-20deg)",
      "transform": "perspective(400px) rotateX(-20deg)",
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "perspective(400px) rotateX(90deg)",
      "transform": "perspective(400px) rotateX(90deg)",
      "opacity": "0"
    }
  },
  "@keyframes flipOutX": {
    "0%": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    },
    "30%": {
      "-webkit-transform": "perspective(400px) rotateX(-20deg)",
      "transform": "perspective(400px) rotateX(-20deg)",
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "perspective(400px) rotateX(90deg)",
      "transform": "perspective(400px) rotateX(90deg)",
      "opacity": "0"
    }
  },
  ".animate__flipOutX": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*0.75)",
    "animation-duration": "calc(var(--animate-duration)*0.75)",
    "-webkit-animation-name": "flipOutX",
    "animation-name": "flipOutX",
    "-webkit-backface-visibility": "visible!important",
    "backface-visibility": "visible!important"
  },
  "@-webkit-keyframes flipOutY": {
    "0%": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    },
    "30%": {
      "-webkit-transform": "perspective(400px) rotateY(-15deg)",
      "transform": "perspective(400px) rotateY(-15deg)",
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "perspective(400px) rotateY(90deg)",
      "transform": "perspective(400px) rotateY(90deg)",
      "opacity": "0"
    }
  },
  "@keyframes flipOutY": {
    "0%": {
      "-webkit-transform": "perspective(400px)",
      "transform": "perspective(400px)"
    },
    "30%": {
      "-webkit-transform": "perspective(400px) rotateY(-15deg)",
      "transform": "perspective(400px) rotateY(-15deg)",
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "perspective(400px) rotateY(90deg)",
      "transform": "perspective(400px) rotateY(90deg)",
      "opacity": "0"
    }
  },
  ".animate__flipOutY": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*0.75)",
    "animation-duration": "calc(var(--animate-duration)*0.75)",
    "-webkit-backface-visibility": "visible!important",
    "backface-visibility": "visible!important",
    "-webkit-animation-name": "flipOutY",
    "animation-name": "flipOutY"
  },
  "@-webkit-keyframes lightSpeedInRight": {
    "0%": {
      "-webkit-transform": "translate3d(100%,0,0) skewX(-30deg)",
      "transform": "translate3d(100%,0,0) skewX(-30deg)",
      "opacity": "0"
    },
    "60%": {
      "-webkit-transform": "skewX(20deg)",
      "transform": "skewX(20deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "skewX(-5deg)",
      "transform": "skewX(-5deg)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes lightSpeedInRight": {
    "0%": {
      "-webkit-transform": "translate3d(100%,0,0) skewX(-30deg)",
      "transform": "translate3d(100%,0,0) skewX(-30deg)",
      "opacity": "0"
    },
    "60%": {
      "-webkit-transform": "skewX(20deg)",
      "transform": "skewX(20deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "skewX(-5deg)",
      "transform": "skewX(-5deg)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__lightSpeedInRight": {
    "-webkit-animation-name": "lightSpeedInRight",
    "animation-name": "lightSpeedInRight",
    "-webkit-animation-timing-function": "ease-out",
    "animation-timing-function": "ease-out"
  },
  "@-webkit-keyframes lightSpeedInLeft": {
    "0%": {
      "-webkit-transform": "translate3d(-100%,0,0) skewX(30deg)",
      "transform": "translate3d(-100%,0,0) skewX(30deg)",
      "opacity": "0"
    },
    "60%": {
      "-webkit-transform": "skewX(-20deg)",
      "transform": "skewX(-20deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "skewX(5deg)",
      "transform": "skewX(5deg)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes lightSpeedInLeft": {
    "0%": {
      "-webkit-transform": "translate3d(-100%,0,0) skewX(30deg)",
      "transform": "translate3d(-100%,0,0) skewX(30deg)",
      "opacity": "0"
    },
    "60%": {
      "-webkit-transform": "skewX(-20deg)",
      "transform": "skewX(-20deg)",
      "opacity": "1"
    },
    "80%": {
      "-webkit-transform": "skewX(5deg)",
      "transform": "skewX(5deg)"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__lightSpeedInLeft": {
    "-webkit-animation-name": "lightSpeedInLeft",
    "animation-name": "lightSpeedInLeft",
    "-webkit-animation-timing-function": "ease-out",
    "animation-timing-function": "ease-out"
  },
  "@-webkit-keyframes lightSpeedOutRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "translate3d(100%,0,0) skewX(30deg)",
      "transform": "translate3d(100%,0,0) skewX(30deg)",
      "opacity": "0"
    }
  },
  "@keyframes lightSpeedOutRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "translate3d(100%,0,0) skewX(30deg)",
      "transform": "translate3d(100%,0,0) skewX(30deg)",
      "opacity": "0"
    }
  },
  ".animate__lightSpeedOutRight": {
    "-webkit-animation-name": "lightSpeedOutRight",
    "animation-name": "lightSpeedOutRight",
    "-webkit-animation-timing-function": "ease-in",
    "animation-timing-function": "ease-in"
  },
  "@-webkit-keyframes lightSpeedOutLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "translate3d(-100%,0,0) skewX(-30deg)",
      "transform": "translate3d(-100%,0,0) skewX(-30deg)",
      "opacity": "0"
    }
  },
  "@keyframes lightSpeedOutLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "translate3d(-100%,0,0) skewX(-30deg)",
      "transform": "translate3d(-100%,0,0) skewX(-30deg)",
      "opacity": "0"
    }
  },
  ".animate__lightSpeedOutLeft": {
    "-webkit-animation-name": "lightSpeedOutLeft",
    "animation-name": "lightSpeedOutLeft",
    "-webkit-animation-timing-function": "ease-in",
    "animation-timing-function": "ease-in"
  },
  "@-webkit-keyframes rotateIn": {
    "0%": {
      "-webkit-transform": "rotate(-200deg)",
      "transform": "rotate(-200deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  "@keyframes rotateIn": {
    "0%": {
      "-webkit-transform": "rotate(-200deg)",
      "transform": "rotate(-200deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  ".animate__rotateIn": {
    "-webkit-animation-name": "rotateIn",
    "animation-name": "rotateIn",
    "-webkit-transform-origin": "center",
    "transform-origin": "center"
  },
  "@-webkit-keyframes rotateInDownLeft": {
    "0%": {
      "-webkit-transform": "rotate(-45deg)",
      "transform": "rotate(-45deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  "@keyframes rotateInDownLeft": {
    "0%": {
      "-webkit-transform": "rotate(-45deg)",
      "transform": "rotate(-45deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  ".animate__rotateInDownLeft": {
    "-webkit-animation-name": "rotateInDownLeft",
    "animation-name": "rotateInDownLeft",
    "-webkit-transform-origin": "left bottom",
    "transform-origin": "left bottom"
  },
  "@-webkit-keyframes rotateInDownRight": {
    "0%": {
      "-webkit-transform": "rotate(45deg)",
      "transform": "rotate(45deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  "@keyframes rotateInDownRight": {
    "0%": {
      "-webkit-transform": "rotate(45deg)",
      "transform": "rotate(45deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  ".animate__rotateInDownRight": {
    "-webkit-animation-name": "rotateInDownRight",
    "animation-name": "rotateInDownRight",
    "-webkit-transform-origin": "right bottom",
    "transform-origin": "right bottom"
  },
  "@-webkit-keyframes rotateInUpLeft": {
    "0%": {
      "-webkit-transform": "rotate(45deg)",
      "transform": "rotate(45deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  "@keyframes rotateInUpLeft": {
    "0%": {
      "-webkit-transform": "rotate(45deg)",
      "transform": "rotate(45deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  ".animate__rotateInUpLeft": {
    "-webkit-animation-name": "rotateInUpLeft",
    "animation-name": "rotateInUpLeft",
    "-webkit-transform-origin": "left bottom",
    "transform-origin": "left bottom"
  },
  "@-webkit-keyframes rotateInUpRight": {
    "0%": {
      "-webkit-transform": "rotate(-90deg)",
      "transform": "rotate(-90deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  "@keyframes rotateInUpRight": {
    "0%": {
      "-webkit-transform": "rotate(-90deg)",
      "transform": "rotate(-90deg)",
      "opacity": "0"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)",
      "opacity": "1"
    }
  },
  ".animate__rotateInUpRight": {
    "-webkit-animation-name": "rotateInUpRight",
    "animation-name": "rotateInUpRight",
    "-webkit-transform-origin": "right bottom",
    "transform-origin": "right bottom"
  },
  "@-webkit-keyframes rotateOut": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(200deg)",
      "transform": "rotate(200deg)",
      "opacity": "0"
    }
  },
  "@keyframes rotateOut": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(200deg)",
      "transform": "rotate(200deg)",
      "opacity": "0"
    }
  },
  ".animate__rotateOut": {
    "-webkit-animation-name": "rotateOut",
    "animation-name": "rotateOut",
    "-webkit-transform-origin": "center",
    "transform-origin": "center"
  },
  "@-webkit-keyframes rotateOutDownLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(45deg)",
      "transform": "rotate(45deg)",
      "opacity": "0"
    }
  },
  "@keyframes rotateOutDownLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(45deg)",
      "transform": "rotate(45deg)",
      "opacity": "0"
    }
  },
  ".animate__rotateOutDownLeft": {
    "-webkit-animation-name": "rotateOutDownLeft",
    "animation-name": "rotateOutDownLeft",
    "-webkit-transform-origin": "left bottom",
    "transform-origin": "left bottom"
  },
  "@-webkit-keyframes rotateOutDownRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(-45deg)",
      "transform": "rotate(-45deg)",
      "opacity": "0"
    }
  },
  "@keyframes rotateOutDownRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(-45deg)",
      "transform": "rotate(-45deg)",
      "opacity": "0"
    }
  },
  ".animate__rotateOutDownRight": {
    "-webkit-animation-name": "rotateOutDownRight",
    "animation-name": "rotateOutDownRight",
    "-webkit-transform-origin": "right bottom",
    "transform-origin": "right bottom"
  },
  "@-webkit-keyframes rotateOutUpLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(-45deg)",
      "transform": "rotate(-45deg)",
      "opacity": "0"
    }
  },
  "@keyframes rotateOutUpLeft": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(-45deg)",
      "transform": "rotate(-45deg)",
      "opacity": "0"
    }
  },
  ".animate__rotateOutUpLeft": {
    "-webkit-animation-name": "rotateOutUpLeft",
    "animation-name": "rotateOutUpLeft",
    "-webkit-transform-origin": "left bottom",
    "transform-origin": "left bottom"
  },
  "@-webkit-keyframes rotateOutUpRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(90deg)",
      "transform": "rotate(90deg)",
      "opacity": "0"
    }
  },
  "@keyframes rotateOutUpRight": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "rotate(90deg)",
      "transform": "rotate(90deg)",
      "opacity": "0"
    }
  },
  ".animate__rotateOutUpRight": {
    "-webkit-animation-name": "rotateOutUpRight",
    "animation-name": "rotateOutUpRight",
    "-webkit-transform-origin": "right bottom",
    "transform-origin": "right bottom"
  },
  "@-webkit-keyframes hinge": {
    "0%": {
      "-webkit-animation-timing-function": "ease-in-out",
      "animation-timing-function": "ease-in-out"
    },
    "20%,60%": {
      "-webkit-transform": "rotate(80deg)",
      "transform": "rotate(80deg)",
      "-webkit-animation-timing-function": "ease-in-out",
      "animation-timing-function": "ease-in-out"
    },
    "40%,80%": {
      "-webkit-transform": "rotate(60deg)",
      "transform": "rotate(60deg)",
      "-webkit-animation-timing-function": "ease-in-out",
      "animation-timing-function": "ease-in-out",
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "translate3d(0,700px,0)",
      "transform": "translate3d(0,700px,0)",
      "opacity": "0"
    }
  },
  "@keyframes hinge": {
    "0%": {
      "-webkit-animation-timing-function": "ease-in-out",
      "animation-timing-function": "ease-in-out"
    },
    "20%,60%": {
      "-webkit-transform": "rotate(80deg)",
      "transform": "rotate(80deg)",
      "-webkit-animation-timing-function": "ease-in-out",
      "animation-timing-function": "ease-in-out"
    },
    "40%,80%": {
      "-webkit-transform": "rotate(60deg)",
      "transform": "rotate(60deg)",
      "-webkit-animation-timing-function": "ease-in-out",
      "animation-timing-function": "ease-in-out",
      "opacity": "1"
    },
    "to": {
      "-webkit-transform": "translate3d(0,700px,0)",
      "transform": "translate3d(0,700px,0)",
      "opacity": "0"
    }
  },
  ".animate__hinge": {
    "-webkit-animation-duration": "calc(var(--animate-duration)*2)",
    "animation-duration": "calc(var(--animate-duration)*2)",
    "-webkit-animation-name": "hinge",
    "animation-name": "hinge",
    "-webkit-transform-origin": "top left",
    "transform-origin": "top left"
  },
  "@-webkit-keyframes jackInTheBox": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale(.1) rotate(30deg)",
      "transform": "scale(.1) rotate(30deg)",
      "-webkit-transform-origin": "center bottom",
      "transform-origin": "center bottom"
    },
    "50%": {
      "-webkit-transform": "rotate(-10deg)",
      "transform": "rotate(-10deg)"
    },
    "70%": {
      "-webkit-transform": "rotate(3deg)",
      "transform": "rotate(3deg)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    }
  },
  "@keyframes jackInTheBox": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale(.1) rotate(30deg)",
      "transform": "scale(.1) rotate(30deg)",
      "-webkit-transform-origin": "center bottom",
      "transform-origin": "center bottom"
    },
    "50%": {
      "-webkit-transform": "rotate(-10deg)",
      "transform": "rotate(-10deg)"
    },
    "70%": {
      "-webkit-transform": "rotate(3deg)",
      "transform": "rotate(3deg)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "scale(1)",
      "transform": "scale(1)"
    }
  },
  ".animate__jackInTheBox": {
    "-webkit-animation-name": "jackInTheBox",
    "animation-name": "jackInTheBox"
  },
  "@-webkit-keyframes rollIn": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,0,0) rotate(-120deg)",
      "transform": "translate3d(-100%,0,0) rotate(-120deg)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes rollIn": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "translate3d(-100%,0,0) rotate(-120deg)",
      "transform": "translate3d(-100%,0,0) rotate(-120deg)"
    },
    "to": {
      "opacity": "1",
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__rollIn": {
    "-webkit-animation-name": "rollIn",
    "animation-name": "rollIn"
  },
  "@-webkit-keyframes rollOut": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,0,0) rotate(120deg)",
      "transform": "translate3d(100%,0,0) rotate(120deg)"
    }
  },
  "@keyframes rollOut": {
    "0%": {
      "opacity": "1"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "translate3d(100%,0,0) rotate(120deg)",
      "transform": "translate3d(100%,0,0) rotate(120deg)"
    }
  },
  ".animate__rollOut": {
    "-webkit-animation-name": "rollOut",
    "animation-name": "rollOut"
  },
  "@-webkit-keyframes zoomIn": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    },
    "50%": {
      "opacity": "1"
    }
  },
  "@keyframes zoomIn": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    },
    "50%": {
      "opacity": "1"
    }
  },
  ".animate__zoomIn": {
    "-webkit-animation-name": "zoomIn",
    "animation-name": "zoomIn"
  },
  "@-webkit-keyframes zoomInDown": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,-1000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,-1000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  "@keyframes zoomInDown": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,-1000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,-1000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  ".animate__zoomInDown": {
    "-webkit-animation-name": "zoomInDown",
    "animation-name": "zoomInDown"
  },
  "@-webkit-keyframes zoomInLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(-1000px,0,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(-1000px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(10px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(10px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  "@keyframes zoomInLeft": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(-1000px,0,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(-1000px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(10px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(10px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  ".animate__zoomInLeft": {
    "-webkit-animation-name": "zoomInLeft",
    "animation-name": "zoomInLeft"
  },
  "@-webkit-keyframes zoomInRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(1000px,0,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(1000px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(-10px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(-10px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  "@keyframes zoomInRight": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(1000px,0,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(1000px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(-10px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(-10px,0,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  ".animate__zoomInRight": {
    "-webkit-animation-name": "zoomInRight",
    "animation-name": "zoomInRight"
  },
  "@-webkit-keyframes zoomInUp": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,1000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,1000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  "@keyframes zoomInUp": {
    "0%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,1000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,1000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "60%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  ".animate__zoomInUp": {
    "-webkit-animation-name": "zoomInUp",
    "animation-name": "zoomInUp"
  },
  "@-webkit-keyframes zoomOut": {
    "0%": {
      "opacity": "1"
    },
    "50%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    },
    "to": {
      "opacity": "0"
    }
  },
  "@keyframes zoomOut": {
    "0%": {
      "opacity": "1"
    },
    "50%": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.3,.3,.3)",
      "transform": "scale3d(.3,.3,.3)"
    },
    "to": {
      "opacity": "0"
    }
  },
  ".animate__zoomOut": {
    "-webkit-animation-name": "zoomOut",
    "animation-name": "zoomOut"
  },
  "@-webkit-keyframes zoomOutDown": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,2000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,2000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  "@keyframes zoomOutDown": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,-60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,2000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,2000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  ".animate__zoomOutDown": {
    "-webkit-animation-name": "zoomOutDown",
    "animation-name": "zoomOutDown",
    "-webkit-transform-origin": "center bottom",
    "transform-origin": "center bottom"
  },
  "@-webkit-keyframes zoomOutLeft": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(42px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(42px,0,0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale(.1) translate3d(-2000px,0,0)",
      "transform": "scale(.1) translate3d(-2000px,0,0)"
    }
  },
  "@keyframes zoomOutLeft": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(42px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(42px,0,0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale(.1) translate3d(-2000px,0,0)",
      "transform": "scale(.1) translate3d(-2000px,0,0)"
    }
  },
  ".animate__zoomOutLeft": {
    "-webkit-animation-name": "zoomOutLeft",
    "animation-name": "zoomOutLeft",
    "-webkit-transform-origin": "left center",
    "transform-origin": "left center"
  },
  "@-webkit-keyframes zoomOutRight": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(-42px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(-42px,0,0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale(.1) translate3d(2000px,0,0)",
      "transform": "scale(.1) translate3d(2000px,0,0)"
    }
  },
  "@keyframes zoomOutRight": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(-42px,0,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(-42px,0,0)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale(.1) translate3d(2000px,0,0)",
      "transform": "scale(.1) translate3d(2000px,0,0)"
    }
  },
  ".animate__zoomOutRight": {
    "-webkit-animation-name": "zoomOutRight",
    "animation-name": "zoomOutRight",
    "-webkit-transform-origin": "right center",
    "transform-origin": "right center"
  },
  "@-webkit-keyframes zoomOutUp": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,-2000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,-2000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  "@keyframes zoomOutUp": {
    "40%": {
      "opacity": "1",
      "-webkit-transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "transform": "scale3d(.475,.475,.475) translate3d(0,60px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.55,.055,.675,.19)",
      "animation-timing-function": "cubic-bezier(.55,.055,.675,.19)"
    },
    "to": {
      "opacity": "0",
      "-webkit-transform": "scale3d(.1,.1,.1) translate3d(0,-2000px,0)",
      "transform": "scale3d(.1,.1,.1) translate3d(0,-2000px,0)",
      "-webkit-animation-timing-function": "cubic-bezier(.175,.885,.32,1)",
      "animation-timing-function": "cubic-bezier(.175,.885,.32,1)"
    }
  },
  ".animate__zoomOutUp": {
    "-webkit-animation-name": "zoomOutUp",
    "animation-name": "zoomOutUp",
    "-webkit-transform-origin": "center bottom",
    "transform-origin": "center bottom"
  },
  "@-webkit-keyframes slideInDown": {
    "0%": {
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes slideInDown": {
    "0%": {
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__slideInDown": {
    "-webkit-animation-name": "slideInDown",
    "animation-name": "slideInDown"
  },
  "@-webkit-keyframes slideInLeft": {
    "0%": {
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes slideInLeft": {
    "0%": {
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__slideInLeft": {
    "-webkit-animation-name": "slideInLeft",
    "animation-name": "slideInLeft"
  },
  "@-webkit-keyframes slideInRight": {
    "0%": {
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes slideInRight": {
    "0%": {
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__slideInRight": {
    "-webkit-animation-name": "slideInRight",
    "animation-name": "slideInRight"
  },
  "@-webkit-keyframes slideInUp": {
    "0%": {
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  "@keyframes slideInUp": {
    "0%": {
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)",
      "visibility": "visible"
    },
    "to": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    }
  },
  ".animate__slideInUp": {
    "-webkit-animation-name": "slideInUp",
    "animation-name": "slideInUp"
  },
  "@-webkit-keyframes slideOutDown": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)"
    }
  },
  "@keyframes slideOutDown": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(0,100%,0)",
      "transform": "translate3d(0,100%,0)"
    }
  },
  ".animate__slideOutDown": {
    "-webkit-animation-name": "slideOutDown",
    "animation-name": "slideOutDown"
  },
  "@-webkit-keyframes slideOutLeft": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)"
    }
  },
  "@keyframes slideOutLeft": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(-100%,0,0)",
      "transform": "translate3d(-100%,0,0)"
    }
  },
  ".animate__slideOutLeft": {
    "-webkit-animation-name": "slideOutLeft",
    "animation-name": "slideOutLeft"
  },
  "@-webkit-keyframes slideOutRight": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)"
    }
  },
  "@keyframes slideOutRight": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(100%,0,0)",
      "transform": "translate3d(100%,0,0)"
    }
  },
  ".animate__slideOutRight": {
    "-webkit-animation-name": "slideOutRight",
    "animation-name": "slideOutRight"
  },
  "@-webkit-keyframes slideOutUp": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)"
    }
  },
  "@keyframes slideOutUp": {
    "0%": {
      "-webkit-transform": "translateZ(0)",
      "transform": "translateZ(0)"
    },
    "to": {
      "visibility": "hidden",
      "-webkit-transform": "translate3d(0,-100%,0)",
      "transform": "translate3d(0,-100%,0)"
    }
  },
  ".animate__slideOutUp": {
    "-webkit-animation-name": "slideOutUp",
    "animation-name": "slideOutUp"
  }
}




module.exports = includes;
