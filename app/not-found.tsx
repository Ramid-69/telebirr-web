export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] p-6">
      <div className="rounded-[28px] bg-white p-8 text-center shadow-sm">
        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Tele Birr</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-800">Page not found</h1>
        <p className="mt-2 text-slate-500">The page you requested does not exist.</p>
      </div>
    </main>
  );
}
