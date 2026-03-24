 Teste de Integração - Exercício Aula 18/03
Este repositório contém a resolução do exercício prático sobre Testes de Integração. O objetivo principal foi validar a comunicação e a troca de dados entre módulos distintos de um sistema.

 Estrutura e Modularização
Para que a integração funcionasse entre os arquivos, foram implementados os seguintes comandos fundamentais do Node.js:

module.exports: Adicionado ao final dos módulos auth.js e profile.js. Esse comando é essencial para que as funções sejam exportadas e "enxergadas" por outros arquivos do sistema.

require(): Adicionado ao topo do arquivo integracaoTeste.js. Ele é responsável por importar e conectar as funções dos outros módulos, estabelecendo o "contrato" de comunicação entre as interfaces.

✅ Objetivos Alcançados

Verificar Interfaces: Garantia de que os módulos passam dados corretamente entre si.

Validar Contratos: Confirmação de que os tipos e valores retornados (como o objeto de usuário) são os esperados pelo próximo módulo.

Integração Incremental: O projeto evita a estratégia "Big Bang", integrando e testando os componentes passo a passo.