const saludar = async()=>{
    const response = await axios({
        url:"http://localhost:3000/hello/Adrian",
        method:"get"
    })

    document.getElementById("app").innerHTML= `<h1>${response.data.saludo}</h1>`

}

saludar();
