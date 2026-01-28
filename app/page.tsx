import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Nodes } from "@/components/sections/Nodes";
import { Process } from "@/components/sections/Process";
import { Deployments } from "@/components/sections/Deployments";
import { Engagement } from "@/components/sections/Engagement";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Proof />
      <Nodes />
      <Process />
      <Deployments />
      <Engagement />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
