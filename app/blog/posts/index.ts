import r_concorrencia_e_processos from "./r-concorrencia-e-processos"
import r_registradores_assembly from "./r-registradores-assembly"
import tipos_de_arquivos from "./tipos-de-arquivos"
import atalhos_de_teclado from "./atalhos-de-teclado"
import r_contexto_interrupcoes_e_ipc from "./r-contexto-interrupcoes-e-ipc"
import r_bloqueio_acesso_windows from "./r-bloqueio-acesso-windows"

export const blogPosts = {
  [r_concorrencia_e_processos.id]: r_concorrencia_e_processos,
  [r_registradores_assembly.id]: r_registradores_assembly,
  [tipos_de_arquivos.id]: tipos_de_arquivos,
  [atalhos_de_teclado.id]: atalhos_de_teclado,
  [r_contexto_interrupcoes_e_ipc.id]: r_contexto_interrupcoes_e_ipc,
  [r_bloqueio_acesso_windows.id]: r_bloqueio_acesso_windows
}
