# Pure Deployment Checklist

These are the steps formally used to publish a new version of Pure.

For all of these steps, replace `1.0.0` with the correct version!

## Prerequisite

This assumes the following repo's are cloned and `npm` installed:

- https://github.com/pure-css/pure

## First, check everything

- [ ] **Update local Pure to latest from pure-css/pure#main**

  ```bash
  $ cd pure/
  $ git pull upstream main
  ```

- [ ] **Build Pure via `npm run build`**

  ```bash
  $ npm run build
  ```

- [ ] **Review all src/.../tests/manual/ files in target environments, including:**

  - [ ] Edge
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari

- [ ] **Review pure-site in target environments with [Pure served locally](https://github.com/pure-css/pure-site/blob/main/README.md#running-with-pure-served-locally)**

  - [ ] Edge
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari

- [ ] **Review HISTORY.md**

  https://github.com/pure-css/pure/blob/main/HISTORY.md

  Make sure all the major changes since the last release of Pure are reflected in HISTORY.md entries.

## Prepare repos for release

### Pure repo

- [ ] **Open a release PR that bumps the version**

  It should have already been determined whether this is a minor or patch version release. On a new branch, update Pure's version number to the new version in the following places. You'll likely be dropping a "-pre" suffix which was in place during the last development cycle. Do not use a "v" in the version (e.g., 1.0.0):

  - [ ] package.json (e.g. `npm version 1.0.0 --no-git-tag-version`, which also updates package-lock.json)
  - [ ] HISTORY.md (rename "NEXT" to `## 1.0.0 (YYYY-MM-DD)`; this section becomes the GitHub Release notes)

  `main` is protected, so this has to go through a pull request, and CI must pass before it can merge.

  **Note:** If the build fails it's for a good reason, most likely because there's code which is not passing CSSLint. We should always fix these issues and never force a release.

## Publish

- [ ] **Merge the release PR**

  When a change to the version in package.json lands on `main`, the [Publish workflow](.github/workflows/publish.yml) runs. It:

  1. builds and tests Pure
  2. publishes it to npm with provenance, using [trusted publishing](https://docs.npmjs.com/trusted-publishers) (no npm token)
  3. tags the merged commit `v1.0.0` and creates a GitHub Release, with the HISTORY.md section as notes and `pure-1.0.0.tar.gz` attached
  4. redeploys https://pure-css.github.io, whose CDN links and SRI hash come from the newly published package (no need to bump `purecss` in `site/package.json`)

  Versions like `1.0.0-rc.1` are published under npm's `next` tag as a GitHub pre-release. Versions ending in `-pre` are never published.

  Don't run `npm publish` locally. If a step fails, fix the cause and re-run the workflow from the Actions tab. Steps that already succeeded are skipped.

- [ ] **Verify**

  - https://www.npmjs.com/package/purecss shows the new version, with provenance
  - https://www.jsdelivr.com/package/npm/purecss has the new files
  - https://github.com/pure-css/pure/releases has the release
  - https://pure-css.github.io shows the new version in the CDN snippet, once the Deploy workflow finishes

## Spread the word

- [ ] **Write blog post**
- [ ] **Tweet**

## Mark repo as pre-release

- [ ] We should mark the version number of the project (in package.json) as 0.6.1-pre for clarity, so there's no mistaking the leading edge of the project from the last release. Open a PR with those changes. The Publish workflow skips `-pre` versions.

## One-time setup

A package maintainer does these once, before the first automated release.

- **npm trusted publisher:** on npmjs.com, under the package's Settings → Trusted Publisher, add GitHub Actions with organization `pure-css`, repository `pure`, and workflow `publish.yml`.
- **npm publishing access:** under Settings → Publishing access, select "Require two-factor authentication and disallow tokens". Trusted publishing keeps working; npm tokens can no longer publish.
- **GitHub:** the "Protect main" ruleset requires a pull request and passing `test`/`docs` checks for `main`.
