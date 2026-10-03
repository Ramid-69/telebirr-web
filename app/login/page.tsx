import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-5xl px-4 py-6">{children}</div>;
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#eafaf2] via-white to-[#ecfdf5] p-6">
      <Container>
        <div className="grid min-h-[80vh] items-center gap-8 md:grid-cols-2">
          <div className="rounded-[30px] bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a8f5c] text-xl font-bold text-white">
                T
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Tele Birr</p>
                <h1 className="text-2xl font-bold">Welcome back</h1>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
                <input
                  defaultValue="+251 9xx xxx xxx"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0a8f5c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  defaultValue="password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0a8f5c]"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" /> Remember me
                </label>
                <span>Forgot password?</span>
              </div>

              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-2xl bg-[#0a8f5c] px-4 py-3 font-semibold text-white shadow-md"
              >
                Sign in
              </Link>

              <div className="text-center text-sm text-slate-500">
                Don&apos;t have an account? <span className="font-semibold text-[#0a8f5c]">Create one</span>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] bg-gradient-to-br from-[#0a8f5c] to-[#12b76a] p-8 text-white shadow-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">Secure payments</p>
              <h2 className="mt-4 text-4xl font-bold">Fast, simple, and trusted.</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-emerald-100">Wallet balance</p>
                <p className="mt-2 text-3xl font-bold">ETB 18,450</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-emerald-100">Transfers this month</p>
                <p className="mt-2 text-3xl font-bold">ETB 42,200</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
