import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/button";

const productCopy = {
  "creator-compass": {
    title: "Creator Compass OS",
    headline: "Design, validate, and scale a membership product without leaving Notion.",
    author: "Lionduzz Product Team",
    updated: "Updated 2 days ago • 12 modules • Ready-to-ship assets",
    body: [
      "Creator Compass OS is built for multi-hyphenate storytellers who want to ship quickly. Inspired by Medium’s clean storytelling, every page is structured for clarity and focused calls to action. Map your audience hypotheses, automate onboarding emails, and review funnel metrics in one cohesive workspace.",
      "Inside you’ll find pre-built templates for discovery interviews, launch roadmaps, and a modular landing page kit. We include copy prompts based on top-performing Medium intros plus Stripe checkout best practices to keep your narrative sharp from top to bottom.",
      "Each module is annotated with suggested timelines, collaboration tips, and the exact tools we use across the Lionduzz marketplace. Adapt the flow to match your brand voice, or remix the assets to stand up a community-driven membership."
    ],
    outcomes: [
      "Validate positioning using structured storytelling prompts",
      "Automate recurring revenue workflows with Stripe and Firebase",
      "Reuse Medium-inspired typography and responsive layouts"
    ],
  },
  "studio-pass": {
    title: "Studio Pass Template",
    headline: "Bring cinematic narratives to your async course with a Medium-grade aesthetic.",
    author: "Design Systems Collective",
    updated: "Updated 1 week ago • Script builder • Lesson templates",
    body: [
      "Studio Pass delivers a binge-worthy course experience. We translated Medium’s reading cadence into modular lesson layouts complete with callouts, highlight blocks, and built-in progress tracking. Craft hero narratives per module and drop in multimedia assets without fighting CSS.",
      "Use the script builder to storyboard every lesson. You’ll get scene cards, a voiceover checklist, and visual pacing guides to keep your content energetic. Pair it with the included automation recipes to deliver evergreen or cohort-based experiences.",
      "A companion analytics workspace ties Stripe events to lesson completion so you understand which stories convert browsers into premium subscribers."
    ],
    outcomes: [
      "Design drip courses that read like editorials",
      "Blend video, audio, and written assets with ease",
      "Understand where learners convert and churn"
    ],
  },
  "insight-debriefs": {
    title: "Insight Debriefs Library",
    headline: "A growing library of teardown reports mirroring Medium’s editorial tone.",
    author: "Growth Research Guild",
    updated: "Updated yesterday • 50+ reports • Weekly updates",
    body: [
      "Insight Debriefs distill the tactics used by high-performing digital products. Each report reads like a long-form Medium feature: contextual intro, narrative arc, and crisp takeaways. We annotate screenshots, break down pricing experiments, and highlight microcopy worth stealing.",
      "Every Friday we add two fresh debriefs sourced from SaaS launches, creator funnels, and hybrid communities. Use them to inspire your own landing pages, nurture sequences, or paywalls.",
      "Need to pitch stakeholders? Each report includes a TL;DR deck and data callouts you can drop into strategy docs instantly."
    ],
    outcomes: [
      "Steal like a strategist with curated examples",
      "Shortcut your research with annotated visuals",
      "Spark new product angles through storytelling"
    ],
  },
} as const;

const ProductDetail = () => {
  const { id } = useParams();

  const product = useMemo(() => {
    if (id && id in productCopy) {
      return productCopy[id as keyof typeof productCopy];
    }
    return productCopy["creator-compass"];
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="mx-auto w-full max-w-3xl px-6 pb-24 pt-16">
        <header className="space-y-6">
          <p className="text-sm text-muted-foreground">{product.updated}</p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-foreground">{product.title}</h1>
          <p className="text-xl text-muted-foreground">{product.headline}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{product.author}</span>
            <span>&bull;</span>
            <span>Curated by Lionduzz</span>
          </div>
          <Button className="mt-4 w-full md:w-auto" size="lg">
            Get the product
          </Button>
        </header>

        <section className="prose mt-12 space-y-10">
          {product.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-secondary/60 p-10">
          <h2 className="text-2xl font-semibold text-foreground">What you’ll walk away with</h2>
          <ul className="mt-6 space-y-4 text-base text-muted-foreground">
            {product.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default ProductDetail;
