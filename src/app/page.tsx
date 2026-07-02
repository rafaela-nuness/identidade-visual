import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Scene01 from "@/components/scenes/Scene01";
import Scene02 from "@/components/scenes/Scene02";
import Scene03 from "@/components/scenes/Scene03";
import Scene04 from "@/components/scenes/Scene04";
import Scene05 from "@/components/scenes/Scene05";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Scene01 />
        <Scene02 />
        <Scene03 />
        <Scene04 />
        <Scene05 />
      </main>

      <Footer />
    </>
  );
}