import React, { useEffect, useState } from 'react';
import {Auth, getAuth, onAuthStateChanged, User} from "firebase/auth";
import  "firebase/compat/auth";

const auth: Auth = getAuth();

export function useAuthentication(){
    const [user, setUser] = useState<User>();

    useEffect(() =>{
        const unsubscribeFromAuthStateChanged = onAuthStateChanged (auth, (user) => {
            if(user){
                // Usuario esta autenticado
                setUser(user);
            } else {
                // Usuario no autenticado
                setUser(undefined);
            }
        });
        return unsubscribeFromAuthStateChanged;
    },[]);
    
    return {user};
}