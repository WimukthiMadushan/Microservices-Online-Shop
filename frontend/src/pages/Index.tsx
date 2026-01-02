import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, HeadphonesIcon, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products, categories, getFeaturedProducts } from "@/data/products";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  const trustBadges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support",
    },
    {
      icon: CreditCard,
      title: "Easy Returns",
      description: "30 day returns",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-muted">
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Premium Electronics
                <span className="block text-primary">For Modern Life</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Discover the latest tech gadgets and electronics at unbeatable prices. 
                Quality products, fast delivery, exceptional service.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button size="lg" asChild>
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products?category=phones">
                    View Phones
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto max-w-md">
              <img
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&h=600&fit=crop"
                alt="Featured Electronics"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                <p className="text-sm font-medium">New Arrivals</p>
                <p className="text-2xl font-bold">Up to 30% Off</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Shop by Category</h2>
            <p className="mt-1 text-muted-foreground">
              Browse our wide selection of electronics
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Featured Products</h2>
              <p className="mt-1 text-muted-foreground">
                Hand-picked top sellers for you
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products Preview */}
      <section className="container py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Latest Products</h2>
            <p className="mt-1 text-muted-foreground">
              Check out our newest arrivals
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Stay Updated on New Arrivals
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Subscribe to our newsletter and be the first to know about new products,
            exclusive deals, and special offers.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
