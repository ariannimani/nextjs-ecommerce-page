"use client";
import React, { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { createQueryString } from "@/utils/utils";

const SortOptions = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const current = new URLSearchParams(searchParams);

    current.delete("page");
    const newQueryString = value
      ? createQueryString("sort", value, current)
      : "";
    router.push(pathname + "?" + newQueryString);
  };

  return (
    <div className="hidden xl:flex items-center">
      <label htmlFor="sortOptions" className="mr-2 text-stone-500">
        Sort by:
      </label>
      <select
        id="sortOptions"
        onChange={handleOptionChange}
        className="px-2 py-1 border border-gray-300 rounded-md"
      >
        <option value="">Price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortOptions;
