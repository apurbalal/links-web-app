import Image from "next/image";
import styles from "./page.module.css";
import { Button } from '@/component/button';
import { Divider } from '@/component/divider';
import { Container } from '@/component/flex';
import { Heading } from '@/component/heading';
import { Text } from '@/component/text';
import { Input } from '@/component/input';

export default function Home() {
  return (
    <Container card m-5>
      <Heading h1>Custom design system</Heading>
      <Divider />
      
      <Container col gap-2 mt-5>
        <Heading h2>Buttons</Heading>
        <Divider />
        <Button>Primary button</Button>
        <Button outline>Outline button</Button>
        <Button link>Link button</Button>
        <Button danger>Danger button</Button>
        <Button disabled>Disabled button</Button>
      </Container>

      <Container col gap-2 mt-4>
        <Heading h2>Headings</Heading>
        <Divider />
        <Heading h1>Heading 1</Heading>
        <Heading h2>Heading 2</Heading>
        <Heading h3>Heading 3</Heading>
        <Heading h4>Heading 4</Heading>
        <Heading h5>Heading 5</Heading>
        <Heading h6>Heading 6</Heading>
      </Container>

      <Container col gap-2 mt-4>
        <Heading h2>Text</Heading>
        <Divider />
        <Text level-sm>Text small</Text>
        <Text level-md>Text medium</Text>
        <Text level-lg>Text large</Text>     
      </Container>

      <Container col gap-2 mt-4>
        <Heading h2>Input</Heading>
        <Divider />
        <Input placeholder="Input" />
      </Container>
    </Container>
  );
}
