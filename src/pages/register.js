import { useState,useEffect } from 'react';
import {collection, getDocs,addDoc} from "firebase/firestore"
import { getDatabase, ref, set } from "firebase/database";
import {firebaseAuth,createUserWithEmailAndPassword,db} from "../Firebase";
import $, { type } from "jquery"
import { async } from '@firebase/util';
import {Routes,Route,Link} from 'react-router-dom'
import '../styles/Register.css'
function Register() {
    const userColletionRef = collection(db,"users");
    const register = async ()=> {
        var 유저내용 = {
            아이디 : $('#id').val(),
            비밀번호 : $('#psword').val(),
        }
        const createUser = await createUserWithEmailAndPassword(firebaseAuth,유저내용.아이디,유저내용.비밀번호)
        .then(async ()=>{
            await addDoc(userColletionRef,유저내용)
            window.location.href = '/login'
        })
        .catch((err)=>{
            switch (err.code) {
                case 'auth/weak-password':
                  alert('비밀번호는 6자리 이상이어야 합니다');
                  break;
                case 'auth/invalid-email':
                  alert('잘못된 이메일 주소입니다');
                  break;
                case 'auth/email-already-in-use':
                  alert('이미 가입되어 있는 계정입니다');
                  break;
              }
        })
    }
    return(
        <div className="register-wrap">
            <div className='register-title'>
                <h1>Register</h1>
            </div>
            <div className='register-content'>
                <p><input id="id" type="text"/></p>
                <p><input id="psword" type="password"/></p>
            </div>
            <button id="register" onClick={register}>Register</button>
        </div>
    )
    
}
export default Register