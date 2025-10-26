import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 relative overflow-hidden bg-background">
      {/* Starry particle effect */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
          }}
        />
      ))}
      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Floating Halloween elements */}
      <div className="absolute top-8 left-8 text-6xl" style={{ animation: 'float-around-1 8s ease-in-out infinite' }}>🎃</div>
      <div className="absolute top-16 right-12 text-5xl" style={{ animation: 'float-around-2 10s ease-in-out infinite 1s' }}>🎃</div>
      <div className="absolute bottom-12 left-16 text-7xl" style={{ animation: 'float-around-3 12s ease-in-out infinite 2s' }}>🎃</div>
      <div className="absolute bottom-8 right-8 text-6xl" style={{ animation: 'float-around-1 9s ease-in-out infinite 3s' }}>🎃</div>
      
      <div className="text-center space-y-12 max-w-4xl w-full relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground tracking-tight">
            🎃 Talon // Unblocked Games 🎃
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Built by Aiden
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://luminal.cfd.cdn.cloudflare.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-64 h-20 text-xl font-semibold bg-secondary hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-accent"
            >
              🌐 LuminalOS
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
