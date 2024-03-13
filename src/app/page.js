import { Container } from "./layout/Container";
import { Colum } from "./layout/Colum";
import { ProfileCard } from "./components/cards/ProfileCard";
import { TimeTrackCard } from "./components/cards/TimeTrackCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <ProfileCard />
        <Colum>
          <TimeTrackCard />
          <TimeTrackCard />
          <TimeTrackCard />
          <TimeTrackCard />
          <TimeTrackCard />
          <TimeTrackCard />
        </Colum>
      </Container>
    </main>
  );
}
