import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography, Input, Layout, Button, Space } from "antd";
import { useState } from "react";
import Script from "next/script";

const { Title, Paragraph, Text, Link } = Typography;

const inter = Inter({ subsets: ["latin"] });

function encodeToBase64(text: string) {
  const utf8Bytes = new TextEncoder().encode(text);

  const base64Encoded = btoa(
    String.fromCharCode.apply(null, Array.from(utf8Bytes))
  );

  return base64Encoded;
}

function decodeFromBase64(base64Encoded: string) {
  try {
    const utf8Bytes = new Uint8Array(
      atob(base64Encoded)
        .split("")
        .map((char) => char.charCodeAt(0))
    );

    const decodedText = new TextDecoder().decode(utf8Bytes);
    return decodedText;
  } catch (error) {
    return "Invalid base64";
  }
}

export default function Home() {
  const [encodeValue, setEncodeValue] = useState("");
  const [encodeResult, setEncodeResult] = useState("");

  const [decodeValue, setDecodeValue] = useState("");
  const [decodeResult, setDecodeResult] = useState("");

  return (
    <>
      <Head>
        <title>Base64 Encode / Decode</title>
        <meta name="description" content="do base64 encode simple and fast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="App"
        style={{
          height: "100vh",
        }}
      >
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
          <Script id="google-adSense">
            {`     
            async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2984708726957940"
            crossorigin="anonymous"
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
            <div
              style={{
                display: "flex",
              }}
            >
              <Space
                size="middle"
                direction="vertical"
                style={{
                  width: "40%",
                }}
              >
                <Input.TextArea
                  placeholder="Encoding data"
                  size="large"
                  value={encodeValue}
                  onChange={(event) => {
                    setEncodeValue(event.target.value);
                    setEncodeResult(encodeToBase64(event.target.value));
                  }}
                />

                <Input.TextArea
                  size="large"
                  placeholder="Write the letters and it will encode them for you"
                  value={encodeResult}
                />

                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={async () => {
                      const text = await navigator.clipboard.readText();
                      setEncodeValue(text);
                      setEncodeResult(encodeToBase64(text));
                    }}
                  >
                    Paste clipboard data
                  </Button>

                  <div style={{ width: 20 }} />

                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(encodeResult);
                    }}
                  >
                    Copy to clipboard
                  </Button>
                </div>
              </Space>

              <div style={{ width: 20 }} />

              <Space
                size="middle"
                direction="vertical"
                style={{
                  width: "40%",
                }}
              >
                <Input.TextArea
                  placeholder="Decode data"
                  size="large"
                  value={decodeValue}
                  onChange={(event) => {
                    setDecodeValue(event.target.value);
                    setDecodeResult(decodeFromBase64(event.target.value));
                  }}
                />

                <Input.TextArea
                  size="large"
                  placeholder="Result"
                  value={decodeResult}
                />

                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={async () => {
                      const text = await navigator.clipboard.readText();
                      setDecodeValue(text);
                      setDecodeResult(decodeFromBase64(text));
                    }}
                  >
                    Paste clipboard data
                  </Button>

                  <div style={{ width: 20 }} />

                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(decodeResult);
                    }}
                  >
                    Copy to clipboard
                  </Button>
                </div>
              </Space>
            </div>
          </Layout.Content>
        </Layout>
      </main>
    </>
  );
}
