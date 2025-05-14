import { BlogPost } from "@/types/blog"

const post: BlogPost = {
  id: "tipos-de-arquivos",
  title: "Tipos de Arquivos: Conheça os Principais Formatos",
  date: "May 14, 2025",
  readTime: "5 min read",
  language: "Portuguese",
  category: "Article",
  year: 2025,
  excerpt:
    "Você já se deparou com um arquivo .zip, .pdf ou .mp3 e ficou na dúvida sobre o que fazer com ele? Neste artigo, explico de forma simples os principais tipos de arquivos e onde cada um deles é usado.",
  tags: ["arquivos", "formatos", "sistemas", "informática básica"],
  content: `
    <p>No mundo digital, tudo que fazemos — desde escrever um texto até assistir a um vídeo — gira em torno de arquivos. Eles armazenam as informações e dizem ao sistema como lidar com cada tipo de conteúdo. Neste artigo, vamos explorar os principais formatos e suas finalidades, de forma simples e direta.</p>

    <h2>📄 1. Arquivos de Texto</h2>
    <ul>
      <li><strong>.txt:</strong> Textos simples, sem formatação. Ótimo para anotações rápidas.</li>
      <li><strong>.doc / .docx:</strong> Muito usados no Word, ideais para relatórios, trabalhos e documentos com formatação.</li>
      <li><strong>.pdf:</strong> Perfeito para compartilhar arquivos que precisam manter o layout original.</li>
    </ul>

    <h2>🖼️ 2. Arquivos de Imagem</h2>
    <ul>
      <li><strong>.jpg / .jpeg:</strong> Leves e ideais para fotos. Perde um pouco da qualidade, mas economiza espaço.</li>
      <li><strong>.png:</strong> Mantém boa qualidade e suporta fundo transparente. Muito usado em logos e imagens para web.</li>
      <li><strong>.gif:</strong> Imagens animadas, como aquelas figurinhas engraçadas que circulam nas redes.</li>
      <li><strong>.svg:</strong> Usado para ícones e gráficos que precisam ser redimensionados sem perder qualidade.</li>
    </ul>

    <h2>🎵 3. Arquivos de Áudio</h2>
    <ul>
      <li><strong>.mp3:</strong> O mais famoso para músicas. Compactado, leve e compatível com quase tudo.</li>
      <li><strong>.wav:</strong> Alta qualidade, usado por quem trabalha com edição de som.</li>
      <li><strong>.ogg:</strong> Um formato alternativo e aberto, também com boa qualidade.</li>
    </ul>

    <h2>🎬 4. Arquivos de Vídeo</h2>
    <ul>
      <li><strong>.mp4:</strong> O queridinho dos vídeos. Boa qualidade e tamanho reduzido.</li>
      <li><strong>.avi:</strong> Mais antigo, mas ainda compatível com vários programas.</li>
      <li><strong>.mkv:</strong> Ótimo para vídeos longos, como filmes, porque suporta legendas e várias faixas de áudio.</li>
    </ul>

    <h2>⚙️ 5. Arquivos Executáveis</h2>
    <ul>
      <li><strong>.exe:</strong> Programas que rodam no Windows. Um clique e o app abre.</li>
      <li><strong>.app:</strong> Semelhante ao .exe, mas para o macOS.</li>
      <li><strong>.sh:</strong> Scripts usados em Linux e Unix. Automatizam comandos.</li>
      <li><strong>.jar:</strong> Arquivos feitos em Java que também podem ser executados.</li>
    </ul>

    <h2>🗄️ 6. Arquivos Compactados</h2>
    <ul>
      <li><strong>.zip / .rar:</strong> Juntam vários arquivos em um só e ainda reduzem o tamanho. Perfeitos para envio por e-mail.</li>
      <li><strong>.tar / .gz:</strong> Mais comuns no Linux, também usados para compressão.</li>
    </ul>

    <h2>🧩 7. Extensões e Associações</h2>
    <p>Sabe aquele “.pdf” no final de um nome de arquivo? Isso se chama extensão. Ela diz ao computador com qual programa o arquivo deve ser aberto. Por isso, é bom não sair trocando por aí — pode acabar gerando erro.</p>

    <h2>🔒 8. Cuidados e Segurança</h2>
    <ul>
      <li>Desconfie de arquivos executáveis (.exe, .jar...) que vêm de fontes desconhecidas.</li>
      <li>Evite abrir arquivos com extensões duplas, tipo <code>foto.jpg.exe</code>. Pode ser vírus disfarçado.</li>
      <li>Mantenha seu antivírus sempre atualizado. É ele quem te protege de ameaças escondidas nos arquivos.</li>
    </ul>

    <h2>📌 Conclusão</h2>
    <p>Entender os tipos de arquivos não precisa ser complicado. Com esse conhecimento, você consegue abrir, organizar e compartilhar seus arquivos com mais segurança e praticidade no dia a dia.</p>
  `,
}

export default post
