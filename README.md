Pure
====

[![Pure](http://f.cl.ly/items/2y0M0E2Q3a2H0z1N1Y19/pure-banner.png)][Pure]

A set of small, responsive CSS modules that you can use in every web project.
[http://purecss.io/][Pure]

[![Build Status](https://travis-ci.org/yui/pure.png?branch=master)][Build Status]

**Use From the CDN:**

```html
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.1.0/pure-min.css">
```


[Pure]: http://purecss.io/
[Build Status]: https://travis-ci.org/yui/pure


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

* Easy one-click customization with the [Skin Builder][].

* Extremely small file size: **4.8KB minified + gzip**.


[Normalize.css]: http://necolas.github.io/normalize.css/
[Skin Builder]: http://yui.github.io/skinbuilder/?mode=pure


Get Started
-----------

To get started using Pure, go to the [Pure CSS website][Pure]. The website has
extensive documentation and examples necessary to get you started using Pure.

You can include the Pure CSS file in your project by fetching it from Yahoo's
CDN:

```html
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.1.0/pure-min.css">
```


Build From Source
-----------------

Optionally, you can build Pure from its source on Github. To do this, you'll
need to have NodeJS and npm installed. We use [Grunt][] to build Pure.

```shell
$ git clone git@github.com:yui/pure.git
$ cd pure
$ npm install
$ grunt
```

Now, all Pure CSS files should be built into the `pure/build/` directory. All
files that are in this build directory are also available on the CDN. The naming
conventions of the files in the `build/` directory follow these rules:

* `[module]-nr.css`: Rollup of `[module]-core.css` + `[module].css` +
  `[module]-[feature].css` from the `src/[module]/` dir. This is the
  non-responsive version of a module.

* `[module].css`: Rollup of `[module]-nr.css` + `[module]-r.css` from the
  `build/` dir. This is the responsive version of a module.

* `*-min.css`: A minified file version of the files of the same name.

* `pure-min.css`: A rollup of all `[module]-min.css` files in the `build/` dir.
  This is a responsive roll-up of everything.

* `pure-nr-min.css`: A Rollup of all modules without @media queries. This is a
  non-responsive roll-up of everything.

**Note:** To save your fingers from The Developer Konami Code: ⌘⇥ ⌃C ↑ ⏎ use
the `grunt watch` task:

```shell
$ grunt watch
```


[Grunt]: http://gruntjs.com/


Contributions and Code Standards
--------------------------------

Feel free to file bugs and submit pull requests on Github! When submitting a
pull request, please checkout a new feature branch, and submit your pull request
from it. Please do not submit pull requests from your `master` branch.

### Testing

We use [CSSLint][] for basic testing to make sure we're shipping valid CSS which
compiles with standard best practices and rules. To run Pure's test use
[Grunt][]:

```shell
$ grunt test
```

### Docs and Website

Pure's website is also open source, so please file any issues or pull requests
for the docs or website over at the [`pure-site`][pure-site] repo.

### CLA

Please [sign the CLA][] before submitting pull requests. We can't merge your
pull requests unless you have a signed CLA. It's super easy and can be done
online. For more information regarding the CLA, please visit the
[Contribute][] page.

### Versioning

Pure adheres to [Semantic Versioning 2.0](http://semver.org/).


[CSSLint]: https://github.com/stubbornella/csslint
[pure-site]: https://github.com/yui/pure-site
[sign the CLA]: https://secure.echosign.com/public/hostedForm?formid=A9PFU5T58653A
[Contribute]: http://yuilibrary.com/contribute/cla/


Browser Support and Testing
---------------------------

Pure is tested and works in:

* IE 7+
* Latest Stable Firefox/Chrome/Safari
* iOS 6.x
* Android 4.x

Before submitting pull requests, please ensure that you open the test HTML files
in these environments. If you don't have access to all these environments, list
the ones that you have tested in on the pull request description. That way, we
know what's missing, and can help you out.


License
-------

This software is free to use under the Yahoo! Inc. BSD license.
See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/yui/pure/blob/master/LICENSE.md
