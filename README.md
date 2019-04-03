# Features
* Build with [webpack 4](https://webpack.js.org/) and [babel 7](https://babeljs.io/)
* Test with [jest](https://jestjs.io)
* Lint with [eslint](http://eslint.org/) ([standard config](https://github.com/standard/eslint-config-standard))
* Hot reloading with [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

# Getting started
1. [Clone this repo from github](https://github.com/eunikitin/modern-package-boilerplate)
1. Inside the repo directory run `npm install && rm -r .git && git init`
1. Update package.json with your information

# Usage
## Development
- ```npm run dev```
- Browse to localhost:8080/your-module-name
- Edit your code and enjoy hot reloading

## Test driven development
- ```npm run watch```
- Edit your code and follow tests in your terminal

## Run tests
- ```npm run test```

## Build package
- ```npm run prod``` Run tests, lint and builds the module
- ```npm version patch``` (or ```minor```/```major``` etc.)
- ```npm publish```