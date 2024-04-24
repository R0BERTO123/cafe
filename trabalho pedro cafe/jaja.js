import prompt from "prompt-sync";

let ler =prompt();

const VERDE = '\x1b[32m%s\x1b[0m';
const Magenta = '\x1b[35m%s\x1b[0m';


const titulo =`


▄████▄   ▄▄▄        █████▒▓█████▄▄▄█████▓▓█████  ██▀███   ██▓▄▄▄      
▒██▀ ▀█  ▒████▄    ▓██   ▒ ▓█   ▀▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒▓██▒████▄    
▒▓█    ▄ ▒██  ▀█▄  ▒████ ░ ▒███  ▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒▒██▒██  ▀█▄  
▒▓▓▄ ▄██▒░██▄▄▄▄██ ░▓█▒  ░ ▒▓█  ▄░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄  ░██░██▄▄▄▄██ 
▒ ▓███▀ ░ ▓█   ▓██▒░▒█░    ░▒████▒ ▒██▒ ░ ░▒████▒░██▓ ▒██▒░██░▓█   ▓██▒
░ ░▒ ▒  ░ ▒▒   ▓▒█░ ▒ ░    ░░ ▒░ ░ ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░░▓  ▒▒   ▓▒█░
  ░  ▒     ▒   ▒▒ ░ ░       ░ ░  ░   ░     ░ ░  ░  ░▒ ░ ▒░ ▒ ░ ▒   ▒▒ ░
░          ░   ▒    ░ ░       ░    ░         ░     ░░   ░  ▒ ░ ░   ▒   
░ ░            ░  ░           ░  ░           ░  ░   ░      ░       ░  ░
░                                                                      


`


                                                                                                                                                                   
                                                                                                                 

console.clear()
console.log( VERDE,titulo)

console.log( Magenta,"Digite seu nome")
let nome =ler()

console.log()
console.log ( Magenta,"boas-vindas",nome)
console.log()



console.log(Magenta,"qual o seu pedido?")

console.log(`1- Pequeno (R$ 1.50) 
2- Médio (R$ 2.50) 
3- Grande (R$ 3.00`)

let resposta =Number(ler())

if(resposta ==1){
    console.log(Magenta,"cafe pequeno e (R$ 1.50)")
    console.log(Magenta,"deseja mais alguma coisa?")
    let mais =ler()
    console.clear()

    if (mais == "sim"){
        console.log(Magenta,"na compra de 6 empadas (RS 2.30) cada, voce ganha um desconto de 15% ")
        console.log("quantas empadas voce quer?")
        let empada = Number(ler())

        if(empada>=6){
            let valor = 1.50 +(empada * 2.30)
            let desconto =( valor *0.15)
            let final= (valor-desconto)
            console.log("o valor final fica R$",final)
            console.log( Magenta,"Volte sempre👻")
        }
        else { let valor = 1.50 +(empada * 2.30)
            console.log("o valor final fica R$",valor)
            console.log( Magenta,"Volte sempre👻")}   
    }
    else {let valor =1.50
        console.log("o valor final fica R$",valor)}
}

 else if(resposta ==2){
    console.log(Magenta,"cafe Médio (R$ 2.50) ")
    console.log("mais alguma coisa?")
    let mais =ler()
    console.clear()
    console.log( VERDE,titulo)

    if (mais == "sim"){
        console.log( Magenta,"na compra de 6 empadas (RS 2.30) cada, voce ganha um desconto de 15% ")
        console.log("quantas empadas voce quer?")
        let empada = Number(ler())

        if(empada>=6){
            let valor = 2.50 +(empada * 2.30)
            let desconto =( valor *0.15)
            let final= (valor-desconto)
            console.log("o valor final fica R$",final,)
            console.log( Magenta,"Volte sempre👻")
        }
        else { let valor = 2.50 +(empada * 2.30)    
            console.log("o valor final fica R$",valor)
            console.log( Magenta,"Volte sempre👻")}
    }
    else {let valor =2.50
        console.log("o valor final fica R$",valor)
        console.log( Magenta,"Volte sempre👻")}
}

 else if(resposta ==3){
    console.log(Magenta,"cafe Grande (R$ 3.00")
    console.log("mais alguma coisa?")
    let mais =ler()
    console.clear()
    console.log( VERDE,titulo)

    if (mais == "sim"){
        console.log( Magenta,"na compra de 4 empadas (RS 2.30) cada, voce ganha um desconto de 20% ")
        console.log("quantas empadas voce quer?")
        let empada = Number(ler())

        if(empada>=4){
            let valor = 3.00 +(empada * 2.30)
            let desconto =( valor * 0.20)
            let final= (valor-desconto)
            console.log("o valor final fica R$",final)
            console.log( Magenta,"Volte sempre👻")
        }
        else { let valor = 3.00 +(empada * 2.30)
            console.log("o valor final fica R$",valor)
            console.log( Magenta,"Volte sempre👻")}
        }
        else {let valor =3.00

            console.log( Magenta,"o valor final fica R$",valor)
            console.log( Magenta,"Volte sempre👻")}
   
}
else {console.log(Magenta,"Nenhum cafe selecionado")
console.log(Magenta,"Deseja comprar uma empada (R$ 2.30) cada?")
let vai =ler()

if(vai=="sim"){
    console.log("quantas empadas voce quer?")
    let empada = Number(ler())
    let valor =(empada*2.30)
    console.log( Magenta,"o valor final fica R$",valor)
    console.log( Magenta,"Volte sempre👻")

}
else {console.log("QUER NADA ???")

}
}