"use client";

import PageHeader from "@/components/page-header";
import BlogFilter from "./blog-filter";

export default function Blog() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white scroll-smooth">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="Blog" />
        <BlogFilter />
      </div>
    </main>
  );
}
