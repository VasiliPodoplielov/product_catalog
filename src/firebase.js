import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFRI0gZ-VdC7TGHlZtXcAyF_PFq-q8vc4",
  authDomain: "product-catalog-27973.firebaseapp.com",
  databaseURL: "https://product-catalog-27973.firebaseio.com",
  projectId: "product-catalog-27973",
  storageBucket: "product-catalog-27973.appspot.com",
  messagingSenderId: "927638686901",
  appId: "1:927638686901:web:760b83617be3349dfbc2fc"
};


firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default firebase;
