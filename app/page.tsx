import Link from "next/link";

const quickActions = [
  { label: "Send", icon: "↗", color: "bg-green-500" },
  { label: "Top up", icon: "+", color: "bg-blue-500" },
  { label: "Pay bill", icon: "✓", color: "bg-yellow-500" },
  { label: "Withdraw", icon: "↓", color: "bg-purple-500" },
];

const transactions = [
  { name: "Aster Bekele", type: "Transfer", amount: "- ETB 2500", time: "Today, 09:42 AM", positive: false },
  { name: "Salary", type: "Incoming", amount: "+ ETB 18000", time: "Yesterday, 6:15 PM", positive: true },
  { name: "Ethiopian Airlines", type: "Flight", amount: "- ETB 4200", time: "Mon, 11:02 AM", positive: false },
  { name: "Addis Electric", type: "Bill", amount: "- ETB 740", time: "Sun, 8:30 PM", positive: false },
];

const services = [
  { name: "Airtime", emoji: "📱" },
  { name: "Bank", emoji: "🏦" },
  { name: "Shopping", emoji: "🛍️" },
  { name: "Transport", emoji: "🚕" },
  { name: "Food", emoji: "🍽️" },
  { name: "Health", emoji: "💊" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a8f5c] text-lg font-bold text-white shadow-md">
              T
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Tele Birr</p>
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full bg-white p-2 shadow-sm">🔔</button>
            <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfeee7] font-semibold text-[#0a8f5c]">
                AB
              </div>
              <div className="text-sm">
                <p className="font-semibold">Aster B.</p>
                <p className="text-xs text-slate-500">Premium</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-6 rounded-[28px] bg-gradient-to-r from-[#0a8f5c] via-[#0b9a62] to-[#13b06d] p-6 text-white shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-emerald-100">Available balance</p>
              <h2 className="mt-2 text-4xl font-bold">ETB 18,450.00</h2>
            </div>
            <button className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              Add money
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs text-emerald-100">Phone</p>
              <p className="mt-1 font-semibold">+251 9xx xxx xxx</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs text-emerald-100">Last top-up</p>
              <p className="mt-1 font-semibold">ETB 1,500</p>
            </div>
          </div>
        </section>

        <nav className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full bg-[#0a8f5c] px-4 py-2 text-sm font-medium text-white shadow-sm">Home</Link>
          <Link href="/send" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">Send</Link>
          <Link href="/top-up" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">Top up</Link>
          <Link href="/bills" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">Bills</Link>
          <Link href="/transactions" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">Transactions</Link>
          <Link href="/profile" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">Profile</Link>
        </nav>

        <section className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="rounded-2xl bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white ${action.color}`}>
                {action.icon}
              </div>
              <p className="font-semibold">{action.label}</p>
            </button>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <section className="rounded-[28px] bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Recent transactions</h3>
              <Link href="/transactions" className="text-sm font-medium text-[#0a8f5c]">View all</Link>
            </div>

            <div className="space-y-3">
              {transactions.map((tx) => (
                <div
                  key={`${tx.name}-${tx.time}`}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tx.positive ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"}`}>
                      {tx.positive ? "↗" : "↘"}
                    </div>

                    <div>
                      <p className="font-semibold">{tx.name}</p>
                      <p className="text-xs text-slate-500">{tx.type} • {tx.time}</p>
                    </div>
                  </div>

                  <p className={`font-bold ${tx.positive ? "text-emerald-600" : "text-slate-700"}`}>
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-[28px] bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-bold">Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service.name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-left transition hover:bg-slate-100"
                  >
                    <div className="mb-2 text-2xl">{service.emoji}</div>
                    <p className="font-medium">{service.name}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] bg-[#0d1b2a] p-5 text-white shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Wallet insights</h3>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs">+12.4%</span>
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-300">Monthly spend</p>
                <p className="mt-1 text-3xl font-bold">ETB 12,680</p>
              </div>

              <div className="mt-5 h-2.5 rounded-full bg-white/10">
                <div className="h-2.5 w-[68%] rounded-full bg-[#22c55e]" />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>Goal: ETB 20,000</span>
                <span>68%</span>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
