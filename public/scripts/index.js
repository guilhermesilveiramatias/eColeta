/* -----------------------------------------------------------------------
 * Script chamado pela página index.html.
 * Responsável por exibir ou não a tela modal.
 * --------------------------------------------------------------------- */

// Recuperando os elementos.
const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");

// Ao clicar no botão de pesquisa, remove a classe .css resposável por esconder o modal. (modal visível.)
buttonSearch.addEventListener("click", () => {modal.classList.remove("hide") });

// Ao clicar no botão fechar (presente na modal), adiciona a classe .css resposável por esconder o modal. (modal invisível.)
close.addEventListener("click", () => {modal.classList.add("hide");})





    /* --------------------------------------------------------------
    *                INFORMAÇÕES DA LINGUAGEM
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    *                   const       let         var
    * escopo global      não        não         SIM
    * escopo de bloco    sim        sim         não (global)
    * pode modificar     NÃO        sim         sim
    * hoisting           sim        sim*        sim
    * 
    * Apesar da variável let ter hoisting (elevação) ela pode não ter
    * sido inicializada no momento do uso (algo que não acontece com a const)
    *  
    * --------------------------------------------------------------*/