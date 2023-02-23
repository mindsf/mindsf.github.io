import React from 'react';
import {useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faPlusSquare,faUpDown} from "@fortawesome/free-solid-svg-icons"
import {collection, getDocs,updateDoc,doc,addDoc,query,orderBy} from "firebase/firestore"
import {db} from '../Firebase'
import Detail from '../components/detail'
import {Routes,Route,Link, useParams,useLocation} from 'react-router-dom'
import '../styles/Chatting.css'
import { async } from '@firebase/util';
import $ from 'jquery'
function Chatting() {
    var [product,setproduct] = useState([])
    var 내uid = JSON.parse(localStorage.getItem('user')).uid
    var location = useLocation();
    var chatParameter = location.pathname
    var newchatParameter = chatParameter.replace("/chat/chatting/","")
    const messageRef = doc(db,"chatroom",newchatParameter)
    const submessageRef = collection(messageRef,"message")
    const submessageRef2 = query(collection(messageRef,"message"),orderBy('date'))
    useEffect(()=>{
        const getUser = async ()=>{
            const data = await getDocs(submessageRef2)
            setproduct(data.docs.map((doc)=>(doc.data().content)))
        }
        getUser();
    },[])
    const sendMessage = async () =>{
        var 데이터 = {
            content : $('#chat-msg').val(),
            date:new Date,
            uid: 내uid,
        }
        await addDoc(submessageRef,데이터)
        const data = await getDocs(submessageRef2)
        setproduct(data.docs.map((doc)=>([doc.data().content,doc.data().uid])))
    }
    return (
        <div>
            <div className="col-9 p-0">
                <div className="chat-room">
                    <div className='chat-list'>
                        {product.map((val)=>{
                            if (val[0].length != 0) {
                                if(내uid == val[1]) {
                                    return (
                                        <>
                                        <div className='user mine'>
                                            <div className ="chat-text">{val[0]}</div>
                                            <div className ="chat-icon"><FontAwesomeIcon icon={faUser}/></div>
                                        </div>
                                        <p></p>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                        <div className='user'>
                                            <div className ="chat-icon"><FontAwesomeIcon icon={faUser}/></div>
                                            <div className ="chat-text">{val[0]}</div>
                                        </div>
                                        <p></p>
                                        </>
                                    )
                                }
                            }
                        })}
                    </div>
                    <div className='chat-send'>
                        <textarea id="chat-msg" placeholder='문자를 입력후 tab키'></textarea>
                        <button id='chat-button' onClick={sendMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chatting