import Dock from "@/components/Dock";
import MacWindow from "@/components/MacWindow";
import Profile from "@/components/Profile";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
    <MacWindow>
      <Profile />
      <Dock />
    </MacWindow>
    
    </div>
  );
}
