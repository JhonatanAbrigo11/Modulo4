const express = require ('express');
const app = express();
const puerto = 3001
const IP= '192.168.0.237'
const bodyParser = require('body-parser')
const {Client} = require ('pg')

const client = new Client({
    user: 'postgres',
    host:  IP,
    database:'Celulares',
    password: '1105351751.jac',
    port: 5432
})

app.use(bodyParser.json())
app.use ('/celulares',(request,response,next)=>{
    console.log('Headres :',request.headers)
    console.log('Body : ' ,request.body)
    next();
})

//Conectar mi base de datos
client.connect().
    then(()=>{console.log('Conectado a la base datos')}).
    catch(err =>{console.error('Error al conectar al Postgres ',err)})

app.listen(puerto,()=>{
    console.log('SERVIDOR LISTO EN EL CUARTO ',puerto)
});

app.get ('/celulares',(request,response)=>{
    client.query('select * from celulares')
    .then(responseQuery=>{
        response.send(responseQuery.rows)
    })
    .catch(err=>{
        console.log(err); 
        response.status(500).send("Error en la consulta");
        client.end();
    })
})

app.get ('/celulares/:idParam',(request,response)=>{
    const id = parseInt(request.params.idParam,10)
    
    client.query('select * from celulares where id = $1 ',[id] ,(err,result)=>{
        if(err){
            console.error('Error en la consulta SQl: ',err)
            return response.status(500).send({error:'Error en el servidor'})
        }
        const celularG= result.rows[0]

        response.send ({
            nombre: celularG.nombre,
            apellido : celularG.apellido,
            celular: celularG.celular
        })
    }) 
})

app.put ('/celulares/:id',(request,reponse)=>{
    const id = parseInt(request.params.id,10)
    const {nombre,apellido,celular} = request.body
    client.query ('update celulares set nombre = $1, apellido = $2, celular = $3 where id = $4 RETURNING *',[nombre,apellido,celular,id], (err,result)=>{
        if(err){
            console.error('Error en la consulta SQl: ',err)
            return response.status(500).send({error:'Error en el servidor'})
        }
        reponse.send(result.rows[0])
       
    })
})

app.post ('/celulares',(request,response)=>{
    const {nombre,apellido,celular} = request.body
    client.query('insert into celulares (nombre,apellido,celular) values ($1,$2,$3) RETURNING *',[nombre,apellido,celular],
        (err,result)=>{
            if (err){
                console.error('Error en la consulta SQl: ',err)
                return response.status(500).send({error:'Error en el servidor'})
            }
            response.send(result.rows[0])
        }
    )
})
app.delete('/celulares/:id',(request,response)=>{
    const id = parseInt(request.params.id , 10)

    client.query('delete from celulares where id = $1',[id],(err,result)=>{
        if(err){
            console.error(err);
        }else{
            console.log('Registro eliminado correctament')
        }
    })
})

