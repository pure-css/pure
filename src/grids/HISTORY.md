CSS Grids Change History
========================

3.10.0
------

* No changes.

3.9.1
-----

* No changes.

3.9.0
-----

* [!] Fixed over-collapsing spaces between grid units in Chrome 25, which has
  added support for `word-spacing`. The `word-spacing` rules are now only
  targeted at IE < 8.

* Added Responsive Grids ("cssgrids-responsive") which builds on top of the
  existing CSS Grids. It adds `.yui3-g-r`, which can be used in place of
  `.yui3-g` and will make all units responsive automatically.

3.8.1
-----

* No changes.

3.8.0
-----

* No changes.

3.7.3
-----

* No changes.

3.7.2
-----

* No changes.

3.7.1
-----

* No changes.

3.7.0
-----

* No changes.

3.6.0
-----

  * No changes.

3.5.1
-----

  * No changes.

3.5.0
-----

  * CSS Grids has been broken out into cssgrids-base and cssgrids-units.


3.4.1
-----

  * No changes.


3.4.0
-----

  * No changes.


3.3.0
-----

  * No changes.


3.2.0
-----

  * [!] The pre-3.2.0 CSS Grids Utility has been deprecated, and its
    module has been renamed to `cssgrids-deprecated`. It will be removed
    completely in a future release.

  * Initial release of the new CSS Grids Utility.


3.1.1
-----

  * No changes.


3.1.0
-----

  * No changes.


3.0.0
-----

  * Initial release.

**** version 3.0.0 ***
  * deprecated for YUI 3

**** version 3.0.0 beta 1 ***
  * deprecated for YUI 3

**** version 3.0.0 PR2 ***

    * Added self-clearing for templates (e.g. div.yui-t1) for
      cases when they are not within #bd. Per ticket 2201115
    * Corrected ordering issue for "gb" per internal ticket
      2251219 and Sourceforge ticket 2131681
    * Enabled nesting of gf within gc per internal ticket
      1458071 and Sourceforget ticket 1786723

3.0.0PR1 - Initial release

Module Name: "cssgrids"
Documentation: http://developer.yahoo.com/yui/3/cssgrids

The foundational CSS Grids offers four preset page widths,
six preset two-column source-order-independent content
templates, and the ability to stack and nest subdivided
regions of two, three, or four columns. The file provides
over 1000 page layout combinations. Other features include:

    * Supports fluid 100-percent layouts, fluid- and
      fixed-width layouts at 750px, 950px, and 974px
      centered, and the ability to easily customize the
      width.
    * Flexible in response to user initiated font-size
      adjustments.
    * Template columns are source-order independent; put
      your most important content earlier in your markup
      for improved accessibility and SEO.
    * Self-clearing footer. No matter which column is
      longer, the footer stays below the longest.
    * Accommodates IAB's Ad Unit Guidelines for common
      ad dimensions.

*** NOTE: This module is deprecated. This functionality will be provided in a future release.

