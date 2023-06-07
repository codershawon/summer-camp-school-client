import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseConfig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
export const AuthContext=createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password,photoURL) => {
      setLoading(true);
      return createUserWithEmailAndPassword(
        auth,
        email,
        password,
        photoURL
      );
    };
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("Logged in user in auth observer", currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);
    const updateUserProfile = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
        name,photoURL
      });
    }
    const authInfo = {
      user,
      createUser,
      signInUser,
      signInWithGoogle,
      logout,
      loading,
      updateUserProfile
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  

export default AuthProviders;