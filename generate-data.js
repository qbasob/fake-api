const faker = require('faker');
const fs = require('fs');

let database = { users: [], products: [] };
faker.locale = 'pl';
faker.seed(5542742864); // żeby zawsze zwracał te same rezultaty

database.users = [
    {
        "id": 1,
        "email": "test@gmail.com",
        "password": "test"
    },
    {
        "id": 2,
        "email": "test2@gmail.com",
        "password": "test2"
    }
];

for (let i = 1; i <= 1000; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        cost: ~~(faker.random.number() / 100),
        quantity: ~~(faker.random.number() / 10),
        points: faker.random.number({
            min: 1,
            max: 5
        }),
    });
}

//console.log(JSON.stringify(database, null, 4));
fs.writeFileSync('db.json', JSON.stringify(database, null, 4));
console.log('products generated');