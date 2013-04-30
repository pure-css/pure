The `meta/gallerycss-csslist.json` file lists the current version of the module. 

0.2
---
* Add support for `.yui3-menu-heading`. This involved adding styles to the `.yui3-menu` container (namely, width: 100%), and making the `.yui3-menu-horizontal ul { display: inline-block; }`.
* Improve support for IE7, especially `display: inline-block` hack.
* Remove `.yui3-menu-light`, and `.yui3-menu-dark`. This was done for k-weight and you can easily achieve this style by styling your own menu. 
* Remove background gradient on hover, instead replace it with a single color. The gradient was overkill. 
* Improve the `:hover` rule for `.yui3-menu li a`. It was previously using `:not` and was failing in IE8 and below.
* Rename `.yui3-menu-active` to `.yui3-menu-selected` to keep in sync with other YUI widgets.

0.1
---
* Initial Release.
