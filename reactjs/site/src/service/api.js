import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


    export default class Api {

        async listarProdutos() {
            const r = await api.get('/produto');
            return r.data;
        }

        async inserirProduto(nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagemproduto) {
            let produto = {nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagemproduto};

            const r = await api.post('/produto', produto )
            return r.data;
        } 

        async deletarProduto(idProduto) {
            const r = await api.delete(`/produto/${idProduto}`);
            return r.data;
        }

        async alterarproduto( idProduto, nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagemproduto) {
            let produto = {nome, categoria, precode, precopor, avaliacao, descricao, estoque, imagemproduto};

            const r = await api.put(`/produto/${idProduto}`, produto)
            return r.data;
        }
    }