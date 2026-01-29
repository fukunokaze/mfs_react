import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { authenticateUser, UserCredential } from "./services/loginService"

const providers: Provider[] = [
  Credentials({
    credentials: { 
      username: { label: "Username", type: "text" }, 
      password: { label: "Password", type: "password" } 
    },
    async authorize(c) {
      const cred: UserCredential = { 
        password: c.password as string, 
        username: c.username as string 
      };
      
      try {
        const response = await authenticateUser(cred);
        if (!response.token) {
          throw new Error("Invalid credentials.")
        }
        return {
          id: "test",
          name: "Test User",
          email: "test@example.com",
        }
      } catch (e) {
        console.error("Authentication error:", e);
        return null;
      }
    },
  }),
]

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  // Only enable debug in development
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
})