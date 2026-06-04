import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate-900 mb-2">404</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
              Back to Home
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="px-8">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
