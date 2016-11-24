# Vanilla Starter Kit (Beta)

> A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.

[![Build Status](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit)
[![Code Climate](https://codeclimate.com/github/Shyam-Chen/Vanilla-Starter-Kit/badges/gpa.svg)](https://codeclimate.com/github/Shyam-Chen/Vanilla-Starter-Kit)
[![Coverage Status](https://coveralls.io/repos/github/Shyam-Chen/Vanilla-Starter-Kit/badge.svg?branch=master)](https://coveralls.io/github/Shyam-Chen/Vanilla-Starter-Kit?branch=master)
[![Dependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit?type=dev)

[![Build Status](https://saucelabs.com/browser-matrix/Shyam-Chen.svg)](https://saucelabs.com/beta/builds/08dbd04c562248a5a9bd1c26d5a421ce)

[Live Demo](https://test-1498d.firebaseapp.com/)

[Slim Version](https://github.com/Shyam-Chen/Vanilla-Starter-Kit/tree/slim)

This seed repository provides the following features:
* [x] Start coding **Vanilla HTML/CSS/JS** right now.
* [x] UI components with **Material**.
* [x] Back-end service with **Firebase**.
* [x] Routing and navigation with **Page**.
* [x] Internationalization with **Intl**.
* [x] Data visualization with **Chart**.
* [x] Render templates with **Lodash**.
* [x] Build system with **Gulp**.
* [x] Module bundler with **Rollup**.
* [x] Future CSS features with **PostCSS**.
* [x] Next generation JS with **Babel**.
* [x] Development server with **BrowserSync**.
* [x] HTML static code analyzer with **HTMLHint**.
* [x] CSS static code analyzer with **StyleLint**.
* [x] JS static code analyzer with **ESLint**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] Code coverage with **Istanbul**.
* [x] End-to-end tests with **Protractor**.
* [x] Version control with **Git**.
* [x] Fast and determinsitic builds with **Yarn**.
* [x] Virtual machine with **Docker**.
* [x] Continuous integration and deployment with **Travis**.
* [x] Code reviews and analytics with **Code Climate**.
* [x] Test coverage history and statistics with **Coveralls**.
* [x] Cross browser testing with **Sauce Labs**.

## Getting Started

1) Clone this Boilerplate
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Vanilla-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2) Install Dependencies
```bash
$ yarn install
```

3) Run the Application
```bash
$ yarn start
```

4) Stay up-to-date
```bash
$ git remote add upstream https://github.com/Shyam-Chen/Vanilla-Starter-Kit.git
$ git pull upstream master
```

## Using Docker

1) Build the Image
```bash
$ docker build -t vanilla-starter-kit .
```

2) Run the Container
```bash
$ docker run -it -p 3000:3000 --name app vanilla-starter-kit
```

3) Or use Compose
```bash
$ docker-compose up  # equivalent to steps one and two
```

## Other Commands

```bash
$ yarn run dev
$ yarn run dev-watch  # no serve
```

```bash
$ yarn run test
$ yarn run test-watch  # no single run
```

```bash
$ yarn run prod
```

```bash
$ yarn run e2e  # pre: yarn run webdriver
```

```bash
$ yarn run clean
```

```bash
$ yarn run reset
```

```bash
$ yarn run reinstall
```
