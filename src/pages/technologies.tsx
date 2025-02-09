import Dock from "@/components/Dock";
import MacWindow from "@/components/MacWindow";
import Tech from "@/components/tech";


export default function Technologies() {
  return (
    <div className="w-screen h-screen bg-black">
    <MacWindow>
      <Tech />
      <Dock />
    </MacWindow>
    
    </div>
  );
}
