const user2 = {
    name: 'Alex',
    lastName: 'Wallace'
}

// recuperar as chaves do object
console.log('Propriedades do objeto user2: ', Object.keys(user2));

// recuperando os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user2: ', Object.values(user2));

// retorna um array de arrays com [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user2));

console.log('');

// mergear(fundir) propriedades de objeto
Object.assign(user2, {fullName: 'Alex Wallace'});

console.log('\nAdiciona a propriedade fullName no objeto user2', user2);
console.log('\nRetorna um novo objeto fundindo dois ou mais objetos', Object.assign({}, user2, {age: 39}));

//*******************************************************************************************************************/
// Impede alterações de um objeto (freeze)
const newObj = { foo: 'bar' };
Object.freeze(newObj);

// tentando fazer alterações no newObj (sem sucesso pois no código acima esta bloqueado pelo freeze)
newObj.foo = 'changes';
delete newObj.foo;
newObj.Object = 'foo';

console.log('\nVariável newObj após tentativas de alterações: ', newObj);

// permite apenas a alterações de propriedades existentes em um objeto (seal) - ex não permite que crie ou delete, mas altere o que já existe
const person = { name: 'Alex' };
Object.seal(person);

person.name = 'Wallace Souza'; // consegue alterar
delete person.name; // não consegue deletar 
person.age = 39; // não consegue adicionar

console.log('\nVariável person após as alterações: ', person);

//*******************************************************************************************************************/
