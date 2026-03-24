function getPerfil(usuario) {
    if(!usuario) {
    return "Usuário não autenticado";
    }

    return `Bem-vindo, ${usuario.nome}`;
}
module.exports = getPerfil;