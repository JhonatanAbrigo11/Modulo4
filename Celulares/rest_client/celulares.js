const IP = '192.168.0.237'
const PORT= 3001
const URL= "http://"+IP+":"+PORT+"/"

export const getAllCelulares=(fnRefreshList)=>{
    fetch(
        URL+"celulares" 
    ).then(
        (response)=>{ return  response.json()  }
    ).then(
        (body)=>{
            console.log('Datos del body',body)
            fnRefreshList(body);
        }
    )
}