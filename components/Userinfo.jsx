'use client';
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";


function UserInfo() {
    const {status, data:session} = useSession();

    if (status === 'authenticated') {
        return (
            <div className="shadow-xl rounded-md p-8 flex flex-col gap-2 bg-blue-500 text-white">
                <Image 
                    className="rounded-full"
                    src={session?.user?.image} 
                    height={60} width={60} 
                    alt="image"
                />
                <div>
                    Name: <span className="font-bold">{session.user.name}</span> 
                </div>
                <div>
                    Email: <span className="font-bold">{session.user.email}</span>
                </div>
            </div>
        )
    }
    else {
        return (<SignInBtn></SignInBtn>)

    }
}

export default UserInfo;