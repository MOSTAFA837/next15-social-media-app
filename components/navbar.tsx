import Link from "next/link";
import React from "react";
import SearchField from "./search-field";
import UserButton from "./user-button";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-theme shadow-sm ">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          handbook
        </Link>

        <SearchField />

        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}

export default Navbar;
