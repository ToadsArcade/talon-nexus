const News = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold text-foreground">News/Updates</h1>
        <div className="bg-card border border-border rounded-lg p-8 mt-8">
          <p className="text-2xl text-destructive font-semibold">
            CodeHS has been blocked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
