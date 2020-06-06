// Esse arquivo é o que será executado pelo servidor.


// Criar o servidor 

// Incluir os módulos extras

// 1) Iniciar o npm (node package manager) para depois poder instalar as dependências necessárias.
// npm init -y
// o comando acima vai transformar a minha estrutura de pastas simples em um "projeto node.js"


// 2) instalar a dependência "express" com o npm
// ao fazer isso ele vai criar uma serie de pastas e dependências (modulos) além de colocar informações dos pacotes criados.
// ao enviar o projeto para o git, nós não enviamos o diretorio node_modules, pois ao baixar o projeto do git e dar um npm install, ele irá
// ler o arquivo package.json e instalar as dependências automaticamente.

// 3) criar e usar o servidor.
const express = require("express");
const server = express();

// pegar o banco de dados:
const db = require("./database/db"); //  posso colocar ou não a extensão .js. Pra que funcione, dentro do arquivo .jd vc precisa exporta o db.


// * TODA ALTERAÇÃO FEITA AQUI REQUER A REINICIALIZAÇÃO DO SERVIDOR. MAS VOCÊ PODE INSTALAR O nodemon -D para o node fazer isso automaticamente.


// Configurar pasta pública
// server.use: configurações especificas
server.use(express.static("public")); //  tornando a pasta públic disponível como se fosse raiz



// habilitar o uso do req.body na nossa aplicação.
server.use(express.urlencoded({ extended: true }));


// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});


// configurar caminhos (ROTAS) da minha aplicação
// pagina inicial
// req: Requisição
// res: Resposta
// __dirname mostra o diretorio onde vc está.
server.get("/", (req, res) => {
    //res.send("Cheguei aqui! Olá mundo!!!!")
    //res.sendFile(__dirname + "/views/index.html");
    //res.render("__dirname" + "/views/index.html"); //  feito para ser utilizado com a te nunjucks
    return res.render("index.html", { title: "Título" }); //  vai funcionar porque eu já configurei lá em cima o nunjucks para funcionar com a pasta views
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

// ligar o servidor na porta 3000
server.listen(3000);

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