"use client";
import { useUserSession } from "@/hooks/userUserSession";
import { Button } from "@/component/button";
import { Container } from "@/component/flex";
import { Heading } from "@/component/heading";
import { Input } from "@/component/input";
import { Text } from "@/component/text";
import { auth } from "@/utils/configFirebase";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginUser = async () => {
    setLoading(true);
    const user = await setPersistence(auth, browserLocalPersistence).then(() =>
      signInWithEmailAndPassword(auth, email, password),
    );

    if (user) {
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <>
      <Container card gap-4 col>
        <Heading h2 textCenter>
          Login
        </Heading>
        <Container gap-2 col>
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
          <Container row-rev mt-2 mb-2>
            <Link href="/auth/forgot-password">Forgot password?</Link>
          </Container>
          <Button primary onClick={loginUser} disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </Button>
        </Container>
      </Container>
      <Text textCenter mt-5>
        Don&apos;t have an account? <a href="/auth/signup">Create an account</a>
      </Text>
    </>
  );
}
