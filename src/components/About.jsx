import { useEffect } from "react";

export default function About() {
  // Start at top without smooth scroll (prevents extra jank)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <section className="container py-10">
      {/* Single, non-staggered animation to avoid layout shifts */}
      <div className="mx-auto max-w-3xl transform-gpu will-change-transform will-change-opacity animate-in fade-in-0 sm:fade-in-100 slide-in-from-bottom-5 duration-900 ease-out">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h1>

        <div className="mt-6 text-lg text-muted-foreground space-y-4">
          <p>
            I’m Amit Rampurkar, a Product Manager working with AI to build products that are safe, reliable, and impactful.
            With 15+ years in healthcare and fintech, I’ve scaled platforms to millions of users and delivered measurable
            outcomes by aligning design, engineering, and business goals.
          </p>

          <p>
            These AI experiments reflect how I work — start small, validate quickly, and focus on results. I bring a mix of
            product rigor and creative design thinking to make AI more usable, trustworthy, and valuable in the real world.
          </p>

          <p className="font-semibold">
            Let’s build something meaningful together.
          </p>
        </div>
      </div>
    </section>
  );
}
