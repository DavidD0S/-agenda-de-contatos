const form = document.getElementById('formContato');
const tabela = document.getElementById('tabelaContatos');
const tbody = tabela.querySelector('tbody');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value; 


    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>  

    `;
    tbody.appendChild(novaLinha);

    form.reset();
});