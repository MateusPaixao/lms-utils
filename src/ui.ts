import { Aluno } from "./aluno";

export class UI {
    private constructor(private readonly aluno: Aluno) {}

    private criarBotao(texto: string, bg = 'blue') {
        const button = document.createElement('button');
        button.innerText = texto;
        button.style.background = bg;
        button.style.color = '#fff';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        return button;
    }

    private criarCampo() {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Nome do Aluno';
        input.style.padding = '10px';
        input.style.fontSize = '16px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
        return input;
    }

    private criarContainer() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.right = '10px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '5px';

        return container;
    }

    private criarBotaoAbrirFechar(container: HTMLDivElement) {
        const botao = this.criarBotao('SA');
        botao.style.padding = '20px';
        botao.style.fontSize = '16px';
        botao.style.borderRadius = '50%';
        botao.style.position = 'fixed';
        botao.style.bottom = '20px';
        botao.style.height = '60px';
        botao.style.width = '60px';
        botao.style.right = '10px';
        botao.style.zIndex = '9999';

        botao.onclick = () => {
            if(container.style.display === 'none'){
                container.style.display = 'flex';
                botao.style.bottom = '250px';
                botao.style.right = '75px';
                botao.innerText = 'X';
            }else{
                container.style.display = 'none';
                botao.style.bottom = '20px';
                botao.style.right = '10px';
                botao.innerText = 'SA';
            }
        }

        return botao;
    }

    private criarUI() {

        // Container
        const container = this.criarContainer();
        container.style.display = 'none';

        // Campo de entrada
        const campoNomeAluno = this.criarCampo();
        container.appendChild(campoNomeAluno);

        // Botão Sortear Alunos
        const botaoSortear = this.criarBotao('Sortear Alunos', 'purple');
        botaoSortear.onclick = () => this.aluno.sortearAlunos();
        container.appendChild(botaoSortear);

        // Botão Buscar Aluno
        const botaoBuscar = this.criarBotao('Buscar Aluno');
        botaoBuscar.onclick = () => this.aluno.buscarAluno(campoNomeAluno.value);
        container.appendChild(botaoBuscar);

        // Botão Excluir Aluno
        const botaoExcluir = this.criarBotao('Excluir Aluno');
        botaoExcluir.onclick = () => this.aluno.excluirAluno(campoNomeAluno.value);
        container.appendChild(botaoExcluir);

        // Botão Inserir Aluno
        const botaoInserir = this.criarBotao('Inserir Aluno');
        botaoInserir.onclick = () => this.aluno.inserirAluno(campoNomeAluno.value);
        container.appendChild(botaoInserir);

        // Botão abrir fechar
        const botaoAbrirFechar = this.criarBotaoAbrirFechar(container);

        document.body.appendChild(container);
        document.body.appendChild(botaoAbrirFechar);
    }

    static inicializar(storageKey: string) {
        const aluno = new Aluno(storageKey);
        const ui = new UI(aluno);
        ui.criarUI();
    }
}