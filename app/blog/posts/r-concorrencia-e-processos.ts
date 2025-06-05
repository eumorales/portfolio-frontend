import { BlogPost } from "@/types/blog";

const post: BlogPost = {
  id: "r-concorrencia-e-processos",
  title: "Programação Concorrente, Escalonamento e Processos",
  date: "Jun 5, 2025",
  readTime: "4 min read",
  language: "Portuguese",
  category: "Notes",
  year: 2025,
  excerpt:
    "Resumo sobre concorrência, threads, escalonamento, semáforos, seções críticas, starvation e cálculos de tempo.",
  tags: ["sistemas operacionais", "concorrencia", "threads", "escalonamento"],
  content: `
    <style>
      .caixa-codigo {
        background-color: #1e1e1e;
        color: #ffffff;
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 0.9rem;
        font-family: Consolas, Monaco, 'Courier New', monospace;
        white-space: pre-wrap;
        margin-bottom: 1rem;
        position: relative;
      }
      .caixa-codigo::before {
        content: attr(data-lang);
        position: absolute;
        top: 0;
        right: 0;
        background-color: #333;
        color: #fff;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-bottom-left-radius: 8px;
      }
    </style>

    <h2>🧵 1. Concorrência</h2>
    <ul>
      <li><strong>Concorrência</strong> → execução <strong>simultânea</strong> de múltiplos fluxos de instruções.</li>
      <li><strong>Threads</strong> → compartilham o <strong>mesmo espaço de endereçamento</strong>.</li>
      <li><strong>Processos</strong> → possuem <strong>espaços separados</strong> de memória.</li>
    </ul>

    <h2>👥 2. Processo vs Thread</h2>
    <ul>
      <li><strong>Processo</strong> → unidade de execução com memória isolada.</li>
      <li><strong>Thread</strong> → fluxo leve de execução que compartilha recursos com outras threads do mesmo processo.</li>
      <li>Threads são mais leves e rápidas → indicadas para tarefas simultâneas dentro de um mesmo processo.</li>
    </ul>

    <h2>⚠️ 3. Condição de Corrida (Race Condition)</h2>
    <p>Ocorre quando dois ou mais processos ou threads acessam um recurso compartilhado ao mesmo tempo e o resultado final depende da ordem de execução → <strong>ordem importa</strong>.</p>

    <h2>🔄 4. Semáforos</h2>
    <p>São estruturas de controle usadas para sincronizar o acesso à seção crítica → ajudam a garantir <strong>exclusão mútua</strong>.</p>
    <ul>
      <li><strong>P() // ou wait()</strong> → decrementa o valor do semáforo → pode bloquear.</li>
      <li><strong>V() // ou signal()</strong> → incrementa o valor → pode desbloquear um processo.</li>
      <li>Semáforos podem ser binários (0 ou 1) ou contadores (inteiros positivos).</li>
    </ul>

    <h2>🔐 5. Seção Crítica</h2>
    <p>Trecho do código que acessa um recurso compartilhado. Apenas um processo ou thread deve executá-lo por vez → <strong>garante consistência</strong>.</p>
    <p>Requisitos para evitar falhas:</p>
    <ul>
      <li><strong>Exclusão mútua</strong> → só um por vez.</li>
      <li><strong>Progresso</strong> → ninguém fica travado sem necessidade.</li>
      <li><strong>Espera limitada</strong> → nenhum processo espera para sempre.</li>
    </ul>

    <h2>🛑 6. Starvation</h2>
    <p>Quando um processo ou thread fica esperando indefinidamente por um recurso que nunca é liberado para ele → geralmente por ter prioridade baixa.</p>
    <p><strong>Aging</strong> → técnica que aumenta a prioridade com o tempo de espera, evitando inanição.</p>

    <h2>🔁 7. Escalonamento</h2>
    <ul>
      <li><strong>FIFO (First In, First Out)</strong> → ordem de chegada.</li>
      <li><strong>SJF (Shortest Job First)</strong> → processo com menor tempo de CPU vai primeiro.</li>
      <li><strong>Round Robin</strong> → revezamento por quantum de tempo.</li>
      <li><strong>Prioridade</strong> → processos com maior prioridade executam antes.</li>
      <li><strong>Aging</strong> → aumenta prioridade de processos que estão esperando há muito tempo.</li>
    </ul>

    <h2>⏱️ 8. Cálculo de Tempos</h2>
    <ul>
      <li><strong>Tempo de Espera</strong> → tempo que o processo passa aguardando na fila: <em>início da execução - chegada</em></li>
      <li><strong>Tempo de Retorno</strong> → tempo total que o processo leva desde que chegou até ser concluído: <em>término - chegada</em></li>
    </ul>

    <h2>📉 9. Ordem de Execução</h2>
    <p>A escolha da ordem de execução dos processos afeta diretamente o tempo médio de espera. Executar primeiro os processos com menor tempo de CPU tende a reduzir esse tempo → estratégia baseada no algoritmo SJF.</p>
    <p>O tempo médio de resposta melhora com uma fila organizada de forma eficiente.</p>

    <h2>🍴 10. Fork()</h2>
    <p>A chamada <strong>fork()</strong> cria um novo processo (cópia do processo pai).</p>
    <div class="caixa-codigo" data-lang="C">
int main() {
  fork();
  fork();
  return 0;
}
    </div>
    <p>Cada <strong>fork()</strong> duplica os processos existentes. No exemplo acima, serão criados 4 processos:</p>
    <ul>
      <li>1 processo original (pai)</li>
      <li>1º fork → 2 processos</li>
      <li>2º fork → cada um dos 2 anteriores cria mais 1 → total = 4 processos</li>
    </ul>
    <p>Organização: pai → dois filhos → cada filho cria um neto.</p>
  `,
};

export default post;
