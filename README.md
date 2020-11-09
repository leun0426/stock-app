This README outlines the details of collaborating on this react application. 
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/)

`Node.js` version to use are specified in the `package.json` file

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

## Updating Node versions
During the development of the project `node` versions might be updated.

A good thing is to use `nvm` for managing and switching `node` versions. To install it follow the instructions on [NVM page](https://github.com/creationix/nvm).

When there is a need for the `node` update do the following to successfully run the project on the new version:
* update the `node` via `nvm` or manually
* `rm -rf node_modules`
(need to clear all the dependencies in order to avoid collisions between old and new `node` dependencies)
* `npm install` (reinstall all dependencies under `node` environment of the new version)

## Running

* `npm start`

## Code Guidelines
- [JavaScript](docs/code-guidelines/js.md)
- SCSS (TBD)

### Running Tests
Fastest way to run all tests:
* `npm run exam` (Mac, Linux)

### Building

* `npm run build`

### Deploying

Specify what it takes to deploy your app.

