'use client';

export function DotsLoading() {
  return (
    <div className="flex w-screen h-screen space-x-2 justify-center items-center bg-white dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-3 w-3 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="h-3 w-3 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
      <div className="h-3 w-3 bg-orange-600 rounded-full animate-bounce"></div>
    </div>
  );
}
