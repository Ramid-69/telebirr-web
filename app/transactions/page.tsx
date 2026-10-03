import Link from "next/link";

const txs = [
  { name: "Aster Bekele", id: "TRX-1024", time: "Today, 09:42 AM", amount: "- ETB 2500", status: "Completed" },
  { name: "Mekelle Hotel", id: "TRX-1019", time: "Yesterday, 5:15 PM", amount: "- ETB 3200", status: "Completed" },
  { name: "Salary", id: "TRX-1008", time: "Mon, 7:10 PM", amount: "+ ETB 18000", status: "Received" },
  { name: "Addis Electric", id: "TRX-998", time: "Sun, 8:30 PM", amount: "- ETB 740", status: "Completed" },
  { name: "Tele Birr Top-up", id: "TRX-971", time: "Sat, 9:50 AM", amount: "+ ETB 1500", status: "Completed" },
];

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] p-6 text-slate-800">
      <div className="mx-auto max-w-5xl rounded-[28px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Tele Birr</p>
            <h1 className="text-2xl font-bold">Transactions</h1>
          </div>
          <Link href="/" className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium">Back home</Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 text-sm font-semibold text-slate-600">Name</th>
                <th className="p-4 text-sm font-semibold text-slate-600">ID</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Date</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Status</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              {txs.map((tx) => (
                <tr key={tx.id} className="border-t border-slate-200">
                  <td className="p-4 font-medium">{tx.name}</td>
                  <td className="p-4 text-slate-500">{tx.id}</td>
                  <td className="p-4 text-slate-500">{tx.time}</td>
                  <td className="p-4">
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">{tx.status}</span>
                  </td>
                  <td className={`p-4 font-bold ${tx.amount.startsWith("+") ? "text-emerald-600" : "text-slate-700"}`}>{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
