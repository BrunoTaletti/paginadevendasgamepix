// ID do seu botão de checkout
var btnCheckout = [];

// Quantidade de botões de checkout existentes
btnCheckout[0] = "btn-checkout-1";
btnCheckout[1] = "btn-checkout-2";

// Tempo em ms que ocorre o pitch de vendas da sua VSL
var pitchTime = 5000;

// Regrinha que faz o botão aparecer quando o pitch de vendas chegar
setTimeout(() => {
    for (var ctas in btnCheckout){
        document.getElementById(btnCheckout[ctas]).classList.remove("d-none")
    }
}, pitchTime);