import { AuthProvider } from "@/app/context/AuthContext"
import { Slot } from "expo-router"
import AuthHandler from "@/app/AuthHandler"
import {ChallengesProvider} from './context/ChallengesContext'

export default function Layout() {
 return (< AuthProvider>
        <ChallengesProvider>
 
   
        
            <AuthHandler />
            <Slot />
        
    
    
    </ChallengesProvider></AuthProvider>
 )
}