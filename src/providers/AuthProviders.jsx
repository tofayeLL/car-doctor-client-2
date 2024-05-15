import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }





    // use effects for current user observe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }

            setUser(currentUser);
            // console.log('current user', currentUser);

            // if current user have then generate a token
            if (currentUser) {
              
              
                axios.post('https://car-doctor-server-2-eight.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(data => {
                        console.log(data.data);
                    })

            }
            else{
                axios.post('https://car-doctor-server-2-eight.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(data => {
                    console.log(data.data);
                })
            }
            setLoading(false);
        });

        return () => {
            return unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            <div>
                {
                    children
                }

            </div>

        </AuthContext.Provider>

    );
};

export default AuthProviders;