// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDPdNxLhmmXNf18MiYh_q2gDSqq1JPZgUM",
    authDomain: "alarm-46e17.firebaseapp.com",
    databaseURL: "https://alarm-46e17.firebaseio.com",
    projectId: "alarm-46e17",
    storageBucket: "alarm-46e17.appspot.com",
    messagingSenderId: "838537501020"
  },
  api: 'http://devalarm-api.thatguy.co.za',
  end_point: {
    'notification': 'event'
  }
};
