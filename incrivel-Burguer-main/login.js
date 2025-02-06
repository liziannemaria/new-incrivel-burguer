
function validar(){
    let login = document.getElementById ('login').value;
    let senha = document.getElementById ('senha').value;
    
    let loginValido = /^[13579]{5}$/.test(login);
    let senhaValida = /^[02468]{4}$/.test(senha);
    
    if (loginValido && senhaValida) {
    alert ('Login e senha Válidos!');
    } else {
    alert ('Login ou senha inválidos!\n\nLembre-se:\ O login deve conter 5 números ímpares, E 4 números pares.')
    }
}