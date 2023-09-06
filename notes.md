React é uma biblioteca, não um framework.

Render Patterns (https://www.patterns.dev/posts/rendering-patterns)

-   SSR: Server Side Render (Tradicionalmente monolítico)
-   SPA: Single Page Application
    -   O backend não é mais responsável por instruir a criação das páginas

Bundlers e Compilers

-   Compilers são traduções de código para um código de nível mais baixo (ling de máquina)
-   Bundlers condensam múltiplos arquivos para arquivos únicos e estáticos
-   O Vite não utiliza o processo de bundler pois utiliza importações de forma nativa

Setup projeto 01

-   DOM: Document Object Model
-   JSX: Javascript + XML
-   Default Exports vs Named Exports
-   Scoped css ("\*.modules.css"), com classes aleatórias

Paradigmas

    Programação Imperativa

    -   Você diz ao programa "como" desenvolver uma tarefa, passo à passo
    -   Você explicitamente gerencia o estado da sua aplicação, alterando a aplicação diretamente, no tempo

    Programação Declarativa (ReactJS)

    -   Você diz ao programa "quando" desenvolver uma tarefa, através de regras
    -   As regras devem levar ao resultado esperado, por tanto, há uma abstração das regras, ao invés do gerenciamento direto (exemplo, SQL)

Imutabilidade

-   Aspecto da programação declarativa. No React, não se deve alterar estados (states) diretamente, mas sim, através de funções específicas para isso, em contextos com regras delimitadas

Enclausuramento

-   No React, o enclausuramento define um escopo/contexto de execução. Em uma função, por exemplo, não é possível alterar o mesmo estado duas vezes no mesmo contexto, sem que se use um atributo específico do callback, para recuperar o estado mais recente daquela variável

\*`let` vem de `let it changes`
