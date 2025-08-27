function cadastroUsuario(event) {
    event.preventDefault();

    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.name);

    let nome = event.target.nome.value;
    let idade = event.target.idade.value;
    let senha = event.target.senha.value;

    console.log(nome, idade, senha);

    fetch('http://localhost:3000', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            "nome": nome,
            "idade": idade,
            "senha": senha
        })

    })

        .then(response => response.json())

        .then(data => console.log(data))

        .catch(error => console.log(error));



}

