//selecionar tags
const frm = document.querySelector("form");
const listar = document.querySelector("#inListar");
const montar = document.querySelector("#inTabela");
const clean = document.querySelector("#inClean");
const resp = document.querySelector("pre");

//declaração do vetor que receberá as informações
const clubes = []

//eventos
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //previne o recarregamento

    const nomeClube = frm.inClube.value;  //pega o valor do input

    if(nomeClube.length == 0){ //se o valor do input for 0 no submite
        alert("É preciso digitar algo no campo ao lado") //alerta
        return //retorna
    }

    clubes.push(nomeClube) //caso esteja preenchido, é enviado para o vetor clubes

    frm.inClube.value = "" //limpa o input após envio

    let lista = "" //delcara a varivel vazia para concatenar resposta

    for (const time of clubes) {  //utiliza um for..of ou map, para ler os itens do array e declatar na variavel concatenação
        lista += `${time}\n`
    }

    resp.innerText = `Lista dos times:\n ${"-".repeat(40)}\n${lista}` //ê a lista de concatenação com quebras de linhas e um repeat

})

listar.addEventListener("click", () => {  //adiciona um evento de clicl
    if(clubes == 0) {  //se o array clubes não tiver nada, ele alerta
        alert("Não há clubles adicionados a nem uma lista")
        return
    } else {

        let lista = ""  //delcara uma variavel para concatenação da resposta
        for (i = 0; i < clubes.length; i++) {  //inicia um lop apartir do tamanho do vetor clubes
            lista += (i + 1) + ". " + clubes[i] + "\n";  //i+1 pq o vetor começa em 0, clubles i  pois é cada clube que você adiciona iterado
          }
        resp.innerText = `Lista dos times:\n ${"-".repeat(40)}\n${lista}`  //resposta

    }
})

clean.addEventListener("click", () => {
    window.location.reload()    //botão para recarregar a página e limpar todos os dados
})


montar.addEventListener("click", () => {  //adiciona evento ao botão 
    if(clubes.length == 0 || (clubes.length % 2 == 1 )) {   //se o tamanho do vetor for 0 e se não for, (ou) pegar o valor dividir por 2 e se tiver sobra da divisão por ex: 3 / 2 = 1,5... 5 é UMA (1) sobra
        alert("Não há clubles adicionados a nem uma lista")
        return
    } 

    let jogos = ""; //declarava variavel para concatenar resposta
    let ultimo = clubes.length - 1  //declara variavel para sempre pegar o valor do final do vetor - 1

    for(i = 0; i < clubes.length / 2; i++) {  //precisa dividir a quantidade de itens do vetor por 2, se não vai se repetir os versus
        jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n";  // resposta clube i é os 2 primeiros clubes caso sejam 4 clubles, clubles ultimo -i é o ultimo, depois o antepenultimo.
    }

    resp.innerText = `Lista dos times:\n ${"-".repeat(40)}\n${jogos}`  //resposta
})

