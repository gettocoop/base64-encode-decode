/* eslint-disable react/no-unescaped-entities */
import { Layout, Typography } from "antd";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { Article } from "./Article";
import { PageMeta } from "./PageMeta";
import { Base64Converter } from "./Base64Converter";

export default function Home() {
  return (
    <>
      <PageMeta />
      <main className="App">
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
            padding: 20,
          }}
        >
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
