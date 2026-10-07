import { useEffect, useMemo, useState } from 'react';
import { getProducts, type Product } from './api/products';
import { ProductCard } from './components/ProductCard';

const categories = ['All', 'Rice Bowl', 'Drinks', 'Burgers', 'Fries'];

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    void getProducts().then(setProducts);
  }, []);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, search, selectedCategory]);

  return (
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
            <a href="#" className="text-[#5d463a] transition hover:text-[#c65c0d]">Home</a>
            <a href="#" className="text-[#5d463a] transition hover:text-[#c65c0d]">Menu</a>
            <a href="#" className="text-[#5d463a] transition hover:text-[#c65c0d]">How it works</a>
            <a href="#" className="text-[#5d463a] transition hover:text-[#c65c0d]">Favorites</a>
          </nav>

          <div className="flex gap-3">
            <button className="rounded-full border border-[#d9a05b] bg-white px-4 py-2 text-sm font-semibold text-[#c65c0d] transition hover:bg-[#fff0d7]">
              Login
            </button>
            <button className="rounded-full bg-[#e8731a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c85a0a]">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
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
              <button className="rounded-full bg-[#e8731a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c85a0a]">
                Order now
              </button>
              <button className="rounded-full border border-[#d7b57d] bg-white px-5 py-3 text-sm font-semibold text-[#c65c0d] transition hover:bg-[#fff3dd]">
                See menu
              </button>
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

        <section className="mt-12">
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-[#e7c892] bg-white p-12 text-center text-[#6c4f3d]">
              No items match your search yet.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
