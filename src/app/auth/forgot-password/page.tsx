"use client";
import { Button } from "@/component/button";
import { Container } from "@/component/flex";
import { Heading } from "@/component/heading";
import { Input } from "@/component/input";
import { Text } from "@/component/text";
import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  return (
    <>
      <Container card gap-4 col>
        <Heading h2 textCenter>
          Forgot password
        </Heading>
        <Text textCenter>
          Enter your email address to receive a password reset link.
        </Text>
        <Container gap-2 col>
          <Input
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button primary>Send password reset email</Button>
        </Container>
      </Container>
      <Text textCenter mt-5>
        Don&apos;t have an account? <a href="/auth/signup">Create an account</a>
      </Text>
    </>
  );
}
