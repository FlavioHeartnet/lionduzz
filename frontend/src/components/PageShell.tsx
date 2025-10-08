import type { ReactNode } from "react";
import { Header } from "./Header";

type PageShellProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export const PageShell = ({
  title,
  description,
  eyebrow,
  actions,
  children,
}: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
        <header className="mb-12">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {title}
              </h1>
              {description ? (
                <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
              ) : null}
            </div>
            {actions ? <div className="flex shrink-0 gap-3">{actions}</div> : null}
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};
