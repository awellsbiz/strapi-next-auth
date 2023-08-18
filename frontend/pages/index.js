import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log('session.jwt', session.jwt);

  }, [session]);
   
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Strapi</title>
        </Head>
        <h1>
          {session ? 'Welcome ' + session.user.email : 'Please sign in'}</h1>
          {
            session && (
              <div style={{ marginBottom: 10 }}>
                <h3>Session Data</h3>
                <div>Email: {session.user.email}</div>
                <div>JWT from Strapi: Check console</div>
              </div>
            )}
            {session ? (
              <button onClick={signOut}>Sign out</button>
            ) : (
              <Link href="/auth/sign-in">
                <button> Sign In </button>
              </Link>
            )}
            <Link href="/protected">
              <button
                style={{
                  marginTop: 10,
                }}
                >Protected Page</button>
            </Link>
            </div>
            );
            }




// ----------------------------------------------

// import React from "react";
// import { useState } from "react";


// export default function Home({ session }) {
//   const data = {
//     email: "",
//     password: "",
//   };
//   const [formData, setFormData] = useState(data);

  
  
//   return (
//     <div className="max-w-[280px] mx-auto">
//       <div className="flex flex-col items-center mt-[10vh]">
//         <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
//           Sign Up
//         </h2>
//         <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
//           <span className="text-gray-700 font-medium">
//             Continue with Google
//           </span>
//         </button>
//         <span className="mb-2 text-gray-900">Or</span>
//         <form>
//           <input
//             type="text"
//             className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
//             placeholder="Email"
//             value=""
//           />
//           <input
//             type="password"
//             className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
//             placeholder="Password"
//             value=""
//           />
//           <input
//             type="password"
//             className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
//             placeholder="Confirm password"
//             value=""
//           />
//           <button className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
//             Log In
//           </button>
//         </form>
//         <p className="text-center mt-3 text-[14px]">
//           Already have an account?
//           <a href="/signup" className="text-gray-600">
//             Log In
//           </a>
//         </p>
//         <p className="text-center mt-3 text-[14px]">
//           By clicking continue, you agree to our
//           <a href="/terms" className="text-gray-600">
//             Terms of Service
//           </a>{" "}
//           and{" "}
//           <a href="/privacy" className="text-gray-600">
//             Privacy Policy
//           </a>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }
