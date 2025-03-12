function toRF() {
    var stops = parseInt(document.getElementById('regular-ticket').value);
    var reg = 13; 
    var reg_price = stops * reg;
    document.getElementById('currency').innerHTML = 'Your ticket price is P' + reg_price;
}

function toDF() {
    var stops = parseInt(document.getElementById('regular-ticket').value);
    var reg = 13; 
    var reg_price = stops * reg;
    var disc_rate = 0;
    var radios = document.getElementsByName("option");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            disc_rate = 0.20;
            break;
        }
    }
    var disc_price = reg_price - (reg_price * disc_rate);
    document.getElementById('currency').innerHTML = 'Your ticket price is P' + disc_price;
}

function myFunction() {
    if (confirm("Confirm purchase?")) {
        alert("Ticket bought successfully. Buy another?");
    } else {
        alert("Ticket cancelled. Buy another?");
    }
}
