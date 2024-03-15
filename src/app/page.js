import { Container } from "./components/layout/Container";
import { Colum } from "./components/layout/Colum";
import { ProfileCard } from "./components/cards/ProfileCard";
import { TimeTrackCard } from "./components/cards/TimeTrackCard";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <ProfileCard />
        <Colum>{
          <TimeTrackCard category="study" />}</Colum>
      </Container>
    </main>
  );
}
