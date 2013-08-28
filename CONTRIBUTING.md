How to Contribute to Pure
=========================

Feel free to [open issues][] and send pull requests on GitHub! When sending a
pull request, please create a new topic/feature branch, and send your pull
request from that branch. Please do *not* send pull requests from your `master`
branch because this tends to lead to merge conflicts.

In order for us to to merge your pull requests, we need you to review and sign
our [Contributor License Agreement][]. The CLA protects you and your
contributions along with all other developers who use Pure.


[Contributor License Agreement]: #contributor-license-agreement
[open issues]: https://github.com/yui/pure/issues


Docs and Website
----------------

[Pure's website][Pure] is also open source, so please open any issues or pull
requests for the docs and website over at the [`pure-site`][pure-site]
repository.


[Pure]: http://purecss.io/
[pure-site]: https://github.com/yui/pure-site


Building and Testing Pure
-------------------------

Pure uses [Grunt][], a JavaScript task runner that runs on [Node.js][], for
building and testing. You'll need Node.js and Grunt installed to work on Pure.
Once installed, clone the `pure` repo (either the main repo or your fork) and
install Pure's gruntplugins via npm:

```shell
$ git clone git://github.com/yui/pure.git
$ cd pure/
$ npm install
```

Building Pure is easy, run `grunt`:

```shell
$ grunt
```

Pure uses [CSSLint][] for basic testing to make sure we're shipping valid CSS
which complies with standard best practices. To run Pure's tests, run
`grunt test`:

```shell
$ grunt test
```

**Note:** To save your fingers from The Developer Konami Code: ⌘⇥ ↑ ⏎ run the
`grunt watch` task with will continuously test and build Pure anytime a CSS file
changes:

```shell
$ grunt watch
```

### Browser Support and Testing

Pure is tested and works in:

* IE 7+
* Latest Stable: Firefox, Chrome, Safari
* iOS 6.x
* Android 4.x

Before sending pull requests, please ensure that you open the test HTML files
in these environments. If you don't have access to all these environments, list
the ones that you have tested in on the pull request description. That way, we
know what's missing, and can help you out.


[Grunt]: http://gruntjs.com/
[Node.js]: http://nodejs.org/
[CSSLint]: https://github.com/stubbornella/csslint


Coding Standards and Style Guide
--------------------------------

Pure has adopted the [SMACSS][] conventions for writing CSS. If you are new to
SMACSS, you should give it a read, especially the section on [module rules][].

The [Extend][] section of the Pure website more info about the style guide and
naming conventions, along with examples of how to extend the library.


[SMACSS]: http://smacss.com/
[module rules]: http://smacss.com/book/type-module
[Extend]: http://purecss.io/extend/


Contributor License Agreement
-----------------------------

Please [sign Pure's CLA][CLA] before sending pull requests. We can't merge your
pull requests unless you have a signed CLA.

The CLA ensures that everyone who submits a work of authorship to Pure is
contributing work that is their own or for which they can authoritatively speak.
This protects the all of of developers who use Pure in their daily work, all of
whom rely on Pure's BSD license to appropriately cover their use of the library.

The CLA does **not** transfer title or copyright of your contributed work to
Yahoo!. It merely guarantees that you approve the use of your work within Pure
and by those who use the library under the terms of its license.

If you want to make contributions (software, documentation or other material) to
the Pure Project and such contributions could be covered under intellectual
property laws, you must submit a Contributor License Agreement (CLA) prior to
making your contribution:

1. Review Pure's BSD license. All of Pure's code is issued under this license,
   and contributions you make to the library will be subject to this license.
   **Note:** that the BSD license is very liberal; it allows for reuse and
   adaptation in commercial projects.

2. [Sign the Pure CLA online][CLA]. You will receive confirmation of your CLA
   submission via the email address provided on the CLA form. If you have
   questions about the CLA, you can address them to yui-cla@yahoo-inc.com.


[CLA]: https://secure.echosign.com/public/hostedForm?formid=A9PFU5T58653A
