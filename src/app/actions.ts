import { Credentials, User } from '@/lib/types';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://fsbkbozgyyfatbbbfcdj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzYmtib3pneXlmYXRiYmJmY2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MTk0NTMsImV4cCI6MjAzODQ5NTQ1M30.oYQ3Ha-5ORiZSeQgtv0px_UiJ6SgRU3qBNrk4__lcig')



export async function Register(user: User) {
    const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
    })
    console.log("Register")
    console.log(data, error)
    if (!error) {
        const { password, ...currentUser } = user;
        currentUser.auth_id = data.user?.id || ""
        const { error } = await supabase
            .from('User')
            .insert({ ...currentUser })
        console.log(error)
        console.log("Register User")
        return currentUser
    }
    return "Ha ocurrido un error " + error?.message
}

export async function Login(user:Credentials) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
    })
    console.log("Credentials")
    console.log(data, error)
    if (!error){
        const { data:userDetail, error } = await supabase
        .from('User')
        .select()
        .eq('auth_id', data.user.id) 
        if(!error){
            const newUser = Object.assign(userDetail,data)
            console.log(newUser)
            console.log("User Data")
            return newUser
        }
    }
    return "Ha ocurrido un error " + error?.message
}

