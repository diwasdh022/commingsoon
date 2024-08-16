import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>DPBF</title>
        <meta
          name="description"
          content="Deppak Prakash Baskota Foundation Website"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image src="/logo.png" alt="logo" height={280} width={280} />
        <h1
          style={{
            fontSize: "2rem",
            color: "black",
            marginTop: "24px",
            marginBottom: "8px",
            color: "#005050",
          }}
        >
          Comming Soon...
        </h1>
      </div>
    </>
  );
}
