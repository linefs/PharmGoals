import Categoria from "./Categoria"

export default interface Produto {
    id: number
    nome: string
    quantidade: number
    preco: number
    foto: string
    categoria: Categoria | null
}