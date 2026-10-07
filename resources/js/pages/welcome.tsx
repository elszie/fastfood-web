import { Head, Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

const products = [
    { id: 1, name: 'Hotsilog', category: 'Rice Bowl', price: 70, rating: 4.8, description: 'Garlic fried rice with hotdog and sunny-side-up egg.', emoji: '🍳' },
    { id: 2, name: 'Baconsilog', category: 'Rice Bowl', price: 95, rating: 4.9, description: 'Garlic fried rice with crispy bacon and sunny-side-up egg.', emoji: '🥓' },
    { id: 3, name: 'Chicken Rice Bowl', category: 'Rice Bowl', price: 120, rating: 4.7, description: 'Steamed rice with crispy chicken, egg, and sauce.', emoji: '🍗' },
    { id: 4, name: 'Mango Juice', category: 'Drinks', price: 60, rating: 4.6, description: 'Fresh, sweet mango juice made for a quick refresh.', emoji: '🥭' },
    { id: 5, name: 'Orange Juice', category: 'Drinks', price: 60, rating: 4.5, description: 'Freshly squeezed orange juice with a bright citrus finish.', emoji: '🍊' },
    { id: 6, name: 'Beef Burger', category: 'Burgers', price: 80, rating: 4.8, description: 'Juicy beef patty with lettuce, tomato, and cheese.', emoji: '🍔' },
    { id: 7, name: 'Cheese Burger', category: 'Burgers', price: 90, rating: 4.9, description: 'Classic burger with melted cheese and a savory bite.', emoji: '🍔' },
    { id: 8, name: 'Barbecue Fries', category: 'Fries', price: 50, rating: 4.7, description: 'Golden crispy fries tossed in smoky barbecue seasoning.', emoji: '🍟' },
];

const categories = ['All', 'Rice Bowl', 'Drinks', 'Burgers', 'Fries'];

export default function Welcome() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [search, setSearch] = useState('');

    const visibleProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [search, selectedCategory]);

    return (
        <>
            <Head title="QuickCrave | Fast food, faster">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700,800,900" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-[#fffaf2] text-[#2f241d]">
                <header className="border-b border-[#f0d8b0] bg-[#fff8ee]">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f59e0b] text-lg shadow-sm">🍔</div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c65c0d]">QuickCrave</p>
                                <h1 className="text-xl font-bold">Fast food, faster.</h1>
                            </div>
                        </div>

                        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                            <a href="#home" className="text-[#5d463a] transition hover:text-[#c65c0d]">Home</a>
                            <a href="#menu" className="text-[#5d463a] transition hover:text-[#c65c0d]">Menu</a>
                            <a href="#how-it-works" className="text-[#5d463a] transition hover:text-[#c65c0d]">How it works</a>
                            <a href="#favorites" className="text-[#5d463a] transition hover:text-[#c65c0d]">Favorites</a>
                        </nav>

                        <div className="flex gap-3">
                            <Link
                                href={route('login')}
                                className="rounded-full border border-[#d9a05b] bg-white px-4 py-2 text-sm font-semibold text-[#c65c0d] transition hover:bg-[#fff0d7]"
                            >
                                Login
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-full bg-[#e8731a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c85a0a]"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </header>

                <main id="home" className="mx-auto max-w-6xl px-6 py-10">
                    <section className="grid items-center gap-8 rounded-3xl bg-[#fff3dd] p-8 shadow-sm ring-1 ring-[#f0d8b0] md:grid-cols-2">
                        <div>
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#c65c0d]">Served in 5–20 mins</p>
                            <h2 className="max-w-md text-4xl font-black leading-tight text-[#2f241d] md:text-5xl">
                                Cravings solved before your break ends.
                            </h2>
                            <p className="mt-4 max-w-lg text-base text-[#6c4f3d]">
                                Skip the line, grab your favorite meal, and keep your lunch break fast, easy, and delicious.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a href="#menu" className="rounded-full bg-[#e8731a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c85a0a]">
                                    Order now
                                </a>
                                <a href="#how-it-works" className="rounded-full border border-[#d7b57d] bg-white px-5 py-3 text-sm font-semibold text-[#c65c0d] transition hover:bg-[#fff3dd]">
                                    See menu
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#f2d8a9]">
                            <div className="text-center">
                                <div className="text-8xl">🍔</div>
                                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#a5714e]">Popular today</p>
                                <h3 className="mt-2 text-2xl font-bold">Combo Crunch</h3>
                                <p className="mt-2 text-[#6c4f3d]">Burger + fries + drink</p>
                                <div className="mt-4 flex items-center justify-center gap-3">
                                    <span className="text-3xl font-black text-[#c65c0d]">₱ 180</span>
                                    <span className="rounded-full bg-[#fff4dc] px-2 py-1 text-xs font-bold text-[#9c5a1d]">Best value</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="menu" className="mt-12">
                        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c65c0d]">Menu</p>
                                <h3 className="mt-1 text-3xl font-bold">Choose your craving</h3>
                            </div>

                            <div className="w-full max-w-md rounded-full border border-[#f0d8b0] bg-white px-3 py-2 shadow-sm">
                                <input
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search food..."
                                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#8b6b53]"
                                />
                            </div>
                        </div>

                        <div className="mb-8 flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                    className={
                                        selectedCategory === category
                                            ? 'rounded-full bg-[#e8731a] px-4 py-2 text-sm font-semibold text-white shadow-sm'
                                            : 'rounded-full border border-[#f0d8b0] bg-white px-4 py-2 text-sm font-semibold text-[#3f2d22] hover:bg-[#fff7ef]'
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {visibleProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className="overflow-hidden rounded-2xl border border-[#f2d7ac] bg-[#fffaf5] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="p-4 pb-2">
                                        <div className="flex items-center justify-between">
                                            <span className="rounded-full bg-[#fff0d9] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a35e1d]">
                                                {product.category}
                                            </span>
                                            <span className="text-xs font-semibold text-[#c65c0d]">★ {product.rating}</span>
                                        </div>
                                        <div className="mt-4 flex h-24 items-center justify-center rounded-2xl bg-[#fff3dd] text-6xl">
                                            {product.emoji}
                                        </div>
                                    </div>

                                    <div className="space-y-2 px-4 pb-0">
                                        <h3 className="text-xl font-bold text-[#2f241d]">{product.name}</h3>
                                        <p className="min-h-[48px] text-sm text-[#6c4f3d]">{product.description}</p>
                                    </div>

                                    <div className="flex items-center justify-between px-4 pb-4 pt-3">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-[#9a7868]">Price</p>
                                            <p className="text-2xl font-black text-[#c65c0d]">₱ {product.price}</p>
                                        </div>
                                        <button className="rounded-full bg-[#e8731a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c85a0a]">
                                            Add
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {visibleProducts.length === 0 && (
                            <div className="mt-8 rounded-2xl border border-dashed border-[#e7c892] bg-white p-12 text-center text-[#6c4f3d]">
                                No items match your search yet.
                            </div>
                        )}
                    </section>

                    <section id="how-it-works" className="mt-16">
                        <div className="text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c65c0d]">How it works</p>
                            <h3 className="mt-2 text-3xl font-bold">Three quick steps to your food</h3>
                        </div>

                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {[
                                ['Choose your food', 'Pick your favorites from the menu and add to cart.'],
                                ['Order and pay', 'Place the order in a few taps and choose a payment option.'],
                                ['Pick up and enjoy', 'Your meal is prepared fast, ready when you are.'],
                            ].map(([title, copy], index) => (
                                <div key={title} className="rounded-2xl border border-[#f0d8b0] bg-white p-6 shadow-sm">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f59e0b] text-lg font-black text-white">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-xl font-bold text-[#2f241d]">{title}</h4>
                                    <p className="mt-2 text-[#6c4f3d]">{copy}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="mt-16 bg-[#2f241d] text-[#f5e7d1]">
                    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
                        <div>
                            <h4 className="text-xl font-bold text-white">QuickCrave</h4>
                            <p className="mt-3 text-sm text-[#e8d7b5]">Real food from local kitchens, delivered fast enough to satisfy the craving.</p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white">Explore</h5>
                            <ul className="mt-3 space-y-2 text-sm text-[#e8d7b5]">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#how-it-works">How it works</a></li>
                                <li><a href="#favorites">Favorites</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white">Support</h5>
                            <ul className="mt-3 space-y-2 text-sm text-[#e8d7b5]">
                                <li>FAQs</li>
                                <li>Track order</li>
                                <li>Contact</li>
                                <li>Allergens</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white">Hot drops</h5>
                            <p className="mt-3 text-sm text-[#e8d7b5]">Get new menu launches and local offers in your inbox.</p>
                            <input
                                className="mt-4 w-full rounded-full border border-[#d7b57d] bg-white px-4 py-2 text-sm text-[#2f241d] outline-none"
                                placeholder="Email address"
                            />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
