import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Category } from "@/data/products";
import { Smartphone, Laptop, Headphones, Watch, Gamepad2, Camera, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Gamepad2,
  Camera,
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || Smartphone;

  return (
    <Link to={`/products?category=${category.id}`}>
      <Card className="group relative h-48 overflow-hidden transition-all duration-300 hover:shadow-lg">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <Icon className="mb-2 h-8 w-8" />
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p className="text-sm text-white/80">{category.productCount} products</p>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
