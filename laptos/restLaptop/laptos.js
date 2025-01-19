const PORT= 3002
const IP= '192.168.18.10'
const URL= "http://"+IP+":"+PORT+"/"
export const getAllLaptos=(refreshList)=>{
    console.log("busca")
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