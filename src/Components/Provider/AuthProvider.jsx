
import { createContext, useEffect, useState } from 'react';

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';
export  const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [users,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const handleCreateUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin=(email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    

    const handleGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const handleLogOut=()=>{
        return signOut(auth)
    }

    const updateUserProfile=(users,name,imgUrl)=>{
        updateProfile(users, {
            displayName: name, photoURL: imgUrl
          })
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if (currentUser?.email) {
                fetch(`https://assignment-12-server-mahbubulalways.vercel.app/jwt`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ email: currentUser?.email }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    localStorage.setItem("token",data?.token);
                  });
              }
            setLoading(false)
        })

       return ()=> unsubscribe()

    },[])
    const authInfo={
        handleCreateUser,
        handleLogin,
        handleGoogle,
        handleLogOut,
        updateUserProfile,
        users,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;