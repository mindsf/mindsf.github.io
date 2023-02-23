import React from 'react';
import {useState,useEffect} from 'react';
import {collection, getDocs,updateDoc,doc} from "firebase/firestore"
import {db} from '../Firebase'
import Detail from '../components/detail'
import {Routes,Route,Link, useParams} from 'react-router-dom'
function Details() {
    const [product,setproduct] = useState([]);
    const productCollectionRef = collection(db,"product");

    useEffect(()=>{
        const getProduct = async () => {
            const data = await getDocs(productCollectionRef)
            setproduct(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getProduct();
    }, [])
    return (<Detail product={product}/>)
}
export default Details