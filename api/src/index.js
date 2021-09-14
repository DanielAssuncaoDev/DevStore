import db from './db.js';
import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


    app.get('/produto', async (req, resp) => {
        try {
            let listarProutos = await db.tb_produto.findAll({ order: [["id_produto", "desc"]] });
            resp.send(listarProutos)

        } catch (e) {
            resp.send({erro: e.toString()})
        }        
    })


    app.post('/produto', async (req, resp) => {
        try {
            let {
                nome, 
                categoria, 
                precode, 
                precopor, 
                avaliacao, 
                descricao, 
                estoque, 
                imagemproduto
            } = req.body;


            let produtoRp = await db.tb_produto.findAll({
                where: {nm_produto: nome}
            })

                console.log(produtoRp)


                if (produtoRp.length != 0 ){
                    resp.send({erro: 'Este produto ja foi cadastrado!'})
                    return
                }
                

            let inserirProdutos = {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precode,
                vl_preco_por: precopor,
                vl_avaliacao: avaliacao,
                ds_produto: descricao,
                qtd_estoque: estoque,
                img_produto: imagemproduto,
                bt_ativo: true,
                dt_inclusao: new Date()
                }


            let r = await db.tb_produto.create(inserirProdutos);
            resp.sendStatus(200);

        } catch (e) {
            resp.send({erro: e.toString()});
        }
    })



    app.delete('/produto/:id', async (req, resp) => {
        try {
            let id = req.params.id;
            let r = await db.tb_produto.destroy({
                where: {id_produto: id}
            })

            resp.sendStatus(200);

        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })


    app.put('/produto/:id', async (req, resp) => {
        try {
            let id = req.params.id;
            let {
                nome, 
                categoria, 
                precode, 
                precopor, 
                avaliacao, 
                descricao, 
                estoque, 
                imagemproduto
            } = req.body;

            let alterarProdutos = {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precode,
                vl_preco_por: precopor,
                vl_avaliacao: avaliacao,
                ds_produto: descricao,
                qtd_estoque: estoque,
                img_produto: imagemproduto,
                }


            let r = await db.tb_produto.update(
                alterarProdutos, {
                where: {id_produto: id}
            })
            
            resp.sendStatus(200)

        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })


app.listen(process.env.PORT,
                            x => console.log(`>> Server up at port: ${process.env.PORT}`) )