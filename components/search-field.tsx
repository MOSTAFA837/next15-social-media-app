"use client";

import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();

    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="GET"
      action="/search"
      className="flex-1 max-w-[450px] m-auto"
    >
      <div className="relative">
        <Input
          name="q"
          placeholder="Search.."
          className="pe-10 rounded-full "
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-5 transform text-muted-foreground" />
      </div>
    </form>
  );
}

export default SearchField;
