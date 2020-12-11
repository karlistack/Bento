// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Maria de los Dolores';

// Here you can change your greetings
var gree1 = 'a la cama! ';
var gree2 = 'el muerto al hoyo y el vivo al bollo! ';
var gree3 = 'illo que sueño  ';
var gree4 = 'buenas ';
var gree5 = 'buenaaaas ';
var gree6 = 'bueeenaaaaasss ';

// Define the hours of the greetings
if (hour >= 1 && hour < 3) {
    document.getElementById('greetings').innerText = gree6 + name;
} else if (hour >= 3 && hour < 6) {
    document.getElementById('greetings').innerText = gree3 + name;
}else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree4 + name;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree5 + name;
} else  {
    document.getElementById('greetings').innerText = gree1 + name;
}
