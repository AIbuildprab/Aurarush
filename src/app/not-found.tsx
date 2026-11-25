import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pt-28" aria-labelledby="missing-title">
      <div className="container-site">
        <Logo kind="footer" />
        <h1 id="missing-title" className="h1 mt-8">Page not found</h1>
        <p className="lead mt-4">That address is not on the AuraRush site.</p>
        <Link className="btn btn-primary mt-8" href="/">Back to the home page</Link>
      </div>
    </section>
  );
}
