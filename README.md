[![Build Status](https://travis-ci.org/gvn/foxlight.svg?branch=master)](https://travis-ci.org/gvn/foxlight)
[![dependency Status](https://img.shields.io/david/gvn/foxlight.svg)](https://david-dm.org/gvn/foxlight#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/gvn/foxlight.svg)](https://david-dm.org/gvn/foxlight#info=devDependencies)

# Foxlight

**Mozilla Foundation Bootstrap 4 theme.**

*Under heavy construction. Don't use this in production quite yet!*

## Setup for Development

Run the following commands in your terminal:

1. `git clone https://github.com/gvn/foxlight.git && cd foxlight`
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

[Travis](https://travis-ci.org/gvn/foxlight) is connected to this task and your pull requests will fail if this test doesn't pass locally.
