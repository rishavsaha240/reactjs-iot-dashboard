import firebase from "firebase";

const firebaseProjectName = "personal-project-4551d";

const config = {
  apiKey: "AIzaSyBhDwyIjQgjNOaFPL0YMIdnSjGVN0t0UeI",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);

export default firebase;
