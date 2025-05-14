export const techColors: Record<string, { bg: string; text: string }> = {

  next: {
    bg: "bg-black dark:bg-white",
    text: "text-white dark:text-black",
  },
  react: {
    bg: "bg-[#282c34]",
    text: "text-[#61dafb]",
  },
  tailwindcss: {
    bg: "bg-[#0b1120]",
    text: "text-[#38bdf8]",
  },
  html: {
    bg: "bg-[#e34f26]/10",
    text: "text-[#e34f26]",
  },
  css: {
    bg: "bg-[#1572b6]/10",
    text: "text-[#1572b6]",
  },
  javascript: {
    bg: "bg-[#f7df1e]/10",
    text: "text-[#000000] dark:text-[#f7df1e]",
  },
  
  c: {
    bg: "bg-[#5c6bc0]/10",
    text: "text-[#5c6bc0]",
  },
  css3: {
    bg: "bg-[#1572b6]/10",
    text: "text-[#1572b6]",
  },
  git: {
    bg: "bg-[#f05033]/10",
    text: "text-[#f05033]",
  },
  html5: {
    bg: "bg-[#e34f26]/10",
    text: "text-[#e34f26]",
  },
  java: {
    bg: "bg-[#007396]/10",
    text: "text-[#007396]",
  },
  mysql: {
    bg: "bg-[#4479a1]/10",
    text: "text-[#4479a1]",
  },
  "next.js": {
    bg: "bg-black dark:bg-white",
    text: "text-white dark:text-black",
  },
  nextjs: {
    bg: "bg-black dark:bg-white",
    text: "text-white dark:text-black",
  },
  "node.js": {
    bg: "bg-[#339933]/10",
    text: "text-[#339933]",
  },
  nodejs: {
    bg: "bg-[#339933]/10",
    text: "text-[#339933]",
  },
  postgresql: {
    bg: "bg-[#336791]/10",
    text: "text-[#336791]",
  },
  python: {
    bg: "bg-[#3776ab]/10",
    text: "text-[#ffd343]",
  },
  typescript: {
    bg: "bg-[#3178c6]/10",
    text: "text-[#3178c6]",
  },
  vue: {
    bg: "bg-[#4fc08d]/10",
    text: "text-[#4fc08d]",
  },
  angular: {
    bg: "bg-[#dd0031]/10",
    text: "text-[#dd0031]",
  },
  svelte: {
    bg: "bg-[#ff3e00]/10",
    text: "text-[#ff3e00]",
  },
  php: {
    bg: "bg-[#777bb4]/10",
    text: "text-[#777bb4]",
  },
  laravel: {
    bg: "bg-[#ff2d20]/10",
    text: "text-[#ff2d20]",
  },
  ruby: {
    bg: "bg-[#cc342d]/10",
    text: "text-[#cc342d]",
  },
  rails: {
    bg: "bg-[#cc0000]/10",
    text: "text-[#cc0000]",
  },
  go: {
    bg: "bg-[#00add8]/10",
    text: "text-[#00add8]",
  },
  rust: {
    bg: "bg-[#000000]/10",
    text: "text-[#000000] dark:text-[#ffffff]",
  },
}

export const defaultTechColor = {
  bg: "bg-gray-100 dark:bg-zinc-800",
  text: "text-gray-700 dark:text-gray-300",
}

export const getTechColor = (tech: string) => {
  return techColors[tech.toLowerCase()] || defaultTechColor
}
