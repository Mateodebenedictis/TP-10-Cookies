let username = document.cookie;

console.log(username);

document.getElementById('login').addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('login')
    username = document.getElementById('username').value;

    //Enviar el username a la ruta / con fetch

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ username: username })
    })
    .catch(err => console.log(err));
        
    
});