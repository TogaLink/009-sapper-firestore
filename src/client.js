import * as sapper from '@sapper/app';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);
window.firebase = app;
window.db = app.firestore();
sapper.start({
  target: document.querySelector('#sapper'),
});
