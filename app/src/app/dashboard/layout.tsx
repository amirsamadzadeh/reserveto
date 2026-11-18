export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[16rem_1fr] xl:grid-cols-[18.5rem_1fr] mx-6.25">
      <aside className="hidden lg:block bg-white me-7.75">test</aside>

      <div className="grid min-w-0 grid-cols-4 gap-x-1.5 gap-y-xl md:grid-cols-12 lg:grid-cols-[repeat(12,minmax(0,83px))] lg:justify-center">
        {children}
      </div>
    </div>
  );
}