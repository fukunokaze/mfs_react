import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import { authenticateUserFake } from "@/services/loginService";
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    authorize(c) {
      if (c.password !== "password") return null
      return {
        id: "test",
        name: "Test User",
        email: "test@example.com",
      }
    },
  }),
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")

  export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
    pages: {
      signIn: "/login",
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