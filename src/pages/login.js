import { useState,useEffect } from 'react';
import {db} from '../Firebase'
import {firebaseAuth,signInWithEmailAndPassword,} from "../Firebase";
import {onAuthStateChanged,signOut} from "firebase/auth";
import $ from "jquery"
import { async } from '@firebase/util';
import {Routes,Route,Link} from 'react-router-dom'
import '../styles/Login.css'
function Login() {
    const login = async ()=>{
        var 아이디 = $('#id').val();
        var 비밀번호 = $('#psword').val();
        signInWithEmailAndPassword(firebaseAuth,아이디,비밀번호).then((res)=>{
            window.location.href = '/'
        }).catch(()=>{
            alert('로그인에 실패하셨습니다.')
        })
    }
    onAuthStateChanged(firebaseAuth,(user)=>{
        if(user) {
            localStorage.setItem('user',JSON.stringify(user))
        }
    })
    const logout = async ()=> {
        signOut(firebaseAuth).then(()=>{
            localStorage.removeItem('user');
            alert('로그아웃이 되었습니다')
            window.location.href = '/'
        }).catch(()=> {
            alert('이미 로그아웃 하셨습니다.')
        })
    }
    return(
        <div className="login-wrap">
            <div className="login-title">
                <h1>Login</h1>
            </div>
            <div className='login-content'>
                <p><input id="id" type="text"/></p>
                <p><input id="psword" type="password"/></p>
            </div>
            <button id = "login" onClick={login}>Login</button>
            <button id = "logout" onClick={logout}>LogOut</button>
            <Link to="/register" style={{textDecoration:"none",color:"#81C147"}}><h3>회원가입 페이지</h3></Link>
        </div>
    )
    
}
export default Login