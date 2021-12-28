// object 
let user = {
    name: 'Alex'
};

//alterando propriedade do objeto
console.log(user);
user.name = 'Wallace';
console.log(user);

//alterando propriedade do objeto outra forma
user['name'] = 'Outro nome';
console.log(user);


const prop = 'nome';
user[prop] = 'Outro nome 2';

console.log(user);

// criando uma propriedade
user.lastName = 'Souza de Araujo';

console.log(user);

// deletando uma propriedade
delete user.name;

console.log(user);

console.log('');
console.log('');
console.log('');
console.log('');
