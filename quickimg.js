(function(imgs, hd, undefined) {

    for (var i=0 , l=imgs.length,img; i<l; i++) {
        img = imgs[i];

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
    }

})(document.getElementsByTagName('img'), 'hdSrc');
