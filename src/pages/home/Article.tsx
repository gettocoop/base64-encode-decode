import { Typography } from "antd";

export function Article() {
  return (
    <div>
      <Typography.Title level={3}>What is Base64?</Typography.Title>
      <Typography.Paragraph>
        Base64 encoding, at its core, is a method to represent binary data in a
        text-based format, offering a versatile solution for scenarios where
        preserving the integrity of binary information is crucial. The name
        &quot;Base64&quot; stems from the fact that it utilizes a base of 64
        characters to encode data. In this process, every three bytes (24 bits)
        of binary data are converted into four ASCII characters, allowing for a
        compact and easily readable representation.
      </Typography.Paragraph>
      <Typography.Paragraph>
        The character set employed in Base64 typically includes uppercase
        letters (A-Z), lowercase letters (a-z), digits (0-9), and two additional
        characters, often &apos;+&apos;, and &apos;/&apos;. The &apos;=&apos;
        character serves as padding when the binary data&apos;s bit count
        isn&apos;t a multiple of 24, ensuring a consistent representation
        length.
      </Typography.Paragraph>
      <Typography.Paragraph>
        To exemplify, consider encoding the string &quot;Hello, World!&quot;
        into Base64:
      </Typography.Paragraph>

      <Typography.Paragraph>
        Original string: Hello, World!
      </Typography.Paragraph>
      <Typography.Paragraph>
        Base64 encoding: SGVsbG8sIFdvcmxkIQ==
      </Typography.Paragraph>

      <Typography.Paragraph>
        Base64 is ubiquitous in applications such as email systems, where it
        facilitates the safe transmission of file attachments, and web
        development, where it&apos;s used for embedding data directly into web
        pages. Additionally, it plays a vital role in authentication mechanisms.
        Most programming languages provide built-in functions or libraries for
        seamless Base64 encoding and decoding, simplifying its integration into
        various software applications. This versatility makes Base64 a
        cornerstone in ensuring the secure and efficient exchange of binary data
        within text-based communication contexts.
      </Typography.Paragraph>
    </div>
  );
}
