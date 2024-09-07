import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>Sprout Innovation</title>
        <meta name="description" content="Sprout Innovation Website" />
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
        <div
          style={{
            width: "40vw",
            height: "200px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/logo.png" alt="Logo" layout={"fill"} objectFit="contain" />
        </div>
        {/* <h1
          style={{
            fontSize: "5rem",
            color: "black",
            marginTop: "42px",
            marginBottom: "8px",
            color: "#2780B5",
          }}
        >
          Coming Soon
        </h1> */}
      </div>
    </>
  );
}
