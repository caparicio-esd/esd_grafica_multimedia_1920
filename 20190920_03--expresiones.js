// Crear HTML literal, e intepolar strings sacados de prompts

let author = prompt("Como te llamas??");
let text = prompt("Qué mensaje quieres dejar??");
let minutesAgo = prompt("Hace cuántos minutos has dejado el mensaje??");
let messagesAmount = prompt("Qué cantidad de mensajes quieres dejar??");

// Puedo crear HTML literal como si fuera un texto, e interpolar (inyectar) expresiones dentro
let message = `
    <div class="message await">
        <div class="message_pic">
            <img src="img/face.jpg" alt="">
        </div>
        <div class="message_content">
            <div class="message_author">${author}</div>
            <div class="message_text">${text}</div>
            <div class="message_date">${minutesAgo} minutes ago...</div>
            <div class="message_amount">
                <span class="badge">${messagesAmount}</span>
            </div>
        </div>
    </div>
    <!-- /message -->
`;

/* 
Esto no lo hemos visto todavía. 
Pero os lo explico igual 
document.querySelector(".messages ") señala el elemento HTML con clase .messages
document.querySelector(".messages ").innerHTML señala el texto literal de ese HTML
+= lo hemos explicado a = a + b es lo mismo que a += b

pero esto lo trabajaremos en su momento. Lo hemos hecho por ilustrar un uso
*/
document.querySelector(".messages ").innerHTML += message;

// Lo que pido es sacar el mensaje por consola
console.log(message);
