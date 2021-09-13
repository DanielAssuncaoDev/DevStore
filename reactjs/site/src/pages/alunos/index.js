
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'


export default function Index() {
    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Produto</div>
                        </div>

                        <div className="form-new-product">
                            <div class="input-new-student"> 
                                <div className="culumns-inputs">
                                    <div class="input-one">
                                        <div class="agp-input"> 
                                            <div class="name-student"> Nome: </div>  
                                            <div class="input"> <input /> </div>  
                                        </div> 
                                        <div class="agp-input">
                                            <div class="number-student"> Chamada: </div>  
                                            <div class="input"> <input /> </div> 
                                        </div>
                                        <div class="agp-input">
                                            <div class="number-student"> Chamada: </div>  
                                            <div class="input"> <input /> </div> 
                                        </div>
                                    </div>

                                    <div class="input-two">
                                        <div class="agp-input">
                                            <div class="corse-student"> Curso: </div>  
                                            <div class="input"> <input /> </div>  
                                        </div>
                                        <div class="agp-input">
                                            <div class="class-student"> Turma: </div>  
                                            <div class="input"> <input /> </div> 
                                        </div>
                                        <div class="agp-input">
                                            <div class="number-student"> Chamada: </div>  
                                            <div class="input"> <input /> </div> 
                                        </div>
                                    </div>
                                </div>
                                

                                <div class="input-four">
                                    <div class="agp-input">
                                        <div class="link-image"> Link Imagem: </div>  
                                        <div class="input-linkImg"> <input /> </div>  
                                    </div>
                                </div>

                                <div class="textarea-one">
                                    <div class="agp-input">
                                        <div class="ds-product"> Descrição: </div>  
                                        <div class="textarea"> <textarea  style={{"resize": "none"}} /> </div> 
                                    </div>
                                </div>

                            </div>
                            
                            <div class="button-create"> <button> Cadastrar </button> </div>
                        </div>
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Alunos Matriculados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th>    </th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                    <td className="Image-product"> <img src="https://pbs.twimg.com/media/E-0acoVX0AcrjlI?format=jpg&name=small" alt="" /> </td>
                                    <td> 1 </td>
                                    <td> Fulao da Silva Sauro</td>
                                    <td> 15 </td>
                                    <td> InfoX </td>
                                    <td> Informática </td>
                                    <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>                                                        
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
