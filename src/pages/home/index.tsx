/* eslint-disable react/no-unescaped-entities */
import { Layout, Typography, Menu } from "antd";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { Article } from "./Article";
import { PageMeta } from "./PageMeta";
import { Base64Converter } from "./Base64Converter";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export default function Home() {
  console.log("hmm");
  return (
    <>
      <main className="App">
        <PageMeta />
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-8VKH56H32Y" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-8VKH56H32Y');
        `}
          </Script>
        </div>
        <Layout
          style={{
            height: "100%",
          }}
        >
          <Layout.Header
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
            }}
          >
            <Image
              style={{
                objectFit: "contain",
                filter:
                  "sepia(100%) hue-rotate(180deg) saturate(300%) brightness(1) contrast(1)",
              }}
              width={50}
              height={50}
              src={Logo.src}
              alt="logo"
            />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={[
                {
                  key: "1",
                  label: "encode",
                },
                {
                  key: "2",
                  label: "decode",
                },
                {
                  key: "3",
                  label: "encode/decode",
                },
                {
                  key: "4",
                  label: "about",
                },
              ]}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Layout.Header>
          <Layout.Content>
            <Typography.Title>Base64 Encode / Decode</Typography.Title>
            <Base64Converter />
          </Layout.Content>
          <div
            style={{
              height: 100,
            }}
          ></div>
          <Article />
        </Layout>
      </main>
    </>
  );
}
