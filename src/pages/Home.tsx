import { Button } from "@/components/ui/button";

const Home = () => {
  const ddxLinks = [
    { name: "DDX 1", url: "#" },
    { name: "DDX 2", url: "#" },
    { name: "DDX 3", url: "#" },
    { name: "DDX 4", url: "#" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-card p-8">
      <div className="text-center space-y-12 max-w-4xl w-full">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground tracking-tight">
            Talon // Unblocked Games
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
