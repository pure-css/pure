# Pure Deployment Checklist

These are the steps formally used to publish a new version of Pure.

For all of these steps, replace `1.0.0` with the correct version!

## Prerequisite

This assumes the following repo's are cloned and `npm` installed:

- https://github.com/pure-css/pure

## First, check everything

- [ ] **Update local Pure to latest from pure-css/pure#master**

    ```
    $ cd pure/
    $ git pull upstream master
    ```

- [ ] **Build Pure via `grunt`**

    ```
    $ grunt
    ```

- [ ] **Review all src/.../tests/manual/ files in target environments, including:**

    - [ ] IE 11
    - [ ] Edge
    - [ ] Chrome
    - [ ] Firefox
    - [ ] Safari
    - [ ] iOS 10.x
    - [ ] Android 4.x
    - [ ] Android 5.x

- [ ] **Review pure-site in target environments with [Pure served locally](https://github.com/pure-css/pure-site/blob/master/README.md#running-with-pure-served-locally)**

    - [ ] IE 11
    - [ ] Edge
    - [ ] Chrome
    - [ ] Firefox
    - [ ] Safari
    - [ ] iOS 10.x
    - [ ] Android 4.x
    - [ ] Android 5.x

- [ ] **Review HISTORY.md**

    https://github.com/pure-css/pure/blob/master/HISTORY.md

    Make sure all the major changes since the last release of Pure are reflected in HISTORY.md entries.

## Prepare repos for release

### Pure repo

- [ ] **Bump versions**

    It should have already been determined whether this is a minor or patch version release. Update Pure's version number to the new version in the following places. You'll likely be dropping a "-pre" suffix which was in place during the last development cycle. Do not use a "v" in the version (e.g., 1.0.0):

    - [ ] package.json
    - [ ] HISTORY.md (Update "NEXT")
    - [ ] README.md (x2 CDN URLs)

- [ ] **Build Pure release files via `grunt release`**

    Using Grunt, create the release/[version]/pure-[version].tar.gz file:

    ```
    $ grunt release
    ```

    **Note:** If the build fails it's for a good reason, most likely because there's code which is not passing CSSLint. We should always fix these issues and never force a release.


## Publish pure to NPM

From the `pure` repo run the following command to publish Pure to NPM. This will ensure `unpkg.com` CDN gets the new files.

```
npm publish .
```

Verify via https://unpkg.com/purecss@VERSION


## Draft releases on Github

- [ ] **Draft a new release on [GitHub](https://github.com/pure-css/pure/releases) for all three repos,** using "v" in the version number (e.g., v1.0.0). Drafts are invisible to the public. Once these are published, the repos will be visible, and they will be tagged. **Don't publish them just yet.**

    - [ ] **pure**

## Formally publish Pure

Now all our files are out there and everything is looking good.

- [ ] **Publish pure**

    From the [pure repo](https://github.com/pure-css/pure/releases), publish the release. This will tag the repo and signal to the public that the new Pure release is complete.

## Spread the word

- [ ] **Write blog post**
- [ ] **Tweet**

## Mark repo as pre-release

- [ ] We should mark the version number of the project (in package.json) as 0.6.1-pre for clarity, so there's no mistaking the leading edge of the project from the last release. Commit those changes and push to master.
