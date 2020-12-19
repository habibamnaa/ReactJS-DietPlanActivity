import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCfNRMTdslWuRbBTCltfNJ8OLCZzzDbHDU",
    authDomain: "login-e5253.firebaseapp.com",
    projectId: "login-e5253",
    storageBucket: "login-e5253.appspot.com",
    messagingSenderId: "1083835206396",
    appId: "1:1083835206396:web:276ea61302d323e3a72579"
  };
  
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;