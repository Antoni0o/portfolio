---
title: "Uma To-Do List; a minha"
excerpt: "Congelei alguns projetos tempos atrás e comecei a retomá-los. Um destes projetos é a minha to-do list"
coverImage: "/assets/uma-todo-list/cover.png"
date: "23 de março de 2023 às 13:30"
author:
  name: "Antonio"
  picture: "https://github.com/Antoni0o.png"
---

Olá! Bem-vindos. Espero que estejam bem!

Durante meu tempo livre, percebi que meu GitHub tinha alguns projetos incompletos e um em específico tinha bastante coisa faltando; é sobre este projeto que vou falar hoje: **a tal da to-do list**.

---

É bem comum entre os programadores **— principalmente os de frontend iniciantes —** criar uma to-do list. Normalmente, é muito do mesmo — estilo, funcionalidades etc. Tudo igual.

_(Observação: minha To-Do List não tem nada de muito inovador, só é um pouquinho diferente. Não é muito difícil criar um sistema de autenticação simples, um backend e uns detalhes pequenos a mais)_

**Nada contra quem quer fazer igual, mas eu não quero.** Então fui lá e fiz um pouquinho diferente.

Como já comentei antes: **não tem nada de muito diferente**, só que também não tá igual ao padrão de sempre.

### A história por trás da To-Do List

Comentei anteriormente que é muito comum entre os programadores front-end iniciantes desenvolverem uma To-Do list. Quando comecei a desenvolver este projeto, eu era iniciante; **só que eu não era apenas do front-end** (quis dizer que eu sou full-stack).

Obviamente, durante meus estudos como desenvolvedor full-stack iniciante, eu precisava ver coisas sobre front-end, e **percebi que era um padrão fazer a famosa to-do list**. Porém, como quem fazia era iniciante e normalmente só sabia front-end, **a maioria** usava apenas o localStorage para a persistência de dados; o que acaba sendo **bem simplista e limitado**.

_Não encontrei apenas projetos de iniciantes, mas **a grande maioria era mais simples** e sem muita implementação extra._

Então eu quis começar **a minha própria To-Do List** e aproveitar pra treinar alguns conceitos extras, como o desenvolvimento de **APIs back-end** com ExpressJS e a **utilização delas no front-end**.

### Então... Quais são as diferenças?

Só de ter uma API por trás, **já era um baita diferencial**; mas este viria com algumas dificuldades.

O benefício de usar um localStorage, é que faz a maneira de persistir dados muito mais simples. **Não é necessário relacionar com nenhum usuário** pra deixar lá, pois já está salvo dentro do próprio navegador. Mas o problema é que por estar salvo ali, **o dado pode ser perdido facilmente ao limpar o cache do navegador**, tornando a persistência em um banco de dados "mais segura".

_Legal! Agora sabemos que é melhor usar um banco de dados. **Mas tem um problema...**_

Se você simplesmente salvar o to-do no banco de dados, sem relacionar à nenhum usuário, ele vai ficar perdido lá e poderá ser visto por qualquer pessoa que entrar no site.

_**Imagina só**: a aplicação tem dois usuários. Na lista de cada um, aparecerá **todos** os to-do's criados. **Seria uma confusão**_

Então além de ter uma tabela to-do's no banco de dados, precisamos ter uma tabela usuários **com relação OneToMany de usuários para to-do's**.

Só esse ponto aí já deixa tanto o back-end como o front-end **muito mais interessante**.

> Começando por aí, **tive a ideia de criar as deadlines** — funcionalidade para o usuário conseguir colocar uma data limite de conclusão da tarefa e a aplicação avisar quando chegar no "overtime".

![Tarefa no Status To-Do](/assets/uma-todo-list/task-to-do.png)
![Tarefa no Status To-Do](/assets/uma-todo-list/task-overtime.png)
![Tarefa no Status To-Do](/assets/uma-todo-list/task-done.png)
_Conseguiu perceber a diferença entre os estados?_

> Além das funcionalidades, **fiz um trabalho um pouco diferente na UI**.  
> Me esforcei em criar uma interface simples e direta, **sem perder a beleza e sem seguir o padrão**.

![Interface Home](/assets/uma-todo-list/interface-image.png)
_Simples e direta._

---

Vou bater na mesme tecla, mais uma vez: **não tem nada de muito diferente**. Mas tudo foi idealizado para ser um pouquinho menos do "de sempre".

Por hoje é isso! Não vou me estender mais. O post já tá **bem** longo. O projeto ainda não está "completo", **vou tentar terminar algumas partes e disponibilizar o link no próximo post** (se você procurar no meu github, acha o repositório com os códigos e quem sabe o link... Aproveita e me segue lá :D ).

Até o próximo post!
