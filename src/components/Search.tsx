"use client";
import React from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term:string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300)

  return (
    <div className="w-4/5  md:w-2/5 md:ml-16">
      <form className="form-control   w-full">
        <input
          type="text"
          placeholder="Search"
          className="input bg-ghost-400 input-bordered w-24 md:w-auto"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
      </form>
    </div>
  );
}

export default Search;
