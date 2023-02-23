import React from 'react';
import {useState,useEffect} from 'react';
import {collection, getDocs,addDoc,doc,query,where} from "firebase/firestore"
import {db} from '../Firebase'
import {Routes,Route,Link, useParams} from 'react-router-dom'
import '../styles/Detail.css'
import { get } from 'jquery';
import { async } from '@firebase/util';
import  {Swiper,SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore , { Navigation} from "swiper";
function Detail(props) {
    const {id} = useParams();
    const chatroomRef = collection(db,"chatroom");
    var 내uid = JSON.parse(localStorage.getItem('user')).uid
    var 판매자uid = props.product[id]?.uid
    var 상품명 = props.product[id]?.제목
    var 이미지 = props.product[id]?.대표이미지
    var success = true
    const chat = async () => {
        const chatquery = query(chatroomRef,where("who" ,'array-contains-any',[내uid,판매자uid]))
        const qureySnapshot = await getDocs(chatquery);
        qureySnapshot.forEach((doc)=>{
            if(doc.data().who[0] === 내uid && doc.data().who[1] === 판매자uid) {
                success = false
            }
        })
        if(success) {
            var 데이터 = {
                who : [내uid,판매자uid],
                product : 상품명,
            }
            await addDoc(chatroomRef,데이터).then(()=>{
                alert('채팅올리기가 성공하셨습니다.')
                window.location.href = '/'
            }).catch(()=>{
                alert('채팅올리기 도중 에러가 발생했습니다.')
            })
        }
        else {
            alert('이미 올리셨습니다.')
        }
    }
    return (
                <div key={props.product.id}>
                    <div id='detail'>
                        <img id = "detail-img" src={이미지}></img>
                        <div id='detail-name'>상품명 : {상품명}</div>
                        <div id='detail-price'>가격 : {props.product[id]?.가격}</div>
                        <div id='detail-content'>내용 : {props.product[id]?.내용}</div>
                        <button id="detail-button" onClick={chat}>chat</button>
                    </div>
                </div>
    )
}
export default Detail