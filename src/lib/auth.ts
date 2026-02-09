import NextAuth, { DefaultSession, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authenticateUser, UserCredential } from "../services/loginService";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      /** to store token from web API */
      access_token: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
    accessToken?: string;
  }

  interface User {
    access_token: string;
  }
}

const providers = [
  Credentials({
    credentials: {
      username: { label: "Username", type: "username" },
      password: { label: "Password", type: "password" },
    },
    async authorize(c) {
      if (!c) {
        throw new Error("Credentials are required.");
      }
      const cred: UserCredential = {
        password: c.password,
        username: c.username,
      } as UserCredential;

      try {
        const response = await authenticateUser(cred);

        // Check if the backend returned an error
        if (!response.status || response.status !== 200) {
          // IMPORTANT: In Auth.js v5, throwing an error here
          // sends the user to the error page with ?error=CallbackRouteError
          // You can throw a string or a custom AuthError
          throw new Error(response.message || "INVALID_CREDENTIALS");
        }

        // Return the user object if authentication is successful
        return {
          id: "test-id", // Ensure you have a string ID
          name: "Test User",
          email: "test@example.com",
          access_token: response.token,
        };
      } catch (error) {
        // Catch network errors or the error thrown above
        if (error instanceof Error) {
          throw error;
        }
        return null;
      }
    },
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log(user.access_token);
      if (user) {
        token.id = user.id;
        token.access_token = user.access_token;
        console.log(user.access_token);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id && token.access_token) {
        session.user.id = token.id as string;
        session.user.access_token = token.access_token as string;
      }
      session.accessToken =
        (token.access_token as string | undefined) ?? undefined;
      return session;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith("/login");

      if (!isLoggedIn && !isOnLoginPage) {
        return false; // Redirect to login page
      }

      if (isLoggedIn && isOnLoginPage) {
        return Response.redirect(new URL("/", nextUrl)); // or wherever you want to redirect after login
      }

      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: true,
  logger: {
    error(code, ...message) {
      // console.log(code, message);
    },
    warn(code, ...message) {
      // console.log(code, message);
    },
    debug(code, ...message) {
      // console.log(code, message);
    },
  },
});
