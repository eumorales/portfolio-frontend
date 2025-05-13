import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Globe } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

interface BlogPostParams {
  params: Promise<{
    slug: string
  }>
}

interface BlogPost {
  id: string
  title: string
  date: string
  readTime: string
  language: string
  category: "Article" | "How To" | "Notes" | "List"
  tags: string[]
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  "r-concorrencia-e-processos": {
    id: "r-concorrencia-e-processos",
    title: "Revisão - Programação Concorrente, Escalonamento e Processos",
    date: "Apr 24, 2025",
    readTime: "4 min read",
    language: "Portuguese",
    category: "Notes",
    tags: ["sistemas operacionais", "concorrencia", "threads", "escalonamento"],
    content: `
      <p>Resumo elaborado para a prova de Sistemas Operacionais, abordando de forma clara os principais tópicos sobre concorrência, threads, escalonamento e sincronização — destinado ao uso próprio.</p>

      <h2>🧵 1. Programação Concorrente</h2>
      <ul>
        <li>Execução <strong>simultânea</strong> de múltiplos fluxos.</li>
        <li>Threads compartilham memória, com troca de contexto rápida.</li>
        <li>Melhora o desempenho em sistemas multiprocessados.</li>
      </ul>

      <h2>👥 2. Processo vs. Thread</h2>
      <ul>
        <li><strong>Processo:</strong> unidade de execução com memória isolada.</li>
        <li><strong>Thread:</strong> "processo leve" que compartilha memória.</li>
        <li>Threads são mais rápidas e eficientes para tarefas paralelas.</li>
      </ul>
      <p><strong>Modelos:</strong> N:1, 1:1, M:N.</p>

      <h2>⚠️ 3. Condição de Corrida</h2>
      <p>Ocorre quando processos acessam dados ao mesmo tempo e o resultado depende da ordem de execução.</p>
      <p><strong>Soluções:</strong> semáforos, mutexes, monitores.</p>

      <h2>🔁 4. Escalonamento de Processos</h2>
      <p><strong>Preemptivo:</strong> a CPU pode ser retirada de um processo.</p>
      <p><strong>Não-Preemptivo:</strong> o processo libera a CPU voluntariamente.</p>
      <ul>
        <li><strong>Objetivos:</strong> maximizar CPU, minimizar tempo de espera e garantir justiça.</li>
        <li><strong>Curto Prazo:</strong> escolhe o processo.</li>
        <li><strong>Dispatcher:</strong> realiza a troca de contexto.</li>
      </ul>

      <h2>📊 5. Políticas de Escalonamento</h2>
      <ul>
        <li><strong>FIFO:</strong> simples, pode causar esperas longas.</li>
        <li><strong>SJF:</strong> ótimo para curtas durações, mas difícil prever.</li>
        <li><strong>Prioridade:</strong> risco de starvation.</li>
        <li><strong>Round Robin:</strong> bom para tempo compartilhado.</li>
        <li><strong>Múltiplas Filas:</strong> separação por tipo de processo.</li>
        <li><strong>Aging:</strong> evita starvation elevando prioridade.</li>
      </ul>

      <h2>⏱️ 6. Métricas de Desempenho</h2>
      <ul>
        <li><strong>Tempo de Espera</strong></li>
        <li><strong>Tempo de Retorno</strong></li>
        <li><strong>Tempo de Resposta</strong></li>
      </ul>

      <h2>🔐 7. Problema da Seção Crítica</h2>
      <p>Requisitos: exclusão mútua, progresso, espera limitada, independência de velocidade.</p>

      <h2>🔄 8. Semáforos</h2>
      <p>Controlam o acesso com operações <code>P()</code> e <code>V()</code>. Podem causar deadlocks se mal utilizados.</p>

      <h2>🔒 9. Mutex</h2>
      <p>Lock binário para garantir exclusão mútua.</p>

      <h2>🧩 10. Monitores</h2>
      <p>Estrutura de alto nível que usa <code>wait()</code> e <code>signal()</code> para sincronização, comum em Java.</p>

      <h2>🛠️ 11. Técnicas de Proteção da Seção Crítica</h2>
      <ul>
        <li>Semáforos</li>
        <li>Mutexes</li>
        <li>Desabilitar interrupções</li>
        <li>Monitores</li>
      </ul>

      <h2>🛑 12. Deadlock</h2>
      <p>Condições de Coffman: exclusão mútua, retenção, não-preempção, espera circular.</p>
      <p><strong>Estratégias:</strong> prevenção, evitação (algoritmo do banqueiro), detecção e recuperação.</p>

      <h2>🧯 13. Starvation</h2>
      <p>O processo nunca é executado. Solução: <strong>aging</strong>.</p>

      <h2>💻 14. Modo Dual e System Calls</h2>
      <p>Modo usuário vs. modo kernel protege os recursos.</p>
      <p><strong>System calls:</strong> fork, exec, wait, open, read, write, exit.</p>
    `,
  },
"r-registradores-assembly": {
  id: "r-registradores-assembly",
  title: "Revisão - Registradores e Assembly",
  date: "Dec 6, 2023",
  readTime: "3 min read",
  language: "Portuguese",
  category: "Notes",
  tags: ["arquitetura", "registradores", "assembly"],
  content: `
    <p>Resumo elaborado para revisão dos conteúdos de registradores e linguagem Assembly, com foco nas operações básicas e representação em linguagem de máquina.</p>

    <h2>📜 Operação C = A - B com registradores</h2>

    <p>Exemplo prático da execução de uma subtração utilizando comandos de registradores:</p>

    <table>
      <tr>
        <th>Ação</th>
        <th>Comando</th>
        <th>Resultado</th>
      </tr>
      <tr><td>1. Zerar Acc</td><td>Zacc</td><td>Acc = 0</td></tr>
      <tr><td>2. Carregar aux com A</td><td>Ha, Wx</td><td>Aux = A</td></tr>
      <tr><td>3. Carregar aux no Acc</td><td>Rx, Wacc</td><td>Acc = Aux</td></tr>
      <tr><td>4. Carregar aux com B</td><td>Hb, Wx</td><td>Aux = B</td></tr>
      <tr><td>5. Complementar Aux</td><td>Cx</td><td>Aux = /Aux</td></tr>
      <tr><td>6. Incrementar Aux</td><td>Ix</td><td>Aux = Aux + 1</td></tr>
      <tr><td>7. Carregar aux no Acc</td><td>Rx, Wacc</td><td>Acc = Aux</td></tr>
      <tr><td>8. Armazenar em C</td><td>HAcc, Wc</td><td>C = Acc</td></tr>
    </table>

    <h2>📜 Representação da operação em Assembly</h2>

    <p>Subtração C = A - B representada em Assembly:</p>
    <p>A = 20 (00010100), B = 40 (00101000)</p>
    <p>Programa iniciado a partir da posição 45</p>

    <h3>Tabela de instruções</h3>
    <table>
      <tr>
        <th>Programa (Assembly)</th>
        <th>Upcode e Endereço</th>
        <th>Máquina</th>
      </tr>
      <tr><td>ADD Acc &lt;45&gt;</td><td>01 101101</td><td>01101101</td></tr>
      <tr><td>SUB Acc &lt;46&gt;</td><td>10 101110</td><td>10110010</td></tr>
      <tr><td>MOV &lt;47&gt; Acc</td><td>11 101111</td><td>11101111</td></tr>
      <tr><td>STP</td><td>00 000000</td><td>00000000</td></tr>
    </table>

    <h3>Memória</h3>
    <table>
      <tr><th>Endereço</th><th>Valor</th></tr>
      <tr><td>1</td><td>01101001</td></tr>
      <tr><td>2</td><td>10101110</td></tr>
      <tr><td>3</td><td>11101111</td></tr>
      <tr><td>4...</td><td>00000000</td></tr>
      <tr><td>...45</td><td>00010100 (40)</td></tr>
      <tr><td>46</td><td>00101000 (20)</td></tr>
      <tr><td>47</td><td>00010100 (20)</td></tr>
    </table>
  `,
},
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

export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = await params 
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        <article className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-2 py-1 text-sm rounded-full ${getCategoryColorClass(post.category)}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200">
                <Globe className="h-4 w-4" />
                {post.language}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-500 dark:text-zinc-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-zinc-700 dark:text-zinc-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </article>
      </div>
    </main>
  )
}
