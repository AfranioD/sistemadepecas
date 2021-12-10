var listaDePecas = ["Filtro de Ar", "Motor", "Amortecedor"]

if (listaDePecas.lenght < 10)
{
    // É possivel cadastrar
    console.log("É possivel cadastrar mais peças")
}else {
    console.log("Nao tem mais espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log ("A peça possui peso adequado")
}

let nomePeca ="Disco de Freio";
if (nomePeca.lenght<3){
    console.log("Nome de peça esta adequado(para o cadastro!")
}else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}

switch (nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;

        case 1:
            case 2:
                case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")

        default:
            console.log("Nome da peça está adequado")
            break;

}