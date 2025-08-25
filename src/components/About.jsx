export default function About() {
  // Scroll to top on mount (good for mobile / deep links)
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About Me
      </h1>

      <div className="max-w-3xl mt-6 text-lg text-muted-foreground space-y-4">
        <p>
          I’m Amit Rampurkar, a Product Manager working with AI to build products that are
          safe, reliable, and impactful. With 15+ years in healthcare and fintech, I’ve scaled
          platforms to millions of users and delivered measurable outcomes by aligning design,
          engineering, and business goals.
        </p>
        <p>
          These AI experiments reflect how I work — start small, validate quickly, and focus on
          results. I bring a mix of product rigor and creative design thinking to make AI more usable,
          trustworthy, and valuable in the real world.
        </p>
        <p className="font-semibold">
          Let’s build something meaningful together.
        </p>
      </div>
    </section>
  );
}
