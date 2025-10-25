import { Button } from "@/components/ui/button";

const Home = () => {
  const ddxLinks = [
    { name: "DDX 1", url: "#" },
    { name: "DDX 2", url: "#" },
    { name: "DDX 3", url: "#" },
    { name: "DDX 4", url: "#" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center p-8 relative overflow-hidden"
         style={{
           background: 'linear-gradient(135deg, hsl(25 35% 8%), hsl(35 40% 12%), hsl(25 35% 8%), hsl(20 38% 10%))',
           backgroundSize: '400% 400%',
           animation: 'gradient-shift 15s ease infinite'
         }}>
      {/* Floating pumpkins */}
      <div className="absolute top-8 left-8 text-6xl" style={{ animation: 'float 3s ease-in-out infinite' }}>🎃</div>
      <div className="absolute top-16 right-12 text-5xl" style={{ animation: 'float-slow 4s ease-in-out infinite 0.5s' }}>🎃</div>
      <div className="absolute bottom-12 left-16 text-7xl" style={{ animation: 'float 3.5s ease-in-out infinite 1s' }}>🎃</div>
      <div className="absolute bottom-8 right-8 text-6xl" style={{ animation: 'float-slow 4.5s ease-in-out infinite 1.5s' }}>🎃</div>
      <div className="absolute top-1/2 left-4 text-5xl" style={{ animation: 'float 3.2s ease-in-out infinite 2s' }}>👻</div>
      <div className="absolute top-1/3 right-8 text-5xl" style={{ animation: 'float-slow 3.8s ease-in-out infinite 2.5s' }}>👻</div>
      <div className="absolute bottom-1/3 left-1/4 text-4xl" style={{ animation: 'float 3.6s ease-in-out infinite 3s' }}>🦇</div>
      <div className="absolute top-1/4 right-1/4 text-4xl" style={{ animation: 'float-slow 4.2s ease-in-out infinite 0.8s' }}>🦇</div>
      
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
      </div>
    </div>
  );
};

export default Home;
