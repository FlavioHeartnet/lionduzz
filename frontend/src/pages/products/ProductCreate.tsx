import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageShell } from "../../components/PageShell";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/products");
    }, 1200);
  };

  return (
    <PageShell
      eyebrow="Creator Toolkit"
      title="Publish a new product drop"
      description="Document the narrative that makes your product compelling. Medium-style storytelling paired with operational detail gives buyers confidence."
      actions={
        <Button variant="ghost" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      }
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-10 rounded-3xl border border-border bg-card/80 p-10 shadow-[var(--shadow-medium)]"
      >
        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Product title</Label>
            <Input id="title" name="title" placeholder="Medium-style membership launch kit" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" placeholder="Launch Kits" required />
          </div>
        </section>

        <section className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input id="tagline" name="tagline" placeholder="Craft a story that converts browsers into loyal members." required />
        </section>

        <section className="space-y-2">
          <Label htmlFor="story">Editorial overview</Label>
          <textarea
            id="story"
            name="story"
            required
            rows={6}
            className="min-h-[180px] w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Share the narrative arc, inspiration, and creator outcomes this product enables."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="price">Price (USD)</Label>
            <Input id="price" name="price" type="number" min="0" step="1" placeholder="149" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="format">Format</Label>
            <Input id="format" name="format" placeholder="Templates, Video, Community" />
          </div>
        </section>

        <section className="space-y-2">
          <Label htmlFor="deliverables">Deliverables</Label>
          <textarea
            id="deliverables"
            name="deliverables"
            rows={4}
            className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="List the assets, modules, and bonuses buyers receive."
          />
        </section>

        <footer className="flex flex-wrap justify-end gap-3 border-t border-border pt-6">
          <Button variant="outline" type="button" onClick={() => navigate("/products")}>
            Save as draft
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Publishing…" : "Publish product"}
          </Button>
        </footer>
      </form>
    </PageShell>
  );
};

export default ProductCreate;
