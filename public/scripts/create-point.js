/* --------------------------------------------------------------------------------------------------
 * Script chamado pela tela de criação dos pontos de coleta.
 * Responsável por:
 *      1. Popular o grid de Estados. (utiliza a api do IBGE.)
 *      2. Popular o grid de cidades com base no estado selecioando. (utiliza a api do IBGE.)
 *      3. Gravar, em objeto hidden na página, os tipos de itens que o usuário selecionar na página.
 * 
 * Obs: Serão encontrados alguns comentários que não têm relação com o código em si, mas com detalhes
 *      da linguagem de programação. Este é um código para estudo.
 * --------------------------------------------------------------------------------------------------
 

/* ---------------------------------------------------------
 *                INFORMAÇÕES DA LINGUAGEM
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *        # Utilização do sinal de igualdade ("=") #
 * 
 *  "=":    Utilizado para atribuição do valor.
 *  "==":   Compara valores ignorando o tipo ( "1" = 1 )
 *  "===":  Compara valores considerando o tipo ("1" != 1 )
 *  
 * ---------------------------------------------------------*/


function populateUFs() {
    /* ------------------------------------------------------ 
     * Summary:
     *      Função que popula o select de UF.     
     * ------------------------------------------------------*/

    // Seletor para pegar um elemento com uma propriedade específica
    const ufSelect = document.querySelector("select[name=uf]");

    /* ---------------------------------------------------------
    *                INFORMAÇÕES DA LINGUAGEM
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    *        # Formas de declarar funções anônimas #
    * 
    *  1. function(){...}
    *  2. (nomeParametro) => {return nomeParametro + 'abc'} (Arrow function)
    *  3. nomeParametro => nomeParametro + 'abc'
    *  ---------------------------------------------------------*/
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") // "fetch" é a função para acesso à api's
        .then(res => res.json()) //  transforma em um json
        .then(states => { //  pega o retorno json e então insere no html todo os options.
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` //  Aqui temos o conceito de interpolação (necessário "`")
            }
        })
}



populateUFs();  //  Populando o combo/select de estados.



function getCities(event) {
    /* ------------------------------------------------------ 
     * Summary: Função que popula o select de cidades com base 
     *      na UF selecionada.
     *          Será chamada pelo listener do select de estado.
     * ------------------------------------------------------*/
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]");


    // Monta a url para consulta dos municípios.
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`

    // Grava no input "hidden" o "Estado" selecionado.
    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].textContent;


    citySelect.innerHTML = "<option value>Selecione a cidade</option>";
    citySelect.disabled = true;     // Mantém  o combo de cidades desabilitado
    fetch(url)
        .then(res => res.json())    //  Transforma a resposta (res) em um objeto Json que será enviado para o próximo "then"
        .then(cities => {           //  Recupera o objeto Json (recuperado anteriormente) e envia para a função anônima que irá carregar as opções do select de cidades.
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`; //  Aqui temos o conceito de interpolação (necessário "`")
            };

            citySelect.disabled = false; // Habilita o combo de cidades.
        })
}

// Addicionando um listener para o combo de Estado para carregar as cidades do estado selecionado.
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities); //  passado por referencia, por isso tem o event.




/* ---------------------------------------------------------------------------------------
 *
 *                      TRATAMENTO DA SELEÇÃO DE ITENS DE COLETA
 * 
 * ---------------------------------------------------------------------------------------*/
const itemsToCollect = document.querySelectorAll(".items-grid li");

    /* ----------------------------------------------------------
    *                INFORMAÇÕES DA LINGUAGEM
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    *       As funções de callback são passadas sem os parênteses. 
    *  x.addEventListener("click", xpto);
    *       Se você passar o parênteses, então a função será executada
    *  e o resultado do retorno é que será passado.
    *  ----------------------------------------------------------*/

// Adicionando o listener de click do item de coleta.
for (const item of itemsToCollect) {    
    item.addEventListener("click", handleSelectedItem); 
}


// array que armazenará os itens selecionados.
var collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;


    /* --------------------------------------------------------------------
    *                INFORMAÇÕES DA LINGUAGEM
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    * Adicionando ou removendo uma classe CSS de um elemento.
    * 
    * 1. elemento.classList.add("nomeClasse");     // Adiciona uma classe
    * 2. elemento.classList.remove("nomeClasse");  // Remove uma classe
    * 3. elemento.classList.toggle("nomeClasse");  // Add/Rem uma classe
    *  -------------------------------------------------------------------*/
    itemLi.classList.toggle("selected");


    /* --------------------------------------------------------------------
    *                INFORMAÇÕES DA LINGUAGEM
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    * datasets html: no elemento html5 é possível adicionar um atributo para
    *   indicar um dado específico, por exemplo "data-id", para adicionar o
    *   dado "id".     
    *  -------------------------------------------------------------------*/

    const itemId = itemLi.dataset.id; // O id indicado no html do item.
    console.log("item id:", itemId);





    //verificar se existem itens selecionados.
    // em caso afirmativo, pegá-los.

    /* ---------------------------------------------------------------------------------------
     * TRECHO DESCONTINUADO (MANTIDO PARA ESTUDO DO MÉTODO findIndex DISPONÍVEL PARA ARRAYS.)
     *
     * Detalhes:    Os arrays javascript possuem diversas funcionalidades. uma delas é a "findIndex". 
     *          esse método percorre cada um dos itens do array e passa ele para uma função (a função anônima)
     *          dentro dessa função haverá uma condição para validar se o item já está dentro do array, se retornar true
     *          então a função findIndex vai retornar o índice.
     * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -     
    const alreadySelected = selectedItems.findIndex(function(item) {
            const itemFound = item === itemId;
            return itemFound;          
        }
    * ----------------------------------------------------------------------------------------*/
    const alreadySelected = selectedItems.findIndex(item => item == itemId);  //  Recupera um array com os itens selecionados. ['papelão', 'vidro']


    
    
    if (alreadySelected >= 0) { // Verifica se há algum item há selecionado.        
        const filteredItems = selectedItems.filter(item => {
            /* -----------------------------------------------------------------------------  
             * Cada elemento do array selectedItems será passado para o item (uma especie de 
             *  iteração irá acontecer aqui. Então, para cada item, haverá uma comparação 
             * com um determinado valor (no nosso caso "itemId") para executar uma condição.
             *      Aqui, neste processo, nós estamos percorrendo a lista de elementos que já
             *  estão selecionados e verificando se o item que nós selecionamos está nessa
             *  coleção. Se não estiver, a função retorna true e o */

            const itemIsDifferent = item != itemId;
            return itemIsDifferent;
        })

        selectedItems = filteredItems;
    } else {
        // se não estiver selecionado eu coloco no array.
        selectedItems.push(itemId);

    }
    console.log('itens');
    console.log(selectedItems);

    // fazer um toggle. 

    // Atualizar o campo escondido com os itens selecionados.
    collectedItems.value = selectedItems;


}