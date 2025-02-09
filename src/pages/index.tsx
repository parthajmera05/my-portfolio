import Dock from "@/components/Dock";
import MacWindow from "@/components/MacWindow";
import Profile from "@/components/Profile";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
    <MacWindow>
      <Profile />
      <Dock />
    </MacWindow>
    
    </div>
  );
}
