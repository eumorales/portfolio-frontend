"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Calendar, Clock, Globe, Filter, X, Search, SlidersHorizontal } from 'lucide-react'
import AnimatedSection from "@/components/animated-section"
import { blogPosts as postsRecord } from "./posts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const blogPosts = Object.values(postsRecord)

// Extrair todas as tags únicas de todos os posts
const getAllTags = () => {
  const tagsSet = new Set<string>()
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
}

// Extrair todas as categorias únicas
const getAllCategories = () => {
  const categoriesSet = new Set<string>()
  blogPosts.forEach((post) => categoriesSet.add(post.category))
  return Array.from(categoriesSet).sort()
}

// Extrair todos os idiomas únicos
const getAllLanguages = () => {
  const languagesSet = new Set<string>()
  blogPosts.forEach((post) => languagesSet.add(post.language))
  return Array.from(languagesSet).sort()
}

const groupPostsByYear = (posts: typeof blogPosts) => {
  const grouped: Record<number, typeof blogPosts> = {}

  posts.forEach((post) => {
    if (!grouped[post.year]) {
      grouped[post.year] = []
    }
    grouped[post.year].push(post)
  })

  return Object.entries(grouped)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([year, posts]) => ({
      year: Number(year),
      posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    }))
}

const getCategoryColorClass = (category: string) => {
  switch (category) {
    case "Article":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "How To":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "Notes":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "List":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200"
  }
}

export default function BlogFilter() {
  // Estados para os diferentes filtros
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  // Memorizar as listas de opções para evitar recálculos
  const allTags = useMemo(() => getAllTags(), [])
  const allCategories = useMemo(() => getAllCategories(), [])
  const allLanguages = useMemo(() => getAllLanguages(), [])

  // Atualizar o contador de filtros ativos
  useEffect(() => {
    let count = 0
    if (searchQuery) count++
    count += selectedTags.length
    count += selectedCategories.length
    count += selectedLanguages.length
    setActiveFiltersCount(count)
  }, [searchQuery, selectedTags, selectedCategories, selectedLanguages])

  // Filtrar posts com base em todos os critérios
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Filtro por pesquisa de texto
      const searchMatch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      // Filtro por tags
      const tagsMatch = selectedTags.length === 0 || 
        post.tags.some((tag) => selectedTags.includes(tag))

      // Filtro por categoria
      const categoryMatch = selectedCategories.length === 0 || 
        selectedCategories.includes(post.category)

      // Filtro por idioma
      const languageMatch = selectedLanguages.length === 0 || 
        selectedLanguages.includes(post.language)

      return searchMatch && tagsMatch && categoryMatch && languageMatch
    })
  }, [searchQuery, selectedTags, selectedCategories, selectedLanguages])

  // Agrupar posts filtrados por ano
  const groupedPosts = useMemo(() => groupPostsByYear(filteredPosts), [filteredPosts])

  // Alternar seleção de tag
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => 
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  // Alternar seleção de categoria
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  // Alternar seleção de idioma
  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]
    )
  }

  // Limpar todos os filtros
  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
    setSelectedCategories([])
    setSelectedLanguages([])
  }

  return (
    <>
      {/* Barra de pesquisa e filtros */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Barra de pesquisa */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Pesquisar publicações..."
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

          {/* Botão de filtros para desktop */}
          <div className="hidden sm:flex gap-2">
            {/* Dropdown de Tags */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10">
                  <Filter className="h-3.5 w-3.5 mr-2" />
                  Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 max-h-[300px] overflow-y-auto">
                <DropdownMenuLabel>Tags disponíveis</DropdownMenuLabel>
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

            {/* Dropdown de Categorias */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10">
                  <Filter className="h-3.5 w-3.5 mr-2" />
                  Categorias {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categorias disponíveis</DropdownMenuLabel>
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
                  Idiomas {selectedLanguages.length > 0 && `(${selectedLanguages.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Idiomas disponíveis</DropdownMenuLabel>
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

            {/* Botão para limpar filtros - só aparece se houver filtros ativos */}
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-10 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                onClick={clearAllFilters}
              >
                <X className="h-3.5 w-3.5 mr-2" />
                Limpar filtros
              </Button>
            )}
          </div>

          {/* Botão de filtros para mobile */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                  <SheetDescription>
                    Filtre os posts por tags, categorias e idiomas
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  {/* Tags */}
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
                          <Label htmlFor={`tag-${tag}`} className="text-sm">{tag}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Categorias */}
                  <div className="space-y-3">
                    <h3 className="font-medium">Categorias</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`category-${category}`} className="text-sm">{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Idiomas */}
                  <div className="space-y-3">
                    <h3 className="font-medium">Idiomas</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allLanguages.map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`language-${language}`} 
                            checked={selectedLanguages.includes(language)}
                            onCheckedChange={() => toggleLanguage(language)}
                          />
                          <Label htmlFor={`language-${language}`} className="text-sm">{language}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" onClick={clearAllFilters}>
                    Limpar filtros
                  </Button>
                  <SheetClose asChild>
                    <Button>Aplicar filtros</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Filtros selecionados */}
        <div className="flex flex-wrap gap-2">
          {/* Tags selecionadas */}
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

          {/* Categorias selecionadas */}
          {selectedCategories.map((category) => (
            <Badge
              key={`category-${category}`}
              variant="secondary"
              className={`flex items-center gap-1 cursor-pointer ${getCategoryColorClass(category)}`}
              onClick={() => toggleCategory(category)}
            >
              {category}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}

          {/* Idiomas selecionados */}
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

        {/* Contador de resultados */}
        {activeFiltersCount > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
          </div>
        )}
      </div>

      {/* Resultados da pesquisa */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">Nenhum post encontrado</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Tente ajustar seus filtros para encontrar o que está procurando.
          </p>
          <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
            Limpar todos os filtros
          </Button>
        </div>
      ) : (
        <div className="space-y-16">
          {groupedPosts.map(({ year, posts }) => (
            <div key={year} className="space-y-12">
              <h2 className="text-3xl font-bold border-b border-gray-200 dark:border-zinc-800 pb-4">{year}</h2>

              {posts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <article className="group" id={post.id}>
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span 
                          className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColorClass(post.category)} cursor-pointer`}
                          onClick={(e) => {
                            e.preventDefault()
                            toggleCategory(post.category)
                          }}
                        >
                          {post.category}
                        </span>
                        <span 
                          className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault()
                            toggleLanguage(post.language)
                          }}
                        >
                          <Globe className="h-3 w-3" />
                          {post.language}
                        </span>
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault()
                              toggleTag(tag)
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {post.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-zinc-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-zinc-300 mb-4">{post.excerpt}</p>

                      <div className="text-black dark:text-white font-medium underline-offset-4 group-hover:underline">
                        Read more
                      </div>
                    </Link>
                  </article>

                  {index < posts.length - 1 && (
                    <div className="border-b border-gray-100 dark:border-zinc-800 mt-12"></div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
