import { log } from "console";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            // You can add more user properties here if needed
            // For example, roles, permissions, etc.
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        token?: string;
        // You can add more JWT properties here if needed
        // For example, roles, permissions, etc.
    }
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "user@example.com" },
                password: { label: "Password", type: "password", placeholder: "password123" }
            },
            async authorize(credentials, req) {
                // Here you would typically fetch user data from a database
                // For demonstration purposes, we will use a static user object
                log("Authorizing user with credentials:", credentials);
                log("Environment variables:", {
                    username: process.env.AUTH_USERNAME,
                    password: process.env.AUTH_PASSWORD,
                });

                // Check if credentials match the environment variables
                // This is a simple example; in a real application, you would validate against a database
                if (!credentials || credentials.email !== process.env.AUTH_USERNAME || credentials.password !== process.env.AUTH_PASSWORD) {
                    throw new Error("Wrong email or password");
                }
                const user = {
                    id: "1",
                    name: "John Doe",
                    email: credentials.email,
                    image: "https://example.com/johndoe.jpg", // Placeholder image URL
                    // You can add more user properties as needed
                    // e.g., roles, permissions, etc.
                    // This is where you would typically return user data from your database
                    // For example, you might fetch the user from a database and return it here.
                };
                return user;
            }
        })
    ],
    pages: {
        signIn: "/signin", // Custom sign-in page
        error: "/error" // Error page
    },
    session: {
        strategy: "jwt", // Use JWT for session management
    },
    callbacks: {
        async jwt({ token, user }) {
            // If user is available, add it to the token
            // This is where you can add additional user information to the JWT token
            // For example, you might want to include user roles or permissions
            // so that they can be accessed in the client-side application.
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            // Add user information to the session object
            // This allows you to access user data in your client-side application
            if (session.user) {
                session.user.id = typeof token.id === "string" ? token.id : undefined;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image as string;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET, // Use a secret for signing the JWT
});

export { handler as GET, handler as POST };