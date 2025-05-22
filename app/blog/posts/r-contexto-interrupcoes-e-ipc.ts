import { BlogPost } from "@/types/blog"

const post: BlogPost = {
  id: "r-contexto-interrupcoes-e-ipc",
  title: "Chaveamento de Contexto, Interrupções e Comunicação entre Processos",
  date: "Apr 3, 2025",
  readTime: "5 min read",
  language: "Portuguese",
  category: "Notes",
  year: 2025,
  excerpt: "Resumo sobre chaveamento de contexto, tratamento de interrupções e comunicação entre processos, baseado no livro 'Sistemas Operacionais' – Deitel. Elaborado para revisão e estudos.",
  tags: ["sistemas operacionais", "contexto", "interrupções"],
  content: `
    <p>Resumo baseado no livro <strong>"Sistemas Operacionais"</strong> de Deitel, abordando os principais conceitos de multitarefa e gerenciamento de processos.</p>

    <h2>🔄 1. Chaveamento de Contexto</h2>
    <ul>
      <li><strong>Troca de contexto:</strong> alternância eficiente entre processos.</li>
      <li>Inclui salvar/restaurar registradores, contador de programa e estado do processo.</li>
      <li>O escalonador escolhe o próximo processo; o dispatcher realiza a troca.</li>
      <li>Essencial para concorrência mesmo em CPUs com um único núcleo.</li>
    </ul>

    <h2>🚨 2. Interrupções e Seu Tratamento</h2>
    <p>Sinais que interrompem temporariamente a execução da CPU para tratar eventos importantes.</p>
    <ul>
      <li><strong>Hardware:</strong> teclado, disco, etc.</li>
      <li><strong>Software:</strong> chamadas de sistema.</li>
      <li><strong>Temporizador:</strong> controle de tempo/escalonamento.</li>
      <li><strong>Exceções:</strong> falhas, erros de memória.</li>
    </ul>
    <p>Fluxo: CPU salva estado → identifica interrupção → executa tratador → retoma execução.</p>

    <h2>📡 3. Comunicação entre Processos (IPC)</h2>
    <ul>
      <li><strong>Sinais:</strong> notificações como SIGKILL.</li>
      <li><strong>Troca de mensagens:</strong> via sockets ou filas.</li>
      <li><strong>Pipes:</strong> canais unidirecionais, como <code>|</code>.</li>
      <li><strong>Memória Compartilhada:</strong> permite acesso conjunto eficiente.</li>
    </ul>

    <h2>🐧 4. Processos em Sistemas UNIX/Linux</h2>
    <ul>
      <li><code>fork()</code>: duplica um processo.</li>
      <li><code>exec()</code>: substitui o código de um processo.</li>
      <li><code>ps aux</code>, <code>top</code>: monitoramento.</li>
      <li><code>kill -9 PID</code>: finaliza processos.</li>
    </ul>

    <h2>🧠 5. Mapa Mental</h2>
    <p>Para facilitar a visualização dos tópicos estudados:</p>
    <p><img alt="Mapa Mental" src="https://github.com/eumorales/TrabalhoSO/blob/main/Mapa%20Mental.jpg?raw=true"/></p>

    <h2>💡 6. Reflexão Final</h2>
    <p>Avanços em hardware e algoritmos de escalonamento tornaram o chaveamento de contexto mais eficiente, com registradores dedicados, caches otimizados e técnicas como Hyper-Threading e CPU affinity.</p>
    <p>Essas evoluções contribuem para sistemas operacionais modernos com multitarefa mais fluida e responsiva.</p>
  `,
}

export default post
