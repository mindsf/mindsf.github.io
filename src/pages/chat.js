import '../styles/Board.css';
import { useState,useEffect } from 'react';
import {db} from '../Firebase'
import {collection, getDocs,addDoc,query,where} from "firebase/firestore"
import $ from "jquery"
import Images from '../components/images';
import { async } from '@firebase/util';
import '../styles/Chat.css';
import {Route,Link, Switch, Routes} from 'react-router-dom';
function Chat() {
    const chatroomRef = collection(db,"chatroom");
    var 내uid = JSON.parse(localStorage.getItem('user')).uid
    const [userProduct,setUserProduct ] = useState([]);
    const [domainParams,setDomainParams] = useState([]);
    var copy = [...userProduct]
    var copy2 = [...domainParams];
    useEffect(()=>{
        const userchat = async () => {
            const chatquery = query(chatroomRef,where("who","array-contains",내uid))
            const qureySnapshot = await getDocs(chatquery);
            qureySnapshot.forEach((doc)=>{
                copy.push(doc.data().product)
                copy2.push(doc.id)
                console.log(1)
            })
            setUserProduct(copy)
            setDomainParams(copy2)
        }
        userchat();
    },[])
    return (
        <>
            <h1 style={{textAlign:'center'}}>ChatList</h1>
            {userProduct.map((value,idx)=>{
                var domain = "chatting/" + domainParams[idx]

                return (
                    <Link to={domain} style={{textDecoration:"none",color:"black"}} key={idx}>
                    <div className='chatList'>
                        <div className="chatTitle" >{value}</div>
                        <div className="chatDate" >2023년 2월 21일</div>
                    </div></Link>    
                )
            })}
        </>
    )
}


export default Chat