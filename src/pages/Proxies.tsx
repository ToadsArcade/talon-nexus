import { Card, CardContent } from "@/components/ui/card";

interface ProxyItem {
  name: string;
  url: string;
}

const Proxies = () => {
  const proxiesData: ProxyItem[] = [
    { name: "DaydreamX 1", url: "http://m9n8r2.ddx.desmosgraphing.xyz.cdn.cloudflare.net" },
    { name: "DaydreamX 2", url: "http://m9n8r2.ddx.desmosgraphing.xyz.cdn.cloudflare.net" },
    { name: "DaydreamX 3", url: "http://z3y7w5.ddx.desmos.lol.cdn.cloudflare.net" },
    { name: "DaydreamX 4", url: "http://q6t1u8.ddx.edpuzzle.icu.cdn.cloudflare.net" },
    { name: "DaydreamX 5", url: "http://l4s9v0.ddx.goguardian.pro.cdn.cloudflare.net" },
    { name: "DaydreamX 6", url: "http://h7d3n2.ddx.classroomx.xyz.cdn.cloudflare.net" },
    { name: "DaydreamX 7", url: "http://b2f6v9.ddx.notebookhub.io.cdn.cloudflare.net" },
    { name: "DaydreamX 8", url: "http://p5m1t3.ddx.studyzone.org.cdn.cloudflare.net" },
    { name: "DaydreamX 9", url: "http://k8q4r7.ddx.schoolproxy.edu.cdn.cloudflare.net" },
    { name: "DaydreamX 10", url: "http://t3j9w1.ddx.educationnet.com.cdn.cloudflare.net" },
    { name: "DaydreamX 11", url: "http://n2r6d5.ddx.lockerproxy.org.cdn.cloudflare.net" },
    { name: "DaydreamX 12", url: "http://y4k7m2.ddx.studenthub.net.cdn.cloudflare.net" },
    { name: "DaydreamX 13", url: "http://c9h8x1.ddx.classconnect.io.cdn.cloudflare.net" },
    { name: "DaydreamX 14", url: "http://g3d2v8.ddx.campushub.net.cdn.cloudflare.net" },
    { name: "DaydreamX 15", url: "http://r7p1f4.ddx.teachernet.org.cdn.cloudflare.net" },
    { name: "DaydreamX 16", url: "http://m2d5s9.ddx.academicportal.edu.cdn.cloudflare.net" },
    { name: "DaydreamX 17", url: "http://f1k8n6.ddx.edulearn.org.cdn.cloudflare.net" },
    { name: "DaydreamX 18", url: "http://j4q2r9.ddx.schoolzone.org.cdn.cloudflare.net" },
    { name: "DaydreamX 19", url: "http://x8c3t7.ddx.studentaccess.net.cdn.cloudflare.net" },
    { name: "DaydreamX 20", url: "http://w6v2d5.ddx.studyportal.io.cdn.cloudflare.net" }
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
              About These Proxies
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                These DaydreamX proxies provide secure and reliable access to blocked websites. 
                Each proxy is hosted on Cloudflare's global network for optimal performance.
              </p>
              <p>
                Click on any proxy to open it in a new tab. If one doesn't work, try another.
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
