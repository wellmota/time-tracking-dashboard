import { Container } from "./layout/Container";
import { Colum } from "./layout/Colum";
import { ProfileCard } from "./components/cards/ProfileCard";
import { TimeTrackCard } from "./components/cards/TimeTrackCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <ProfileCard />
        <Colum>
          <TimeTrackCard category="study" />
          <TimeTrackCard category="work" />
          <TimeTrackCard category="exercise" />
          <TimeTrackCard category="selfCare" />
          <TimeTrackCard category="play" />
          <TimeTrackCard category="study" />
        </Colum>
      </Container>
    </main>
  );
}
