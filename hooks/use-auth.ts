import { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from '../utils/firebase';

interface AuthState {
  loading: boolean;
  user?: null|firebase.User
}

export const useAuth = () => {
  const [authState, setState] = useState<AuthState>({
    loading: true,
    user: null
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authState =>
      setState({
        loading: false,
        user: authState
      })
    );
    return unsubscribe;
  }, []);

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return auth.signInWithPopup(provider);
  }

  const anonymously = () => {
    return auth.signInAnonymously();
  }

  return {
    ...authState,
    googleSignIn,
    anonymously,
  };
}
