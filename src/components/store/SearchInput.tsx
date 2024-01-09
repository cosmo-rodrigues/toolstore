'use client';

import { Input } from '@/components/ui/input';

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search"
        className="bg-white pl-2 pr-4 text-black"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto right-3 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
