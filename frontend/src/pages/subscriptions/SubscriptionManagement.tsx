import { PageShell } from "../../components/PageShell";
import { Button } from "../../components/ui/button";

const tiers = [
  {
    name: "Reader",
    price: "Free",
    description: "Weekly editorial digest, curated reading lists, and open community discussions.",
    perks: ["3 spotlight stories per month", "Reading stats dashboard", "Commentary from the team"],
  },
  {
    name: "Studio",
    price: "$12 / month",
    description: "For builders who want to go deeper with templates, teardown libraries, and workshops.",
    perks: ["Unlimited premium stories", "Template drop access", "Private AMAs with creators"],
  },
  {
    name: "Collective",
    price: "$38 / month",
    description: "A high-touch membership with cohort strategy sessions and co-created launches.",
    perks: ["Quarterly strategy labs", "Launch playbook reviews", "Revenue analytics channel"],
  },
];

const activity = [
  { label: "Upgrade rate", value: "9.4%" },
  { label: "Churn (30d)", value: "2.8%" },
  { label: "Average session length", value: "12m 40s" },
];

const SubscriptionManagement = () => {
  return (
    <PageShell
      eyebrow="Membership Hub"
      title="Design memberships that feel like your best Medium stories"
      description="Adjust pricing, preview tier benefits, and monitor how readers move through your subscription funnel."
      actions={<Button variant="outline">Export member CSV</Button>}
    >
      <section className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 shadow-[var(--shadow-soft)]"
          >
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{tier.name}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{tier.price}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
            </header>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  {perk}
                </li>
              ))}
            </ul>
            <Button className="mt-auto" variant="ghost">
              Edit benefits
            </Button>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-border bg-card/80 p-10 shadow-[var(--shadow-medium)]">
        <h2 className="text-xl font-semibold text-foreground">Member signals</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {activity.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
              <p className="text-3xl font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Keep the cadence purposeful—publish your biggest narrative on Sundays, feature actionable teardown content midweek, and drop community prompts before the weekend.
        </p>
      </section>
    </PageShell>
  );
};

export default SubscriptionManagement;
