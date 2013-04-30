Forms Change History
====================

0.2.1
-----
* Remove width from .yui3-form select.

0.2
----

* Adds `yui3-form` prefix to all forms and form elements to prevent collisions.
* Adds `css/forms-core.css` which adds contextual form styling from Normalize.css
* `yui3-form-inline` is now the default form. The previous default form is `yui3-form yui3-form-stacked`. This was done to reduce k-weight. 
* Adds input sizing with a naming convention similar to YUI grids in place of the previous pixel-based input styling. 
* Form labels are `display: inline` by default. They are `display: block` for checkboxes and radio buttons, and for specific form implementations such as `yui3-form-stacked`. 
* Rename `yui3-form-horizontal` to `yui3-form-aligned`
* Add `font-size: 90%` to `.yui3-help-inline` to make it the same font-size as the inputs. 
* Minor improvements to responsive styles.


0.1
---

* Initial Release
