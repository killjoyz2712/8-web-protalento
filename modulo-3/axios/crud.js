const create = () =>{
    axios({
        method:"post",
        url: "https://crudcrud.com/api/a0c64d282d594c43861a989150e10ef3/perros",
        data:{
            name: "Fido",
            color: "Verde"
        }
    }).then(()=>{
        alert("Ya creamos un unicornio")
    })
}

const read = () =>{
    let id = "64bf1887c632b703e830ed3a";
    axios({
        method:"get",
        url: "https://crudcrud.com/api/a0c64d282d594c43861a989150e10ef3/unicorns/"+id,
    }).then((response)=>{
       console.log(response.data);
    })
}

const update = () =>{
    let id = "64bf1887c632b703e830ed3a";
    axios({
        method:"put",
        url: "https://crudcrud.com/api/a0c64d282d594c43861a989150e10ef3/unicorns/"+id,
        data:{
            name: "Teofilu",
            color: "Moradito",
            age: 100
        }
    }).then(()=>{
        alert("Ya editamos un unicornio")
    })
}

const delete_ = () =>{
    let id = "64bf07bcc632b703e830ed2b";
    axios({
        method:"delete",
        url: "https://crudcrud.com/api/a0c64d282d594c43861a989150e10ef3/unicorns/"+id,
    }).then(()=>{
        alert("Ya borramos un unicornio :( ")
    })
}