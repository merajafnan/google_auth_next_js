'use client';
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";


function UserInfo() {
    const {status, data:session} = useSession();

    if (status === 'authenticated') {
        return (
            <div>
                <Image src={session?.user?.image} height={60} width={60} alt="image"/>
                <div>
                    Name: <span>{session.user.name}</span>
                </div>
            </div>
        )
    }
    else {
        return (<SignInBtn></SignInBtn>)

    }
}

export default UserInfo;