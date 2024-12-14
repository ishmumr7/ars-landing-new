import {
  ARSIndustry,
  Clients,
  Hero,
  OS,
  OurMission,
  Solutions,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <Solutions />
      <OS />
      <ARSIndustry />
      <Clients />
    </main>
  );
}
