import React, { useState } from 'react';
import {collection, getDocs,updateDoc,doc} from "firebase/firestore"
import {db} from '../Firebase'
import {Routes,Route,Link} from 'react-router-dom'
const Product = ({product}) => {
    var [heart,setheart] = useState(0)
    return (
        <>
            {product.map((value,idx)=> {
                idx = idx.toString()
                var domain = "details/" + idx
                return (
                        <div className='product' key={value.id}>
                            <div className='pic'>
                            <img className="productImg" src={value.대표이미지}></img>
                            </div>
                            <div className="content">
                            <Link to ={domain} style={{textDecoration: "none",color:"black"}}><p id='contentName'>{value.제목}</p></Link>
                                <p id='contentDate'>{getImegap(value.시간, value.날짜)}</p>
                                <p id='contentValue'>{value.가격}원</p>
                                <p style={{textAlign:'right' ,paddingRight:'10px'}}><span id = "item" onClick={()=> {setheart(!heart)}}>❤</span>{heart ? 1 : 0}</p>
                            </div>
                        </div>
                )
            })}
        </>
    );
}

const getImegap = (timed, dated)=>{
        var msgap = Date.now() - timed
        var minutegap = Math.floor((Date.now() - timed) / 60000);
        var hourgap = Math.floor((Date.now() - timed) / 3600000);
        if (hourgap > 24) {
            return <p>{dated}</p>;
        }
        else if (minutegap > 60) {
            return <p>{hourgap}시간 전</p>;
        } 
        else if(msgap > 0)  {
            return <p>{minutegap}분 전</p>;
        }
        else {
            return<p>0분전</p>
        }
}


export default Product