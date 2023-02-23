import {db} from "../Firebase"
import { getDatabase, ref, set } from "firebase/database";

export function sendChat(data){
    return db.ref("chats").push ({
        message: data.message,
        uid:data.uid,
    });
}