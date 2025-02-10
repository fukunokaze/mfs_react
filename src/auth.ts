import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { authenticateUserFake, authenticateUser, UserCredential } from "./services/loginService"

const providers: Provider[] = [
  Credentials({
    credentials: { username: { label: "Username", type: "username" }, password: { label: "Password", type: "password" } },
    async authorize(c) {
      const cred: UserCredential = { password: c.password, username: c.username } as UserCredential;
      console.log(cred);
      try {
        let response = await authenticateUser(cred);
        if (response.token == "") throw new Error("Invalid credentials.")
        return {
          id: "test",
          name: "Test User",
          email: "test@example.com",
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  }),
]

// export const providerMap = providers
//   .map((provider) => {
//     if (typeof provider === "function") {
//       const providerData = provider()
//       return { id: providerData.id, name: providerData.name }
//     } else {
//       return { id: provider.id, name: provider.name }
//     }
//   })
//   .filter((provider) => provider.id !== "credentials")

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  debug: true,
  logger: {
    error(code, ...message) {
      console.log(code, message)
    },
    warn(code, ...message) {
      console.log(code, message)
    },
    debug(code, ...message) {
      console.log(code, message)
    },
  },
})
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       credentials: {
//         username: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         try {
//           console.log(credentials.password);

//           // logic to salt and hash password
//           // const pwHash = saltAndHashPassword(credentials.password)

//           // // logic to verify if the user exists
//           // user = await getUserFromDb(credentials.email, pwHash)
//           const token = "11223344";

//           const user: User = {
//             id: token,
//             name: "faker",
//           };

//           // console.log(credentials);

//           if (!(credentials.username == "admin" && credentials.password == "password")) {
//             // No user found, so this is their first attempt to login
//             // Optionally, this is also the place you could do a user registration
//             throw new Error("Invalid credentials.")
//           }

//           // return user object with their profile data
//           return user
//         } catch (error) {
//           console.log(error);
//           return null;
//         }
//       },
//     }),
//   ],
// })