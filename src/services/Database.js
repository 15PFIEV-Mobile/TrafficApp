import {firebaseApp} from './ConfigFirebase';
import moment from 'moment';

const itemsRef = firebaseApp.database().ref('Streams') 

export function updateDB(base64){
    const streamRef = itemsRef.child('1')
    streamRef.update({
        frame : base64,
    })
}

export function setDB(location){
    const now = moment().format()
    console.log(now)
    const streamRef = itemsRef.child('1')
    streamRef.set({
        location: location,
        frame: '',
        likes: 0,
        comments: 0,
        startAt: now,
    })
}