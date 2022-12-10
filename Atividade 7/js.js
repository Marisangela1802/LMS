let inserir = document.querySelector(".modal span.botao");
let Modal = document.querySelector(".pagina-modal")

let inputName = document.querySelector(".pagina-modal .modal input.nome")

let nome_user = []

inserir.addEventListener("click", function(){
    let name = inputName.value;

    let campo = document.querySelector(".usuario");
    let texto = document.createElement("h3")

    let texto_n = document.createTextNode(name);
    texto.classList.add("nome");
    campo.appendChild(texto)
    texto.appendChild(texto_n);

    nome_user.push(texto_n);
    // console.log(nome_user[0]);

    

    Modal.classList.toggle("active");

})

let tudo = document.querySelector(".vw")
let pagina = document.querySelector(".vw .pagina")
let corpo = document.querySelector(".vw .pagina .corpo")
let todosGrupos = document.querySelector(".vw .pagina .corpo .grupos")

function listaGrupos(nomes){
    todosGrupos.innerHTML = ""
    
    for (let nome of nomes){
        let grupos = document.createElement("div")
        grupos.classList.add("grupo-do-user")

        let logo = document.createElement("div")
        logo.classList.add("logo")

        let nome_grupo = document.createElement("div")
        nome_grupo.className = "nome-grupo"

        let titulo = document.createElement("span")
        let texto_titulo = document.createTextNode(nome.nome)
        // console.log(nome)
        
        // titulo.textContent = nomes;

        // tudo.appendChild(pagina)
        // pagina.appendChild(corpo)
        // corpo.appendChild(todosGrupos)
        todosGrupos.appendChild(grupos)
        grupos.appendChild(logo)
        grupos.appendChild(nome_grupo)
        nome_grupo.appendChild(titulo)
        titulo.appendChild(texto_titulo)
    }
    
    
    // return grupos
} 

function atualizarPagina(){
    async function request() {
        try{
            let response = await axios({
                method: "GET",
                url:"https://server-json-lms.herokuapp.com/grupos"
            });
            // console.log(response.data)
            listaGrupos(response.data);
        }catch(e){
            console.log(e)
        }
    }
    
    request()
}

atualizarPagina()

let inserir_grupo = document.querySelector(".parte-baixo .esquerda .ok")
let input = document.querySelector(".parte-baixo .esquerda input.criar-grupo")


    
async function criarNovoGrupo(event){
    event.preventDefault()
    console.log(input.value)
    try{
        let response = await axios({
            method:"POST",
            url:"https://server-json-lms.herokuapp.com/grupos",
            data:{
                nome: input.value
            }
        });console.log(response)
        atualizarPagina()
        request()
    }catch(e){
        console.log(e)
    }
}

inserir_grupo.addEventListener("click", criarNovoGrupo())



// let mensagens = document.querySelector(".mensagens");
// let mensagem_grupo = document.querySelector(".mensagem .mensagem-grupo")
// let nome = document.querySelector(".mensagem .mensagem-grupo .nome")
// let texto_nome = document.querySelector(".mensagem .mendagem-grupo .nome span")
// let conteudo_mensagem = document.querySelector()

// async function pegarMensagens(titulos){
//     mensagens.innerHTML = ""

//     // let mensagens = document.createElement("div")
//     // mensagens.className = "mensagens"
//     for(let titulo of titulos){
//         let mensagens_grupo = document.createElement("div")
//         mensagens_grupo.className = "mensagem-grupo"

//         let div_nome = document.createElement("div")
//         div_nome.className = "nome"

//         let nome = document.createElement("span")
//         let texto_nome = document.createTextNode(titulo.nome)

//         mensagens.appendChild(mensagens_grupo)
//         mensagens_grupo.appendChild(div_nome)
//         div_nome.appendChild(nome)
//         nome.appendChild(texto_nome)
//     }

//     try{
//         let response = await axios({
//             method:"GET",
//             url:"https://server-json-lms.herokuapp.com/grupos/"+id+"/mensagens"
//         });//console.log(response)
//         pegarMensagens(response.data)
//         console.log(response.data)
//         request()
//     }catch(e){
//         console.log(e)
//     }

//     let clicar = document.querySelector("grupo-do-user")
//     clicar.addEventListener("click", pegarMensagens())
//     console.log(clicar)

// }









// async function Pegarmensagens(id){
//     try{
//         let response = await axios({
//             method:"https://server-json-lms.herokuapp.com/grupos/"+id+"/mensagens"
//         });//console.log(response)
//         pegarMensagens(response.data)
//         console.log(response.data)
//         request()
//     }catch(e){
//         console.log(e)
//     }
    
// }

