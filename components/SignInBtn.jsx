'use client';
import Image from "next/image";
import { signIn } from "next-auth/react";

function SignInBtn() {
    return(
        <button 
        className="flex items-center gap-4 shadow-xl rounded-lg pl-3" 
        onClick={() => signIn("google")}
        >
        <Image src='/google-sign-in.png' height={50} width={50}/>
        <span className="bg-blue-500 text-white px-4 py-3" > Sign in with Google </span>
       
        </button>
    )
}

export default SignInBtn;