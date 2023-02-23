import '../styles/Board.css';
import { useState,useEffect } from 'react';
import {db} from '../Firebase'
import {collection, getDocs,addDoc} from "firebase/firestore"
import $ from "jquery"
import Images from '../components/images';
import { async } from '@firebase/util';
function Board() {
    const [imageSrc, setImageSrc] = useState('');
    const productCollectionRef = collection(db,"product");
    const encodeFileToBase64 = (fileBlob)=> {
        const reader =  new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
    }    


    const serverFiles = async ()=>{
        var 템플릿 = {
            제목 : $('#upload-name').val(),
            가격 : Number($('#upload-price').val()),
            시간: Date.now(),
            날짜 : new Date().toLocaleDateString(),
            내용 : $('#upload-content').val(),
            대표이미지 : imageSrc,
            uid : JSON.parse( localStorage.getItem('user') ).uid,
        }
        await addDoc(productCollectionRef,템플릿).then(()=>{
            alert('게시물 올리게에 성공하셨습니다.')
            window.location.href = '/'
        }).catch(()=>{
            alert('게시물 올리기에 실패하셨습니다.')
        })
        
    }
    return(
        <>
            <div className="filebox"> 
                <label htmlFor="file">업로드</label>
                <input id ="file"type="file" onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                }} />
            </div>
            <img id = "upload-img" src={imageSrc}></img>
            <input id='upload-name' placeholder='상품명'></input>
            <input id='upload-price' placeholder='가격'></input>
            <textarea id='upload-content' placeholder='내용'></textarea>
            <button id="upload-button" onClick={serverFiles}>send</button>
        </>
    )

}


export default Board