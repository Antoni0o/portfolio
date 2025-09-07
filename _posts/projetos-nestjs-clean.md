---
title: "Como desenvolver um projeto NestJS seguindo padrões 'Clean'"
excerpt: "Estou desenvolvendo um projeto NestJS e vou te falar como fiz pra deixá-lo mais 'Clean'"
coverImage: "/assets/projetos-nest-clean/cover.png"
date: "07 de setembro de 2025 às 19:00"
author:
  name: "Antonio"
  picture: "https://github.com/Antoni0o.png"
---

Olá! Bem-vindos a mais um post.

Atualmente estou desenvolvendo um SaaS (novidades em breve). Passei por umas dificuldades para desenvolver um código mais 'clean'. Depois de quebrar a cabeça, cheguei a uma solução que me ajudou muito. Vou te mostrar como fiz pra você não cair na mesma cilada.

---

### O Problema

Escolhi o NestJS para começar o projeto porque ele é rápido, simples de desenvolver e tem uma estrutura excelente. O Nest é realmente um framework excepcional, e para o meu caso, os bônus superaram os ônus.

A configuração inicial foi bem rápida, mas percebi que, com o tempo, as regras de negócio começaram a "bater de frente" com as bibliotecas do próprio framework. Esse é um problema que eu já tinha visto em outros projetos com Nest, mas nunca tinha me incomodado tanto, já que nenhum deles tinha tantas regras de negócio como este que estou fazendo agora. A arquitetura do NestJS é ótima, mas, naturalmente, acabamos criando uma dependência muito grande com o framework. E era justamente isso que eu queria evitar.

Nesse projeto, decidi usar o NestJS com a integração do Mongoose. Quis experimentar um banco de dados não-relacional pela volatilidade dos dados e também para aprender mais sobre NoSQL. Com a biblioteca do Mongoose, enfrentei alguns problemas.

Conforme eu ia criando os módulos da aplicação, comecei a notar uma confusão enorme entre os conceitos e as regras que eu queria definir. As responsabilidades estavam intimamente ligadas aos recursos do nest/mongoose. Para tentar entender o que estava acontecendo, decidi fazer um desenho da arquitetura, e ficou assim:

![Primeiro desenho que fiz para tentar melhorar minha arquitetura. Controller e Service entram em contato com a Entity, que por sua vez tem contato direto com a lib mongoose. Isso gerou um lock-in da minha regra de negócio com o Nest](/assets/projetos-nest-clean/primeiro-desenho.png)

### A Solução

Ao perceber que tudo estava interligado, comecei a pensar em como separar melhor as responsabilidades. Queria algo rápido, mas também não posso esquecer que depois vou ser eu que vou realizar a manutenção do sistema. Foi aí que eu decidi investir um pouco mais de tempo pensando numa solução que deixasse minha aplicação mais 'Clean' e revisar algumas técnicas para melhorar a qualidade que aplico no trabalho.

Depois de algumas pesquisas e perguntas pro Gemini, cheguei a um modelo que separava as responsabilidades sem ser complexo demais. Basicamente, adaptei os conceitos da Clean Architecture para um modelo mais simples, mantendo as facilidades que o NestJS oferece.

O desenho ficou assim:

![Segundo desenho que fiz para tentar melhorar minha arquitetura. Controller e Service ficam em uma camada separada, o serviço se comunica com o domínio, que por sua vez, não conhece as especificações da infraestrutura, apenas possui a interface para realizar as operações que estão na responsabilidade da regra de negócio. Essa tratativa reduziu meu lock-in expressivamente](/assets/projetos-nest-clean/segundo-desenho.png)

Com essa ideia, consegui separar as responsabilidades em três camadas: Application, Domain e Infrastructure. Essa divisão me permitiu implementar o projeto sem me preocupar tanto com as ferramentas que estou usando. As regras importantes (o Domain) ficam em um só lugar. Se eu precisar, no futuro, migrar para um serviço à parte ou mudar a tecnologia, consigo pegar meu Domain e adaptá-lo sem muito problema.

É claro que essa abordagem aumenta um pouco a complexidade, mas esse é um tradeoff necessário e importante para a clareza e a manutenibilidade do sistema. Antes, eu mal conseguia dar manutenção em algo simples sem mexer em coisas que tinham relação com as bibliotecas. Para ilustrar o que estou falando, fiz um terceiro desenho de um módulo mais complexo:

![Terceiro desenho que fiz, dessa vez para entender a aplicabilidade da proposta que tinha feito. Esse módulo tem uma regra de negócio complexa, que necessitaria de uma Factory e um Registry para realizar um cadastro de diferentes tipos de Campos dentro de um Template a partir de uma request realizada.](/assets/projetos-nest-clean/terceiro-desenho.png)

Olhando para o desenho, fica claro que a complexidade aumentou, mas em compensação, tudo ficou bem mais separado e compreensível. Para adicionar um novo tipo de Field, eu só preciso mexer no Domain, criar um novo modelo e adicioná-lo ao registry (claro, tenho que adicionar o novo campo, caso tenha, na camada de application e infra, mas isso é muito pequeno comparado com o trabalho de tratar o dado que eu tinha antes). A responsabilidade do negócio fica inteiramente no Domain. A camada de Application é responsável por receber e entregar dados para o usuário, e a Infrastructure cuida da comunicação com todas as ferramentas que estou usando. Assim, se um dia eu decidir trocar o banco de dados, por exemplo, só a camada de infra vai precisar ser alterada.

### Conclusão:

O NestJS é um framework incrível, com uma robustez maior que o Express, e continua sendo rápido e excelente para construir MVPs e backends. Além de já ter uma estrutura preparada para microsserviços.

No entanto, mesmo com todas as suas facilidades, é fundamental pensar na manutenibilidade e nas suas limitações ao iniciar um projeto. O ideal, principalmente em um MVP, é não ter uma dependência muito grande das suas regras de negócio com a tecnologia usada. Esse lock-in pode criar bugs e exigir refatorações gigantes no futuro.

Esse foi um aprendizado recente. Quero voltar a escrever mais sobre o que estou estudando e compartilhar na internet algo que pode ser útil para alguém.

Espero que esse texto tenha sido útil! Se tiver mais alguma dúvida ou quiser continuar a conversa, é só me chamar.
