// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC301MYG6AA5XLTbJhn1M7w-c3lCKkvGTA',
    authDomain: 'todos-b7ef3.firebaseapp.com',
    databaseURL: 'https://todos-b7ef3.firebaseio.com',
    projectId: 'todos-b7ef3',
    storageBucket: 'todos-b7ef3.appspot.com',
    messagingSenderId: '626542073091'
  },
};
