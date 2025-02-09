import Dock from "@/components/Dock";
import ProjectGrid from "@/components/Grid";
import MacWindow from "@/components/MacWindow";


export default function Projects() {
    return (
        <div className="w-screen h-screen bg-black">
        <MacWindow>
            <ProjectGrid />
            <Dock />
        </MacWindow>
    
    </div>
    );
}