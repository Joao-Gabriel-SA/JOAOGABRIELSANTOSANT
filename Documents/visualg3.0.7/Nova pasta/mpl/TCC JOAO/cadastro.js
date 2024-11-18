// cadastro
function mostraSenha() {

    let senha = document.getElementById ("senha")

    if (senha.checked == false) {
        document.getElementById ("senha").checked = true;
        senha.setAttribute ("type","text")
       
    }else{
        document.getElementById ("senha").checked = false;
        senha.setAttribute ("type","password")
    }
    
}

function mostraSenha2() {

    let senha2 = document.getElementById ("senha2")

    if (senha2.checked == false) {
        document.getElementById ("senha2").checked = true;
        senha2.setAttribute ("type","text")
       
    }else{
        document.getElementById ("senha2").checked = false;
        senha2.setAttribute ("type","password")
    }
    
}

function entrarLogin() {
    if (senha = senha2) {
        window.location.href = "./login.html"
    }else{
        erro.style.color = "red"
        erro.innerHTML = ("* Sua senha está incorreta") 
    }
}

function cadastrarPessoa() {
       
        let erro = document.getElementById("erro") 
        let nome = document.querySelector(".nome").value
        let idade = document.querySelector(".idade").value
        let email = document.querySelector(".email").value
        let senha = document.getElementById("senha").value
        let senha2 = document.getElementById("senha2").value
        console.log(senha2)

        let clientes = {nome, email, senha, idaed}
        console.log(clientes)

        fetch('http://localhost:3000/cliente',{
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (senha == senha2) {
           
            let cliente = {nome, idade, email, senha}

            console.log(cliente)
    
            fetch('http://localhost:3000/cliente',{
                method: "POST",
                body: JSON.stringify(cliente),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            window.location.href = "./login.html"
            
        } else {
            erro.style.color = "red"
            erro.innerHTML = ("* Sua senha está incorreta")  
        }
}

function entrar(clientes) {

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
   
    let erro = document.getElementById("erro")

    for (let i = 0; i < clientes.length; i++) {
       
        if (email == clientes[i].email && senha == clientes[i].senha) {
            if(clientes[i].administrador == true ){
                window.location.href = "./adm.html"
            }else{
                window.location.href = "./loja.html"
            }
        } else {
            erro.style.color = "red"
            erro.innerHTML = ("* Sua senha está incorreta") 
        }
        
    }
    }

function pegarCliente() {

    let clientes = [] 
 const xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://localhost:3000/clientes', true);
   xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
       clientes = JSON.parse(xhr.responseText);
       console.log(clientes)
     //  let main = document.querySelector('main')
     //  main.innerHTML = ''
     entrar(clientes)
    

       // faça algo com a resposta
       // console.log(produtos)
     }
   };
   
   xhr.send();
    
}    



function cadastrarProduto() {
       
    let nome = document.querySelector(".nome").value
    let tipo = document.querySelector(".tipo").value
    let preco = document.querySelector(".preco").value
    let quantidade = document.getElementById("quantidade").value
    let linkDaImg = document.getElementById("link").value

       
        let produto = {nome, tipo, preco, quantidade, linkDaImg}
        console.log(produto)

        fetch('http://localhost:3000/produto',{
            method: "POST",
            body: JSON.stringify(produto),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        
        
    
}     


function cadastrarAgendamento() {
       
    let nomePessoa = document.querySelector(".nomePessoa").value
    let dia = document.querySelector(".dia")
    let data = new Date(dia).getDate()
    let horario = document.querySelector(".horario").value
    

       
        let agendamento = {data, horario, nomePessoa}
        console.log(produto)

        fetch('http://localhost:3000/produto',{
            method: "POST",
            body: JSON.stringify(agendamento),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        
        
    
}  


function cadastrarVenda() {
    
    let nomeCliente = document.querySelector(".nomePessoa").value
//     let produtoVenda = []
    
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://localhost:3000/produtosVendas', true);
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         produtoVenda = JSON.parse(xhr.responseText);
//         console.log(produtoVenda)
//     }
//     };
//     xhr.send();
    
        

        fetch('http://localhost:3000/Vendas',{
            method: "POST",
            body: JSON.stringify({nomeCliente}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
       
        
}


function cadastrarProdutoVenda() {
    
    let nomeProduto = document.querySelector(".nomeProduto").value
    let preco = document.querySelector(".preco").value
    let quantidade = document.querySelector(".quantidade").value
    
    

       
        let produtoVenda = {nomeProduto, preco, quantidade}

        fetch('http://localhost:3000/produtosVendas',{
            method: "POST",
            body: JSON.stringify(produtoVenda),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
}    
    

    
    
    