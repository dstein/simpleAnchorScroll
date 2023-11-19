# simpleAnchorScroll

Author: Dan Steinmiller, https://dstein.dev
License: MIT License

Uses the JavaScript scrollIntoView method to apply smooth scrolling for all defined anchor links in the DOM
scrollIntoView documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

Info:
- Automatically runs when the script is included
- Parameters can be modified by accessing and changing the 'anchorInView' object properties

Ex: 
- anchorInView.block = "end";

Compatibility:
- Not supported for <= IE11
- Check 'caniuse' for more information. Uses the CSS ':not()' psuedo-class and the JS 'Element.scrollIntoView()' method
- https://caniuse.com/?search=%3Anot()
- https://caniuse.com/?search=scrollintoview