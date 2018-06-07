// Realiza um disparo via Ajax para o endereço do meu NodeMcu
var led_controle = function(status) {
    var xmlhttp = new XMLHttpRequest();
    var set_status = "http://192.168.0.106/?function=" + status;
    xmlhttp.open("GET", set_status);
    xmlhttp.send();
    
}

// Acessa os botões e passando as nossas diretivas de ligar ou desligar o led 
var led = function() {
    var ligar = document.querySelector(".ligar");
    ligar.onclick = function() {
        led_controle("led5_on");
    }

    var desligar = document.querySelector(".desligar");
        desligar.onclick = function() {
            led_controle("led5_off");
        }
}

window.onload = function() {
    // Chama a função led
    led();
}
  