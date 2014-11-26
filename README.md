theshelf-angular <a href='https://semaphoreapp.com/azevedo-252/theshelf-angular'> <img src='https://semaphoreapp.com/api/v1/projects/061536f6-1a31-4bbe-9315-5a2916c05cfe/287078/shields_badge.svg' alt='Build Status'></a>
================

An AngularJS web client for The Shelf

### Getting up and running

2. Run `bower install` and `npm install` from the *angularjs* directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

This project uses the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)

Along with many Gulp libraries (these can be seen in either `package.json`, or at the top of each task in `/gulp/tasks/`).

---

### AngularJS

The AngularJS structure follows a module based approach.

#### Modules

##### Core module

The Core module is shared throughout the entire application.

This module is an aggregator of entities that the application will need. Example: common data services.

##### Feature modules

These modules are created per feature and aggregate all relevant code for each feature, ex: services, directives, ...

#### File structure

Files are all located within `/app/js`, structured in the following manner:

```
/core
  constants.js  (any constant values that need to be available to Angular)
  index.js      (the core module on which to mount all other entities, loaded in main.js)
  on_run.js     (any functions or logic that need to be executed on app.run)
  routes.js     (all route definitions and logic)
  templates.js  (this is created via Gulp by compiling all views, and will not be present beforehand)
main.js         (the main file read by Browserify, also where the application is defined and bootstrapped)
/some_feature
  index.js      (the feature module on which to mount all feature logic, ex: controllers. loaded in main.js)
  example_controller.js
  exaple_directive.js
```


##### Dependency injection

Dependency injection is carried out with the `ng-annotate` library. In order to take advantage of this, a simple comment of the format:

```
/**
 * @ngInject
 */
```

needs to be added directly before any Angular functions/modules. The Gulp tasks will then take care of adding any dependency injection, requiring you only to specify the dependencies within the function call and nothing more.

---

### Gulp

Gulp is a "streaming build system", providing a very fast and efficient method for running your build tasks.

##### Web Server

Gulp is used here to provide a very basic node/Express web server for viewing and testing your application as you build. It serves static files from the `build/` directory, leaving routing up to AngularJS. All Gulp tasks are configured to automatically reload the server upon file changes. The application is served to `localhost:3000` once you run the `gulp` task. To take advantage of the fast live reload injection provided by browser-sync, you must load the site at the proxy address (which usually defaults to `server port + 1`, and which by default is `localhost:3001`.)

##### Scripts

A number of build processes are automatically run on all of our Javascript files, run in the following order:

- **JSHint:** Gulp is currently configured to run a JSHint task before processing any Javascript files. This will show any errors in your code in the console, but will not prevent compilation or minification from occurring.
- **Browserify:** The main build process run on any Javascript files. This processes any of the `require('module')` statements, compiling the files as necessary.
- **ngAnnotate:** This will automatically add the correct dependency injection to any AngularJS files, as mentioned previously.
- **Uglifyify:** This will minify the file created by Browserify and ngAnnotate.

The resulting file (`main.js`) is placed inside the directory `/build/js/`.

##### Styles

Just one task is necessary for processing our SASS files, and that is `gulp-sass`. This will read the `main.sass` file, processing and importing any dependencies and then minifying the result. This file (`main.css`) is placed inside the directory `/build/css/`.

##### Images

Any images placed within `/app/images` will be automatically copied to the `build/images` directory. If running `gulp prod`, they will also be compressed via imagemin.

##### Views

When any changes are made to the `index.html` file, the new file is simply copied to the `/build/` directory without any changes occurring.

Files inside `/app/views/`, on the other hand, go through a slightly more complex process. The `gulp-angular-templatecache` module is used in order to process all views/partials, creating the `template.js` file briefly mentioned earlier. This file will contain all the views, now in Javascript format inside Angular's `$templateCache` service. This will allow us to include them in our Javascript minification process, as well as avoid extra HTTP requests for our views.

##### Watching files

All of the Gulp processes mentioned above are run automatically when any of the corresponding files in the `/app` directory are changed, and this is thanks to our Gulp watch tasks. Running `gulp dev` will begin watching all of these files, while also serving to `localhost:3000`, and with browser-sync proxy running at `localhost:3001` (by default).

##### Production Task

Just as there is the `gulp dev` task for development, there is also a `gulp prod` task for putting your project into a production-ready state. This will run each of the tasks, while also adding the image minification task discussed above. There is also an empty `gulp deploy` task that is included when running the production task. This deploy task can be fleshed out to automatically push your production-ready site to your hosting setup.

**Reminder:** When running the production task, gulp will not fire up the express server and serve your index.html. This task is designed to be run before the `deploy` step that may copy the files from `/build` to a production web server.

##### Testing

A Gulp tasks also exists for running the test framework (discussed in detail below). Running `gulp test` will run any and all tests inside the `/test` directory and show the results (and any errors) in the terminal.

---

### Testing

We include a simple framework for unit and end-to-end (e2e) testing via [Karma](http://karma-runner.github.io/), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/). In order to test AngularJS modules, the [angular.mocks](https://docs.angularjs.org/api/ngMock/object/angular.mock) module is used.

All of the tests can be run at once with the command `gulp test`. However, the tests are broken up into two main categories:

##### End-to-End (e2e) Tests

e2e tests, as hinted at by the name, consist of tests that involve multiple modules or require interaction between modules, similar to integration tests. These tests are carried out using the Angular library [Protractor](https://github.com/angular/protractor), which also utilizes Mocha. The goal is to ensure that the flow of your application is performing as designed from start to finish.

All e2e tests are run with `gulp protractor`. The command `npm run-script preprotractor` should be run once before running any Protractor tests (in order to update the webdrivers used by Selenium).

##### Unit Tests

Unit tests are used to test a single module (or "unit") at a time in order to ensure that each module performs as intended individually. In AngularJS this could be thought of as a single controller, directive, filter, service, etc.

All unit tests are run with `gulp unit`.
