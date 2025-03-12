"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-screen justify-center items-center flex-col gap-6 px-6 text-center">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Something went wrong!
      </h1>
      <p className="text-base sm:text-lg">{error.message}</p>

      <button
        className="w-full sm:w-auto bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-md shadow-md"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
