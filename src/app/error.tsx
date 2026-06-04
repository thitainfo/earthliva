"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center px-4 max-w-md">
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Oops!</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Something went wrong
        </h2>
        <p className="text-slate-600 mb-8">
          We encountered an unexpected error. Please try again or contact
          support if the problem persists.
        </p>
        {error.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-red-700 font-mono">{error.message}</p>
          </div>
        )}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-green-600 hover:bg-green-700 text-white px-8"
          >
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="px-8"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
