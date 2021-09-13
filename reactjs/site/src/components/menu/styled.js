import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #2B3031;
    
    width: 24.72%;
    height: 100vh;
    padding-bottom: 0em;

    position: sticky;
    top: 0px;

        
    .header-left-box {
        display: flex;
        flex-direction: row;

        margin: 2em;
        align-items: center;
        justify-content: center;
        
    }

    .svg-cabecalho-left-box {
        border-right: 10px solid transparent;
        display: flex;
        align-items: center;
    }

    .devSchool {
        color: white;
        font-size: 28px;
        font-weight: 700;
    }

    .devSchool span {
        color: #10EAEA;
    }

    .black-box {
        background-color: #262626;
        width: 100%;
        height: 61px;
    }

    .left-box-management {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;        
        
        height: 70px;
        padding: 0 1.5em 0 2.1em;
    }

    .left-box-management div {
        color: white;
        font-size: 18px;
        font-weight: 800;
    }

    .left-box-aluno {
        display: flex;
        flex-direction: row;
        
        height: 55px;

        background-color: white;
        border-left: 4px solid  #10EAEA;

        color: #1A1A1A;
        font-size: 18px;


        align-items: center;

        padding-left: 1.8em;

    }
    .left-box-aluno div {
        font-weight: 800;
        color: #1A1A1A;
    }

`


export { Container }