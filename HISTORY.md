Pure Change History
===================

NEXT
----

* Fixed accessability mistake by removing `a:focus {outline: none;}` rule from
  `buttons-core.css`.

### Forms

* (!) `.pure-help-inline` has been replaced with `.pure-form-message-inline`. We
  still support the older classname but it is deprecated and will be going away
  in a future release. (Issue #32) (dannytatom)

* Added a new class called `.pure-form-message`. It works the same way as
  `.pure-form-message-inline` but is meant for block elements. (Issue #32)
  (dannytatom)

* Added focus styles for file, radio, and checkbox `<input>`s to improve
  accessibility. (Issue #42) (codepb)

* `<textarea>`s now have the same styling as `<input>`s. (Issue #49) (rcbdev)

* `.pure-form input` rules are now more specific, targetting only "texty" inputs.
  This prevents input styles from affecting "buttony" inputs. (Issue #54)

### Grids

* Adding a classname before the responsive grid's unit classname now works.
  Before units were targeted using the `^=` ("starts with") selector, which
  meant that if another classname preceded the unit classname, then the rule
  would not apply. (Issue #44)

### Menus

* Added `pure-menu-separator-vertical` classname that can be used to visually
  separate horizonal menu items. (Issue #53) (codepb, mseri)


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
