import { FormEvent, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageShell } from "../../components/PageShell";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const drafts = {
  "creator-compass": {
    title: "Creator Compass OS",
    category: "Launch Kits",
    tagline: "Validate, launch, and scale a membership business in record time.",
    story:
      "Creator Compass OS distills the Lionduzz methodology into a guided workspace. Capture research, craft editorial, and automate Stripe workflows within a single narrative-driven system.",
    price: "149",
    format: "Templates + Loom walkthroughs",
    deliverables: "Notion workspace • Launch checklist • Campaign copy bank • Metrics dashboard",
  },
};

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initial = useMemo(() => {
    const key = (id as keyof typeof drafts) ?? "creator-compass";
    return drafts[key] ?? drafts["creator-compass"];
  }, [id]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/products/${id ?? "creator-compass"}`);
    }, 1200);
  };

  return (
    <PageShell
      eyebrow="Creator Toolkit"
      title="Refresh product details"
      description="Keep your drop current with the latest outcomes, testimonials, and module updates. Edits go live instantly once published."
      actions={
        <Button variant="ghost" onClick={() => navigate(-1)}>
          Back
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
            <Input id="title" name="title" defaultValue={initial.title} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" defaultValue={initial.category} required />
          </div>
        </section>

        <section className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input id="tagline" name="tagline" defaultValue={initial.tagline} required />
        </section>

        <section className="space-y-2">
          <Label htmlFor="story">Editorial overview</Label>
          <textarea
            id="story"
            name="story"
            required
            rows={6}
            defaultValue={initial.story}
            className="min-h-[180px] w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="price">Price (USD)</Label>
            <Input id="price" name="price" type="number" defaultValue={initial.price} min="0" step="1" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="format">Format</Label>
            <Input id="format" name="format" defaultValue={initial.format} />
          </div>
        </section>

        <section className="space-y-2">
          <Label htmlFor="deliverables">Deliverables</Label>
          <textarea
            id="deliverables"
            name="deliverables"
            rows={4}
            defaultValue={initial.deliverables}
            className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </section>

        <footer className="flex flex-wrap justify-between gap-3 border-t border-border pt-6">
          <Button type="button" variant="outline" onClick={() => navigate(`/products/${id ?? "creator-compass"}`)}>
            View live page
          </Button>
          <div className="flex gap-3">
            <Button variant="ghost" type="button">
              Archive
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving…" : "Publish changes"}
            </Button>
          </div>
        </footer>
      </form>
    </PageShell>
  );
};

export default ProductEdit;
