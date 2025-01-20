const PORT= 3002
const IP= '192.168.18.10'
const URL= "http://"+IP+":"+PORT+"/"


export const getAllLaptos=(refreshList)=>{
    
    fetch(
        URL+"laptos"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            refreshList(body);
        }
    )
}

export const createLaptop=(lapto,fnShowMessage)=>{
    const config={
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            marca: lapto.brand,
            procesador: lapto.processor,
            memoria: lapto.memory,
            disk: lapto.disk
        })
    }
    fetch(URL+"laptos",config)
    .then(response=>response.json())
    .then(body=>{console.log(body)
        fnShowMessage();
    })
}