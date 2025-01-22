const IP='192.168.18.10'
const PORT= 3001
const URL= "http://"+IP+":"+PORT+"/"

export const getAllContacts=(fnRefreshList)=>{
    fetch(
        URL+"contactos"
    ).then(
        (response)=>{ return  response.json()  }
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}


export const saveContactRest=(contact,fnShowMessage)=>{
    const config={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json' // escribir bien esta parte por ('aplication/json') es con dos pp
        },
        body:JSON.stringify({
            nombre: contact.name,
            apellido:contact.surname,
            celular: contact.phoneNumber
        })
    }
    fetch(URL+"contactos",config)
    .then(response=>response.json())
    .then(body=>{
        fnShowMessage();
        console.log(body)})
}

export const updateContactRest=(contact,fnShowMessage)=>{
    const config={
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json' // escribir bien esta parte por ('aplication/json') es con dos pp
        },
        body:JSON.stringify({
            id: contact.id,
            nombre: contact.name,
            apellido:contact.surname,
            celular: contact.phoneNumber
        })
    }
    fetch(URL+"contactos/" +contact.id,config)
    .then(response=>response.json())
    .then(body=>{
        fnShowMessage();
        console.log(body)})
}