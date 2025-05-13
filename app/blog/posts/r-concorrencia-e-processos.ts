import { BlogPost } from "@/types/blog"

const post: BlogPost = {
    id: "r-concorrencia-e-processos",
    title: "Revisão - Programação Concorrente, Escalonamento e Processos",
    date: "Apr 24, 2025",
    readTime: "4 min read",
    language: "Portuguese",
    category: "Notes",
    year: 2025,
    excerpt: "Resumo elaborado para a prova de Sistemas Operacionais, abordando de forma clara os principais tópicos sobre concorrência, threads, escalonamento e sincronização — destinado ao uso próprio.",
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
}

export default post
