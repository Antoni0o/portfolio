---
title: "Como desenvolvi este blog"
excerpt: "Para publicar os posts, é inicialmente necessário ter o blog. Neste post vou explicar como desenvolvi ele."
coverImage: "/assets/como-desenvolvi-este-blog/cover.png"
date: "16 de março de 2023 às 10:30"
author:
  name: "Antonio"
  picture: "https://github.com/Antoni0o.png"
---

Olá! Bem-vindos a mais um post.

Hoje estarei explicando um pouco sobre a parte técnica e algumas curiosidades deste blog. Existem vários pontos interessantes a comentar; fazia um tempo que eu não desenvolvia um projeto "apenas com o frontend" **(ênfase nas áspas)**.

---

### Tecnologia Escolhida:

Para começar, a tecnologia escolhida para o desenvolvimento foi o **NextJS** (como já foi comentado no post anterior), mas este projeto tem um diferencial da grande maioria das aplicações que utilizam ele. **O blog foi desenvolvido usando a versão 13 do Next, com o appDir** — a nova implementação da Vercel para o framework.

> _Contextualizando para quem não estava ligado nas novidades: o appDir é um recurso experimental presente nas últimas atualizações do NextJS. É possível perceber mudanças relevantes no jeito de desenvolver com o framework. Para entender melhor, acesse: <https://nextjs.org/blog>_

### Inspirações:

Pesquisei por maneiras de fazer um blog em que eu tivesse bastante facilidade de escrever os posts e que não necessariamente precisasse escrevê-lo todo em HTML. A alternativa explicada pelo Mario Souto, do DevSoutinho [neste vídeo](https://www.youtube.com/watch?v=n5hnE1yPde0) **foi a melhor que encontrei para o _meu caso_**. No vídeo ele mostra uma maneira de desenvolver um blog com **Markdown**, e isso me agradou muito.

Para o suporte do vídeo, o Mario Souto recomendou o repositório de um exemplo de blog do mesmo estilo no [Github da Vercel](https://github.com/vercel/next.js/tree/canary/examples/blog-starter); uma ótima referência para utilizar durante o desenvolvimento.

### Dificuldades:

Durante o desenvolvimento, tive várias dificuldades. **Não foi fácil criar um blog inteiro apenas com referências de uma versão anterior do NextJS;** sem contar que usei o Tailwind, nunca tinha usado ele antes (foi uma mão na roda, mas no começo foi um pouco confuso; a documentação salvou demais). As dificuldades resultaram em problemas que atrasaram um pouco o desenvolvimento, mas que também me renderam muito aprendizado.

### Conclusão:

Mesmo com as dificuldades e algumas limitações que encontrei no caminho (como o problema na hora de enviar pra produção que, por algumas divergências no código, não era possível utilizar o LocalStorage), **consegui desenvolver um projeto que me orgulho bastante.** Não só porque foi difícil, mas porque eu fiz tudo de um jeito que me deixou muito satisfeito e também porque aprendi várias coisas novas!

Este blog é algo que com certeza vai se tornar muito importante pra mim; não pretendo deixar desatualizado nunca, vou continuar implementando mais coisas e sempre postar mais artigos.

_**Um spoiler de implementação futura:** tema noturno (era para estar na versão inicial, porém o problema do LocalStorage ao subir pra produção impediu; acho que já descobri uma maneira de funcionar, logo estarei testando)._

É isso pra esta semana! Nos veremos na próxima.
