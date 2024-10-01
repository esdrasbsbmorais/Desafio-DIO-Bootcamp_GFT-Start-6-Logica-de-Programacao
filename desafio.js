const nome = "Jubileu";
const xp = 60000;
let nivel;
let openSwitch = true;

switch (openSwitch) {
    case xp < 1000:
        nivel = "Ferro";
        break;
    case xp > 1000 && xp <= 2000:
        nivel = "Bronze";
        break;
    case xp > 2000 && xp <= 5000:
        nivel = "Prata";
        break;
    case xp > 5000 && xp <= 7000:
        nivel = "Ouro";
        break;
    case xp > 7000 && xp <= 8000:
        nivel = "Platina";
        break;
    case xp > 8000 && xp <= 9000:
        nivel = "Ascendente";
        break;
    case xp > 9000 && xp <= 10000:
        nivel = "Imortal";
        break;
    case xp > 10000:
        nivel = "Radiante";
        break;
    default:
        nivel = "Invalido";
        console.log("Por favor, digite um xp valido!")
        break;
}

const message = ("O Herói de nome " + nome + " está no nível de: " + nivel + "!");
console.log(message)