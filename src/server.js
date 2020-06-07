/* -----------------------------------------------------------------------------------------------------------
 *                          SCRIPT EXECUTADO PELO NODE NO SERVIDOR.
 *
 *      Aqui ficarão as configurações do servidor como:
 *      - Rotas
 *      - Configuração do banco de dados
 *      - Módulos extras.
 * 
 * -----------------------------------------------------------------------------------------------------------*/

 /* -----------------------------------------------------------------------------------------------------------
  *             PASSO A PASSO -> DA INSTALAÇÃO DO NODE ATÉ A CONFIGURAÇÃO DO SERVIDOR (NODE.JS).
  * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  * > Instalando o Node.js e preparando o ambiente
  *     1. Acessar o site nodejs.org e baixar o node (recomendável a versão "lts") - reiniciar o vs.code
  * 
  *     2. (recomendável) baixar o git bash para utilizar como terminal. (aberir o terminal e selecionar o git bash - reiniciar)
  * 
  *     3. Confirmar a instalação do node: No terminal digite "node -v" e deverá ser exibida a versão do node.
  * 
  *     4. Confirmar a instaçaõ do npm (node package manager): No terminal, digite "npm -v" e será exibida a versão do npm.
  *     (ctrl + l): limpa o terminal
  * 
  *     -- extra: Você pode ligar o node (digitando "node") e executar comandos javascript diretamente no terminal.
  * 
  * > Preparando o projeto
  * 
  *     5. Criar a estrutuda de pastas para organizar melhor o funcionamento do servidor:
  *         5.1. Criar uma subpasta "public" para armazenar os arquivos que são acessáveis externamente (browsers)
  *             - assets (imagens svg)
  *             - scripts (script .js de funcionalidades de página - cliente side)
  *             - styles (arquivos .css)
  * 
  *         5.2. Criar uma pasta chamada "src" para organizar os arquivos vistos pelo servidor
  *             - Criar uma subpasta "views" com as páginas html que o servidor irá ler.
  *             
  *     6. Criar, na pasta "/src" o arquivo .js executado pelo servidor node. (sugestão de nome: "server.js" - Este arquivo.)
  * 
  *     7. Na pasta raiz, iniciar o npm - assim ele já vai criar um arquivo chamado packages.json contendo as dependências do nosso projeto
  *         e isso vai "transformar" a minha página simples em um projeto propriamente dito.
  *         para isso execute, no terminal, o seguinte comando: "npm init -y"  
  * 
  *     8. No arquivo que foi criado, chamado package.json" haverão várias propriedades do nosso projeto e aqui é que vamos configurar o 
  *         que o node irá ler:
  *         - name: nome do projeto
  *         - version: Versão do projeto
  *         - Description: Descrição do projeto
  *         - main: arquivo .js que será responsável pela configuração do servidor (no nosso caso "src/server.js)
  *         - scripts: comandos customizados que serão executados pelo node.
  *         - ...
  *         ** Dica: Feche o package.json antes de prosseguir, pois os próximos passos irão modificar esse arquivo e ele não deve ficar aberto.
  * 
  * > Configurando o projeto
  * 
  *     9. Na pasta raiz do projeto, instalar o módulo "express"  que irá baixar um pacote/modulo/dependência contendo arquivos prontos para
  *         criação e configuração do servidor. Nós poderiamos desenvolver essas atividades aqui, diretamente no arquivo, mas seria muito
  *         mais trabalhoso e suscetível a falhas. por isso instalaremos o pacote express.
  *         9.1: Executar o comando no terminal (ctrl + '): "npm install express"
  *             - Será criada uma pasta chamada npm_modules com diversas dependências do express.
  *                 ** Dica: ao enviar o projeto para o git, nós não enviamos o diretorio node_modules, pois ao baixar o projeto do git 
  *                         e dar um npm install, ele irá ler o arquivo package.json e instalar as dependências automaticamente.
  *             - Será criado um arquivo chamado "package-lock.json" contendo as dependências do projeto
  *             - O arquivo "package.json" será modficado para adicionar a referência ao "express".
  *                 ** Dica: se o seu arquivo package.json estava aberto, certifique-se de que ele ficará com a referência ao express.
  *                         caso não fique, reinstale.
  * 
  * > Configurando o servidor efetivamente.
  *     10. Agora que o projeto está "pronto", vamos utilizar o express e montar o nosso servidor.
  *        para isso temos o código abaixo:
  * --------------------------------------------------------------------------------------------------------------------------------------*/


  // Este arquivo será executado pelo node para criar e configurar o servidor. (descrito no passo 8 deste documento)




  /* --------------------------------------------------------------------------------------------
   * Obtendo o objeto "express" 
   *
   * Para isso temos a função "require", do node, que retorna os módulos instalados 
   * para que possamos utilizar mais adiante neste arquivo.
   *  ------------------------------------------------------------------------------------------*/
