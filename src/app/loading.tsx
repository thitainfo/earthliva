export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-600 border-r-green-600 animate-spin"></div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Loading</h2>
        <p className="text-slate-600">
          Please wait while we prepare your content...
        </p>
      </div>
    </div>
  );
}
