import { Card, CardContent } from "@/components/ui/card";

interface ProxyItem {
  name: string;
  url: string;
}

const Proxies = () => {
  const proxiesData: ProxyItem[] = [
    { name: "LuminalOS", url: "https://luminal.cfd.cdn.cloudflare.net/" }
  ];

  const openProxy = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
            Talon Proxies
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {proxiesData.map((proxy, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openProxy(proxy.url)}
              >
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="text-base font-bold text-foreground">
                      {proxy.name}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span>Online</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-card border-border mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About LuminalOS
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                LuminalOS provides secure and reliable access to blocked websites. 
                Hosted on Cloudflare's global network for optimal performance.
              </p>
              <p>
                Click on the proxy to open it in a new tab.
              </p>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center text-muted-foreground py-6 border-t border-border">
          © 2025 Talon — Built by Aiden
        </footer>
      </div>
    </div>
  );
};

export default Proxies;
