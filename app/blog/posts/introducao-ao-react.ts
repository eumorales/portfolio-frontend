import { BlogPost } from "@/types/blog";

const post: BlogPost = {
  id: "introducao-ao-react",
  title: "Introdução ao React: Componentes, Navegação e Backend com Next.js",
  date: "May 30, 2025",
  readTime: "16 min read",
  language: "Portuguese",
  category: "Article",
  year: 2025,
  excerpt:
    "Quer aprender React? Neste artigo, você entenderá os conceitos centrais da biblioteca, como JSX, estado, props, navegação com React Router e integração com backend via Next.js.",
  tags: ["React", "desenvolvimento web", "framework", "Next.js"],
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

    <p>Já tentou montar uma interface interativa usando apenas HTML e JavaScript puro? A experiência pode rapidamente se tornar confusa. Foi para resolver esse problema que nasceu o <strong>React</strong>, uma biblioteca criada pelo Facebook que revolucionou a forma de construir aplicações web. Neste artigo, você vai aprender de forma prática como o React funciona, como criar componentes reutilizáveis, navegar entre páginas com o React Router e até integrar seu front-end com backend via <strong>Next.js</strong>.</p>

    <h2>🧠 O que é o DOM?</h2>
    <p>DOM significa <strong>Document Object Model</strong> (Modelo de Objeto do Documento). É uma representação em árvore dos elementos da página. Com JavaScript, podemos acessar, modificar e interagir com qualquer parte da página por meio do DOM.</p>

    <p>Por exemplo:</p>
    <div class="caixa-codigo" data-lang="JavaScript">
document.getElementById('paragrafo').textContent = 'Texto atualizado!';
    </div>

    <p>React usa o <strong>Virtual DOM</strong>, uma cópia leve do DOM real. Quando algo muda, ele calcula a diferença e aplica apenas o necessário — muito mais rápido e eficiente.</p>

    <h2>🚀 Por Que Usar o React?</h2>
    <ul>
      <li><strong>Componentização:</strong> Divida a interface em partes reutilizáveis e organizadas.</li>
      <li><strong>Virtual DOM:</strong> Atualizações mais rápidas e eficientes.</li>
      <li><strong>Reatividade:</strong> Mudanças de dados refletem automaticamente na interface.</li>
      <li><strong>Ecossistema robusto:</strong> React Router, Redux, Next.js e muito mais.</li>
      <li><strong>React Native:</strong> Use os mesmos conceitos para criar apps móveis.</li>
    </ul>

    <h2>⚙️ Como o React Funciona?</h2>
    <p>React funciona com <strong>componentes</strong>, que são funções (ou classes) que retornam JSX — uma sintaxe parecida com HTML. Esses componentes têm <em>estado</em> (state) e <em>propriedades</em> (props).</p>

    <h3>JSX (JavaScript XML)</h3>
    <div class="caixa-codigo" data-lang="JSX">
const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
    </div>

    <p>JSX é uma sintaxe parecida com HTML, mas que permite incluir lógica JavaScript diretamente. Ela é convertida em código JavaScript padrão usando <code>React.createElement()</code>.</p>

    <h2>🧩 Estado e Props</h2>
    <ul>
      <li><strong>State:</strong> Armazena dados internos do componente, com o hook <code>useState</code>.</li>
      <li><strong>Props:</strong> Valores passados de um componente pai para o filho.</li>
    </ul>

    <div class="caixa-codigo" data-lang="JSX">
function Saudacao(props) {
  return &lt;h1&gt;Olá, {props.nome}!&lt;/h1&gt;;
}

&lt;Saudacao nome="Gilberto" /&gt;
    </div>

    <div class="caixa-codigo" data-lang="JSX">
function Contador() {
  const [contagem, setContagem] = useState(0);
  return (
    &lt;button onClick={() =&gt; setContagem(contagem + 1)}&gt;
      {contagem} cliques
    &lt;/button&gt;
  );
}
    </div>

    <h2>📁 Organização de Componentes</h2>
    <p>É comum criar componentes em arquivos separados, especialmente quando eles são reutilizados. Isso torna o código mais limpo, organizado e fácil de manter.</p>

    <div class="caixa-codigo" data-lang="JSX">
// components/Saudacao.jsx
function Saudacao({ nome }) {
  return &lt;h1&gt;Olá, {nome}!&lt;/h1&gt;;
}

export default Saudacao;
    </div>

    <div class="caixa-codigo" data-lang="JSX">
// pages/Home.jsx
import Saudacao from '../components/Saudacao';

function Home() {
  return (
    &lt;div&gt;
      &lt;Saudacao nome="Gilberto" /&gt;
      &lt;Saudacao nome="Maria" /&gt;
    &lt;/div&gt;
  );
}

export default Home;
    </div>

    <h2>🧠 React vs HTML + JS</h2>
    <p>Vamos comparar como a mesma funcionalidade — atualizar o texto de um parágrafo ao clicar em um botão — é implementada com JavaScript tradicional e com React.</p>

    <h3>React</h3>
    <div class="caixa-codigo" data-lang="JSX">
import { useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('Texto inicial');

  return (
    &lt;div&gt;
      &lt;p&gt;{mensagem}&lt;/p&gt;
      &lt;button onClick={() =&gt; setMensagem('Texto atualizado!')}&gt;
        Clique aqui
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
    </div>

    <h3>HTML + JavaScript</h3>
    <div class="caixa-codigo" data-lang="HTML">
&lt;p id="mensagem"&gt;Texto inicial&lt;/p&gt;
&lt;button onclick="atualizarTexto()"&gt;Clique aqui&lt;/button&gt;

&lt;script&gt;
  function atualizarTexto() {
    document.getElementById("mensagem").textContent = "Texto atualizado!";
  }
&lt;/script&gt;
    </div>

    <p>Note que, com React, você não precisa acessar diretamente o DOM. Basta atualizar o estado e a interface será renderizada automaticamente — essa é a essência da reatividade.</p>

    <h2>🔀 React Router</h2>
    <p>React Router é uma biblioteca que permite criar navegação entre diferentes "páginas" sem recarregar o site. É essencial para SPAs (Single Page Applications).</p>

    <div class="caixa-codigo" data-lang="JavaScript">
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;Início&lt;/Link&gt;
        &lt;Link to="/sobre"&gt;Sobre&lt;/Link&gt;
      &lt;/nav&gt;

      &lt;Routes&gt;
        &lt;Route path="/" element=&lt;Home /&gt; /&gt;
        &lt;Route path="/sobre" element=&lt;Sobre /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}
    </div>

    <h3>🧭 Benefícios do React Router</h3>
    <ul>
      <li><strong>SPA com navegação fluida</strong></li>
      <li><strong>Rotas dinâmicas:</strong> como <code>/produto/:id</code></li>
      <li><strong>Rotas protegidas:</strong> baseadas em autenticação</li>
      <li><strong>Histórico de navegação:</strong> via <code>useNavigate()</code></li>
    </ul>

    <h3>📄 Rota com parâmetro</h3>
    <div class="caixa-codigo" data-lang="JavaScript">
&lt;Route path="/usuario/:id" element=&lt;PerfilUsuario /&gt; /&gt;
    </div>

    <div class="caixa-codigo" data-lang="JavaScript">
import { useParams } from 'react-router-dom';

function PerfilUsuario() {
  const { id } = useParams();
  return &lt;p&gt;Perfil do usuário de ID: {id}&lt;/p&gt;;
}
    </div>

    <h2>🌐 O que é Next.js?</h2>
    <p>Next.js é um framework baseado em React com foco em performance, SEO e produtividade. Ele oferece:</p>
    <ul>
      <li><strong>SSR:</strong> Server-Side Rendering (renderização no servidor)</li>
      <li><strong>SSG:</strong> Static Site Generation (geração estática no build)</li>
      <li><strong>API Routes:</strong> backend embutido</li>
      <li><strong>SEO otimizado:</strong> melhor ranqueamento em buscadores</li>
    </ul>

    <h3>Exemplo de API Route</h3>
    <div class="caixa-codigo" data-lang="JavaScript">
// pages/api/ola.js
export default function handler(req, res) {
  res.status(200).json({ mensagem: "Olá!" });
}
    </div>

    <h2>🪝 Principais Hooks do React</h2>
    <ul>
      <li><code>useState</code>: controle de estado</li>
      <li><code>useEffect</code>: efeitos colaterais (como requisições)</li>
      <li><code>useContext</code>: estado global compartilhado</li>
    </ul>

    <h2>📌 Conclusão</h2>
    <p>React é uma ferramenta poderosa para criar interfaces modernas, reativas e escaláveis. Com o Next.js, você ainda adiciona SEO, backend, rotas automáticas e performance.</p>

    <p>Se você está começando no desenvolvimento web, aprender React (e depois Next.js) é um dos melhores caminhos em 2025.</p>

    <h2>📚 Fontes</h2>
    <ul>
      <li><a href="https://react.dev">Documentação oficial do React</a></li>
      <li><a href="https://reactrouter.com">React Router</a></li>
      <li><a href="https://nextjs.org">Next.js</a></li>
    </ul>
  `,
};

export default post;
