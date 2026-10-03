import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] p-6 text-slate-800">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Tele Birr</p>
            <h1 className="text-2xl font-bold">Profile</h1>
          </div>
          <Link href="/" className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium">Back home</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] bg-[#0a8f5c] p-6 text-white">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">AB</div>
            <h2 className="text-2xl font-bold">Aster Bekele</h2>
            <p className="mt-2 text-sm text-emerald-100">Premium account</p>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-emerald-100">Wallet ID</p>
              <p className="mt-2 text-xl font-semibold">TB-09284-332</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Phone number</p>
              <p className="mt-2 text-lg font-semibold">+251 9xx xxx xxx</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 text-lg font-semibold">aster.bekele@email.com</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Security</p>
              <p className="mt-2 text-lg font-semibold">PIN enabled • 2-factor auth</p>
            </div>
            <button className="w-full rounded-2xl bg-[#0a8f5c] px-4 py-3 font-semibold text-white">Edit profile</button>
          </div>
        </div>
      </div>
    </main>
  );
}
