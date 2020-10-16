Pure-css Project(Awesome Project)
====

[![Pure](https://cloud.githubusercontent.com/assets/449779/5291099/1b554cca-7b03-11e4-9157-53a12d91b34a.png)][Pure]

A set of small, responsive CSS modules that you can use in every web project.
[http://purecss.io/][Pure]

[![Build Status](http://img.shields.io/travis/pure-css/pure.svg?style=flat)][Build Status]
[![Dependency Status](https://david-dm.org/pure-css/pure/dev-status.svg)](https://david-dm.org/pure-css/pure?type=dev)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pure-css/pure?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**This project is looking for maintainers to support and enhance Pure.css. If you are interested please [leave a comment](https://github.com/pure-css/pure/issues/692) in the Github issue.**

**Use From the CDN:**

```html
<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
```

Note: You can [customize which Pure modules you need][customize].

**Install with NPM:**

```shell
$ npm install purecss
```

[Pure]: http://purecss.io/
[Build Status]: https://travis-ci.org/pure-css/pure
[customize]: http://purecss.io/customize/


Features
--------

Pure is meant to be a starting point for every website or web app. We take care
of all the CSS work that every site needs, without making it look cookie-cutter:

* A responsive grid that can be customized to your needs.

* A solid base built on [Normalize.css][] to fix cross-browser compatibility
  issues.

* Consistently styled buttons that work with `<a>` and `<button>` elements.

* Styles for vertical and horizontal menus, including support for dropdown
  menus.

* Useful form alignments that look great on all screen sizes.

* Various common table styles.

* An extremely minimalist look that is super-easy to customize.

* Responsive by default, with a non-responsive option.

* Extremely small file size: **3.7KB minified + gzip**.


[Normalize.css]: http://necolas.github.io/normalize.css/


Get Started
-----------

To get started using Pure, go to the [Pure CSS website][Pure]. The website has
extensive documentation and examples to help you start using Pure.

You can include the Pure CSS file in your project by fetching it from unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
```

You can also install Pure using NPM:

```shell
$ npm install purecss
```

Build From Source
-----------------

Optionally, you can build Pure from its source on Github. To do this, you'll
need to have Node.js and npm installed. We use [Grunt][] to build Pure.

```shell
$ git clone git@github.com:pure-css/pure.git
$ cd pure
$ npm install
$ grunt
```

### Build Files

Now, all Pure CSS files should be built into the `pure/build/` directory. All
files that are in this build directory are also available on the CDN. The naming
conventions of the files in the `build/` directory follow these rules:

* `[module]-core.css`: The minimal set of styles, usually structural, that
  provide the base on which the rest of the module's styles build.

* `[module]-nr.css`: Rollup of `[module]-core.css` + `[module].css` +
  `[module]-[feature].css` from the `src/[module]/` dir. This is the
  non-responsive version of a module.

* `[module].css`: Rollup of `[module]-nr.css` + `[module]-r.css` from the
  `build/` dir. This is the responsive version of a module.

* `*-min.css`: A minified file version of the files of the same name.

* `pure.css`: A rollup of all `[module].css` files in the `build/` dir. This is
  a responsive roll-up of everything, non-minified.  Note: does not contain responsive grids with @media queries.

* `pure-min.css`: Minified version of `pure.css` that should be used in
  production.

* `pure-nr.css`: A Rollup of all modules without @media queries. This is a
  non-responsive roll-up of everything, non-minified.

* `pure-nr-min.css`: Minified version of `pure-nr.css` that should be used in
  production.

* `grids-responsive.css`: Unminified version of Pure's grid stylesheet which
  includes @media queries.

* `grids-responsive-min.css`: Minified version of `grids-responsive.css` that
  should be used in production.


[Grunt]: http://gruntjs.com/


Browser Support and Testing
---------------------------

Pure is tested and works in:

* IE 10+
* Latest Stable: Firefox, Chrome, Safari
* iOS 12+
* Android 6+


Docs and Website
----------------

[Pure's website][Pure] is located in the [`site`][pure-site] directory. Please feel free
to open issues or questions in the Issue tab.


[Pure]: http://purecss.io/
[pure-site]: https://github.com/pure-css/pure/tree/master/site


Contributing
------------

See the [CONTRIBUTING file][] for information on how to contribute to Pure.


[CONTRIBUTING file]: https://github.com/pure-css/pure/blob/master/CONTRIBUTING.md


License
-------

This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/pure-css/pure/blob/master/LICENSE
