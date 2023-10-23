"use client"

import React, { useState } from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';


const AuthLinks = () => {

  const [open,setOpen] = useState(false);
  const status = "notauthenticated"
  return <>
   {
    status === "notauthenticated" ? (
      <Link href = "/login">Login</Link>
    ) : (
      <>
      <Link href = "/write">Write</Link>
      <span className={styles.links}>Logout</span>
    </>
    )
   }
   <div className={styles.burger}  onClick={()=> {
          console.log(setOpen(!open))
        }}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
   </div>
   {
    open && (
      <div className={styles.responsiveMenu}
      > 
        <Link href = "/">Homepage</Link>
        <Link href = "/">About</Link>
        <Link href = "/">Contact</Link>
        {
    status === "notauthenticated" ? (
      <Link href = "/login">Login</Link>
    ) : (
      <>
      <Link href = "/write">Write</Link>
      <span className={styles.links}>Logout</span>
    </>
    )
   }
      </div>
    )
   }
  </>
   
}

export default AuthLinks;