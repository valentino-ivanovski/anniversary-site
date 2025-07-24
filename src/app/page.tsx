import StarryBackground from "./components/StarryBackground";
import StarJar from "./components/StarJar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      <StarryBackground />
      
      <div className="relative z-10">
        <StarJar />
      </div>
    </div>
  );
}
