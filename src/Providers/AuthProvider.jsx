import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoaDing] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const creatUser = (email, password) => {
        setLoaDing(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoaDing(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        setLoaDing(true);
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn =()=>{
        return signInWithPopup(auth, githubProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoaDing(false);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        creatUser,
        signIn,
        LogOut,
        loading,
        googleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;