[![Build Status](https://travis-ci.org/mozilla/foxlight.svg?branch=master)](https://travis-ci.org/mozilla/foxlight)
[![dependency Status](https://img.shields.io/david/mozilla/foxlight.svg)](https://david-dm.org/mozilla/foxlight#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mozilla/foxlight.svg)](https://david-dm.org/mozilla/foxlight#info=devDependencies)

# Foxlight

**Mozilla Foundation Bootstrap 4 theme.**

*Under heavy construction. Don't use this in production quite yet!*

## Usage

For the moment it's recommended that you use one of two methods to include the compiled Foxlight CSS in your project:

1. Include the library in your `package.json` for an npm-managed project. Your `package.json` should have a `dependencies` member that looks like this: `"foxlight": "https://github.com/mozilla/foxlight#gh-pages"`. You can then point your build system (eg: Webpack) to `node_modules/foxlight/dest/css/foxlight.css`. This is currently the recommended approach.

2. Hotlink to the raw compiled CSS file on Github at `http://mozilla.github.io/foxlight/dest/css/foxlight.css` from your HTML. This is *not* recommended for production, but is OK for prototyping or test purposes. Eventually we will put the CSS on a proper CDN.

It's not currently advisable that you extend and compile the Foxlight SCSS in your project. SCSS doesn't ([currently](https://github.com/sass/sass/issues/739)) allow for dynamic import paths, which complicates things when Foxlight becomes a module. We're working on a reasonable approach for allowing this...

## Setup for Development

Run the following commands in your terminal:

1. `git clone https://github.com/mozilla/foxlight.git && cd foxlight`
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
    └── foxlight.scss <- Primary entry point that defines all imports.
```

## File Naming Conventions

- All files should be named in `hyphenated-lowercase`
- SCSS modules/partials should be prefixed with an underscore (`_`)
- Bootstrap overrides should be named after their sibling. (For example: `/src/scss/overrides/_type.scss` and `bootstrap/scss/_type.scss`)

## Linting

To lint your Sass code, run `npm run test:sass`

[Travis](https://travis-ci.org/mozilla/foxlight) is connected to this task and your pull requests will fail if this test doesn't pass locally.
