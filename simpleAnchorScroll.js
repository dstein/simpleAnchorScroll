/**
 * Simple Anchor Scroll
 * - Uses the JavaScript scrollIntoView method to apply smooth scrolling for all defined anchor links in the DOM
 * 
 * Version: 1.0.0
 * Author: Dan Steinmiller, https://dstein.dev
 * License: MIT License
 */

const anchorInView = ( function() {
    "use strict";

    const anchorLink = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    const defaults = { alignToTop: true, behavior: 'smooth', block: 'start', inline: 'nearest' };

    anchorLink.forEach( (item) => {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(item.hash)
                .scrollIntoView({
                    alignToTop: defaults.alignToTop,
                    behavior: defaults.behavior,
                    block: defaults.block,
                    inline: defaults.inline
                });
        });
    });

    return Object.assign(defaults);
})();