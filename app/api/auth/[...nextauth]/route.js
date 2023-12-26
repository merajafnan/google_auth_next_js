import { connectMongoDB } from "@/lib/mongodb";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import User from "@/models/user";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope: ['profile', 'email'],
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log("User: ", user);
            console.log("Account: ", account);

            if (account.provider === "google") {
                const { name, email } = user;
                try {
                    await connectMongoDB();
                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ name, email })
                        });
    
                        if (res.ok) {
                            return user;
                        }
                    }

                } catch (error) {
                    console.log(error);

                }
            }

            return user;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
