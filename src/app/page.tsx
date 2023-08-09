import { ProgressDemo } from "@/components/progress-component";
import { TabsDemo } from "@/components/tabs-component";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-3 items-center justify-items-center mt-3">
      <TabsDemo />
      <ProgressDemo />
    </main>
  );
}
