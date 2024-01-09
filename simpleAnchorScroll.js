/**
 * Simple Anchor Scroll
 * - Uses the JavaScript scrollIntoView method to apply smooth scrolling for all defined anchor links in the DOM
 * 
 * Version: 1.0.1
 * Author: Dan Steinmiller, https://dstein.dev
 * License: MIT License
 */

const anchorInView = ( function() {
    "use strict";

    const anchorLinks = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    const defaults = { alignToTop: true, behavior: 'smooth', block: 'start', inline: 'nearest' };

    if ( anchorLinks.length !== 0 ) {

        anchorLinks.forEach( (item) => {
            const parseHash = item.hash.replace('/', '');
            const hashMatch = document.querySelector(parseHash);
            
            item.addEventListener('click', (e) => {
                
                if ( hashMatch !== null ) {
                    e.preventDefault();
    
                    hashMatch.scrollIntoView({
                        alignToTop: defaults.alignToTop,
                        behavior: defaults.behavior,
                        block: defaults.block,
                        inline: defaults.inline
                    });
                }
            });
        });
    }

    return Object.assign(defaults);
})();