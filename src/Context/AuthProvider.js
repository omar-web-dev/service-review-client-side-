import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth';
import app from "../firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    
    const userProfileUpdate = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courantUser => {
            setUser(courantUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])


    const authInfo = {
        user,
        createUserEmailPassword,
        userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;