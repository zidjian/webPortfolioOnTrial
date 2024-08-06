import { Credentials, User } from '@/lib/types';
import { createClient } from '@supabase/supabase-js'
import { google } from '@ai-sdk/google';
import { createOpenAI as createGroq } from '@ai-sdk/openai';
import { generateText,experimental_createProviderRegistry as createProviderRegistry, generateObject, tool, streamText } from 'ai';
import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Ojuju } from 'next/font/google';
const supabase = createClient('https://fsbkbozgyyfatbbbfcdj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzYmtib3pneXlmYXRiYmJmY2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MTk0NTMsImV4cCI6MjAzODQ5NTQ1M30.oYQ3Ha-5ORiZSeQgtv0px_UiJ6SgRU3qBNrk4__lcig')
const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY || ''
)

const registry = createProviderRegistry({
    google,
    /*groq: createGroq({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: process.env.GROQ_API_KEY
      }),*/
});

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

export async function GenerateText(params:any) {
    const result = await generateText({
        model: registry.languageModel('google:models/gemini-pro'),
      //model:registry.languageModel('groq:llama-3.1-70b-versatile'),
      //   maxTokens: 512,
      //  temperature: 0.3,
      //  maxRetries: 5,
        prompt: ' genera  una  frase  con  huesos  para  el  flaco  del  alex ',
      }); 
      return result.text  
}

  
export async function GernerateObject(params:any) {
    const  object  = await generateObject({
      model:registry.languageModel('groq:llama-3.1-70b-versatile'),
      schema: z.object({
        recipe: z.object({
          name: z.string(),
          temperature: z.array(z.object({ name: z.string(), amount: z.string() })),
          steps: z.array(z.string()),
        }),
      }),
      prompt: 'What is the weather like today?',
      // @ts-ignore: Unreachable code error
      tools: {
          weather: tool({
            description: 'Get the weather in a location',
            parameters: z.object({
              location: z.string().describe('The location to get the weather for'),
            }),
            execute: async ({ location }) => ({
              location,
              temperature: 72 + Math.floor(Math.random() * 21) - 10,
            }),
          }),
        },
    });
   return object 
}