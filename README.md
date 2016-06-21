[![Build Status](https://travis-ci.org/mozilla/mofo-bootstrap.svg?branch=master)](https://travis-ci.org/mozilla/mofo-bootstrap)
[![dependency Status](https://img.shields.io/david/mozilla/mofo-bootstrap.svg)](https://david-dm.org/mozilla/mofo-bootstrap#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mozilla/mofo-bootstrap.svg)](https://david-dm.org/mozilla/mofo-bootstrap#info=devDependencies)

# mofo-bootstrap

**Mozilla Foundation Bootstrap 4 theme.**

*Under heavy construction. Don't use this in production quite yet!*

## Usage

For the moment it's recommended that you use one of two methods to include the compiled mofo-bootstrap CSS in your project:

1. Include the library in your `package.json` for an npm-managed project by running `npm install mofo-bootstrap --save`. You can then point your build system at the compiled CSS which resides at `node_modules/mofo-bootstrap/dest/css/mofo-bootstrap.css`. This is the preferred method.
2. Hotlink to the raw compiled CSS file on Github at `http://mozilla.github.io/mofo-bootstrap/dest/css/mofo-bootstrap.css` from your HTML. This is *not* recommended for production, but is OK for prototyping or test purposes. Eventually we will put the CSS on a proper CDN.

It's not currently advisable that you extend and compile the mofo-bootstrap SCSS in your project. SCSS doesn't ([currently](https://github.com/sass/sass/issues/739)) allow for dynamic import paths, which complicates things when mofo-bootstrap becomes a module. We're working on a reasonable approach for allowing this...

## Setup for Development

Run the following commands in your terminal:

1. `git clone https://github.com/mozilla/mofo-bootstrap.git && cd mofo-bootstrap`
2. `npm i`
3. `npm start`

## File Structure

```
dest/ <- Contains compiled code. Don't edit anything in this folder!
src/
├── index.jade <- Template for demo page (Creates: dest/index.html)
└── scss/
    ├── custom/ <- SCSS modules for non-Bootstrap components.
    ├── overrides/ <- SCSS modules that override or extend Bootstrap components.
    ├── demo.scss <- SCSS specific to the demo page.
    └── mofo-bootstrap.scss <- Primary entry point that defines all imports.
```

## File Naming Conventions

- All files should be named in `hyphenated-lowercase`
- SCSS modules/partials should be prefixed with an underscore (`_`)
- Bootstrap overrides should be named after their sibling. (For example: `/src/scss/overrides/_type.scss` and `bootstrap/scss/_type.scss`)

## Linting

To lint your Sass code, run `npm run test:sass`

[Travis](https://travis-ci.org/mozilla/mofo-bootstrap) is connected to this task and your pull requests will fail if this test doesn't pass locally.

## Deploying

To deploy to `gh-pages` first ensure that you have `mozilla` (mozilla/mofo-bootstrap) set up as a remote.

If you have push access, simply run `npm run deploy` to build the latest code on `mozilla/master` and push it to `gh-pages`.
