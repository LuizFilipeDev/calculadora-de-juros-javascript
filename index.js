function CalcularJuros() {

    var valProduto = document.getElementById('valorProduto').value; //valor do produto

    var tabela = document.getElementById('sel1'); //tabela de juros com os índices
    var resultadoNaTela = document.getElementById('resultadoNaTela'); //div onde irá aparecer o resultado 
    var valorEntrada = document.getElementById('valorEntrada').value; //valor da entrada

    var resultado = 0; //resultado final
    var carencia = document.getElementById('switch1');


    function Calculo(indiceDeJuros, numeroDeParcelas, cEntrada){ //Função que calcula o juros
        if(cEntrada && valorEntrada != 0){
            resultado = (valProduto * indiceDeJuros) - valorEntrada;
            resultado = resultado / (numeroDeParcelas - 1);
            resultado++;
            resultadoNaTela.innerHTML = "<h1>" + parseInt(resultado) + "</h1>";
        }else if(carencia.checked){
            resultado = (valProduto * indiceDeJuros / numeroDeParcelas);
            var carenciaResultado = resultado * 1.0699;
            resultadoNaTela.innerHTML = "<h1>" + parseInt(carenciaResultado) + "</h1>";
        }else{
            resultado = (valProduto * indiceDeJuros / numeroDeParcelas);
            resultado++;
            resultadoNaTela.innerHTML = "<h1>" + parseInt(resultado) + "</h1>";
        }
    }


    switch(tabela.selectedIndex){ //Aplicação de juros com o número de parcelas e verificação de entrada
        case 0:
            Calculo(1.0319, 2, true);
            break;
        case 1:
            Calculo(1.0659, 1, false);
            break;
        case 2:
            Calculo(1.0645, 3, true);
            break;
        case 3:
            Calculo(1.0999, 2, false);
            break;
        case 4:
            Calculo(1.0977, 4, true);
            break;
        case 5:
            Calculo(1.1346, 3, false);
            break;
        case 6:
            Calculo(1.1315, 5, true);
            break;
        case 7:
            Calculo(1.1700, 4, false);
            break;
        case 8:
            Calculo(1.1660, 6, true);
            break;
        case 9:
            Calculo(1.2061, 5, false);
            break;
        case 10:
            Calculo(1.2012, 7, true);
            break;
        case 11:
            Calculo(1.2429, 6, false);
            break;
        case 12:
            Calculo(1.2370, 8, true);
            break;
        case 13:
            Calculo(1.2804, 7, false);
            break;
        case 14:
            Calculo(1.2735, 9, true);
            break;
        case 15:
            Calculo(1.3185, 8, false);
            break;
        case 16:
            Calculo(1.3106, 10, true);
            break;
        case 17:
            Calculo(1.3574, 9, false);
            break;
        case 18:
            Calculo(1.3483, 11, true);
            break;
        case 19:
            Calculo(1.3969, 10, false);
            break;
        case 20:
            Calculo(1.3866, 12, true);
            break;
        case 21:
            Calculo(1.4371, 11, false);
            break;
        case 22:
            Calculo(1.4256, 13, true);
            break;
        case 23:
            Calculo(1.4780, 12, false);
            break;
        case 24:
            Calculo(1.4651, 14, true);
            break;
        case 25:
            Calculo(1.5053, 15, true);
            break;
        case 26:
            Calculo(1.5617, 14, false);
            break;
        case 27:
            Calculo(1.0000, 1, false);
            break;
        case 28:
            Calculo(1.0000, 2, true);
            break;    
        default:
            alert('Error');
            break; 
    }

}