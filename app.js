import http from 'http';
import fs from 'fs';

/*
fs.writeFileSync('./mensagem.txt', 'Olá, Tic em Trilhas do arquivo!', 'utf-8', (erro) =>{
    if(erro) {
        console.log('Falha ao escrever o arquivo', erro);
        return;
    }
});
*/

/*const mensagem = fs.readFileSync('./mensagem.txt', 'utf-8', (erro, conteudo) =>{
    if(erro){
        console.log('Falaha ao carregar o arquivo', erro);
        return;
    }
    console.log(`Conteúdo lido do arquivo: ${conteudo}`)
    return conteudo;
});
*/

fs.writeFile('./mensagem.txt', 'Olá, Tic em Trilhas do arquivo!', 'utf-8', (erro) =>{
    if(erro) {
        console.log('Falha ao escrever o arquivo', erro);
        return;
    }
});

fs.readFile('./mensagem.txt', 'utf-8', (erro, conteudo) =>{
    if(erro){
        console.log('Falaha ao carregar o arquivo', erro);
        return;
    }
    console.log(`Conteúdo lido do arquivo: ${conteudo}`)
    iniciaServidorhttp(conteudo);
});

function iniciaServidorhttp(mensagem){
    const servidor = http.createServer((req, res ) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(mensagem);
});

const porta = 3000;
const host = 'localhost';

servidor.listen(porta, host, () =>{
    console.log(`Servidor executando em http://${host}:${porta}/!`)
});


}
/*
const servidor = http.createServer((req, res ) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(mensagem);
});

const porta = 3000;
const host = 'localhost';

servidor.listen(porta, host, () =>{
    console.log(`Servidor executando em http://${host}:${porta}/!`)
});


function exemploTradicional() {
    console.log('Tradicional');
};

const exemploExpressao = function(){
    console.log('expressão!');
};

const exemploArrow = () =>{
    console.log('arrow!');
};
*/