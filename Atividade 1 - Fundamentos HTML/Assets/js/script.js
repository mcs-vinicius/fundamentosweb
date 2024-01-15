
/* 
case sensitive

Por tag : getElementByTagName();
por ID: getElementById();
Por nome: getElementeByName();
por  classe: getElementeByClassName();
por seletor: querySelector();
*/

let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3){
        txtNome.innerHTML = 'Nome invalido'; 
        txtNome.style.color = 'red';
    }else{
        txtNome.innerHTML = 'Nome Valido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail invalido';
        txtEmail.style.color = 'red';
    }else{
        txtEmail.innerHTML = 'E-mail Valido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'Limite de 100 Caractere';
        txtAssunto.style.color='red';
        txtAssunto.style.display = 'block';
    }else{
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}


function enviar(){
    if(nomeOk== true && emailOk == true  && assuntoOk == true ){
        alert('Formulario enviado com sucesso')
    }else{
        alert('Preencha o formulario corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '600';
    mapa.style.height = '450'
}