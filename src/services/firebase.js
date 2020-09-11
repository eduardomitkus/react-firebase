import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDdI_8YZN9XDRV23WsuF88E9YAIRHYSu8M",
    authDomain: "chatty-b67ac.firebaseapp.com",
    databaseURL: "https://chatty-b67ac.firebaseio.com"
}

firebase.initializeApp(config)
export const auth = firebase.auth
export const db = firebase.database()