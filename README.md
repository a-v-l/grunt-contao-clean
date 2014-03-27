grunt-contao-clean
==================
Contao cleaner gruntjs plugin will remove cached files in `assets`, `system/bin` and the `demo` files (music_academy). Furthermore it will delete all language files *not* specified in `Gruntfile.js` on line 24 and following. These are  English, Russian and Ukrainian.

### Notice: ###
For your own set of languages you will need to modify 3 lines in `Gruntfile.js` and replace `!(en|ru|uk)` with `!(yourLanguage)`. A reference of available languages and the appropriate abbreviations can be found in `system/config/languages.php` or on contaos [github repro](https://github.com/contao/core/blob/master/system/config/languages.php)
