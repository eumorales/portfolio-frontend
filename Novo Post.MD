# 📚 Como adicionar um novo post ao blog

Este guia explica como adicionar um novo post ao sistema de blog baseado em arquivos `.tsx`, com carregamento dinâmico.

---

## ✅ Passos para adicionar um novo post

### 1. 📁 Crie um novo arquivo em:

```
app/blog/posts/
```

> Exemplo de nome de arquivo:
```
app/blog/posts/r-nome-do-post.tsx
```

---

### 2. ✍️ Use o seguinte template e preencha os campos:

```tsx
import { BlogPost } from "@/types/blog"

const post: BlogPost = {
  id: "r-nome-do-post",
  title: "Título do Post",
  excerpt: "Resumo curto para aparecer na listagem do blog.",
  date: "May 13, 2025",
  readTime: "3 min read",
  language: "Portuguese",
  category: "Notes", // ou: "Article" | "How To" | "List"
  tags: ["tag1", "tag2"],
  year: 2025,
  content: `
    <p>Seu conteúdo HTML aqui...</p>
    <h2>Seções</h2>
    <ul><li>Item</li></ul>
  `,
}

export default post
```

---

### ⚠️ Regras importantes:

- `id` deve ser igual ao nome do arquivo.
- `year` deve ser um número (ex: `2025`, **sem aspas**).
- `content` deve conter **HTML válido dentro de uma string**.

---

### 3. 🧩 Adicione o post ao `index.ts`

Abra o arquivo:

```
app/blog/posts/index.ts
```

Adicione no topo:

```ts
import r_nome_do_post from "./r-nome-do-post"
```

Depois inclua dentro do objeto `blogPosts`:

```ts
export const blogPosts = {
  ...,
  [r_nome_do_post.id]: r_nome_do_post,
}
```

---

### 4. ✅ Pronto!

O novo post:
- Vai aparecer automaticamente na página `/blog`
- Pode ser acessado em `/blog/r-nome-do-post`
- Será considerado como “último post” na home, se for o mais recente

---