const express = require("express");
const server = express();  // Inicializará o servidor (é como se fosse uma instanciação do objeto acima.).

/* -----------------------------------------------------------------------------------------------
 * Informações sobre a execução do servidor.
 *
 *Obs: Na última linha de código tem o comando server.listen(3000), que "liga" o server. Após fazer isso, 
 * se você der o comando "node src/server.js"  o servidor já vai ligar e você já pode fazer uma
 * requisição para localhost:3000.
 * - ctrl + c irá parar a execução.
 * 
 * > Adicionando um "atalho" para a inicialização do servidor
 *     Para tornar mais simples a inicialização do servidor e evitar ter que digitar node src/server.js
 *  nós podemos criar um "atalho" do npm. Para isso basta ir até o arquivo do npm chamado "package.json"
 *  e criar a seguinte configuração:
 * 
 *  "scripts": {
 *       "start": "nodemon src/server.js"
 *  }    
 *      
 *      Agora, basta rodar o comando "npm start" para que o npm acesse essa linha e rode o comando para
 *  ligar o nosso servidor.      
 *
*/



/* -----------------------------------------------------------------------------------------------
 *              TRECHO DE CONFIGURAÇÕES DO SERVIDOR (ROTAS, BANCO DE DADOS, ETC)
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 *  Esse trecho de código é desenvolvido ao longo do projeto, ou seja, mais e mais funcionalidades
 *  vão sendo adicionadas aqui.
 *  Por fim, na última linha de código, é que o servidor é efetivamente ativado, com o comando
 *  server.listen(3000)
 * ------------------------------------------------------------------------------------------------*/




 /* -------------------------------------------------------------------------------------------------
  * PARA INSTALAR O SQLITE3
  * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  *     1. Na pasta raiz do projeto npm install sqlite3
  *     2. Criar uma pasta, dentro de src, "database"
  *     3. Incluir o arquivo db.js (ir nele para ver detalhes da implementação)
  *     pronto, agora você está pronto para utilizar o banco aqui: veja abaixo como:
  * ------------------------------------------------------------------------------------------------*/
// pegar o banco de dados:
const db = require("./database/db"); //  posso colocar ou não a extensão .js. Pra que funcione, dentro do arquivo .jd vc precisa exporta o db.


// * TODA ALTERAÇÃO FEITA AQUI REQUER A REINICIALIZAÇÃO DO SERVIDOR. MAS VOCÊ PODE INSTALAR O nodemon -D para o node fazer isso automaticamente.


// Configurar pasta pública
// server.use: configurações especificas
server.use(express.static("public")); //  tornando a pasta públic disponível como se fosse raiz e facilitando pegar os arquivos .js e imagens que são referenciadas nas páginas html.



// habilitar o uso do req.body na nossa aplicação. (necessário para requisições "post")
server.use(express.urlencoded({ extended: true }));



/* ---------------------------------------------------------------------------------------------------
 *                                  TEMPLATE ENGINE (NUNJUCKS)
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * > O que é: O Nunjucks possibilitará o que chamamos de html dinâmico, com lógica (if, for, etc), em
 *          vez do html stático que não muda nunca. Isso é feito por meio de uma "template engine" e 
 *          aqui utilizaremos o nunjucks para isso.
 * 
 * > Instalando o nunjucks: "npm install nunjucks"
 * 
 * > Configurando o nunjucks:                                                                           
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const nunjucks = require("nunjucks");  //  Carrega o módulo

/* Primeiro argumento é a pasta onde estão os arquivos .html que serão lidos pelo nunjucks
 * segundo argumento é um objeto contendo as configurações que serão aplicadas. */
