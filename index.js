const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
const pool = require("./db");

app.use(express.json())

//inserir

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
        res.json(novaChamada.rows);
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
        const values = [chamada.dataconsulta,chamada.sala]
        const novaChamada = await pool.query(sql, values)
        res.json(novaChamada.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


 

//listar



app.get("/chamada", async(req, res) =>{
    // try {
        const chamadas = await pool.query("SELECT * FROM CHAMADA");
        res.json(chamadas.rows)
    // } catch (err) {
    //     console.error(err.message);
    // }
});










app.listen(3000, () => {
    console.log("server listening on port 3001")
});




