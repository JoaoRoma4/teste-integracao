const login = require('./auth');
const getPerfil = require('./profile');

function testeIntegracao() {
    console.log("iniciando teste de integração...");

const usuario = login("admin", "1234");

const perfil = getPerfil(usuario);

if (perfil === "Bem-vindo, Administrador") {
    console.log("Teste passou!");
} else {
    console.log("Teste falhou!");
}
}

testeIntegracao();