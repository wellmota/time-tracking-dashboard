import { Container } from "./components/layout/Container";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <h1>Hello World!</h1>
      </Container>
    </main>
  );
}
