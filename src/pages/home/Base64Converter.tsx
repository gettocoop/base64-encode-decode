import { Input, Button, Space } from "antd";
import { useState } from "react";

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

export function Base64Converter() {
  const [encodeValue, setEncodeValue] = useState("");
  const [encodeResult, setEncodeResult] = useState("");

  const [decodeValue, setDecodeValue] = useState("");
  const [decodeResult, setDecodeResult] = useState("");

  return (
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
  );
}
