import { Container } from "@/component/flex";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container col fg-full center>
      {children}
    </Container>
  );
}
