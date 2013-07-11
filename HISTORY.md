Pure Change History
===================

NEXT
----

!!TODO: This needs a lot of work: Missing issue numbers, and more details,
written in past tense.

* Removed `white-space: nowrap` from `.pure-table thead`. ([#95][])

* Removed the gray color of forms' labels. ([#89][])

* Fix class `.pure-u-1-6` to change width from 16.656% to 16.666%. (Issue #?)

* Apply `.pure-form-group input` styling to all text-ish `input` elements.
  (Issue #?)

* Added `display: block` to `textarea` in `.pure-form-stacked` to fix an
  alignment issue for subsequent elements ([#90][])

* Grid unit `pure-u-1` is now `{ display: inline-block; width: 100%; }` instead
  of `{ display: block; }` ([#94][])

* Pure Buttons no longer inherit from `a:visited` style rules on a page.
  ([#87][])


[#87]: https://github.com/yui/pure/issues/87
[#89]: https://github.com/yui/pure/issues/89
[#90]: https://github.com/yui/pure/issues/90
[#94]: https://github.com/yui/pure/issues/94
[#95]: https://github.com/yui/pure/issues/95


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

* Added `pure-menu-separator` classname that can be used to visually
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
