import BotaoConclui from './componentes/concluirTarefa.js';
import BotaoDeleta from './componentes/deletarTarefa.js';

const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (evento) => {
    evento.preventDefault();
    // Importar a ul e o input
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    // Criar um elemento
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class='content'>${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    input.value = '';
};

novaTarefa.addEventListener('click', criarTarefa);
