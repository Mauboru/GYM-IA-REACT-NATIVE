interface RefeicoesProp{
    horario: string;
    nome: string;
    alimentos: string[];
}

export interface Data{
    nome: string;
    sexo: string;
    idade: number;
    altura: number;
    peso: number;
    objetivo: number;
    refeicoes: RefeicoesProp[];
    suplementos: string[];
}