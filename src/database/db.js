// Arquivo utilizado para configurar o banco de dados.

// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose();


// Criar o objeto que irá fazer operações no banco de dados. (e cria o banco de dados - arquivo - também)
const db = new sqlite3.Database("./src/database/database.db");

/* - - - - - - - - --- - 
 * Observação: Você pode rodar esse script js direto pelo note
 *             basta que, no terminal, você escreva node src/database/db.js
 *  - - - --- - - -- - - -  */
// Exportando o módulo.
module.exports = db


// Utilizar o objeto de banco de dados para a aplicação.
// o método serialize vai rodar um conjunto de comandos.
db.serialize(() => {

    // # Criando a tabela.
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT, 
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `);

    // # inserir dados.
    // const query = ` INSERT INTO places (
    //     image, name, address, address2, state, city, items)
    //     VALUES (?, ?, ? , ? ,? , ? , ? ); `;

    /*const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ];*/

    /*const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ];
    // # Chama a função com um retorno de callback (via ser chamada novamente quando terminar.. paralelismo)
    function afterInsertData(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Cadastrado com sucesso.");
        console.log(this);

    }
    */
    /* ----------------------------------------
     * Importante: Por ser uma função de callback eu não posso utilizar
     * arrows functions. 
     * Também é importante frisar que se eu passar "afterInsertData()" a função será executada
     * imediatamente, o que eu não quero que aconteça. O que eu deverei fazer, mais uma vez, por 
     * ser uma função de callback, é apenas passar o nome da funçaõ, sem os parênteses.
     * Obs: o uso da palavra "this" fica comprometido em uma arrow function. procurar 
     * algum vídeo no youtube para identificar e entender isso
     * */
    //db.run(query, values, afterInsertData);



    // # consultar os dados da tabela.
    // db.all(`SELECT name FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log("Aqui estão seus registros:");
    //     console.log(rows);
    // });


    // deletar um dado da tabela. (USAR "`")

    // db.run(`DELETE FROM places WHERE id > ?`, [0], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro excluído com sucesso.");
    // });


})