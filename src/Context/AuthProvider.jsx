import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/firebase";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loding, setLoding] = useState(true);

  const createuser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinuser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutuser = () => {
    return signOut(auth);
  };
  const mediaSignin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscript = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
      setLoding(false);
    });
    return unsubscript;
  }, []);
  const authinfo = {
    user,
    createuser,
    signinuser,
    logOutuser,
    mediaSignin,
    loding,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
