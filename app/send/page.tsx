import Link from "next/link";

export default function SendPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] p-6 text-slate-800">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Tele Birr</p>
            <h1 className="text-2xl font-bold">Send money</h1>
          </div>
          <Link href="/" className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium">Back home</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Recipient</label>
              <input defaultValue="Aster Bekele" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Phone number</label>
              <input defaultValue="+251 92 123 4567" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Amount</label>
              <input defaultValue="2500" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Reason</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <option>Family support</option>
                <option>Shopping</option>
                <option>Business</option>
                <option>School fees</option>
              </select>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#0a8f5c] p-5 text-white">
            <p className="text-sm text-emerald-100">Summary</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><span>Transfer</span><span>ETB 2,500</span></div>
              <div className="flex justify-between"><span>Fee</span><span>ETB 0</span></div>
              <div className="flex justify-between"><span>Tax</span><span>ETB 0</span></div>
              <div className="my-3 h-px bg-white/20" />
              <div className="flex justify-between text-lg font-bold"><span>Total</span><span>ETB 2,500</span></div>
            </div>

            <button className="mt-8 w-full rounded-2xl bg-white px-4 py-3 font-semibold text-[#0a8f5c]">
              Confirm transfer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
