const express=require("express");
const bodyParser= require("body-parser")
const app= express ();  
const puerto = 3001
// contacto : id ,nombre,apellido,celular
app.use(bodyParser.json())
app.use("/contactos",(request,response,next)=>{
    console.log("ingresa a funcion midlleware")
    console.log("headers:",request.headers)
    console.log("body:",request.body)
    next();
});


app.get("/contactos",(request,response)=>{
    const contactos=[
        {id:1,nombre:"Jhonatan", apellido:"Abrigo", celular:"0990681131"},
        {id:2,nombre:"Juan", apellido:"Diego", celular:"0990681132"},
        {id:3,nombre:"Maria", apellido:"Con", celular:"0990681133"}
    ];
    console.log("Ingresa a Get")
    response.send(contactos);
});

app.post("/contactos",(request,response)=>{
    request.body.id=99;
    response.send(request.body)
})

app.put ("/contactos/:idParam",(request,response)=>{
    const id= request.params.idParam
    console.log("id: ",id)
    response.send(request.body)
})

app.delete ("/contactos/:id",(request,response)=>{
    const id= request.params.id;
    console.log("id: ",id)
    response.send()
})




app.listen(puerto,()=>{
    console.log("servidor listo en el cuarto "+puerto);
});