"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-dark text-white p-8">
      <h1 className="mb-4 text-3xl font-bold text-primary">Something went wrong</h1>
      <p className="mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
