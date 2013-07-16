QuickImg
========

QuickImg is a small JS library (less than 0.3kb) used to preload large images
with smaller ones. Use low-resolution URLs in `src` tags, and high-resolutions
ones in `data-hd-src` ones. QuickImg will then replace low-resolution images
with high-resolution ones.

Example
-------

```html
<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta name="language" content="en" />
    <title>My Photos</title>
  </head>
  <body>

    <img src="./photos/P001-low.jpg" data-hd-src="./photos/P001-high.png"
                                                    height="128" width="128" />
    <img src="./photos/P002-low.jpg" data-hd-src="./photos/P002-high.png"
                                                    height="128" width="128" />
    <img src="./photos/P003-low.jpg" data-hd-src="./photos/P003-high.png"
                                                    height="128" width="128" />

    <script src="quickimg.min.js"></script>
  </body>
</html>

```

If low-resolution and high-resolution images don’t have the same dimensions,
you must set the `height` and `width` attributes of the `<img/>` tags to keep
the same dimensions when the image will be changed.

If no `data-hd-src` attribute is found on an `<img/>` tag, it will be left
unchanged.
