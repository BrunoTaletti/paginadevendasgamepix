// ID do seu botão de checkout
var btnCheckout = "btn-checkout";

// Tempo em ms que ocorre o pitch de vendas da sua VSL
var pitchTime = 5000;

// Regrinha que faz o botão aparecer quando o pitch de vendas chegar
setTimeout(() => {
    document.getElementById(btnCheckout).classList.remove("d-none")
}, pitchTime);