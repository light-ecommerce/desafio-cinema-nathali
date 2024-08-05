**Desafio: Sistema de Reservas de Ingressos para Cinema**

**Objetivo:** O objetivo deste desafio é avaliar a sua capacidade de criar um sistema funcional para reservas de ingressos em um cinema. Você deve gerenciar horários de sessões e a disponibilidade de assentos. A utilização de orientação a objetos e a atualização em tempo real são opcionais, mas recomendadas para uma solução mais robusta.

**Instruções:**

1. **Criação da Página de Reserva:**  
   * Desenvolva uma página web que permita aos usuários reservar ingressos para sessões de filmes em um cinema.  
   * Na página, o usuário deve selecionar o filme e o horário desejado, então será listada as salas e lugares disponíveis.   
   * Ao reservar os lugares, o usuário deverá inserir informações necessárias para a reserva, como nome, número de telefone e número de ingressos desejados.  
   * Use HTML para construir o formulário de reserva. O formulário deve ter campos para que o usuário forneça todas as informações necessárias.  
1. **Estilização da Página (CSS):**  
   * Utilize CSS para estilizar a página e tornar o formulário visualmente atraente e fácil de usar. Considere aspectos como layout, cores e tipografia.  
1. **Validação e Gerenciamento de Horários e Assentos (JavaScript):**  
   * Implemente a lógica de validação usando JavaScript para garantir que os dados inseridos no formulário estejam corretos.  
   * Adicione funcionalidades para verificar e evitar conflitos de horários, assegurando que não haja sobreposição de reservas para o mesmo horário e sessão de filme.  
   * Implemente uma verificação para garantir que o número de ingressos solicitado não exceda a capacidade de assentos disponíveis para a sessão. Se o número de ingressos exceder a capacidade, o sistema deve informar o usuário e sugerir alternativas.  
1. **Lógica de Backend (PHP):**  
   * Desenvolva a lógica do lado do servidor em PHP para processar as reservas.  
   * **Funcionalidades Obrigatórias:**  
     * **Salvar Reservas:** Implemente métodos para salvar as informações das reservas em um banco de dados.  
     * **Atualizar Disponibilidade:** Implemente métodos para verificar e atualizar a disponibilidade de assentos com base nas reservas existentes, garantindo que as reservas não excedam o número de assentos disponíveis.  
   * **Funcionalidades Opcionais:**  
     * **Estrutura de Classes com Orientação a Objetos:** Para uma solução mais organizada e escalável, considere aplicar princípios de orientação a objetos.  
     * **Frameworks:** Você está livre para uso de qualquer framework tanto no backend quanto no frontend, ex: Laravel, Codeigniter, VueJS, React, Tailwind, Bootstrap, etc.   
1. **Banco de dados:**    
   * Utilizar o banco de dados Mysql.

**Resumo:** Você deve criar uma solução completa que inclui o desenvolvimento da página de reservas com HTML e CSS, a validação de dados e a lógica de gerenciamento de horários e capacidade de assentos com JavaScript, e a implementação da funcionalidade de backend em PHP. A estrutura orientada a objetos e a atualização e a disponibilidade em tempo real são opcionais, mas recomendadas para uma solução mais robusta e escalável.