nunjucks.configure("src/views", {
    express: server,  // Define qual é o servidor. usamos o aquele que nós criamos acima "server"
    noCache: true     // Configuração para o momendo de desenvolvimento, para não armazenar em cache.
});
 
/*
 * > Renderizando as páginas.
 *      Agora que temos o nunjucks instalado, não precisaremos mais enviar os arquivo html e, em vez 
 *  disso, nós vamos renderizar os arquivos. para isso, vamos substituir o método de retorno das rotas
 *  de "sendFile" para "render">
 *      Obs: Mais detalhes do funcionamento do nunjucks podem ser obtidos nas páginas.
 *  
 * 
 *  Dica: Você pode instalar a extensão Nunjucks template (autor: eseom) para facilitar o desenvolvimento.
 *          Revisar os parâmetros de configuração que estão listados na página para não perder o emmet
 *         ctrl + shift + p > digitar > Open Settings (json)
 * ---------------------------------------------------------------------------------------------------*/




/* MODELO DE REQUISIÇÃO GET */
// configurar caminhos (ROTAS) da minha aplicação
// pagina inicial
// req: Requisição
// res: Resposta
// __dirname: mostra o diretorio onde vc está.
server.get("/", (req, res) => {
    //res.send("Cheguei aqui! Olá mundo!!!!")
    //res.sendFile(__dirname + "/views/index.html");
    //res.render("__dirname" + "/views/index.html"); //  feito para ser utilizado com a te nunjucks
    return res.render("index.html", { title: "Título" }); //  vai funcionar porque eu já configurei lá em cima o nunjucks para funcionar com a pasta "src/Views"
    // aqui estamos passando o objeto "title" para o motor do nunjucks renderizar, porém, para funcionar é necessário que a página html tenha a declaração {{title}}
    // que vai receber o objeto.
})

// rotas são sem o .html
server.get("/create-point", (req, res) => {
    // req.query: Query strings da nossa url
    console.log(req.query) //  funciona apenas por get.
    return res.render("create-point.html");
})


server.post("/savepoint", (req, res) => {
    //req.body: corpo do nosso formulario. (precisa habilitar no server)

    console.log(req.body);

    // # inserir dados.
    const query = ` INSERT INTO places (
        image, name, address, address2, state, city, items)
        VALUES (?, ?, ? , ? ,? , ? , ? ); `;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    // função de callback.
    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.send("Erro no cadastro!");
        }
        // console.log("Cadastrado com sucesso.");
        // console.log(this);

        //return res.send("ok");  //  envia uma mensagem
        return res.render("create-point.html", { saved: true });
    }


    db.run(query, values, afterInsertData);


    // return res.send("ok");
})




// rotas são sem o .html
server.get("/search", (req, res) => {
    const search = req.query.search; // pegando o filtro da consulta.

    if (search == "") { // pesquisa vazia
        return res.render("search-results.html", { total: 0 });
    }



    // # consultar os dados da tabela.
    db.all(`SELECT * FROM places WHERE city like '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err);
        }
        const total = rows.length;
        // Mostrar as páginas html com os dados do banco de dados.
        return res.render("search-results.html", { places: rows, total: total }); //  dica: quando a chave e o valor têm o mesmo nome, eu posso deixar só um. ex. total (apenas
    });


})


server.listen(3000);  // EFETIVAMENTE LIGA O SERVIDOR PARA OUVIR A PORTA 3000.

// agora, ligar o servidor. para isso, vá ao terminal bash e digite node src/server.js (que é esse arquivo). pronto.

// se você acessar localhost:3000 seu site vai estar ok.. provavelmente você verá cannot get, mas isso é normal até aqui.
// agora, vamos parar a execução do server. no console pressione ctrl + c


// 4) fazer o node criar subir automaticamente o server, para isso, acesse o arquivo package.json e, na seção "scripts" inclua a tag "start":"node src/server.js"
//    ao fazer isso o npm vai rodar o server quando der o start (npm start)
// (não coloque comentários no package.json)


// 5 fazer algumas configurações (que ele colocou acima)

// 6) Configurar uma template engine (é tipo um razor) e usamos aqui o nunjucks
// npm install package nunjucks

// 7) Para ver cores diferentes no nunjucks basta instalar o plugin nunjucks templates no gerenciador de extensões.