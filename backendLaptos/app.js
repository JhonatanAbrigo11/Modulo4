const express= require("express");
const bodyParser= require("body-parser");
const app= express();
const puerto= 3002;
const laptos=[
    {id:1,marca:'Lenovo',precesador:'Intel corei5',memoria:'16 GB',disco:'1TB'},
    {id:2,marca:'HP',precesador:'Intel corei7',memoria:'16 GB',disco:'2TB'},
    {id:3,marca:'Samsumg',precesador:'Intel corei3',memoria:'16 GB',disco:'3TB'},
    {id:4,marca:'Pirata',precesador:'Intel corei4',memoria:'16 GB',disco:'3TB'},
    {id:5,marca:'Otra',precesador:'Intel corei5',memoria:'16 GB',disco:'3TB'},
    {id:6,marca:'CompuPC',precesador:'Intel corei6',memoria:'16 GB',disco:'3TB'}
]
app.use(bodyParser.json())

app.use("/laptos",(request,response,next)=>{
    console.log("Headers ",request.headers)
    console.log("Body ",request.body)

    next();
})
app.get("/laptos",(request,response)=>{
    response.send(laptos);
})

app.post("/laptos",(request,response)=>{
    request.body.id=4
    response.send(request.body)
})

app.get("/laptos/:id",(request,response)=>{
    const id = parseInt(request.params.id, 10);
    console.log("id ",id)
    
    let laptoGuardada=null;
    for(let i=0;i<laptos.length;i++){
        let laptoEncontrada= laptos[i]
        if(laptoEncontrada.id===id){
            laptoGuardada={
                marca: laptoEncontrada.marca,
                porcesador: laptoEncontrada.precesador,
                memoria: laptoEncontrada.memoria,
                disco: laptoEncontrada.disco
            }
        }   
    }
    response.send(laptoGuardada)
})

app.put("/laptos/:idParam",(request,response)=>{
    const id= parseInt(request.params.idParam,10)
    let laptoEditar= null;
    for(let i=0; i<laptos.length;i++){
        let laptoBuscar= laptos[i]
        if(laptoBuscar.id===id){
            laptoEditar={
                id: laptoBuscar.id,
                marca: laptoBuscar.marca,
                porcesador: laptoBuscar.precesador,
                memoria: laptoBuscar.memoria,
                disco: laptoBuscar.disco
            }
        }
    }
    response.send(laptoEditar)
})

app.delete("/laptos/:id",(request,response)=>{
    const id= request.params.id;
    console.log("id: ",id)
    response.send()
})
app.listen(puerto,()=>{
    console.log("Servidor listo en el cuarto "+puerto)
})