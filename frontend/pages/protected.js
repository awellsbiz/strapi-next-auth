// import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSession } from 'next-auth/react';

export default function Protected() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <h1>Protected Page</h1>
      <Link href="/">
        <button>Back to home page</button>
      </Link>
    </div>
  );
}

