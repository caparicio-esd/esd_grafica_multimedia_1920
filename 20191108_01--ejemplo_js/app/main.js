


// He comentado este código para que funcione el de abajo bien.

// // Click en un elemento y cambiar ese elemento
// // Variables
// let messages = document.querySelectorAll('.message');
// let firstMessage = messages[0]; // Selecciono solo el primero!

// // Evento
// firstMessage.addEventListener('click', function () {
//     firstMessage.classList.toggle('await');
// });


// Click en un elemento y cambiar otro(s) elemento(s), o el mismo
// Variables
let sidebar01 = document.querySelector('.sidebar_blue');
let sidebar02 = document.querySelector('.messages_box');
let headerToggle = document.querySelector('.toggle');

// Evento
headerToggle.addEventListener('click', function () {
    sidebar01.classList.toggle('hidden');
    sidebar02.classList.toggle('hidden');
    headerToggle.classList.toggle('active');
});


// Click en un elemento de una lista y cambiar ese elemento
// Variables
let messages = document.querySelectorAll('.message');

// Bucle porque es un array
for (let i = 0; i < messages.length; i++) {
    messages[i].addEventListener("click", function () {
        messages[i].classList.toggle('await');
    });
}

