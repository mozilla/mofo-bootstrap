[![Build Status](https://travis-ci.org/mozilla/mozmaker.svg?branch=master)](https://travis-ci.org/mozilla/mozmaker)
[![dependency Status](https://img.shields.io/david/mozilla/mozmaker.svg)](https://david-dm.org/mozilla/mozmaker#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mozilla/mozmaker.svg)](https://david-dm.org/mozilla/mozmaker#info=devDependencies)

# Mozmaker

**Mozilla Foundation Bootstrap 4 theme.**

*Under heavy construction. Don't use this in production quite yet!*

## Usage

For the moment it's recommended that you use one of two methods to include the compiled Mozmaker CSS in your project:

1. Include the library in your `package.json` for an npm-managed project by running `npm install mozmaker --save`. You can then point your build system at the compiled CSS which resides at `node_modules/mozmaker/dest/css/mozmaker.css`. This is the preferred method.
2. Hotlink to the raw compiled CSS file on Github at `http://mozilla.github.io/mozmaker/dest/css/mozmaker.css` from your HTML. This is *not* recommended for production, but is OK for prototyping or test purposes. Eventually we will put the CSS on a proper CDN.

It's not currently advisable that you extend and compile the Mozmaker SCSS in your project. SCSS doesn't ([currently](https://github.com/sass/sass/issues/739)) allow for dynamic import paths, which complicates things when Mozmaker becomes a module. We're working on a reasonable approach for allowing this...

## Setup for Development

Run the following commands in your terminal:

1. `git clone https://github.com/mozilla/mozmaker.git && cd mozmaker`
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
    └── mozmaker.scss <- Primary entry point that defines all imports.
```

## File Naming Conventions

- All files should be named in `hyphenated-lowercase`
- SCSS modules/partials should be prefixed with an underscore (`_`)
- Bootstrap overrides should be named after their sibling. (For example: `/src/scss/overrides/_type.scss` and `bootstrap/scss/_type.scss`)

## Linting

To lint your Sass code, run `npm run test:sass`

[Travis](https://travis-ci.org/mozilla/mozmaker) is connected to this task and your pull requests will fail if this test doesn't pass locally.
