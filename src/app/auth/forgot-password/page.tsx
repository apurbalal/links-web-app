"use client";
import { Button } from "@/component/button";
import { Container } from "@/component/flex";
import { Heading } from "@/component/heading";
import { Input } from "@/component/input";
import { Text } from "@/component/text";
import { auth } from "@/utils/configFirebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async () => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err: any) {
      const message = err.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {sent && (
        <Container card gap-4 col center>
          <Heading h2 textCenter>
            Email sent, check your inbox
          </Heading>
          <Text textCenter>
            We have sent a password reset link to your email address. Please
            check your inbox and follow the instructions in the email.
          </Text>
          <Link href="/auth/login">
            <Button primary>Back to login</Button>
          </Link>
        </Container>
      )}
      {!sent && (
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
            {error && (
              <Text textCenter danger>
                {error}
              </Text>
            )}
            <Button primary mt-2 disabled={loading} onClick={sendEmail}>
              {loading ? "Please wait..." : "Send password reset email"}
            </Button>
          </Container>
        </Container>
      )}
      <Text textCenter mt-5>
        Don&apos;t have an account? <a href="/auth/signup">Create an account</a>
      </Text>
    </>
  );
}
