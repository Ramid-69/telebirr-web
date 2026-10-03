import Link from "next/link";

const bills = [
  { title: "Electricity", amount: "ETB 740", category: "Utility" },
  { title: "Internet", amount: "ETB 490", category: "Connectivity" },
  { title: "Water", amount: "ETB 300", category: "Utility" },
  { title: "School fee", amount: "ETB 2,100", category: "Education" },
  { title: "TV subscription", amount: "ETB 620", category: "Entertainment" },
  { title: "Insurance", amount: "ETB 1,150", category: "Protection" },
];

export default function BillsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] p-6 text-slate-800">
      <div className="mx-auto max-w-5xl rounded-[28px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Tele Birr</p>
            <h1 className="text-2xl font-bold">Pay bills</h1>
          </div>
          <Link href="/" className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium">Back home</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bills.map((bill) => (
            <div key={bill.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-[#dff8ed] text-xl text-[#0a8f5c] flex items-center justify-center">✓</div>
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-slate-500">{bill.category}</span>
              </div>
              <p className="font-semibold">{bill.title}</p>
              <p className="mt-2 text-xl font-bold">{bill.amount}</p>
              <button className="mt-5 w-full rounded-2xl bg-[#0a8f5c] px-4 py-3 text-sm font-semibold text-white">Pay now</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
