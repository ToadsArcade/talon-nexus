import { Button } from "@/components/ui/button";

const Home = () => {
  const ddxLinks = [
    { name: "DDX 1", url: "#" },
    { name: "DDX 2", url: "#" },
    { name: "DDX 3", url: "#" },
    { name: "DDX 4", url: "#" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460]">
      {/* Starry particle effect */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {ddxLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="group"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full h-32 text-xl font-semibold bg-secondary hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {link.name}
              </Button>
            </a>
          ))}
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
              className="w-full md:w-auto px-12 h-32 text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-2 border-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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
