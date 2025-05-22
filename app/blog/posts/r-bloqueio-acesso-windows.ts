import { BlogPost } from "@/types/blog"

const post: BlogPost = {
  id: "r-bloqueio-acesso-windows",
  title: "Bloqueio de Acesso no Windows Usando Linux",
  date: "Oct 17, 2024",
  readTime: "6 min read",
  language: "Portuguese",
  category: "Notes",
  year: 2024,
  excerpt: "Resumo completo do projeto de Redes para bloqueio de sites no Windows usando ferramentas no Linux como Squid, Apache2, IP Tables e configuração de proxy.",
  tags: ["redes", "linux", "proxy", "squid"],
  content: `
    <p>Projeto realizado por <strong>Gilberto Morales</strong>, <a href="https://github.com/romeonoro" target="_blank" style="text-decoration: underline; font-weight: bold; color: inherit;">Romeo Noro</a> e <a href="https://github.com/Iago-Vargas" target="_blank" style="text-decoration: underline; font-weight: bold; color: inherit;">Iago Vargas</a>, com o objetivo de bloquear o acesso ao site <code>www.iffarroupilha.edu.br</code> (exemplo) e conteúdo adulto, utilizando ferramentas de rede no Linux.</p>

    <h2>🔐 1. SSH e Usuários</h2>
    <ul>
      <li>Instalação do <code>openssh-client</code> para acesso remoto seguro.</li>
      <li>Criação de novo usuário com <code>adduser</code> e adição ao grupo <code>sudo</code>.</li>
    </ul>

    <h2>🌐 2. Apache2 e Página de Erro</h2>
    <ul>
      <li>Instalação do Apache2 e criação de uma página personalizada de erro.</li>
      <li>Configuração de permissões e firewall.</li>
      <li>Exemplo de mensagem: <em>"Acesso bloqueado pelo Grupo 4."</em></li>
    </ul>

    <h2>🛡️ 3. Sub-Interfaces e IP Tables</h2>
    <ul>
      <li>Criação de sub-interfaces para segmentação de rede.</li>
      <li>Instalação e configuração do <code>iptables</code> para filtragem de pacotes.</li>
    </ul>

    <h2>🦑 4. Squid como Proxy</h2>
    <ul>
      <li>Instalação do Squid para atuar como servidor proxy.</li>
      <li>Criação de listas de sites e palavras proibidas.</li>
      <li>Redirecionamento para a página de erro usando <code>deny_info</code>.</li>
      <li>Porta padrão configurada: <code>3128</code>.</li>
    </ul>

    <h2>💻 5. Configuração de Proxy no Windows</h2>
    <ol>
      <li>Desativar detecção automática de proxy.</li>
      <li>Configurar manualmente o IP e porta do proxy no Windows.</li>
      <li>Exemplo: IP: <code>192.168.1.25</code>, Porta: <code>3128</code>.</li>
    </ol>

    <h2>🌐 6. Endereçamento IP</h2>
    <ul>
      <li><strong>Rede:</strong> 192.168.1.24/29</li>
      <li><strong>Linux:</strong> 192.168.1.25</li>
      <li><strong>Windows:</strong> 192.168.1.26</li>
      <li><strong>Gateway:</strong> 192.168.1.25</li>
    </ul>

    <h2>🖥️ 7. Configurar IP no Linux</h2>
    <p>Usar <code>ifconfig</code> para configurar IP e máscara de sub-rede manualmente.</p>

    <h2>🛠️ 8. Comandos Úteis</h2>
    <ul>
      <li><code>sudo su</code> – acessar como superusuário</li>
      <li><code>kill -9 &lt;PID&gt;</code> – finalizar processo</li>
      <li><code>systemctl start|stop apache2/squid</code> – controlar serviços</li>
    </ul>

    <h2>🖼️ 9. Imagens do Projeto</h2>
    <p><img alt="Trabalho Redes" src="https://raw.githubusercontent.com/eumorales/TrabalhoRedes/main/assets/trabRedesCC.jpg" /></p>
    <p><img alt="Quadro de Configuração" src="https://raw.githubusercontent.com/eumorales/TrabalhoRedes/main/assets/transferir.png" /></p>
  `,
}

export default post
