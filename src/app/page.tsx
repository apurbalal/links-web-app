"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/component/button";
import { Divider } from "@/component/divider";
import { Container } from "@/component/flex";
import { Heading } from "@/component/heading";
import { Text } from "@/component/text";
import { Input } from "@/component/input";
import { useUserSession } from "./hooks/userUserSession";

export default function Home() {
  const user = useUserSession();
  return (
    <Container card m-5>
      <Heading h2>{user ? "user loggedin" : "User not logged in"}</Heading>
    </Container>
  );
}
