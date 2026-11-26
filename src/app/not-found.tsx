import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="missing-title">
      <div className="container-wide">
        <h1 id="missing-title" className="h1">Page not found</h1>
        <p className="lead mt-4">That address is not on the AuraRush site. It may have moved.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="btn btn-primary" href="/">Back to the home page</Link>
          <Link className="btn btn-secondary" href="/services">See services</Link>
        </div>
      </div>
    </section>
  );
}
