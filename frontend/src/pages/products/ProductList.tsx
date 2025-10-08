import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { PageShell } from "../../components/PageShell";

const products = [
  {
    id: "creator-compass",
    title: "Creator Compass OS",
    description:
      "A Notion + Stripe + Typeform stack for validating audience demand and launching a monthly membership in under two weeks.",
    category: "Launch Kits",
    updatedAt: "Updated 2 days ago",
    metrics: "612 creators launched",
  },
  {
    id: "studio-pass",
    title: "Studio Pass Template",
    description:
      "A modular course framework with Medium-style lesson pages, premium storytelling prompts, and automated drip scheduling.",
    category: "Courses",
    updatedAt: "Updated 1 week ago",
    metrics: "4.8/5 from 143 reviews",
  },
  {
    id: "insight-debriefs",
    title: "Insight Debriefs Library",
    description:
      "50+ swipe-worthy teardown reports covering pricing pages, onboarding flows, and paid conversion journeys from top startups.",
    category: "Research",
    updatedAt: "Updated yesterday",
    metrics: "New drops every Friday",
  },
];

const ProductList = () => {
  return (
    <PageShell
      eyebrow="Product Marketplace"
      title="Medium-style playbooks for building and monetizing digital products"
      description="Curated kits engineered by the Lionduzz team. Each product combines storytelling polish with the operational tooling you need to launch fast."
      actions={
        <>
          <Button variant="outline" asChild className="px-6 py-5 text-base">
            <Link to="/products/create">Submit a product</Link>
          </Button>
          <Button asChild className="px-6 py-5 text-base">
            <Link to="/sales">View sales dashboard</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8">
        {products.map((product) => (
          <article
            key={product.id}
            className="group rounded-3xl border border-border bg-card/80 p-10 shadow-[var(--shadow-medium)] transition-transform hover:-translate-y-1"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground">
                {product.category}
              </span>
              <p className="text-sm text-muted-foreground">{product.updatedAt}</p>
            </div>
            <Link
              to={`/products/${product.id}`}
              className="mt-6 block text-3xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary"
            >
              {product.title}
            </Link>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
              <span>{product.metrics}</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/products/${product.id}`}>Read overview</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to={`/products/${product.id}/edit`}>Edit listing</Link>
                </Button>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </PageShell>
  );
};

export default ProductList;
