import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
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

    const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password)
    
    const userProfileUpdate = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
 
    const googleLongIn = provider =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
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

    // userSingIn, googleLongIn , githubLongIn

    const authInfo = {
        user,
        createUserEmailPassword,
        userProfileUpdate,
        googleLongIn,
        userLogin,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;