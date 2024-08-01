import Head from 'next/head'
import React from 'react'
import Image from 'next/image';

export default function index() {
  return (
    <>
    <Head>
      <title>Warning</title>
      <meta name="description" content="Warning" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column'

    }}>
      <Image
      src="/warning.png"
      alt='warning icon'
      height={100}
      width={100}
      />
      <h1
        style={{
          fontSize: '2rem',
          color: 'black',
          marginTop:"6px",
          marginBottom:"4px"
        }}
      >Alert</h1>
      <p style={{marginBottom:"8px"}}>
      The VPS is setting Up .
      </p>
      <p>Please check in few hours..</p>
      </div>
      </>
  )
}
