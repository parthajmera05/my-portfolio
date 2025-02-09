import { useEffect, useState } from "react";
import Link from "next/link";

export default function MacWindow({ children }: { children: React.ReactNode }) {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      setDateTime(`${formattedDate} ${formattedTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl w-screen h-screen p-6">
      <div className="bg-[#0D1117] text-white rounded-lg shadow-lg border border-gray-700 w-full h-full flex flex-col">
        {/* MacOS Menu Bar */}
        <div className="flex justify-between items-center p-2 bg-[#161B22] rounded-t-lg h-10">
          {/* MacOS Buttons + Navigation */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 mr-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <nav className="flex space-x-4 text-gray-300 text-sm">
              <Link href="/" className="hover:text-white text-white text-bold">Home</Link>
              <Link href="/projects" className="hover:text-white text-white text-bold">Projects</Link>
              <Link href="/technologies" className="hover:text-white text-white text-bold">Technologies</Link>
            </nav>
          </div>

          {/* Date & Time on Right */}
          <div className="text-sm text-white text-bold">{dateTime}</div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full">{children}</div>
      </div>
    </div>
  );
}
