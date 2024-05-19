import { Container } from "../flex";
import { Heading } from "../heading";

export const Header = () => (
  <Container row spaceBetween p-4>
    <Heading h2>Link web</Heading>
    <Container row gap-2>
      <a href="/auth/login">Login</a>
      <a href="/auth/signup">Signup</a>
    </Container>
  </Container>
);
