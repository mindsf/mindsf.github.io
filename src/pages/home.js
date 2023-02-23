import { useState , useEffect} from 'react';
import {db} from '../Firebase'
import {collection, getDocs,updateDoc,doc} from "firebase/firestore"
import Product from "../components/product";
import $ from "jquery"
function Home() {
    const [product,setproduct] = useState([]);
    const productCollectionRef = collection(db,"product");

    useEffect(()=>{
        const getProduct = async () => {
            const data = await getDocs(productCollectionRef)
            setproduct(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getProduct();
    }, [])
    return(
        <Product product={product}/>
    )
}

export default Home