import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Game {
  id: number;
  name: string;
  cover: string;
  url: string;
  author: string;
  authorLink?: string;
  featured?: boolean;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    filterAndSortGames();
  }, [games, searchQuery, sortBy]);

  const fetchGames = async () => {
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json"
      );
      const data = await response.json();
      setGames(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching games:", error);
      setLoading(false);
    }
  };

  const filterAndSortGames = () => {
    let filtered = games.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "id") {
      filtered.sort((a, b) => a.id - b.id);
    }

    setFilteredGames(filtered);
  };

  const openGame = (game: Game) => {
    window.open(`/?id=${game.id}`, "_blank");
  };

  const featuredGames = filteredGames.filter((game) => game.featured);
  const regularGames = filteredGames.filter((game) => !game.featured);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-lg bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-3xl font-bold text-foreground">Talon Games</h1>
            
            <div className="flex-1 flex gap-4 w-full md:w-auto">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-secondary border-border text-foreground"
              />
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-secondary border-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="id">ID (Date)</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-muted-foreground text-xl">Loading games...</div>
        ) : (
          <>
            {featuredGames.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Featured Games ({featuredGames.length})
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {featuredGames.map((game) => (
                    <Card
                      key={game.id}
                      className="group cursor-pointer overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      onClick={() => openGame(game)}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden bg-secondary">
                          <img
                            src={game.cover.replace("{COVER_URL}", "https://cdn.jsdelivr.net/gh/gn-math/covers@main")}
                            alt={game.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 bg-card group-hover:bg-accent transition-colors duration-300">
                          <p className="text-sm font-semibold text-foreground text-center line-clamp-2">
                            {game.name}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                All Games ({regularGames.length})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {regularGames.map((game) => (
                  <Card
                    key={game.id}
                    className="group cursor-pointer overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    onClick={() => openGame(game)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={game.cover.replace("{COVER_URL}", "https://cdn.jsdelivr.net/gh/gn-math/covers@main")}
                          alt={game.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 bg-card group-hover:bg-accent transition-colors duration-300">
                        <p className="text-sm font-semibold text-foreground text-center line-clamp-2">
                          {game.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Games;
