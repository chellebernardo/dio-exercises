var nome = 'Michelle Bernardo';
var idade = 24;
var idade2 = 13;
var frase = "Eu adoro pudim";
alert(nome + ' tem ' + idade + ' anos!');
alert(idade + idade2);

console.log(nome);
console.log(idade * idade2);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.replace("adoro", "amo"));

alert(frase.replace('adoro', 'amo'));

var lista = ['maçã', 'pêra', 'laranja', 'banana'];
lista.push('uva');
lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
alert(lista[1]);
console.log(lista.reverse());
console.log(lista[1]);
console.log(lista.toString());
console.log(lista.join(' - '))
alert(lista[1]);

var fruta = { nome: 'maçã', cor: 'vermelha' }
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{ nome: 'maçã', cor: 'vermelha' }, { nome: 'uva', cor: 'roxinha' }];
console.log(frutas);
alert(frutas[1].nome);

var idade = prompt('Qual a sua idade?');
// console.log(idade);
if (idade >= 18) {
    alert('Você é maior de idade!')
} else {
    alert('Você é menor de idade!')
}

var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};

var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
    alert(count);
};

var d = new Date();
alert(d);
alert(d.getMonth() + 1); //Sempre vai puxar o mês do "zero", por isso concatenar com +1!
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

function soma(n1, n2){
    return n1 + n2;
}
function setReplace (frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}
alert(soma(5, 10));
alert(setReplace('Michelle de botas', 'Michelle', 'Gatinha'));

var validar = 0;
function validaIdade (idade){

    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt ('Digite sua idade, por gentileza!');
validaIdade(idade);
console.log(validar);

function clicou() {
    alert('Obrigada por clicar, bb!')
}

function clicou() {
    document.getElementById('thanku').innerHTML = '<b>Obrigada por clicar, mona ami!</b>'
}
function redirect(){
    //window.open('https://github.com/chellebernardo');
    window.location.href = 'https://github.com/chellebernardo';
}
function trocar(elemento){
    // document.getElementById('mousemove').innerHTML = 'Obrigada por passar o mouse, bb!'
    elemento.innerHTML = 'Obrigada por passar o mouse, bb!'
}
function voltar(elemento){
    // document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui...' 
    elemento.innerHTML = 'Passe o mouse aqui...'
}
function loaded(){
    alert('Página carregada com sucesso, hihi!')
}
function change(elemento){
    console.log(elemento.value)
}