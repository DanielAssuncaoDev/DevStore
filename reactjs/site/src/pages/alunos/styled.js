import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;

    .new-student-box {
        display: flex;
        flex-direction: column;


        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
            
    }

    .bar-new-student {
        border: 3px solid #119FDC;
        border-radius: .5em;
        margin-right: .4em;
        background-color: #119FDC;
    }

    .text-new-student {
        display: flex;
        flex-direction: row;

        font-size: 32px;
    }
    .text-new-student div {
        font-weight: bolder;
    }

    .form-new-product {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .input-new-student {
        display: flex;
        flex-direction: column;

        width: min-content;

        padding-top: 2.4em;
    }

    .agp-input {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .input {
        margin-top: .5em;
        margin-bottom: .5em;
    }


    .culumns-inputs{
        display: flex;

        margin-left: 17px;
    }

    .input-one, 
    .input-two{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 3em;

    } .input-two {
        margin: 0;
    }

    .textarea-one {
        margin-left: 17px;
    }

    .textarea-one .agp-input{
        display: flex;
        align-items: flex-start;

        width: 100%;
    }

    .input-linkImg,
    .input-linkImg input{
        width: 100%;

        margin-top: .25em;
        margin-bottom: .25em;
    }

    .textarea {
        width: 100%;
    }

    textarea {
        margin-top: .25em;

        width: 100%;
        height: 150px;
        border-radius: 5px;
        border: 1px solid #A8A8A8;
        padding: .5em;

        font-size: 1em;
        color: #615858;
        font-weight: 400;
    }

    input {
        width: 209px;
        height: 36px;

        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;

        font-size: 1em;
        color: #615858;
        font-weight: 400;
    }

    .name-student {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
    }


    .link-image {
        margin-right: 7px;
        font-size: 18px;
        color: #615858;
        font-weight: 800;

        width: 131px;
    }

    .number-student {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        font-weight: 800;
    }

    .ds-product {
        font-size: 18px;
        color: #615858;
        font-weight: 800;

        margin-right: 0.8em;
        margin-top: 10px;
    }

    .class-student {
        font-size: 18px;
        color: #615858;
        margin-right: 0.8em;
        font-weight: 800;
    }

    .corse-student {
        font-size: 18px;
        color: #615858;
        margin-right: 1em;
        font-weight: 800;
    }


    .button-create{
        text-align: right;

        align-self: flex-end;
        justify-items: flex-end;
        padding-top: 10px; 
    }
   

    .button-create  button {
        width: 106px;
        height: 36px;

        background: #119FDC;
        border-radius: 44px;
        border: none;
        color: white;
        font-size: 14px;
        margin-left: 2em;
        font-weight: bold;
    }

    .student-registered-box {
        display: flex;
        flex-direction: column;

        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        margin-top: 2em;
        
    }
    .text-registered-student {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
        font-size: 32px;
        padding-left: .3em;
    }

    .row-bar {
        display: flex;
        flex-direction: row;
    }

    .information-purple {
        display: flex;
        flex-direction: row;
        background: #986CDF;
        width: 1454px;
        height: 67px;
        color: #FFFFFF;
        justify-content: space-evenly;
        margin-top: 2em;
        align-items: center;
        font-size: 18px ;
        margin-bottom: 1em;
    }



    .gray{
        width: 1454px;
        height: 61.93px;
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .white {
        width: 1454px;
        height: 61.93px;
        background: #FFFFFF;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .box-information {
        border: 1px solid #E2E2E2;
    }

    .body-right-box {
        display: flex;
        flex-direction: column;

        background-color: #F5F5F5;

        height: 100%;
        padding: 3em;
        
        margin-bottom: 0em;
        margin-right: 0em;
    }


    .reader-right-box {
        margin-top: 0em;
        padding-right: 0em;
        
    }

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
    }
    
    .box-image {
        margin-right: 2em;
    }

    thead {
        background-color: #6CC3DF;
    }

    table {
        margin-top: 2em;
    }


    tbody {
        background-color: #F5F5F5;
        width: 100%;


        tr {
            width: 100%;
        }

        tr:nth-child(even){
            background-color: #fff;
        }

        tr:hover {
            td:nth-child(7) button, 
            td:nth-child(8) button {
                visibility: visible;
            }
        }
    }



    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 
    
    .Image-product{
        width: 40px;

        img {
            height: 40px;
        }

    }

    .table-user {
        border-collapse: collapse;
    }


    .coluna-acao {
        width: .1em;
    }
        td:nth-child(7) button, 
        td:nth-child(8) button {
            visibility: hidden;
        }

    

    button {
        cursor: pointer;
    }



    img {
        cursor: pointer;
    }

    .absolute {
        color: white;
        background-color: #DB21BD;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
    }

    .user-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        border-radius: 50%;
        
    }

    .user-image img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        height: 57px;
        
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 75.28%;


    
 

`

export { Container, Conteudo }