export class Aluno {
    constructor(private readonly STORAGE_KEY: string){}

    get storageAlunos() {
        const alunosArmazenados = localStorage.getItem(this.STORAGE_KEY);
        const alunosJaSorteados: string[] = alunosArmazenados ? JSON.parse(alunosArmazenados) : [];
    
        return alunosJaSorteados;
    }

    set storageAlunos(alunos: string[]) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(alunos));
    }

    recuperarListaAlunos() {
        const elementosLabel = document.querySelectorAll('[type="checkbox"] + span + label');
        const arrayLabelAlunos = Array.from(elementosLabel);
        const arrayLabelAlunosFiltrados = arrayLabelAlunos.filter(label => label.textContent !== 'Selecionar tudo');
        const listaNomeAlunos = arrayLabelAlunosFiltrados.map(label => label.textContent?.trim());
    
        return listaNomeAlunos;
    }

    sortearAlunos() {
        const listaNomeAlunos = this.recuperarListaAlunos();
        const alunosJaSorteados = [...this.storageAlunos];
        const alunosSortudos = [];
    
        while(alunosSortudos.length < 4) {
            const indexSorteado = Math.floor(Math.random() * listaNomeAlunos.length);
            const alunoSorteado = listaNomeAlunos[indexSorteado] as string;
            
            if(!alunosJaSorteados.includes(alunoSorteado)) {
                alunosSortudos.push(alunoSorteado);
                alunosJaSorteados.push(alunoSorteado);
            }
        }
    
       console.log(alunosSortudos);
       this.storageAlunos = alunosJaSorteados;
    }

    buscarAluno(nomeAluno: string) {
        const alunoEncontrado = this.storageAlunos.find((aluno: string) => aluno?.includes(nomeAluno));
        console.log(alunoEncontrado);
        return alunoEncontrado;
    }

    excluirAluno(nomeAluno: string){
        const alunoEncontrado = this.buscarAluno(nomeAluno);
    
        const alunosJaSorteadosAtualizada = this.storageAlunos.filter((aluno: string) => aluno !== alunoEncontrado);
        this.storageAlunos = alunosJaSorteadosAtualizada;
        console.log('Aluno excluído com sucesso!');
    }

    inserirAluno(nomeAluno: string){
        const listaNomeAlunos = this.recuperarListaAlunos();
        const alunoEncontrado = listaNomeAlunos.find(aluno => aluno?.includes(nomeAluno));
        const alunosLocalStorage = [...this.storageAlunos];

        if(alunoEncontrado){
            alunosLocalStorage.push(alunoEncontrado);
            this.storageAlunos = alunosLocalStorage;
        }
    }
}