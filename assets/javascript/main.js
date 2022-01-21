let today = new Date(),
     dd = String(today.getDate()).padStart(2, '0'),
     mm = String(today.getMonth() + 1).padStart(2, '0'),
     yyyy = today.getFullYear(),
     hour = today.getHours(),
     minutes = today.getMinutes(),
     randomNumber = getRandomInt(2),
     classBody = ['green-pass', 'red-pass'],
     todayDate = dd + '/' + mm + '/' + yyyy,
     todayHour = hour + ':' + minutes;


document.querySelector("body").classList.add(classBody[randomNumber]);

// Handlebars
window.onload = function() {
    let source = document.getElementById("wurz-template").innerHTML;
    let template = Handlebars.compile(source);

    let contextGreen = { 
        timeLabel: "Data e ora di validazione: ",
        timeHour: todayHour,
        timeDate: todayDate,
        title : "Sei moderatamente alcolizzato.",
        text : "<strong>alcolizzato</strong> <i>s. m. e f.</i>  – Persona dedita all’uso smodato di bevande alcoliche, e che pertanto presenta i segni clinici di compromissione fisica e psichica provocati dall’alcolismo cronico.",
        icon : '<i class="fas fa-check fa-5x"></i>'
    };

    let contextRed = {
        timeLabel: "Data e ora di validazione: ",
        timeHour: todayHour,
        timeDate: todayDate,
        title : "Sei sobrio.",
        text : "<strong>sobrio</strong> <i>/'sɔbrjo/ agg. [dal lat. sobrius 'non ebbro']</i>  – 1. a. [di persona, che usa moderazione nel mangiare, nel bere alcolici e sim.].",
        icon : '<i class="fas fa-times fa-5x"></i>'
    };

    let html = template((randomNumber) ? contextRed : contextGreen);

    document.getElementById("template").innerHTML = html;
}

// FUNCTIONS
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}