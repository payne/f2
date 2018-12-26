// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCiUC8bpttdrzeiatwPC0pu9viXKS_-Zgg",
    authDomain: "matt-f2.firebaseapp.com",
    databaseURL: "https://matt-f2.firebaseio.com",
    projectId: "matt-f2",
    storageBucket: "matt-f2.appspot.com",
    messagingSenderId: "785098725722"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
