import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import * as  firebase  from  'firebase/auth';
import { resolve } from 'url';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {

  constructor(public loginAuth : AngularFireAuth) { }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) =>{
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.loginAuth.auth.signInWithPopup(provider).then(res =>{
        resolve(res);
      });
    });
  }

  doRegister(value: any){
    return new Promise<any>((resolve, reject)=> {
        firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
        });
    }
  }

