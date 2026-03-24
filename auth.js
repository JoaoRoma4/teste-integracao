function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return { id: 1, nome: "Administrador" };
    }
    return null;
}
module.exports = login;