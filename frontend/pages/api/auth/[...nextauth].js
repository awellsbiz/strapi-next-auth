import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//import Providers from "next-auth/providers";
// import { signIn } from "services/auth";
// import { fetchStrapi } from "services/strapi";
// Q: what would i put in the services/strapi file?
// A: You can put the following code in services/strapi.js:
// // // frontend/services/strapi.js
// // export const fetchStrapi = async (path, options = {}) => {
// //   const defaultOptions = {
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   };
// //   const mergedOptions = {
// //     ...defaultOptions,
// //     ...options,
// //   };
// //   const requestUrl = `${
// //     process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
// //   }${path}`;
// //   const response = await fetch(requestUrl, mergedOptions);
// //   const data = await response.json();
// //   return data;
// // };
// //
// // Then you can use the fetchStrapi function in the services/auth.js file:
// // // frontend/services/auth.js
// // import { fetchStrapi } from "./strapi";
// //
// // export async function signIn({ email, password }) {
// //   try {
// //     const data = await fetchStrapi("/auth/local", {
// //       method: "POST",
// //       body: {
// //         identifier: email,
// //         password,
// //       },
// //     });
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }
// //
// // export async function signUp({ email, password, username }) {
// //   try {
// //     const data = await fetchStrapi("/auth/local/register", {
// //       method: "POST",
// //       body: {
// //         username,
// //         email,
// //         password,
// //       },
// //     });
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }
// //
// // export async function signOut() {
// //   try {
// //     const data = await fetchStrapi("/auth/logout", {
// //       method: "POST",
// //     });
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }
// //
// // export async function getMe() {
// //   try {
// //     const data = await fetchStrapi("/users/me");
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }
// //
// // export async function updateUser({ id, username, email, password }) {
// //   try {
// //     const data = await fetchStrapi(`/users/${id}`, {
// //       method: "PUT",
// //       body: {
// //         username,
// //         email,
// //         password,
// //       },
// //     });
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }
// //
// // export async function deleteUser({ id }) {
// //   try {

// //     const data = await fetchStrapi(`/users/${id}`, {
// //       method: "DELETE",
// //     });
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }
// //


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = { email: credentials.email, password: credentials.password };

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (user) {
        token.jwt = user.jwt;
      }
      return token;
    },
    async session(session, token) {
      session.jwt = token.jwt;
      return session;
    },
  },
});