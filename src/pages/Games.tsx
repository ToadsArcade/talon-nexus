import { useEffect } from "react";

const Games = () => {
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/AASINGLEFILE.html?t=${Date.now()}`)
      .then(response => response.text())
      .then(text => {
        const newWin = window.open("about:blank", "_blank");
        if (newWin) {
          newWin.document.open();
          newWin.document.write(text);
          newWin.document.close();
        }
      });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">📚 Loading Math Homework...</h1>
        <p className="text-muted-foreground">Opening in a new tab</p>
      </div>
    </div>
  );
};

export default Games;
