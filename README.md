# AngularJS Lazy Load

AngularJS Lazy Load Implementation using RequireJS.

This project consists of a production-ready boilerplate code, including unit tests (using Jasmine with Karma runner) and a gulp file for building (bundling, minifying etc) the application.

## Lazy Load

By default, AngularJS loads all files (controllers, directives, services, etc) at once when the web page is loaded, a burdensome process for the browser that may lead to an awful UX. Besides that, low page speed is bad for SEO and can negatively impact the site's ranking.

In order to solve this problem, the Lazy Load design pattern can be applied to load the resources on a demand basis. Thus, instead of downloading all of the files before the application starts, they are only fetched when really needed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. See Building section for notes on how to deploy the project on a live system.

### Prerequisites

Just make sure you have [npm](https://www.npmjs.com/get-npm) installed.

### Installing

Download the project dependencies using

```
npm install
```

## Building

The build process consists of a series of Gulp tasks such as bundling (CSS, JS) and minifying (HTML, CSS, JS). In order to do that, just run

```
npm run build
```

After the process, the files will be moved from the source (`src`) folder to the distribution (`dist`) folder and you should have an optimized production-ready version of this project.

## Running the Tests

The automated tests were created using Jasmine and are executed with Karma runner.
Note: By default, Karma is configured to test the `dist` folder, so please be sure to build the project first.

```
npm test
```

Of course, for development purposes you can go to `karma.conf.js` and set it up to work with the `src` files, specifying that you want it to watch for the changes and fire the tests automatically as you code.

## Contributing

Feel free to contribute with corrections, optimizations, etc. There are no strict guidelines on how one should contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
