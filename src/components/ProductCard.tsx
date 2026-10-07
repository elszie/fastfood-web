import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    description: string;
    emoji: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-[#f2d7ac] bg-[#fffaf5] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#fff0d9] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a35e1d]">
            {product.category}
          </span>
          <span className="text-xs font-semibold text-[#c65c0d]">★ {product.rating}</span>
        </div>
        <div className="mt-4 flex h-24 items-center justify-center rounded-2xl bg-[#fff3dd] text-6xl">
          {product.emoji}
        </div>
      </CardHeader>

      <CardContent className="space-y-2 px-4 pb-0">
        <CardTitle className="text-xl font-bold text-[#2f241d]">{product.name}</CardTitle>
        <CardDescription className="min-h-[48px] text-sm text-[#6c4f3d]">{product.description}</CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4 pb-4 pt-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#9a7868]">Price</p>
          <p className="text-2xl font-black text-[#c65c0d]">₱ {product.price}</p>
        </div>

        <Button className="rounded-full bg-[#e8731a] text-white hover:bg-[#c85a0a]">Add</Button>
      </CardFooter>
    </Card>
  );
}
