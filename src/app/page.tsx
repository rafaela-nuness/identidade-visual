import Scene01 from "@/components/scenes/Scene01";
import Scene02 from "@/components/scenes/Scene02";
import Scene03 from "@/components/scenes/Scene03";
import Scene04 from "@/components/scenes/Scene04";
import Scene05 from "@/components/scenes/Scene05";
import Scene06 from "@/components/scenes/Scene06";
import Scene07 from "@/components/scenes/Scene07";
import Scene08 from "@/components/scenes/Scene08";
import Scene09 from "@/components/scenes/Scene09";
import Scene10 from "@/components/scenes/Scene10";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Scene01 />
        <Scene02 />
        <Scene03 />
        <Scene04 />
        <Scene05 />
        <Scene06 />
        <Scene07 />
        <Scene08 />
        <Scene09 />
        <Scene10 />
      </main>
    </SmoothScroll>
  );
}