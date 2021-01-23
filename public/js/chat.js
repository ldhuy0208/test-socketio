const socket = io();

const btn = document.getElementById('count-btn');
const text = document.getElementById('count');

socket.on('message', message => {
  text.innerHTML += message + '<br>';
})

btn.addEventListener('click', e=>{
  socket.emit('increase');
})