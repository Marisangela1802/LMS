// Peguei tudo o que preciso do html nessa primeira parte para poder utilizar no javascript

let abrir = document.querySelector(".tudo .abrir")
let overlay = document.querySelector(".tudo .overlay")
let tudo = document.querySelector(".tudo")
let modal = document.querySelector(".tudo .overlay .modal")
let fechar = document.querySelector(".tudo .overlay .modal span")



function abrir_modal(dados){
    // Inicialmente ao chamar essa função o modal vai abrir
    overlay.classList.add("active")

    // Fiz um for para pegar todas as informações necessarias no banco de dados e colocar na tela dinamicamente
    for(x of dados){
        //Criei os elementos que irao aparecer na tela quando fizer a requisição get

        let mensagem = document.createElement("div")
        mensagem.className = "mensagem"

        let titulo = document.createElement("div")
        titulo.className = "titulo"

        let texto_titulo = document.createElement("h2")
        let texto1 = document.createTextNode(x.title)

        let corpo = document.createElement("div")
        corpo.className = "corpo"

        let texto_corpo = document.createElement("p")
        let texto2 = document.createTextNode(x.body)

        //Coloquei todas as informações dentro das divs para aparecer na tela
        tudo.appendChild(overlay)
        overlay.appendChild(modal)
        modal.appendChild(mensagem)
        mensagem.appendChild(titulo)
        titulo.appendChild(texto_titulo)
        texto_titulo.appendChild(texto1)
        mensagem.appendChild(corpo)
        corpo.appendChild(texto_corpo)
        texto_corpo.appendChild(texto2)
    }

}

//Fiz o axios que recebe a função abrir_modal
async function request(){
    try{
        let response = await axios({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/users/2/posts"
        });
        abrir_modal(response.data)
        console.log(response)
    }catch(e){
        console.log(e)
    }
}

// request()
//Coloquei um addEventListener pra quandi clicar no botao chamar a função request que chama a função abrir_modal
abrir.addEventListener("click", request)

//Esse addEventListener fecha o modal ao remover o active do overlay
fechar.addEventListener("click", function(){
    overlay.classList.remove("active")
    
})