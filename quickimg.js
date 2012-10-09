(function(imgs, hd) {

    for (var i=0 , l=imgs.length; i<l; i++) {
        (function(img){

            if (!img.dataset[hd])
                return;

            var tmp_img = new Image(),
                loaded  = false;

            tmp_img.onload = function() {
                loaded = true; 
                img.src = tmp_img.src;
            };

            tmp_img.src = img.dataset[hd];
            delete img.dataset[hd];

            if (!loaded && tmp_img.complete)
                tmp_img.onload();

        })(imgs[i]);
    }

})(document.getElementsByTagName('img'), 'hdSrc');
