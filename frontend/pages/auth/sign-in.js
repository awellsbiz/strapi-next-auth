import Head from "next/head";
import styles from "../../styles/SignIn.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = async (e) => {
    e.preventDefault();
    // use strapi to authenticate user
    const result = await fetch("http://localhost:1337/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),

    });
    const data = await result.json();
    if (result.ok && data.jwt) {
      router.replace("/protected");
      return;
    }
    alert("Credentials Not Valid");
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <h1>Sign In</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        name="email" 
        type="email" 
        className={styles.input}
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        style={{ color: "red" }}
        
        />

        <label style={{ marginTop: 10,}} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          style={{ color: "red" }}
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
    

          className={styles.input}
        />
        <button
          className={styles.button}
          style={{
            marginTop: 15,
          }}
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
