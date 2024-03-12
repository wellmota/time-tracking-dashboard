import { Card } from "./components/Card";
import { Container } from "./components/Container";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <Card>1</Card>
        <Card>2</Card>
      </Container>
    </main>
  );
}
