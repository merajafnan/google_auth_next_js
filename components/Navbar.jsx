 'use client';
 import Link from "next/link";
 import { signIn, signOut, useSession } from "next-auth/react"; // To check uer is logged in 

 function Navbar () {
    const {status} = useSession();
    console.log(status);
    return (
        <div className="p-4 flex justify-between items-center shadow-lg">
            <Link className="font-bold text-lg text-blue-700" href={"/"}>GoogleAuthTest</Link>
            {status === 'authenticated' ? 
            (
                <button 
                    className="bg-slate-900 text-white px-6 py-2 rounded-md"
                    onClick={() => signOut()}
                    >
                    Sign Out
                    </button>
            ) : 
                <button 
                    className="bg-slate-900 text-white px-6 py-2 rounded-md"
                    onClick={() => signIn('google')}
                    >
                    Sign In
                    </button>
            }
        </div>
    ) 
 }

 export default Navbar;