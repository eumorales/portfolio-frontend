import { BlogPost } from "@/types/blog"

const post: BlogPost = {
  id: "r-registradores-assembly",
  title: "Revisão - Registradores e Assembly",
  date: "Dec 6, 2023",
  readTime: "3 min read",
  language: "Portuguese",
  category: "Notes",
  tags: ["arquitetura", "registradores", "assembly"],
  year: 2023,
  excerpt: "Resumo elaborado para revisão dos conteúdos de registradores e linguagem Assembly, com foco nas operações básicas e representação em linguagem de máquina.",
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
}

export default post
