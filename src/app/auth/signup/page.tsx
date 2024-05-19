"use client";
import { Button } from "@/component/button";
import { Container } from "@/component/flex";
import { Heading } from "@/component/heading";
import { Input } from "@/component/input";
import { Text } from "@/component/text";
import { functions } from "@/utils/configFirebase";
import { httpsCallable } from "firebase/functions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const createUserAccount = async () => {
    try {
      setLoading(true);
      const resp = await httpsCallable(
        functions,
        "createUserAccount",
      )({
        email,
        username,
        password,
      });

      if (resp.data) {
        router.push("/auth/login");
      }
    } catch (err: any) {
      const message = err.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container card gap-4 col>
        <Heading h2 textCenter>
          Create an account
        </Heading>
        <Container gap-2 col>
          <Input
            placeholder="Enter username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && (
            <Text mt-2 mb-2 style={{ color: "red" }}>
              {error}
            </Text>
          )}
          <Button primary mt-2 onClick={createUserAccount} disabled={loading}>
            {loading ? "Please wait..." : "Signup"}
          </Button>
        </Container>
      </Container>
      <Text textCenter mt-5>
        Already have an account? <a href="/auth/login">Login</a>
      </Text>
    </>
  );
}
