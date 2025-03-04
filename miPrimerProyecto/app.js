const express=require("express");
const bodyParser= require("body-parser")
const app= express ();  

const puerto = 3001
const IP='192.168.18.10'
const {Client} = require ('pg')

const client = new Client({
    user: 'postgres',
    host: IP,
    database: 'Contacto',
    password: '1105351751.jac',
    port: 5432
})

//conectar a base de datos
client.connect()
    .then(() => console.log("Conectado a PostgreSQL"))
    .catch(err => console.error("Error al conectar a PostgreSQL:", err));


// contacto : id ,nombre,apellido,celular

app.use(bodyParser.json())
app.use("/contactos",(request,response,next)=>{
    console.log("ingresa a funcion midlleware")
    console.log("headers:",request.headers)
    console.log("body:",request.body)
    next();
});

app.get("/contactos", (request, response) => {
    client.query('select * from contactos')
    .then(responseQuery => {
                response.send(responseQuery.rows);
    })
    .catch(responseQuery => {
                console.log(responseQuery.rows);  
    })
    .catch(err => {
                console.log(err); 
                response.status(500).send("Error en la consulta");
                client.end();
    })
});
    


app.post("/contactos",(request,response)=>{
    const { nombre, apellido, celular } = request.body;
    client.query('insert into contactos (nombre,apellido,celular) values ($1,$2,$3)',
        [nombre,apellido,celular]
    )
    response.send(request.body)
})

app.put ("/contactos/:idParam",(request,response)=>{
    const id= request.params.idParam
    const { nombre, apellido, celular } = request.body;
    client.query('update contactos set nombre= $1, apellido= $2, celular = $3 where id_contactos= $4',
        [nombre,apellido,celular,id]
    )
    console.log("id: ",id)
    response.send(request.body)
})

app.delete ("/contactos/:id",(request,response)=>{
    const id = parseInt(request.params.id);
    client.query('delete from contactos where id_contactos = $1',[id])
    console.log("id: ",id)
    response.send({id:id})
})




app.listen(puerto,()=>{
    console.log("servidor listo en el cuarto "+puerto);
});