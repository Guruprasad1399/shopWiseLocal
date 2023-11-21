import { initializeApp } from 'firebase/app';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDKLprtR4Sb3fyiHTVrDOEbVrpidOWiEDc",
    authDomain: "shopwiselocal.firebaseapp.com",
    projectId: "shopwiselocal",
    storageBucket: "shopwiselocal.appspot.com",
    messagingSenderId: "628713007175",
    appId: "1:628713007175:web:96cba7f4165344803ee962",
    measurementId: "G-5H6LGJX3ZG"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };