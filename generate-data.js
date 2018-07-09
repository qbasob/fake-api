const faker = require('faker');
const fs = require('fs');

let database = { products: [] };
faker.locale = 'pl';
faker.seed(5542742864); // żeby zawsze zwracał te same rezultaty

for (let i = 1; i <= 1000; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        cost: ~~(faker.random.number() / 100),
        quantity: ~~(faker.random.number() / 10)
    });
}

//console.log(JSON.stringify(database, null, 4));
fs.writeFileSync('db.json', JSON.stringify(database, null, 4));
console.log('products generated');