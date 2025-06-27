import { BlogPost } from "@/types/blog";

const post: BlogPost = {
  id: "r-sistemas-de-arquivos",
  title: "Sistemas de Arquivos: Conceitos e Funcionalidades",
  date: "Jun 27, 2025",
  readTime: "5 min read",
  language: "Portuguese",
  category: "Notes",
  year: 2025,
  excerpt:
    "Resumo sobre sistemas de arquivos, abordando conceitos como arquivos, diretórios, alocação, gerência de espaço livre, técnicas de acesso e proteção de dados.",
  tags: ["sistemas operacionais", "arquivos", "sistemas de arquivos"],
  content: `
    <p>Resumo feito para a disciplina de Sistemas Operacionais, com o objetivo de sintetizar os principais conceitos sobre sistemas de arquivos e suas funcionalidades.</p>

    <h2>📄 1. Arquivo</h2>
    <p>Arquivos são unidades básicas de armazenamento, contendo dados como textos, imagens ou programas. Cada arquivo possui atributos como nome, tamanho e permissões, facilitando a organização e acesso.</p>

    <h2>📁 2. Diretório</h2>
    <p>Diretórios organizam arquivos em uma estrutura hierárquica, funcionando como "pastas". Eles podem conter outros arquivos ou subdiretórios, mantendo o sistema estruturado.</p>

    <h2>💾 3. Sistema de Arquivos</h2>
    <p>O sistema de arquivos gerencia o armazenamento e recuperação de dados em dispositivos como HDs ou SSDs. Exemplos incluem FAT32, NTFS e ext4, cada um com características específicas de desempenho e segurança.</p>

    <h2>🗂️ 4. Formas de Alocação de Arquivos</h2>
    <ul>
      <li><strong>Alocação Contígua:</strong> Arquivo em blocos consecutivos, rápido, mas propenso à fragmentação.</li>
      <li><strong>Alocação Encadeada:</strong> Blocos ligados por ponteiros, flexível, mas mais lento.</li>
      <li><strong>Alocação Indexada:</strong> Usa índices para mapear blocos, equilibrando eficiência e flexibilidade.</li>
    </ul>

    <h2>🗃️ 5. Gerência de Espaço Livre</h2>
    <ul>
      <li><strong>Lista de Blocos Livres:</strong> Registra blocos disponíveis no disco.</li>
      <li><strong>Bitmap:</strong> Mapa de bits para indicar blocos livres ou ocupados.</li>
      <li><strong>Agrupamento:</strong> Organiza blocos livres em grupos para otimizar alocações.</li>
    </ul>

    <h2>🔍 6. Técnicas de Acesso a Dados</h2>
    <ul>
      <li><strong>Acesso Sequencial:</strong> Leitura na ordem de armazenamento, ideal para arquivos grandes.</li>
      <li><strong>Acesso Direto:</strong> Acesso a blocos específicos, usado em bancos de dados.</li>
      <li><strong>Acesso Indexado:</strong> Localização rápida via índices, comum em sistemas complexos.</li>
    </ul>

    <h2>🔒 7. Proteção da Integridade dos Dados</h2>
    <h3>a. Organização da Cache</h3>
    <p>A cache armazena dados na RAM para acesso rápido, usando políticas como LRU (<em>Least Recently Used</em>) para gerenciar blocos, reduzindo o tempo de leitura/escrita.</p>
    <h3>b. Sistemas de Arquivos Jornalizados (<em>Journaling</em>)</h3>
    <p>Sistemas como NTFS e ext4 registram alterações antes de aplicá-las, garantindo recuperação em caso de falhas, como quedas de energia, mantendo a consistência do sistema.</p>
  `,
};

export default post;
