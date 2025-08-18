"use client"

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AuthProvider({children} : {children: React.ReactNode}) {
    const router = useRouter();
    const { currentUser } = useSelector((state: RootState) => state.userReducer);
    
    useEffect(() => {
        if(currentUser) {
            router.push("/dashboard");
        }else{
            router.push("/login");
        }
        
    }, [currentUser, router]);

    // if (load) return <div>Loading...</div>; // Uncomment if you want to show a loading state

    console.log("AuthProvider currentUser:", currentUser);

    if (currentUser === undefined) {
        return null;
    }

    return <>{children}</>;
}