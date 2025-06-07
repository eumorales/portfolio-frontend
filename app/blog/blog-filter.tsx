"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  Globe,
  Filter,
  X,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { blogPosts as postsRecord } from "./posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const blogPosts = Object.values(postsRecord);

const getAllTags = () => {
  const tagsSet = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

const getAllCategories = () => {
  const categoriesSet = new Set<string>();
  blogPosts.forEach((post) => categoriesSet.add(post.category));
  return Array.from(categoriesSet).sort();
};

const getAllLanguages = () => {
  const languagesSet = new Set<string>();
  blogPosts.forEach((post) => languagesSet.add(post.language));
  return Array.from(languagesSet).sort();
};

const groupPostsByYear = (posts: typeof blogPosts) => {
  const grouped: Record<number, typeof blogPosts> = {};

  posts.forEach((post) => {
    if (!grouped[post.year]) {
      grouped[post.year] = [];
    }
    grouped[post.year].push(post);
  });

  return Object.entries(grouped)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([year, posts]) => ({
      year: Number(year),
      posts: posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    }));
};

const getCategoryColorClass = (category: string) => {
  switch (category) {
    case "Article":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "How To":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Notes":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "List":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200";
  }
};

export default function BlogFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const allTags = useMemo(() => getAllTags(), []);
  const allCategories = useMemo(() => getAllCategories(), []);
  const allLanguages = useMemo(() => getAllLanguages(), []);

  useEffect(() => {
    let count = 0;
    if (searchQuery) count++;
    count += selectedTags.length;
    count += selectedCategories.length;
    count += selectedLanguages.length;
    setActiveFiltersCount(count);
  }, [searchQuery, selectedTags, selectedCategories, selectedLanguages]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const searchMatch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const tagsMatch =
        selectedTags.length === 0 ||
        post.tags.some((tag) => selectedTags.includes(tag));

      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(post.category);

      const languageMatch =
        selectedLanguages.length === 0 ||
        selectedLanguages.includes(post.language);

      return searchMatch && tagsMatch && categoryMatch && languageMatch;
    });
  }, [searchQuery, selectedTags, selectedCategories, selectedLanguages]);

  const groupedPosts = useMemo(
    () => groupPostsByYear(filteredPosts),
    [filteredPosts]
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedCategories([]);
    setSelectedLanguages([]);
  };

  return (
    <>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          <div className="hidden sm:flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10">
                  <Filter className="h-3.5 w-3.5 mr-2" />
                  Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 max-h-[300px] overflow-y-auto">
                <DropdownMenuLabel>Available tags</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {allTags.map((tag) => (
                  <DropdownMenuCheckboxItem
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  >
                    {tag}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10">
                  <Filter className="h-3.5 w-3.5 mr-2" />
                  Categories{" "}
                  {selectedCategories.length > 0 &&
                    `(${selectedCategories.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Available categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {allCategories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10">
                  <Globe className="h-3.5 w-3.5 mr-2" />
                  Languages{" "}
                  {selectedLanguages.length > 0 &&
                    `(${selectedLanguages.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Available languages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {allLanguages.map((language) => (
                  <DropdownMenuCheckboxItem
                    key={language}
                    checked={selectedLanguages.includes(language)}
                    onCheckedChange={() => toggleLanguage(language)}
                  >
                    {language}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-10 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                onClick={clearAllFilters}
              >
                <X className="h-3.5 w-3.5 mr-2" />
                Clear filters
              </Button>
            )}
          </div>

          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Filter posts by tags, categories and languages
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-medium">Tags</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allTags.map((tag) => (
                        <div key={tag} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tag-${tag}`}
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => toggleTag(tag)}
                          />
                          <Label htmlFor={`tag-${tag}`} className="text-sm">
                            {tag}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium">Categories</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allCategories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label
                            htmlFor={`category-${category}`}
                            className="text-sm"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium">Languages</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allLanguages.map((language) => (
                        <div
                          key={language}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`language-${language}`}
                            checked={selectedLanguages.includes(language)}
                            onCheckedChange={() => toggleLanguage(language)}
                          />
                          <Label
                            htmlFor={`language-${language}`}
                            className="text-sm"
                          >
                            {language}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" onClick={clearAllFilters}>
                    Clear filters
                  </Button>
                  <SheetClose asChild>
                    <Button>Apply filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <Badge
              key={`tag-${tag}`}
              variant="secondary"
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              #{tag}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}

          {selectedCategories.map((category) => (
            <Badge
              key={`category-${category}`}
              variant="secondary"
              className={`flex items-center gap-1 cursor-pointer ${getCategoryColorClass(
                category
              )}`}
              onClick={() => toggleCategory(category)}
            >
              {category}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}

          {selectedLanguages.map((language) => (
            <Badge
              key={`language-${language}`}
              variant="secondary"
              className="flex items-center gap-1 cursor-pointer bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200"
              onClick={() => toggleLanguage(language)}
            >
              <Globe className="h-3 w-3 mr-1" />
              {language}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
        </div>

        {activeFiltersCount > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "post found" : "posts found"}
          </div>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your filters to find what you're looking for.
          </p>
          <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="space-y-8">
          {groupedPosts.map(({ year, posts }) => (
            <div key={year} className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white sticky top-0 bg-white dark:bg-zinc-950 py-2 border-b border-gray-200 dark:border-zinc-800">
                {year}
              </h2>

              <div className="space-y-1">
                {posts.map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 0.05}>
                    <Link href={`/blog/${post.id}`}>
                      <div className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors">
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                          {post.category === "Article" && (
                            <div className="w-4 h-4 bg-blue-300 rounded-sm flex items-center justify-center">
                              <div className="w-2 h-2 bg-white dark:bg-black rounded-xs"></div>
                            </div>
                          )}
                          {post.category === "How To" && (
                            <div className="w-4 h-4 bg-green-300 rounded-sm flex items-center justify-center">
                              <div className="w-2 h-2 bg-white dark:bg-black rounded-xs"></div>
                            </div>
                          )}
                          {post.category === "Notes" && (
                            <div className="w-4 h-4 bg-yellow-300 rounded-sm flex items-center justify-center">
                              <div className="w-2 h-2 bg-white dark:bg-black rounded-xs"></div>
                            </div>
                          )}
                          {post.category === "List" && (
                            <div className="w-4 h-4 bg-purple-300 rounded-sm flex items-center justify-center">
                              <div className="w-2 h-2 bg-white dark:bg-black rounded-xs"></div>
                            </div>
                          )}
                        </div>

                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                              {post.title}
                            </h3>
                            <span
                              className={`text-xs px-1.5 py-0.5 rounded ${
                                post.category === "Article"
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                  : post.category === "How To"
                                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                  : post.category === "Notes"
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                                  : post.category === "List"
                                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                                  : "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                              }`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex-shrink-0 text-right">
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {new Date(post.date).toLocaleDateString("pt-BR", {
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
