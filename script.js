document.getElementById('formulario').addEventListener('submit', function (event){
    const nomeInput = document.getElementById('campoNome');
    const emailInput = document.getElementById('campoEmail');
    const menssagem = document.getElementById('menssagem');

    if (nomeInput.value.trim() === '' || emailInput.value.trim() ==='') {
        event.preventDefault();//inpede o envio do formulário

        menssagem.textContent = 'Algum campo obrigatório não está preenchido'
    } else {
        menssagem.textContent = "Formulário enviado com sucesso!"
    }
});