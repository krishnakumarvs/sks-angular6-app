// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyB0O8IXPSB6mfno6PQOvhVM4UtvLc41MY8",
    authDomain: "skc-app-dev.firebaseapp.com",
    databaseURL: "https://skc-app-dev.firebaseio.com",
    projectId: "skc-app-dev",
    storageBucket: "skc-app-dev.appspot.com",
    messagingSenderId: "977778048739"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
