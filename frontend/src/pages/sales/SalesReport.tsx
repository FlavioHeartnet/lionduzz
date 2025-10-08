import { PageShell } from "../../components/PageShell";

const metrics = [
  { label: "MRR", value: "$84,200", delta: "+12% MoM" },
  { label: "New Subscribers", value: "1,482", delta: "+8% vs. last week" },
  { label: "Checkout Conversion", value: "34.6%", delta: "+3.2 pts" },
  { label: "Refund Rate", value: "1.4%", delta: "-0.6 pts" },
];

const highlights = [
  {
    title: "Creator Compass OS",
    revenue: "$32,410",
    growth: "+18%",
    note: "Story-driven landing page update increased email captures by 22%.",
  },
  {
    title: "Studio Pass Template",
    revenue: "$21,765",
    growth: "+9%",
    note: "Bundle offer with onboarding scripts converting 2.1× baseline.",
  },
  {
    title: "Insight Debriefs Library",
    revenue: "$18,430",
    growth: "+6%",
    note: "Weekly tear-down drops continue to fuel upgrades to annual plans.",
  },
];

const SalesReport = () => {
  return (
    <PageShell
      eyebrow="Growth Intelligence"
      title="Sales performance inspired by Medium’s story-first dashboards"
      description="A snapshot of how every creator product is trending. We combine marketplace transactions, subscription upgrades, and story engagement to direct next week’s experiments."
    >
      <section className="grid gap-6 md:grid-cols-2">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-3xl border border-border bg-card/80 p-8 shadow-[var(--shadow-soft)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
            <p className="mt-3 text-4xl font-semibold text-foreground">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-primary">{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-card/80 p-10 shadow-[var(--shadow-medium)]">
        <h2 className="text-2xl font-semibold text-foreground">Launch highlights</h2>
        <div className="mt-8 space-y-8">
          {highlights.map((item) => (
            <div key={item.title} className="border-b border-border pb-6 last:border-none last:pb-0">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.growth} vs. last cycle</p>
              </div>
              <p className="mt-2 text-lg text-foreground">{item.revenue}</p>
              <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-dashed border-border bg-secondary/60 p-10">
        <h2 className="text-xl font-semibold text-foreground">What we’re testing next</h2>
        <ul className="mt-6 space-y-4 text-base text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
            Medium-inspired “Reading history” module on the home feed to surface unfinished stories.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
            Narrative checkout experiment pairing testimonials with Stripe Link accelerated flow.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
            Quarterly subscriber town hall hosted directly inside the product dashboard.
          </li>
        </ul>
      </section>
    </PageShell>
  );
};

export default SalesReport;
