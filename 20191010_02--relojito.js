let now = new Date();

window.setInterval(() => {

    now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let msg = `Son las ${hour}:${minutes}:${seconds}`;

    document.querySelector('h1').innerHTML = msg;

}, 1000);

