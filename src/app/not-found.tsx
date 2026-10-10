import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 max-w-3xl mx-auto px-4 text-center">
      <div className="bg-white rounded-3xl p-10 sm:p-16 border border-gold/30 shadow-luxury space-y-6">
        <Sparkles size={40} className="text-gold mx-auto" />
        <span className="text-xs uppercase tracking-widest text-gold font-semibold block">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-burgundy">
          Looking for a Bridal Look?
        </h1>
        <p className="text-burgundy/80 text-base font-light max-w-md mx-auto">
          The page you are looking for doesn&apos;t seem to exist, but our bridal stories and masterclasses are always open.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="btn-gold inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
          <Link href="/portfolio" className="btn-burgundy-outline">
            <span>Explore Bridal Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
