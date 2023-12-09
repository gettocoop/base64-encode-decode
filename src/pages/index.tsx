import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography, Input, Layout, Button, Space } from "antd";
import { useState } from "react";

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
  const utf8Bytes = new Uint8Array(
    atob(base64Encoded)
      .split("")
      .map((char) => char.charCodeAt(0))
  );

  const decodedText = new TextDecoder().decode(utf8Bytes);

  return decodedText;
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
                  onChange={(event) => setEncodeValue(event.target.value)}
                />

                <Input.TextArea
                  size="large"
                  placeholder="Result"
                  value={encodeResult}
                />

                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={() => {
                      setEncodeResult(encodeToBase64(encodeValue));
                    }}
                  >
                    Convert
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
                  onChange={(event) => setDecodeValue(event.target.value)}
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
                    onClick={() => {
                      setDecodeResult(decodeFromBase64(decodeValue));
                    }}
                  >
                    Convert
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
