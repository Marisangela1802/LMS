let pagina = document.querySelector(".tudo")
let botao = document.querySelector(".botao")
let card = document.querySelector(".tudo .cartao")
let x = 0

function Exibir(infos){
    pagina.innerHTML = ""
    if(x == 0){
        for(let info of infos){
            let cartao = document.createElement("div")
            cartao.className = "cartao"
            let titulo = document.createElement("div")
            titulo.className = "titulo"
            let h1 = document.createElement("h1")
            let texto_titulo = document.createTextNode(info.name)
    
            pagina.appendChild(cartao)
            cartao.appendChild(titulo)
            titulo.appendChild(h1)
            h1.appendChild(texto_titulo)
    
            let empresa = document.createElement("div")
            empresa.className = "empresa"
            let span = document.createElement("span")
            let texto_empresa = document.createTextNode(info.company.name)
    
            cartao.appendChild(empresa)
            empresa.appendChild(span)
            span.appendChild(texto_empresa)
    
            let numero = document.createElement("div")
            numero.className = "numero"
            let span2 = document.createElement("span2")
            let texto_numero = document.createTextNode(info.phone)
    
            cartao.appendChild(numero)
            numero.appendChild(span2)
            span2.appendChild(texto_numero)

            x = 1
            botao.innerHTML = "Ocutar"
        }
    }else{
        x = 0
        botao.innerHTML = "Exibir"
    }
    
}

async function request(){
    try{
        let response = await axios({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/users"
        }); console.log(response.data)
        Exibir(response.data)
    }catch(e){
        console.log(e)
    }
    // request()
}

// request()

botao.addEventListener("click", request)