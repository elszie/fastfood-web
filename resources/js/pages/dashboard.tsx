import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-[#fffaf2] px-6 py-10 text-[#2f241d]">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c65c0d]">Dashboard</p>
                            <h1 className="mt-2 text-3xl font-black">Your QuickCrave order center</h1>
                        </div>
                        <button className="rounded-full bg-[#e8731a] px-5 py-3 text-sm font-semibold text-white">New order</button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            ['Open orders', '4'],
                            ['Favorites', '12'],
                            ['Avg. delivery', '15 min'],
                        ].map(([label, value]) => (
                            <div key={label} className="rounded-2xl border border-[#f0d8b0] bg-white p-5 shadow-sm">
                                <p className="text-sm uppercase tracking-[0.2em] text-[#9a7868]">{label}</p>
                                <p className="mt-4 text-3xl font-black text-[#c65c0d]">{value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-[#f0d8b0] bg-[#fff3dd] p-6 shadow-sm">
                        <h2 className="text-2xl font-bold">Popular picks</h2>
                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {['Hotsilog', 'Beef Burger', 'Mango Juice'].map((item) => (
                                <div key={item} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-[#f2d8a9]">
                                    <p className="text-xl font-bold">{item}</p>
                                    <p className="mt-2 text-sm text-[#6c4f3d]">Fresh, fast, and ready when you are.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
