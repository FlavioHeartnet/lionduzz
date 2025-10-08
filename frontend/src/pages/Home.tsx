import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";

const trending = [
  { tag: "Product Launch", title: "How to validate a digital product in 48 hours", author: "Avery Knight" },
  { tag: "Creator Economy", title: "Turning niche expertise into recurring revenue", author: "Jordan Fox" },
  { tag: "Marketing", title: "The Medium playbook for building loyal readers", author: "Taylor West" },
];

const featured = [
  {
    title: "Designing a frictionless course checkout experience",
    excerpt: "A walkthrough of our new Stripe integration and the UX choices inspired by Medium’s subscription flow.",
    author: "Morgan Lee",
    readTime: "7 min read",
    path: "/products",
  },
  {
    title: "From subscribers to superfans: making the most of tiers",
    excerpt: "What we learned while building subscription controls and how creators can add value at every level.",
    author: "Jamie Patel",
    readTime: "6 min read",
    path: "/subscriptions",
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-sm font-medium tracking-wide text-secondary-foreground">
              Stories for digital product creators
            </span>
            <h1 className="max-w-xl font-serif text-5xl font-bold tracking-tight text-foreground">
              Ship ideas, grow audiences, and monetize like a modern publisher.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              The Lionduzz marketplace blends editorial craft with actionable tooling. Explore product
              playbooks, data-backed sales tactics, and the design decisions powering our platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant={"default"} className="px-6 py-5 text-base" asChild>
                <Link to="/register">Start publishing</Link>
              </Button>
              <Button size="lg" variant="ghost" className="px-6 py-5 text-base" asChild>
                <Link to="/products">Browse product guides</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Weekly digest • No spam • Curated by the product team
            </p>
          </div>
          <aside className="rounded-3xl border border-border bg-card/70 p-8 shadow-[var(--shadow-soft)] backdrop-blur">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Trending on Lionduzz</h2>
            <div className="mt-6 space-y-6">
              {trending.map((item) => (
                <article key={item.title} className="group space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{item.tag}</span>
                  <Link to="/products" className="block text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{item.author}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            {featured.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-border bg-card/80 p-10 shadow-[var(--shadow-medium)] transition-transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <Link to={post.path} className="text-3xl font-semibold tracking-tight text-foreground hover:text-primary">
                    {post.title}
                  </Link>
                  <p className="text-base text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="sticky top-24 space-y-8 self-start">
            <section className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold">Inside the build</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                We share the roadmap, experiments, and growth lessons powering Lionduzz. Learn how product,
                design, and engineering collaborate to ship creator tools weekly.
              </p>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link to="/sales">See the latest numbers</Link>
              </Button>
            </section>
            <section className="rounded-3xl border border-dashed border-border bg-secondary/60 p-8 text-sm text-muted-foreground">
              <h3 className="text-base font-semibold text-foreground">Publishing cadence</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  Weekly growth experiments recap every Monday.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  Deep-dive product teardown each Wednesday.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  Creator spotlight newsletter on Fridays.
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};
