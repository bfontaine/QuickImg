;(function(imgs, hd_attr) {

    'use strict';

    for (var i=0 , l=imgs.length; i<l; i++) {
        (function(img){

            // we use .(get|remove)Attribute for browsers
            // that don't support the dataset API.
            var hd_val = img.getAttribute(hd_attr),
                loaded = false,
                tmp_img;

            if (!hd_val)
                return;

            tmp_img = new Image();

            tmp_img.onload = function() {
                loaded = true; 
                img.src = tmp_img.src;
            };

            tmp_img.src = hd_val;
            img.removeAttribute(hd_attr);

            if (!loaded && tmp_img.complete)
                tmp_img.onload();

        })(imgs[i]);
    }

})(document.getElementsByTagName('img'), 'data-hd-src');
