import { User,Credentials } from "@/lib/types"
import { Login, Register } from "../actions"


export default async function Init(){
   const usuario:User= {
    email:"qwerAlex@gmail.com",
    telephone:"984785632",
    country:"peru",
    name:"manuel",
    last_name:"gomez",
    username:"jerry",
    password:"123456789",
    auth_id:"",
   }
    await Register(usuario)

    const user:Credentials= {
        email:"qwerAlex@gmail.com",
        password:"123456789"
       }
    await Login(user)
    return(<div>Hola Mundo</div>)
}