# SpotifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Description

This simple project contains search inputs, one for all kind of music inside the API information, and the other one only to playlists. 
Besides, it has a register form, where you can register. This has nothing to do with spotify information, is only for testing purposes. After you register yourself, you can login in the login tab, and once you are logged in, you can see all the users who are registered, and delete them if necessary.

## Important

1) First, you need to install the dependencies mentionated in scripts/spotifyKey.js
For this, you'll have to run the following:
npm install isomorphic-fetch
npm install btoa
npm install path
npm install fs

2) After this, you'll need to run the spotifyToken script, so:

npm run getSpotifyToken

This auto-generated code expires every couple of hours. If you see that you app is not making the call, please re-run it.

This script for the API token was made by the ng-book guys. I want to thank them for this, their code really helped me with this project. Also, my colleague Valentin.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
