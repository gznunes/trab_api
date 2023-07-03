const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
const pool = require("./db");

app.use(express.json())

//inserir

app.post("/livros", async(req, res) => {
    try {
        const livro = req.body;
        const sql = "INSERT INTO LIVROS(nome,reservado) VALUES ($1,$2) RETURNING *"
        const values = [livro.nome,livro.reservado]
        const novoLivro = await pool.query(sql, values)
        res.json(novoLivro.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/chamada", async(req, res) => {
    try {
        const chamada = req.body;
        // const sql = "INSERT INTO CHAMADA(sala,nome) VALUES ($1,$2) RETURNING *"
        // const values = [chamada.sala,chamada.nome]\
        // f = new Intl.DateTimeFormat('en-US', {
        //     timeZone: "America/New_York"
        // });
        // timepoa = f.format(chamada.data);
        // console.log(chamada.data);
        // console.log(timepoa);
        const sql = "INSERT INTO CHAMADA(sala,nome,dia) VALUES ($1,$2,$3) RETURNING *"
        const values = [chamada.sala,chamada.nome,chamada.data]
        const novaChamada = await pool.query(sql, values)
        res.json(novaChamada.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// get relatorio
app.post("/relchamada", async(req, res) => {
    try {
        const chamada = req.body;
        // const sql = "INSERT INTO CHAMADA(sala,nome) VALUES ($1,$2) RETURNING *"
        // const values = [chamada.sala,chamada.nome]\
        // f = new Intl.DateTimeFormat('en-US', {
        //     timeZone: "America/New_York"
        // });
        // timepoa = f.format(chamada.data);
        // console.log(chamada.data);
        // console.log(timepoa);
        // const sql = "INSERT INTO CHAMADA(sala,nome,dia) VALUES ($1,$2,$3) RETURNING *"
        const sql = "SELECT * FROM CHAMADA WHERE DATE(dia) = $1 and sala = $2"
        const values = [chamada.data,chamada.sala]
        const novaChamada = await pool.query(sql, values)
        res.json(novaChamada.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/reservas", async(req, res) => {
    try {
        const reserva = req.body;
        const sql = "INSERT INTO reservas(nome,idlivro) VALUES ($1,$2) RETURNING *"
        const values = [reserva.nome,reserva.idlivro]
        const novoReserva = await pool.query(sql, values)
        res.json(novoReserva.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
 

//listar

app.get("/livros", async(req, res) =>{
    // try {
        const livros = await pool.query("SELECT * FROM LIVROS");
        res.json(livros.rows)
    // } catch (err) {
    //     console.error(err.message);
    // }
});

app.get("/chamada", async(req, res) =>{
    // try {
        const chamadas = await pool.query("SELECT * FROM CHAMADA");
        res.json(chamadas.rows)
    // } catch (err) {
    //     console.error(err.message);
    // }
});

app.get("/reservas", async(req, res) =>{
    try {
        const reservas = await pool.query("SELECT * FROM RESERVAS");
        res.json(reservas.rows)
    } catch (err) {
        console.error(err.message);
    }
});

// buscar por id

app.get("/livros/:id", async(req, res) =>{
    const {id} = req.params;
    try {
        const livros = await pool.query("SELECT * FROM LIVROS WHERE id = $1",[id]);
        res.json(livros.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/chamada/:id", async(req, res) =>{
    const {id} = req.params;
    try {
        const livros = await pool.query("SELECT * FROM CHAMADA WHERE sala = $1",[id]);
        res.json(livros.rows)
    } catch (err) {
        console.error(err.message);
    }
});

//atualizar

app.put("/livros/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const livro = req.body;

        const updateLivro = await pool.query("UPDATE LIVROS SET nome=$1, reservado=$2 WHERE id=$3 RETURNING *",[livro.nome,livro.reservado, id]);
         //UPDATE livros SET nome=$1, reservado=$2 WHERE id=$3 RETURNING *
        res.json(updateLivro.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//deletar

app.delete("/livros/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const deletarLivro = await pool.query("DELETE FROM livros WHERE id = $1 RETURNING *", [id]);
        res.json(deletarLivro.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(3000, () => {
    console.log("server listening on port 3001")
});




