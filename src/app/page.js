import { ProfileCard } from "./components/ProfileCard";
import { Container } from "./components/Container";
import { Card } from "./components/Card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <ProfileCard></ProfileCard>
        <div className="flex flex-row flex-wrap gap-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </Container>
    </main>
  );
}
