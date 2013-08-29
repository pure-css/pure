Pure Change History
===================

NEXT
----

* (!) Pure now requires the Base module (which is Normalize.css) to be on the
  page. Pure has essentially always required the styles provided by
  Normalize.css via the Base module, and this now makes it a firm requirement.
  The `pure-min.css` and `pure-nr-min.css` rollup files already include the Base
  module.

  **Note:** When using a [custom subset][Customize] of Pure, be sure to include
  the Base module.

* Added non-minified rollup files: `pure.css` and `pure-nr.css`. These files are
  created in addition to the minified rollups: `pure-min.css` and
  `pure-nr-min.css`. The minified rollups _should_ be used in production.
  ([#171][] @omeid)

### Base

* (!) Removed Normalize.css from checked-in `src/`. Bower is now used to
  programmatically import Normalize.css into `bower_components/` if it's not
  already installed. ([#160][])

### Buttons

* Removed `-webkit-font-smoothing: antialiased` rule from Buttons. Pure should not
  dictate sub-pixel font rendering, that should be left to the person's browser
  settings and/or the developer. ([#170][] @dchest)

### Forms

* (!) Removed `forms-core.css`. This was a copy of Normalize.css' form related
  styles. Now that Pure requires the Base module (which is Normalize.css) to be
  on the page, the Forms Core submodule is no longer needed. ([#160][])

* Added `:focus` styles to `[readonly]` `<input>` elements. ([#143][])

### Grids

* Prevented grid units from falling to a new line on IE6 and IE7. Grid units now
  have a separate `*width` value for oldIEs. This value is `0.005%` less than
  the standard `width` value. This fix does not affect modern browsers. ([#154][])


* Added a `height: auto` rule to images within a `.pure-g-r` so that their aspect
  ratios are maintained when the page is resized. ([#172][]: @dchest)

* (!) Added the following font stack to `.pure-g, .pure-g-r` in order to prevent
  grids from breaking in various target environments:

  ```css
  font-family: FreeSans, Arimo, "Droid Sans", Helvetica, Arial, sans-serif;
  ```

  This is a *breaking* change. If you are using any non-default font in your project,
  you will need to modify your CSS and add a `font-family` to the grid unit classes:

  ```css
  .pure-g [class *= "pure-u"],
  .pure-g-r [class *= "pure-u"] {

    /* Add your font in here, whether it's a custom font or a normal font */
    font-family: "Times New Roman", serif;

  }
  ```

  Refer to the [Grids Documentation][Grids] for more details on using
  non-default fonts with Pure Grids.
  ([#41][] @dannyfritz, @pandeiro, and many others!)


[#41]: https://github.com/yui/pure/issues/41
[#143]: https://github.com/yui/pure/issues/143
[#154]: https://github.com/yui/pure/issues/154
[#160]: https://github.com/yui/pure/issues/160
[#170]: https://github.com/yui/pure/issues/170
[#171]: https://github.com/yui/pure/issues/171
[Customize]: http://purecss.io/customize/
[Grids]: http://purecss.io/grids/


0.2.1 (2013-07-17)
------------------

### Forms

* (!) Made `[readonly]` `<input>`s look visually different to `[disabled]` and
  regular `<input>`s. ([#102][]: @jaseg)

* Fixed copy/paste bug that mapped text inputs to `.pure-form` instead of
  `.pure-group`. The `.pure-form-group input` styles are now applied to all
  text-ish `<input>` elements. ([#96][])

* Fixed `.pure-input-rounded` styles to now apply correctly. The change to use
  more specific selectors for text-ish inputs in v0.2.0 caused the
  `.pure-input-rounded` selector to not apply because it was less specific. This
  selector now has right specificity. ([#109][]: @AurelioDeRosa)

* Added `display: block` to `<textarea>`s in `.pure-form-stacked` `<form>`s to
  fix an alignment issue for subsequent elements. ([#90][]: @AurelioDeRosa)

* Removed the gray `color` from `.pure-form label`. This allows `<label>`s to
  inherit their foreground color. ([#89][]: @AurelioDeRosa)

### Grids

* (!) Changed `.pure-u-1` grid unit to now use `width: 100%` instead of
  `display: block` to achieve taking up the full width of its container. This
  makes it easier to override and align since it's using `display: inline-block`
  like the other grid units. ([#94][])

* Fixed `width` value typo in `.pure-u-1-6`, changed it from `16.656%` to
  `16.666%`. ([#115][]: @chilts)

### Menus

* (!) Fixed broken styling of active paginator items by using Grids CSS rules to
  layout items horizontally; this makes sure the active item isn't overlapped.
  ([#127][])

### Tables

* Removed `white-space: nowrap` from `.pure-table thead`. This fixes issues
  where tables inside of grids would break the grid. ([#95][]: @AurelioDeRosa)


[#89]: https://github.com/yui/pure/issues/89
[#90]: https://github.com/yui/pure/issues/90
[#94]: https://github.com/yui/pure/issues/94
[#95]: https://github.com/yui/pure/issues/95
[#96]: https://github.com/yui/pure/issues/96
[#102]: https://github.com/yui/pure/issues/102
[#109]: https://github.com/yui/pure/issues/109
[#115]: https://github.com/yui/pure/issues/115
[#127]: https://github.com/yui/pure/issues/127
[#172]: https://github.com/yui/pure/pull/172


0.2.0 (2013-06-11)
------------------

* (!) Fixed accessibility mistake by removing `a:focus {outline: none;}` rule
  from `buttons-core.css`.

* (!) Improved `:focus` styles by applying the same rules that are used by
  `:hover` styles. When overriding Pure's `:hover` styles, be sure to include
  `:focus` selectors as well.

* Added improvements to developer workflow:

    * Added basic Tests using CSSLint via `grunt test` ([#25][])

    * Integrated Travis CI which runs `grunt test` on pushes to `master` and for
      pull requests.

    * Added `grunt watch` task which runs tests and build.

    * Added support to `pure-site` for serving `pure` locally during
      development. ([#46][], [yui/pure-site#111][])

* Removed vendor prefixes for `box-shadow`, `text-shadow`, `border-radius`. All
  modern browsers support the non-prefixed versions of these properties.
  ([#23][])

### Forms

* (!) `.pure-help-inline` has been replaced with `.pure-form-message-inline`. We
  still support the older classname but it is deprecated and will be going away
  in a future release. ([#32][]: @dannytatom)

* Added a new class called `.pure-form-message`. It works the same way as
  `.pure-form-message-inline` but is meant for block elements.
  ([#32][]: @dannytatom)

* Added focus styles for file, radio, and checkbox `<input>`s to improve
  accessibility. ([#42][]: @codepb)

* `<textarea>`s now have the same styling as `<input>`s. ([#49][]: @rcbdev)

* `.pure-form input` rules are now more specific by targetting only "texty"
  `<inputs>`. This prevents these styles from affecting "buttony" `<input>`s.
  ([#54][])

### Grids

* Elements with classnames before the responsive grid's unit classnames now
  works correctly. Before units were targeted using the `^=` ("starts with")
  selector, which meant that if another classname preceded the unit classname,
  then the rule would not apply. ([#44][])

### Menus

* Added `.pure-menu-separator` classname that can be used to visually
  separate horizontal menu items. ([#53][]: @codepb, @mseri)

* Focused menus have an `outline: none` by default. Instead, menu-items that
  have been opened to display children (in a drop-down menu) get a slight
  background (`#dedede`) for accessibility. ([#22][])


[#22]: https://github.com/yui/pure/issues/22
[#23]: https://github.com/yui/pure/issues/23
[#25]: https://github.com/yui/pure/issues/25
[#32]: https://github.com/yui/pure/issues/32
[#42]: https://github.com/yui/pure/issues/42
[#44]: https://github.com/yui/pure/issues/44
[#46]: https://github.com/yui/pure/issues/46
[#49]: https://github.com/yui/pure/issues/49
[#53]: https://github.com/yui/pure/issues/53
[#54]: https://github.com/yui/pure/issues/54

[yui/pure-site#111]: https://github.com/yui/pure-site/issues/111


0.1.0 (2013-05-24)
------------------

* (!) Initial public release.

* Upgraded Normalize.css to 1.1.2.

* Integrated Bower into `grunt import` process.

* Cleaned up manual test files, removing unnecessary CSS files and cruft.

### Buttons

* Added `border-radius: 2px` to enhance the appearance the they are click-able.

### Menus

* Removed `border-radius` from vertical menus.

* Replaced blue hover for menus with light grey (`#eee`)

* Removed `font-weight: bold` from selected menu items.


0.0.2 (2013-05-16)
------------------

* (!) Renamed to Pure.

* (!) Renamed CSS classname prefix to `pure`.

* Preview release (2).


0.0.1 (2013-05-14)
------------------

* Preview release.
