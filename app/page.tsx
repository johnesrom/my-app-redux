"use client"

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoginPage from "./login/page";

export default function Home() {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.userReducer); 
  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      router.replace("/dashboard");
    }
  }, [currentUser, router]);

  if (currentUser) return null;


  
  return <LoginPage />;
}
