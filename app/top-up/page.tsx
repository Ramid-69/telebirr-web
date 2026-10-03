import Link from "next/link";

const topupPlans = [
  { label: "ETB 100", value: 100 },
  { label: "ETB 250", value: 250 },
  { label: "ETB 500", value: 500 },
  { label: "ETB 1,000", value: 1000 },
  { label: "ETB 2,500", value: 2500 },
  { label: "ETB 5,000", value: 5000 },
];

export default function TopUpPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] p-6 text-slate-800">
      <div className="mx-auto max-w-5xl rounded-[28px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Tele Birr</p>
            <h1 className="text-2xl font-bold">Top up wallet</h1>
          </div>
          <Link href="/" className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium">Back home</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 grid grid-cols-2 gap-3">
              {topupPlans.map((plan) => (
                <button key={plan.value} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-[#0a8f5c] hover:bg-[#ecfdf5]">
                  <p className="text-lg font-bold">{plan.label}</p>
                  <p className="text-xs text-slate-500">Instant top-up</p>
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="mb-2 block text-sm font-medium">Custom amount</label>
              <input defaultValue="1500" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3" />
            </div>
          </div>

          <div className="rounded-[28px] bg-[#0d1b2a] p-5 text-white">
            <p className="text-sm text-slate-300">Payment method</p>
            <div className="mt-4 rounded-2xl bg-white/5 p-4">
              <p className="font-semibold">Tele Birr account</p>
              <p className="mt-2 text-sm text-slate-300">+251 9xx xxx xxx</p>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between"><span>Top-up</span><span>ETB 1,500</span></div>
              <div className="flex justify-between"><span>Service fee</span><span>ETB 0</span></div>
              <div className="h-px bg-white/20" />
              <div className="flex justify-between text-lg font-bold"><span>Total</span><span>ETB 1,500</span></div>
            </div>

            <button className="mt-8 w-full rounded-2xl bg-[#0a8f5c] px-4 py-3 font-semibold text-white">
              Confirm top-up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
