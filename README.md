# :heavy_check_mark: image-checker readme

Check the quality of an image for defects including blur, under-exposure, over-exposure and low contrast.

Can be used via node.js as a command line tool or as a library.

## status - !in development!

image-checker is in _very early_ stages of development (Windows, Linux Ubuntu) following semantic versioning.

Please come back later!

[![Travis](https://img.shields.io/travis/mrseanryan/image-checker.svg)](https://travis-ci.org/mrseanryan/image-checker)
[![Coveralls](https://img.shields.io/coveralls/mrseanryan/image-checker.svg)](https://coveralls.io/github/mrseanryan/image-checker)
[![node](https://img.shields.io/node/v/image-checker.svg)](https://nodejs.org)

[![Greenkeeper badge](https://badges.greenkeeper.io/mrseanryan/image-checker.svg)](https://greenkeeper.io/)
[![Dependencies](https://david-dm.org/mrseanryan/image-checker.svg)](https://david-dm.org/mrseanryan/image-checker)
[![Dev Dependencies](https://david-dm.org/mrseanryan/image-checker/dev-status.svg)](https://david-dm.org/mrseanryan/image-checker?type=dev)

[![npm Package](https://img.shields.io/npm/v/image-checker.svg?style=flat-square)](https://www.npmjs.org/package/image-checker)
[![NPM Downloads](https://img.shields.io/npm/dm/image-checker.svg)](https://npmjs.org/package/image-checker)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/mrseanryan)

## why?

Node.js seems to lack a library that indicates the quality of an image.

Hopefully using this library/cli, you can save some time spent on manually inspecting photos!

## dependencies

-   Node 8.11.3 or higher

## features (in development!)

-   library to give quality measurements of a given image
-   also can be used as CLI (command line tool)
-   gives a score for the following quality measures:
    -   blurring (via edge width detection)
    -   under exposure (via histogram)
    -   over exposure (via histogram)
    -   low contrast (via histogram)

### possible future features

faces:

-   face alignment (e.g. are eyes horizontal)
-   Face not centered
-   Face out of frame
-   Faces detected, but no strong sentiment

printing:

-   dpi not high enough for A4 or photo print
-   check exif for presence of sRGB

## usage - as cli (command line tool)

### 1 Install dependencies

Install:

-   Yarn
-   Node 8.3.11 (or higher)

### 2 Check images

#### 3 ways to run

You can run `image-checker` in one of three ways:

-   a) as a globally installed command line tool (this is the easiest way)
-   OR b) as an npm package inside an npm project
-   OR c) from the source code

##### a) install globally as a command line tool

`npm i -g image-checker@latest --production`

On Ubuntu, you may need administrator permissions via `sudo`:

`sudo npm i -g image-checker@latest --production`

To use:

`image-checker <path to image>`

##### OR b) from the npm package

Install inside your npm project:

`yarn add image-checker`

via bash script:

`node_modules/image-checker/dist/lib/cli.js <path to image>`

OR via node:

`node node_modules/image-checker/dist/lib/main <path to image>`

##### OR c) from the source code

```
yarn
```

_On Windows: use a bash shell like `git bash`._

To test your installation:

```
./test.sh
```

To check your images:

```
./go.sh <path to image>
```

example:

```
./go.sh ../myPhotos/photo-1.jpg
```

To see more detailed usage info:

```
./go.sh
```

## usage - as a library in a node based project

Install inside your npm project:

`yarn add image-checker`

Then in TypeScript, you can import the library:

```ts
import * as ic from "image-checker";
```

// TODO xxx

For a working example, see the [library test harness](./itest/testHarness/library-harness/find-blurry-images/readme.md).

## sites

| site                 | URL                                         |
| -------------------- | ------------------------------------------- |
| source code (github) | https://github.com/mrseanryan/image-checker |
| github page          | https://mrseanryan.github.io/image-checker/ |
| npm                  | https://www.npmjs.com/package/image-checker |

## developing code in _this_ repository

see the [contributing readme](CONTRIBUTING.md).

## origin

This project is based on the excellent seeder project [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter).

### ORIGINAL readme (from the seeder project)

[see here](README.original.md)

## authors

Original work by Sean Ryan - mr.sean.ryan(at gmail.com)

## licence = MIT

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
