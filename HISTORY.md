# Pure Change History

## 3.0.0 (2022-10-26)

This is a major version bump that has the following changes:

- Removed the `font-family` hack from Grids (#1074)
- IE is no longer supported and all code and documentation references have been removed
- The browserslist configuration has been updated to "> 1%" browser usage. You can use the [browserslist tool](https://browserslist.dev/?q=PiAxJQ%3D%3D) to see which browsers this now covers.

### Migration

This major version should not include too many breaking changes for your app, but please check the following:

- Since the list of supported browsers has now changed, please check that your site is still functioning in any browsers that you continue to support.
- Verify your grids are still functioning correctly with the `font-family` hack still removed. This should not affect you as it was a hack for older browsers.

  2.2.0 (2022-10-19)

---

- feat: added media queries for 2.5K and 4K screens (#1065)

  2.1.0 (2022-03-14)

---

- feat: support xxl (1920px) media query

  2.0.6 (2021-04-28)

---

- chore: update to cssmin@4

  2.0.5 (2021-01-20)

---

- fix #824: cursor style for disabled menu link

  2.0.4 (2021-01-19)

---

- chore: update license path

  2.0.3 (2020-05-11)

---

- fix: update browser list for all environments

  2.0.2 (2020-05-11)

---

- refactor: Remove button CSS for IE 6-8

  2.0.1 (2020-05-05)

---

- refactor: remove usage of deprecated webkit-overflow-scrolling

  2.0.0 (2020-05-05)

---

This is a major version bump that has the following changes:

- Reduced overall size of Pure to 3.6kb (gzipped/min)
- Updated Normalize to v8.
- Removed bower
- Removed old IE 8 hacks
- Removed deprecated `pure-help-inline` form class

### Migration

This major version should not include too many breaking changes for your app, but please check the following:

- Normalize Upgraded from v3 to v8. [Many things have changed](https://github.com/necolas/normalize.css/blob/main/CHANGELOG.md), be sure to verify your site properly.
- Normalize removed the default `font-family`, but we have added to the `base.css` for consistency and due to the fact that the grids system leverages the `font-family` for `letter-spacing`.

### New Browser support

- Chrome
- Edge
- Firefox
- Internet Explorer 10+
- Safari 8+
- Opera

> Deprecated support for < IE 10

## 1.0.1 (2019-07-10)

- Fix "selected" menu item labels in nested menus (#708)
- Fix bug in pure-button active state's border color. (#729)
- Fix horizontal scrollbars not appearing in IE11 and Chrome (#740)
- Fix pure-table-bordered issues (#718)

  1.0.0 (2017-06-05)

---

The community has battle-tested Pure and provided valuable feedback. We are now at a place where we can guarantee backwards compatibility through all subsequent 1.x releases.

We hope you have found Pure to be useful and unobtrusive.. To provide feedback, please comment on this GitHub issue, or file a new issue to have it tracked as a separate thread.

## 0.6.2 (2017-01-05)

- Added proper module API for node users [#619]

### Buttons

- Added Button Groups to Pure [#621]

### Menus

- Reset style for horizontal dropdown separator [#620]

  0.6.1 (2016-10-12)

---

- Migrate to PostCSS for browser prefixes [#617]
- Remove duplicate Firefox inner focus border [#457]
- Fix grid inside table in IE 10/11 [#504]
- Fix CSSLint issues [#609]
- Upgraded grunt dependencies to 1.x [#609]

  0.6.0 (2015-02-07)

---

- Upgraded Normalize.css to 3.0.2.
- Dropped IE7 support.
- Refactored Menus.
- Numerous minor bug fixes.

### Menus

- Implemented flatter, low-specificity selectors, not attached to HTML elements,
  for easier customization.
- Removed pure-menu-open class.
- Added pure-menu-scrollable capability, to allow for scrollable menus when
  restricted by width or height.
- Added pure-menu-allow-hover to reveal dropdowns on hover.
- Removed various default styling properties, making menus a bit more bare-bones,
  a bit less opinionated, a bit easier to customize on top.
- Broke Menu up into files for core, horizontal, dropdowns, scrollable, and skin,
  again for improved optimization and ease of customization: take only what you
  need.
- Removed Paginator.
- While not part of the Pure repo itself, the accompanying Pure website now
  features additional menu examples and an example script for enabling dropdowns
  and improved accessiblity.

  0.5.0 (2014-05-27)

---

### Base

- Added the `.pure-img` class name for make images scale with the viewport in
  fluid layouts.

### Grids

- **[!]** Removed `.pure-g-r` from core, in favor of a mobile-first responsive
  grid system. ([#24][], [#267][])

  To use the mobile-first grid system, you need to pull in `pure.css`, along
  with `grids-responsive.css`. We also have `grids-responsive-old-ie.css` that
  you can serve to IE < 9 users so that they can view a desktop-version of your
  website:

  ```html
  <link
    rel="stylesheet"
    href="http://yui.yahooapis.com/pure/0.5.0-rc-1/pure-min.css"
  />

  <!--[if lt IE 9]>
    <link
      rel="stylesheet"
      href="http://yui.yahooapis.com/pure/0.5.0-rc-1/grids-responsive-old-ie-min.css"
    />
  <![endif]-->
  <!--[if gt IE 8]><!-->
  <link
    rel="stylesheet"
    href="http://yui.yahooapis.com/pure/0.5.0-rc-1/grids-responsive-min.css"
  />
  <!--<![endif]-->
  ```

  Find out more about the new grid system at <http://purecss.io/grids/>.

### Tables

- Switched cell padding in Tables from `px` to `em` units, and also increased
  the amount of padding to `padding: 0.5em 1em`.

[#24]: https://github.com/pure-css/pure/issues/24
[#267]: https://github.com/pure-css/pure/pull/267

## 0.4.2 (2014-02-13)

- Added `main` to Pure's `bower.json` file to allow easier integration with
  build processes and tooling. ([#286][] @stevenvachon)

### Forms

- Improved how `<input type="color">` elements look in Chrome by fixing
  paddings. ([#283][] @jpetto)

- Removed `font-size` rules from `<input>`, `<legend>`, and `<fieldset>`
  elements within `.pure-form`. Font sizes are now inherited from the
  application's CSS file. ([#265][])

- Invalid `<input>` elements within a Pure Form no longer explicitly set a
  `border-width`. ([#295][] @kwando)

[#265]: https://github.com/pure-css/pure/issues/265
[#283]: https://github.com/pure-css/pure/issues/283
[#286]: https://github.com/pure-css/pure/issues/286
[#295]: https://github.com/pure-css/pure/issues/295

## 0.4.1 (2014-02-06)

### Base

- Elements that have Pure classnames which set a `display` declaration _and_ use
  the `hidden` HTML attribute will now properly be hidden. With these changes,
  the following button will be hidden from view:

  ```html
  <button class="pure-button" hidden>No showy</button>
  ```

  A new rule for the `[hidden]` selector has been added with the declaration:
  `display: none !important;`. This is a time where it's appropriate for a
  project like Pure to use `!important`. ([#177][])

### Buttons

- Removed all the occurrences of `-ms-linear-gradient()` from Buttons since it
  has never been in the final version of IE 10. ([#200][]: @AurelioDeRosa)

- `<input>` Buttons now have the same height as non-input buttons.
  `font-family: inherit;` has been added to the `.pure-button` selector to
  normalize the difference in height. ([#221][] @narcis-radu)

- Buttons now have visually uniform default `padding` on all four sides. The
  left/right padding is 2x the top/bottom padding. ([#191][] @achalv)

### Forms

- Added `vertical-align: top;` to `<textarea>`s within `.pure-form-aligned`
  Forms to fix an alignment issue where its label was aligned to the middle.
  ([#174][] @rictorres, @ItsAsbreuk)

- Added styling for `<input>` elements that don't have a `type` attribute.
  ([#261][] @dougdavies)

### Grids

- Added all non-reduced fractions to Grids default 5ths- and 24ths-based units.
  There are now styles specified for `.pure-u-1-24` – `.pure-u-24-24`. All 5ths-
  based units and reduced factions still remain; e.g., both `.pure-u-12-24` and
  `.pure-u-1-2` exist. ([#144][] @mike-engel)

- Removed `grids-units.css` from `src/`, this file is now generated via a Grunt
  task. The units generation is done via the new
  [`rework-pure-grids`][rework-pure-grids] [Rework][] plugin, and it can be used
  to create any custom nth-based units for Pure's Grids system.

### Menus

- Removed hard-coded height for horizontal menus. ([#164][])

[#144]: https://github.com/pure-css/pure/issues/144
[#164]: https://github.com/pure-css/pure/issues/164
[#174]: https://github.com/pure-css/pure/issues/174
[#177]: https://github.com/pure-css/pure/issues/177
[#191]: https://github.com/pure-css/pure/issues/191
[#200]: https://github.com/pure-css/pure/issues/200
[#221]: https://github.com/pure-css/pure/issues/221
[#261]: https://github.com/pure-css/pure/issues/261
[rework-pure-grids]: https://github.com/ericf/rework-pure-grids
[Rework]: https://github.com/visionmedia/rework

## 0.4.0 (2014-02-06)

- **[!]** Corrupted release build, use `0.4.1`.

  0.3.0 (2013-09-09)

---

- **[!]** Pure now requires the Base module (which is Normalize.css) to be on
  the page. Pure has essentially always required the styles provided by
  Normalize.css via the Base module, and this now makes it a firm requirement.
  The `pure-min.css` and `pure-nr-min.css` rollup files already include the Base
  module.

  **Note:** When using a [custom subset][Customize] of Pure, be sure to include
  the Base module.

- Added non-minified rollup files: `pure.css` and `pure-nr.css`. These files are
  created in addition to the minified rollups: `pure-min.css` and
  `pure-nr-min.css`. The minified rollups _should_ be used in production.
  ([#171][] @omeid)

### Base

- **[!]** Removed Normalize.css from checked-in `src/`. Bower is now used to
  programmatically import Normalize.css into `bower_components/` if it's not
  already installed. Normalize.css is still bundled with Pure, this change is a
  development-time change only. ([#160][])

### Buttons

- Removed `-webkit-font-smoothing: antialiased` rule from Buttons. Pure should
  not dictate sub-pixel font rendering, that should be left to the person's
  browser settings and/or the developer. ([#170][] @dchest)

### Forms

- **[!]** Removed `forms-core.css`. This was a copy of Normalize.css' form
  related styles. Now that Pure requires the Base module (Normalize.css) to be
  on the page, the Forms Core submodule is no longer needed. ([#160][])

- Added `:focus` styles to `[readonly]` `<input>` elements. ([#143][])

- Removed `-webkit-font-smoothing: antialiased` rule from Forms input styles.
  Pure should not dictate sub-pixel font rendering, that should be left to the
  person's browser settings and/or the developer. ([#185][] @dchest)

### Grids

- **[!]** Improved support for Grids across OS/browser combinations, and its
  ability to withstand the use of non-default fonts when set by either the
  person in their browser settings or by the developer using custom fonts.

  Grids now uses CSS3 Flexbox when possible to avoid the side-effects of setting
  a negative `letter-spacing` — the fallback for older browsers. Grids also now
  uses a specific font stack on `.pure-g` and `.pure-g-r` classes to ensure the
  greatest OS/browser compatibility when non-default fonts are being used. By
  default grid units will now have `font-family: sans-serif;` applied — this is
  the default font stack Pure's Base module (Normalize.css) applies to the
  `<body>`.

  This is a **breaking change** if you are using any non-default fonts in your
  web project. Fortunately, it's quite easy to make sure your custom font stacks
  apply to content within Pure Girds. Instead of applying your custom font to
  only the `<body>` element, apply it to the grid units as well:

  ```css
  body,
  .pure-g [class*="pure-u"],
  .pure-g-r [class*="pure-u"] {
    /* Set you're content font stack here: */
    font-family: Georgia, Times, "Times New Roman", serif;
  }
  ```

  Refer to the [Grids Documentation][Grids-fonts] for more details on using
  non-default fonts with Pure Grids.
  ([#41][], [#162][], [#166][], [#189][]: @adapterik @dannyfritz, @pandeiro)

- Fixed grid units from falling to a new line on IE 6 and IE 7. Grid units now
  have a separate `*width` value for these older versions of IE. This value is
  `0.005%` less than the standard `width` value. This fix does not affect modern
  browsers because it uses the star hack. ([#154][])

- Added a `height: auto` rule to images within a `.pure-g-r` so that their
  aspect ratios are maintained when the page is resized. ([#172][]: @dchest)

[#41]: https://github.com/pure-css/pure/issues/41
[#143]: https://github.com/pure-css/pure/issues/143
[#154]: https://github.com/pure-css/pure/issues/154
[#160]: https://github.com/pure-css/pure/issues/160
[#162]: https://github.com/pure-css/pure/issues/162
[#166]: https://github.com/pure-css/pure/issues/166
[#170]: https://github.com/pure-css/pure/issues/170
[#171]: https://github.com/pure-css/pure/issues/171
[#172]: https://github.com/pure-css/pure/issues/172
[#185]: https://github.com/pure-css/pure/issues/185
[#189]: https://github.com/pure-css/pure/issues/189
[Customize]: http://purecss.io/customize/
[Grids-fonts]: http://purecss.io/grids/#using-grids-with-custom-fonts

## 0.2.1 (2013-07-17)

### Forms

- **[!]** Made `[readonly]` `<input>`s look visually different to `[disabled]`
  and regular `<input>`s. ([#102][]: @jaseg)

- Fixed copy/paste bug that mapped text inputs to `.pure-form` instead of
  `.pure-group`. The `.pure-form-group input` styles are now applied to all
  text-ish `<input>` elements. ([#96][])

- Fixed `.pure-input-rounded` styles to now apply correctly. The change to use
  more specific selectors for text-ish inputs in v0.2.0 caused the
  `.pure-input-rounded` selector to not apply because it was less specific. This
  selector now has right specificity. ([#109][]: @AurelioDeRosa)

- Added `display: block` to `<textarea>`s in `.pure-form-stacked` `<form>`s to
  fix an alignment issue for subsequent elements. ([#90][]: @AurelioDeRosa)

- Removed the gray `color` from `.pure-form label`. This allows `<label>`s to
  inherit their foreground color. ([#89][]: @AurelioDeRosa)

### Grids

- **[!]** Changed `.pure-u-1` grid unit to now use `width: 100%` instead of
  `display: block` to achieve taking up the full width of its container. This
  makes it easier to override and align since it's using `display: inline-block`
  like the other grid units. ([#94][])

- Fixed `width` value typo in `.pure-u-1-6`, changed it from `16.656%` to
  `16.666%`. ([#115][]: @chilts)

### Menus

- **[!]** Fixed broken styling of active paginator items by using Grids CSS
  rules to layout items horizontally; this makes sure the active item isn't
  overlapped. ([#127][])

### Tables

- Removed `white-space: nowrap` from `.pure-table thead`. This fixes issues
  where tables inside of grids would break the grid. ([#95][]: @AurelioDeRosa)

[#89]: https://github.com/pure-css/pure/issues/89
[#90]: https://github.com/pure-css/pure/issues/90
[#94]: https://github.com/pure-css/pure/issues/94
[#95]: https://github.com/pure-css/pure/issues/95
[#96]: https://github.com/pure-css/pure/issues/96
[#102]: https://github.com/pure-css/pure/issues/102
[#109]: https://github.com/pure-css/pure/issues/109
[#115]: https://github.com/pure-css/pure/issues/115
[#127]: https://github.com/pure-css/pure/issues/127
[#172]: https://github.com/pure-css/pure/pull/172

## 0.2.0 (2013-06-11)

- **[!]** Fixed accessibility mistake by removing `a:focus {outline: none;}`
  rule from `buttons-core.css`.

- **[!]** Improved `:focus` styles by applying the same rules that are used by
  `:hover` styles. When overriding Pure's `:hover` styles, be sure to include
  `:focus` selectors as well.

- Added improvements to developer workflow:

  - Added basic Tests using CSSLint via `grunt test` ([#25][])

  - Integrated Travis CI which runs `grunt test` on pushes to `main` and for
    pull requests.

  - Added `grunt watch` task which runs tests and build.

  - Added support to `pure-site` for serving `pure` locally during
    development. ([#46][], [pure-css/pure-site#111][])

- Removed vendor prefixes for `box-shadow`, `text-shadow`, `border-radius`. All
  modern browsers support the non-prefixed versions of these properties.
  ([#23][])

### Forms

- **[!]** Replaced `.pure-help-inline` with `.pure-form-message-inline`. We
  still support the older classname but it is deprecated and will be going away
  in a future release. ([#32][]: @dannytatom)

- Added a new class called `.pure-form-message`. It works the same way as
  `.pure-form-message-inline` but is meant for block elements.
  ([#32][]: @dannytatom)

- Added focus styles for file, radio, and checkbox `<input>`s to improve
  accessibility. ([#42][]: @codepb)

- `<textarea>`s now have the same styling as `<input>`s. ([#49][]: @rcbdev)

- `.pure-form input` rules are now more specific by targetting only "texty"
  `<inputs>`. This prevents these styles from affecting "buttony" `<input>`s.
  ([#54][])

### Grids

- Elements with classnames before the responsive grid's unit classnames now
  works correctly. Before units were targeted using the `^=` ("starts with")
  selector, which meant that if another classname preceded the unit classname,
  then the rule would not apply. ([#44][])

### Menus

- Added `.pure-menu-separator` classname that can be used to visually
  separate horizontal menu items. ([#53][]: @codepb, @mseri)

- Focused menus have an `outline: none` by default. Instead, menu-items that
  have been opened to display children (in a drop-down menu) get a slight
  background (`#dedede`) for accessibility. ([#22][])

[#22]: https://github.com/pure-css/pure/issues/22
[#23]: https://github.com/pure-css/pure/issues/23
[#25]: https://github.com/pure-css/pure/issues/25
[#32]: https://github.com/pure-css/pure/issues/32
[#42]: https://github.com/pure-css/pure/issues/42
[#44]: https://github.com/pure-css/pure/issues/44
[#46]: https://github.com/pure-css/pure/issues/46
[#49]: https://github.com/pure-css/pure/issues/49
[#53]: https://github.com/pure-css/pure/issues/53
[#54]: https://github.com/pure-css/pure/issues/54
[pure-css/pure-site#111]: https://github.com/pure-css/pure-site/issues/111

## 0.1.0 (2013-05-24)

- **[!]** Initial public release.

- Upgraded Normalize.css to 1.1.2.

- Integrated Bower into `grunt import` process.

- Cleaned up manual test files, removing unnecessary CSS files and cruft.

### Buttons

- Added `border-radius: 2px` to enhance the appearance the they are click-able.

### Menus

- Removed `border-radius` from vertical menus.

- Replaced blue hover for menus with light grey (`#eee`)

- Removed `font-weight: bold` from selected menu items.

  0.0.2 (2013-05-16)

---

- **[!]** Renamed to Pure.

- **[!]** Renamed CSS classname prefix to `pure`.

- Preview release (2).

  0.0.1 (2013-05-14)

---

- Preview release.
